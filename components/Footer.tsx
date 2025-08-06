import React from "react";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-14 px-6 bg-indigo-50 text-slate-800 border-t border-indigo-100">
      <div className="container mx-auto text-center space-y-8">
        {/* Logo & Description */}
        <div className="flex items-center justify-center space-x-3">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 px-2 py-1.5 rounded-lg">
            <Sparkles className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">SlideAI</span>
        </div>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Create <strong>professional presentations</strong> with the power of
          AI — simple, fast, and stunning.
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-8 text-base font-semibold">
          <Link href="#features" className="hover:text-indigo-700 transition">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-indigo-700 transition">
            Pricing
          </Link>
          <Link href="#" className="hover:text-indigo-700 transition">
            Contact
          </Link>
          <Link href="#" className="hover:text-indigo-700 transition">
            Privacy
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} SlideAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
