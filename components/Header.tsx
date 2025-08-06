import React from "react";
import { Badge } from "./ui/badge";
import { ArrowBigLeft, ArrowBigRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto sm:px-5 text-center">
          <div className="space-y-4 px-3">
            <Badge variant="outline">
              <Zap />
              <span>Ai-Powered Presentations</span>
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
                Start Creating <ArrowBigRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
