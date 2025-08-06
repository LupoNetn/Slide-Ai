'use client'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'
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

//types
type FormData = {
    topic: string;
    details: string;
    slides: string;
    presentation: string;
    audience: string;
}

const page = () => {

     const form = useForm<FormData>({
        defaultValues: {
            topic: '',
            details: '',
            slides: '',
            presentation: '',
            audience: '',
        }
    })

    //function to call once form is submitted
const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);
    alert('Form Submitted');
};


  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
           <div>
            <Card>
                <CardHeader>
                   <div className='flex items-center gap-2'>
                    <Plus />
                    <h3 className='font-bold text-lg sm:text-xl text-gray-900'>Create New Presentation</h3>
                   </div>
                   <p className='text-gray-600 text-md'>Describe your presentation topic and let AI generate the content for you.</p>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                            {/* Topic Field */}
                            <FormField 
                             control={form.control}
                             name='topic'
                             rules={{required: 'topic is Required'}}
                             render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Presentation Topic*
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                        placeholder='e.g., Digital Marketing Strategy for 2024' 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                             )}
                            />

                            <FormField 
                              control={form.control}
                              name='details'
                              render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Additional Details
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea
                                         className='h-30 resize-none'
                                         rows={8}
                                         placeholder='Provide more context about your presentation, key points to cover, target audience, etc.'/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div>
                                <FormField 
                                 control={form.control}
                                 name='slides'
                                  rules={{required: 'number of slides is Required'}}
                                  render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Number of Slides*</FormLabel>
                                        <FormControl>
                                            <Select></Select>
                                        </FormControl>
                                    </FormItem>
                                  )}
                                />
                                <FormField />
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
           </div>
            <div>
            <Card>
                <CardContent></CardContent>
            </Card>
           </div>
        </div>
      </div>
    </div>
  )
}

export default page
