import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <img
          width="44"
          height="44"
          src="https://img.icons8.com/fluency/44/school-building.png"
          alt="school-building"
          className="cursor-pointer"
      />
      <h1 className="text-xl font-bold text-blue-700">welcome to your school</h1>
    </nav>
  );
}