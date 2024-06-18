"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { Input } from "src/components/ui/input";
import { z } from "zod";
import { RequiredFieldValidator, YearFieldValidator } from "../shemaValidations";

export default function CreateAudioEvalForm() {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: RequiredFieldValidator,
    authors: RequiredFieldValidator,
    year: YearFieldValidator,
    aiModel: RequiredFieldValidator,
    type: z.enum(["Verbal", "Non verbal"]),
    maxDuration: z.number().min(0, { message: "Champ requis." }),
    maxFileSize: z.number().min(0, { message: "Champ requis." }),
  });
  // Defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      authors: "",
      year: 1910,
      type: "Verbal",
      maxDuration: 0,
      aiModel: "",
      maxFileSize: 0,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, authors, year, type, maxDuration, aiModel, maxFileSize } =
      formSchema.parse({
        name: values.name,
        authors: values.authors,
        year: values.year,
        type: values.type,
        maxDuration: values.maxDuration,
        aiModel: values.aiModel,
        maxFileSize: values.maxFileSize,
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
                  <Input id="name" placeholder="Noms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="authors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Auteur(s)</FormLabel>
                <FormControl>
                  <Input id="authors" placeholder="Auteurs" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Année</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="year"
                    placeholder="Année"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner un type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {["Verbal", "Non verbal"].map((value, idx) => (
                      <SelectItem key={idx} value={value}>
                        {value}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="aiModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modèle IA</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner une model IA" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Durée de l&apos;audio</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    step="0.01"
                    min="0.01"
                    max="0.9"
                    id="maxDuration"
                    placeholder=""
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormDescription>En minutes</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxFileSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Taille du fichier</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="maxFileSize"
                    placeholder=""
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormDescription>En kilo octets</FormDescription>
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
