"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "src/components/ui/button";
import {
  Form,
  FormControl,
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
import CustomFileInput from "../input/CustomFileInput";
import {
  AgeValidator,
  FileValidator,
  PrecisionValidator,
  RequiredFieldValidator,
} from "../shemaValidations";

export default function CreateAudioDepForm() {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    test: RequiredFieldValidator,
    age: AgeValidator,
    voice: FileValidator,
    precision: PrecisionValidator,
  });
  // Defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      test: "",
      age: 1,
      precision: 0.01,
      voice: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { test, age, precision, voice } = formSchema.parse({
      test: values.test,
      age: values.age,
      precision: values.precision,
      voice: values.voice,
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
            name="test"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Test</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionnez le test" />
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
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="age"
                    placeholder="Age"
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
            name="voice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voix</FormLabel>
                <FormControl>
                  <CustomFileInput
                    mimeTypes={["audio/mp3", "audio/wav"]}
                    name="Voix"
                    onChange={(file) => field.onChange(file)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="precision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Précision</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="precision"
                    placeholder="Precision"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
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
