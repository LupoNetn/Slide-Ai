"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, User, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent } from "./ui/sheet";

const Navbar = () => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  // Fake auth for demo purposes
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50 sticky top-0 backdrop-blur-2xl border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-2 py-1.5 rounded-lg">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-br from-blue-800 to-purple-400 text-transparent bg-clip-text">
              SlideAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-6">
            {!isDashboard ? (
              <>
                <Link
                  href="#features"
                  className="font-medium text-gray-700 hover:text-black"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  className="font-medium text-gray-700 hover:text-black"
                >
                  Pricing
                </Link>

                {!isAuthenticated ? (
                  <>
                    <Button variant="outline" size="sm">
                      Sign In
                    </Button>
                    <Button size="sm">
                      <Link href="/dashboard">Get Started</Link>
                    </Button>
                  </>
                ) : (
                  <Button size="sm" variant="default" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                )}
              </>
            ) : isAuthenticated ? (
              <>
                <Link href="/dashboard/profile" className="hover:text-indigo-600">
                  <User className="w-5 h-5" />
                </Link>
                <Link href="/dashboard/settings" className="hover:text-indigo-600">
                  <Settings className="w-5 h-5" />
                </Link>
                <Button variant="outline" size="sm" onClick={() => setIsAuthenticated(false)}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
                <Button size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="block sm:hidden">
            <Menu
              onClick={() => setIsOpen(true)}
              className="size-6 text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Mobile Sheet Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="w-[75%] sm:w-[50%] bg-gradient-to-br from-blue-50 to-purple-100">
          <nav className="flex flex-col mt-10 space-y-4 px-5">
            {!isDashboard ? (
              <>
                <Link
                  href="#features"
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-gray-800 hover:text-black"
                >
                  Features
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="font-semibold text-gray-800 hover:text-black"
                >
                  Pricing
                </Link>
                {!isAuthenticated ? (
                  <>
                    <Button variant="outline" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Button>
                    <Button onClick={() => setIsOpen(false)}>
                      <Link href="/dashboard">Get Started</Link>
                    </Button>
                  </>
                ) : (
                  <Button onClick={() => setIsOpen(false)}>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                )}
              </>
            ) : isAuthenticated ? (
              <>
                <Link href="/dashboard/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <User className="w-5 h-5" /> Profile
                </Link>
                <Link href="/dashboard/settings" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <Settings className="w-5 h-5" /> Settings
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsAuthenticated(false);
                    setIsOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Sign In
                </Button>
                <Button onClick={() => setIsOpen(false)}>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
