"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "src/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "src/components/ui/input";
import { Textarea } from "src/components/ui/textarea";
import { useToast } from "src/components/ui/use-toast";
import { z } from "zod";
import supabase from "../../../../supabase";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "The blog title must be at least 2 characters.",
  }),
  content: z.string().min(3, {
    message: "The blog content must be at least 2 characters.",
  }),
});

// const CreateBlog = FormSchema.omit({ id: true });

export default function CreateBlogForm() {
  // Defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { title, content } = formSchema.parse({
      title: values.title,
      content: values.content,
    });

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("blogs")
        .insert([{ title, content }])
        .select();

      console.log(data, error);

      if (data) {
        toast({
          description: "Your blog has been created.",
        });
      } else {
        toast({
          variant: "destructive",
          description: `${error}`,
        });
      }

      return {
        data,
        error,
      };
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: `${error}`,
      });
      return { error };
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-1/2 mx-auto">
      <CardHeader>
        <CardTitle>Update Blog</CardTitle>
        <CardDescription>Update your blog in one click</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            // action={async (formData) => {
            //   const { data } = await createBlog(formData);
            //   if (data) {
            //     toast({
            //       description: "Your blog has been created.",
            //     });
            //   } else {
            //     toast({
            //       variant: "destructive",
            //       description: "An error occured.",
            //     });
            //   }
            // }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormDescription>This is the blog title</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="content" {...field} />
                  </FormControl>
                  <FormDescription>This is the blog context</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type="submit">
              {isLoading ? "Loading..." : "Create"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
