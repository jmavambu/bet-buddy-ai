
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X, User, BarChart } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-sport-blue/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-display font-bold">
                <span className="text-sport-gold">AI</span>Sports
                <span className="text-sport-green">Picks</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-sport-gold px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  NBA
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  NFL
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Soccer
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  How It Works
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="outline" className="mr-2 border-sport-gold text-sport-gold hover:bg-sport-gold/20">
                <BarChart className="h-4 w-4 mr-2" />
                AI Insights
              </Button>
              <Button className="bg-sport-green hover:bg-sport-green/90">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-sport-blue/50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-sport-blue/95 backdrop-blur-sm">
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              NBA
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              NFL
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Soccer
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              How It Works
            </a>
            <div className="pt-4 pb-3 flex flex-col space-y-2">
              <Button variant="outline" className="w-full border-sport-gold text-sport-gold hover:bg-sport-gold/20">
                <BarChart className="h-4 w-4 mr-2" />
                AI Insights
              </Button>
              <Button className="w-full bg-sport-green hover:bg-sport-green/90">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
