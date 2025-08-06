import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type Plan = {
  name: string;
  description: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
  borderColor?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    description: "Perfect for individuals",
    price: "$9/month",
    features: [
      "10 presentations/month",
      "Basic templates",
      "PowerPoint export",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    description: "Best for small teams",
    price: "$29/month",
    features: [
      "50 presentations/month",
      "Premium templates",
      "Team collaboration",
      "Priority support",
      "Custom branding",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
    borderColor: "border-blue-500",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "$99/month",
    features: [
      "Unlimited presentations",
      "All templates",
      "Advanced collaboration",
      "24/7 support",
      "SSO integration",
    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you and your team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-2 relative ${
                plan.borderColor ? plan.borderColor : "border-gray-200"
              }`}
            >
              {plan.highlight && plan.badge && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-3xl font-bold">
                  {plan.price.startsWith("$") ? (
                    <>
                      {plan.price.split("/")[0]}
                      <span className="text-lg font-normal">
                        /{plan.price.split("/")[1]}
                      </span>
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      ✓ {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">{plan.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
