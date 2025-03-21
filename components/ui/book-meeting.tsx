import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";

export default function BookMeeting() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!date || !name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("/api/send-meeting-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, name, email, phone }),
      });

      if (response.ok) {
        alert("Meeting request sent!");
      } else {
        console.log(response.statusText);
        toast({
          title: "Meeting Request",
          description: "Meeting request failed. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Meeting Request",
        description: "Meeting request failed. Please try again.",
      });

      openMailApp();
    }

    setLoading(false);
  };

  const openMailApp = () => {
    const subject = encodeURIComponent("Meeting Request");
    const body = encodeURIComponent(
      `Hello,\n\nI would like to book a meeting.\n\nDate: ${
        date ? format(date, "PPP") : ""
      }\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nThank you.`
    );
    window.location.href = `mailto:kyoora.id@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-md min-w-[300px] flex flex-col border p-8 gap-4">
      <p>Book a meeting</p>
      <div className="grid w-full items-center gap-1">
        <Label htmlFor="date">Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={`w-full max-w-[300px] justify-start text-left font-normal ${
                !date && "text-muted-foreground"
              }`}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="email">Your email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1">
        <Label htmlFor="phone">Your Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <Button
        className="gap-4 w-full"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Book the meeting"}{" "}
        <MoveRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
