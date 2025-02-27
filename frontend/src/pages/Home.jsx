import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import  Login  from "./Login";

export default function Home() {
  return (
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold text-black max-w-2xl">
              Explore your school information in one click
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-6 w-full max-w-md">
              <Button className="bg-gray-600 h-14 px-6" asChild>
                <Link to="/Login">I'm a teacher</Link>
              </Button>
              <Button className="bg-gray-600 h-14 px-6" asChild>
                <Link to="/Login">I'm a student</Link>
              </Button>
              <Button className="bg-gray-600 h-14 px-6" asChild>
                <Link to="/Login">I'm a parent</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
        
      </div>
  );
}
