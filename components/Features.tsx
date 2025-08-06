import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import {
  Sparkles,
  FileText,
  Download,
  Clock,
  Users,
  Shield,
  LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
};

const featureList: Feature[] = [
  {
    title: "AI Content Generation",
    description:
      "Advanced AI creates compelling content, titles, and talking points based on your input",
    icon: Sparkles,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Professional Templates",
    description:
      "Choose from dozens of professionally designed templates for any industry or use case",
    icon: FileText,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Instant Download",
    description:
      "Download your presentations as PowerPoint files ready to use in meetings and presentations",
    icon: Download,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Lightning Fast",
    description:
      "Generate complete presentations in under 30 seconds, saving hours of manual work",
    icon: Clock,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "Team Collaboration",
    description:
      "Share and collaborate on presentations with your team members in real-time",
    icon: Users,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-level security with data encryption and compliance with industry standards",
    icon: Shield,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create professional presentations with AI assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
