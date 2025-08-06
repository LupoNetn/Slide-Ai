"use client";
import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent } from "./ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-50 sticky top-0 backdrop-blur-2xl border border-b-gray-300">
      <div className="container mx-auto px-4 py-3 sm:px-3 sm:py-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-2 py-1.5 rounded-lg">
                <Sparkles className="text-white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-br from-blue-800 to-purple-400 text-transparent bg-clip-text">
                SlideAI
              </span>
            </div>
          </div>
          <div>
            <nav className="hidden sm:flex sm:items-center space-x-6">
              <Link
                className="font-bold text-gray-700 hover:text-gray-950"
                href="#features"
              >
                Features
              </Link>
              <Link
                className="font-bold text-gray-700 hover:text-gray-950"
                href="#pricing"
              >
                Pricing
              </Link>
              <Button variant="outline">Sign In</Button>
              <Button variant="default">Get Started</Button>
            </nav>

            {/* MOBILE NAV */}
            <div className="block sm:hidden">
              <Menu
                onClick={() => setIsOpen((prev) => !prev)}
                className="size-7"
              />
            </div>

            <div className="block sm:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="w-[70%] h-[70%] bg-gradient-to-br from-blue-50 to-purple-100">
                  <nav className="flex flex-col mt-10 space-y-4 px-5">
                    <Link
                      className="font-bold text-gray-700 hover:text-gray-950"
                      href="#features"
                    >
                      Features
                    </Link>
                    <Link
                      className="font-bold text-gray-700 hover:text-gray-950"
                      href="#pricing"
                    >
                      Pricing
                    </Link>
                    <Button className="w-[70%]" variant="outline">
                      Sign In
                    </Button>
                    <Button className="w-[70%]" variant="default">
                      Get Started
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
