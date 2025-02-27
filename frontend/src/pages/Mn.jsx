import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Mn({ setEditing, setVariant, variant, userData }) {
  return (
    <Card className="hidden md:flex md:w-1/6 p-4 flex-col items-center gap-4">
      <Avatar className="w-16 h-16">
        <AvatarImage src="/profile.jpg" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="text-lg font-semibold">{userData.name}</div>
      <Button
      className="w-full py-2"
        variant="outline"
      >
        View Grades </Button>
      <Button variant="outline" className="w-full py-2">View Attendance</Button>
      <Button variant="outline" className="w-full py-2">Download Timetable</Button>
      <Button  className="w-full py-2" variant={variant}
        onClick={() => {
          setEditing(true);
          setVariant("secondary");
        }}>Edit Profile</Button>
    </Card>
  );
}