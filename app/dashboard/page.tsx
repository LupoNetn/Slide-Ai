"use client";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { FileOutputIcon, Plus, Sparkles } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Form types
type FormData = {
  topic: string;
  details: string;
  slides: string;
  presentation: string;
  audience: string;
};

const Page = () => {
  const form = useForm<FormData>({
    defaultValues: {
      topic: "",
      details: "",
      slides: "",
      presentation: "",
      audience: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    alert("Form Submitted!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 items-stretch">
          {/* Form Card */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Plus />
                <h3 className="font-bold text-xl text-gray-900">
                  Create New Presentation
                </h3>
              </div>
              <p className="text-gray-600 text-md">
                Describe your presentation topic and let AI generate the
                content for you.
              </p>
            </CardHeader>

            <CardContent className="flex-grow">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Topic Field */}
                  <FormField
                    control={form.control}
                    name="topic"
                    rules={{ required: "Topic is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Presentation Topic*</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g., Marketing Trends 2025"
                            className="h-12 text-lg px-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Details */}
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Details</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Context, key points, audience..."
                            className="resize-none h-40 text-base p-4"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Select Inputs */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-x-4 gap-y-4">
                    {/* Slide Count */}
                    <FormField
                      control={form.control}
                      name="slides"
                      rules={{ required: "Slide count is required" }}
                      render={({ field }) => (
                        <FormItem className="flex-1 min-w-[45%]">
                          <FormLabel>Number of Slides*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-base px-4">
                                <SelectValue placeholder="Choose count" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="3">3 Slides</SelectItem>
                              <SelectItem value="5">5 Slides</SelectItem>
                              <SelectItem value="8">8 Slides</SelectItem>
                              <SelectItem value="10">10 Slides</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Presentation Style */}
                    <FormField
                      control={form.control}
                      name="presentation"
                      rules={{ required: "Presentation style is required" }}
                      render={({ field }) => (
                        <FormItem className="flex-1 min-w-[45%]">
                          <FormLabel>Presentation Style*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-base px-4">
                                <SelectValue placeholder="Select a style" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Professional">Professional</SelectItem>
                              <SelectItem value="Creative">Creative</SelectItem>
                              <SelectItem value="Minimal">Minimal</SelectItem>
                              <SelectItem value="Corporate">Corporate</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full h-12 text-base gap-2">
                    <Sparkles className="w-5 h-5" />
                    Generate Presentation
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* Preview Card */}
          <Card className="h-full flex flex-col justify-center text-center p-6">
            <CardContent className="flex-grow flex items-center justify-center text-gray-500">
              <div className="flex flex-col justify-center items-center gap-4 text-xl text-gray-600">
                <FileOutputIcon className="size-10" />
                Your generated presentation preview will appear here.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
