"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import { z } from "zod";
import { RequiredFieldValidator } from "../shemaValidations";

export default function CreateTestCategoriesForm() {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: RequiredFieldValidator,
    description: RequiredFieldValidator,
    author: RequiredFieldValidator,
  });
  // Defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      author: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, description, author } = formSchema.parse({
      name: values.name,
      description: values.description,
      author: values.author,
    });
  };

  return (
    <div className="max-w-lg">
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
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom(s)</FormLabel>
                <FormControl>
                  <Input id="name" placeholder="Name" {...field} />
                </FormControl>
                <FormDescription>Ceci est le nom du test</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea id="description" placeholder="Description" {...field} />
                </FormControl>
                <FormDescription>Ceci est la description du test</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Auteur</FormLabel>
                <FormControl>
                  <Input id="author" placeholder="Auteur" {...field} />
                </FormControl>
                <FormDescription>Le(s) auteur(s) du test</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} type="submit">
            {isLoading ? "Chargement..." : "Valider"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
