"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { Fragment, useState } from "react";
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
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { Textarea } from "src/components/ui/textarea";
import { z } from "zod";
import { RequiredFieldValidator, YearFieldValidator } from "../shemaValidations";

export default function CreateVideoEvalForm() {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    name: RequiredFieldValidator,
    authors: RequiredFieldValidator,
    year: YearFieldValidator,
    approach: RequiredFieldValidator,
    popularity: RequiredFieldValidator,
    aiModel: RequiredFieldValidator,
    patternsToObserve: z.array(
      z.object({
        value: RequiredFieldValidator,
      })
    ),
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
      approach: "",
      popularity: "",
      aiModel: "",
      maxDuration: 0,
      maxFileSize: 0,
      patternsToObserve: [
        {
          value: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "patternsToObserve",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const {
      name,
      authors,
      year,
      approach,
      popularity,
      aiModel,
      maxDuration,
      maxFileSize,
      patternsToObserve,
    } = formSchema.parse({
      name: values.name,
      authors: values.authors,
      year: values.year,
      approach: values.approach,
      popularity: values.popularity,
      aiModel: values.aiModel,
      maxDuration: values.maxDuration,
      maxFileSize: values.maxFileSize,
      patternsToObserve: values.patternsToObserve,
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
                  <Input placeholder="Nom(s) du test" {...field} />
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
                  <Input placeholder="Auteur(s) du test" {...field} />
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
            name="popularity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Popularite</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choissez la popularité du test" />
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
            name="approach"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Approche</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Approche du test" />
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

          <div className="space-y-2">
            <Label className="">Pattern à observer</Label>

            {fields.length > 0 && (
              <div className="mb-6 space-y-4">
                {fields.map((field, index) => (
                  <Fragment key={field.id}>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name={`patternsToObserve.${index}.value`}
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormLabel className="mb-0 text-sm font-bold text-primary-600">{`Pattern ${
                              index + 1
                            }`}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder=""
                                className="resize-none"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-2">
                        <Button
                          type="button"
                          onClick={() => remove(index)}
                          className="border bg-red-600 px-2"
                        >
                          <span className="text-xs font-bold text-alert-600">
                            {"Supprimer"}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </Fragment>
                ))}
              </div>
            )}

            <div className="w-full flex justify-end">
              <Button
                type="button"
                onClick={() =>
                  append({
                    value: "",
                  })
                }
                disabled={fields.length >= 3}
                className="flex gap-2 rounded-full border border-primary-200 px-2"
              >
                <PlusIcon className="w-5 text-primary-600" />
              </Button>
            </div>
          </div>

          <FormField
            control={form.control}
            name="aiModel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modèle IA</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner un Model IA" />
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
                <FormLabel>Durée de la vidéo</FormLabel>
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
