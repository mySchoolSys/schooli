import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditProfile({ userData, handleChange, setEditing }) {
  return (
    <Card className="flex-1 p-4 space-y-4">
      <Input name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
      <Input name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
      <Input name="phone" value={userData.phone} onChange={handleChange} placeholder="Phone" />
      <Button className="w-full" onClick={() => setEditing(false)}>Save</Button>
    </Card>
  );
}