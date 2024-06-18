"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { Fragment, useState } from "react";
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
import {
  AgeValidator,
  PrecisionValidator,
  RequiredFieldValidator,
} from "../shemaValidations";

export default function CreateQuestionDepForm() {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    test: RequiredFieldValidator,
    age: AgeValidator,
    precision: PrecisionValidator,
    questions: z.array(
      z.object({
        question: RequiredFieldValidator,
        answer: RequiredFieldValidator,
      })
    ),
  });
  // Defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      test: "",
      age: 1,
      precision: 0.01,
      questions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { test, age, precision, questions } = formSchema.parse({
      test: values.test,
      age: values.age,
      precision: values.precision,
      questions: values.questions,
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
            name="precision"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Précision</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    id="precision"
                    placeholder="Précision"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <Label>{`Questions (${fields.length})`}</Label>

            {fields.length > 0 && (
              <div className="mb-6 space-y-4">
                {fields.map((field, index) => (
                  <Fragment key={field.id}>
                    <div className="space-y-1">
                      <FormField
                        control={form.control}
                        name={`questions.${index}.question`}
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormLabel className="mb-0 text-xs font-bold text-primary-600">{`Question ${
                              index + 1
                            }`}</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selectionnez le type de la question" />
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
                        name={`questions.${index}.answer`}
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormLabel className="mb-0 text-xs font-bold text-primary-600">{`Reponse ${
                              index + 1
                            }`}</FormLabel>

                            <FormControl>
                              <Textarea
                                placeholder="Réponse à la question"
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
                    question: "",
                    answer: "",
                  })
                }
                className="flex gap-2 rounded-full border border-primary-200 px-2"
              >
                <PlusIcon className="w-5 text-primary-600" />
              </Button>
            </div>
          </div>

          <Button disabled={isLoading} type="submit">
            {isLoading ? "Chargement..." : "Valider"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
