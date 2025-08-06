import React from "react";
import { Badge } from "./ui/badge";
import { ArrowBigRight, Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 sm:py-20">
      <div className="container mx-auto sm:px-5 text-center">
        <div className="space-y-6 px-3 max-sm:pt-20">
          <Badge variant="outline" className="mx-auto w-fit">
            <Zap className="mr-2 h-4 w-4" />
            <span>AI-Powered Presentations</span>
          </Badge>

          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text 
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
            font-bold leading-tight tracking-tight">
            Create Stunning PowerPoints in Seconds
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-muted-foreground mb-6">
            Transform your ideas into{" "}
            <span className="font-semibold text-foreground">
              professional presentations
            </span>{" "}
            with AI. Just describe what you need, and our AI will generate a
            complete PowerPoint deck for you.
          </p>

          <div className="w-[90%] mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto">
              <Link href='/dashboard' className="flex items-center">
               Start Creating <ArrowBigRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Link href='/dashboard' className="flex items-center">
                Watch Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
