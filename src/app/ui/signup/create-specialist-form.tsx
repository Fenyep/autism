"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Fragment, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "src/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "src/components/ui/dialog";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { z } from "zod";
import CustomFileInput from "../input/CustomFileInput";
import { Label } from "src/components/ui/label";
import { PlusIcon } from "lucide-react";
import { XIcon } from "../Icons/Icons";
import { FileValidator, RequiredFieldValidator } from "../shemaValidations";
import { cn } from "src/lib/utils";
import { inter } from "../fonts";

export default function CreateSpecialistForm() {
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    cniNumber: RequiredFieldValidator,
    names: RequiredFieldValidator,
    birthDate: z.string().min(3, {
      message: "The blog content must be at least 2 characters.",
    }),
    bornAt: RequiredFieldValidator,
    gender: z.enum(["Homme", "Femme"]),
    town: RequiredFieldValidator,
    schoolLevel: RequiredFieldValidator,
    schoolLevelProof: RequiredFieldValidator,
    domains: z.array(
      z.object({
        value: RequiredFieldValidator,
      })
    ),
    experiences: z.array(
      z.object({
        value: RequiredFieldValidator,
      })
    ),
    cv: FileValidator,
    photo: FileValidator,
    referenceNumber: RequiredFieldValidator,
    serviceLocation: RequiredFieldValidator,
  });
  // Defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cniNumber: "",
      names: "",
      birthDate: "",
      bornAt: "",
      gender: "Homme",
      town: "",
      schoolLevel: "",
      domains: [],
      experiences: [],
      cv: undefined,
      photo: undefined,
      referenceNumber: "",
      serviceLocation: "",
    },
  });

  const {
    fields: domainFields,
    append: appendDomain,
    remove: removeDomain,
  } = useFieldArray({
    control: form.control,
    name: "domains",
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: form.control,
    name: "experiences",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const {
      cniNumber,
      names,
      birthDate,
      bornAt,
      gender,
      town,
      schoolLevel,
      domains,
      experiences,
      cv,
      photo,
      referenceNumber,
      serviceLocation,
    } = values;

    console.log(values);
  };
  return (
    <DialogContent
      className={cn(
        inter.className,
        "sm:max-w-[425px] sm:max-h-[650px] overflow-y-auto"
      )}
    >
      <DialogHeader>
        <DialogTitle>Nouveau spécialiste</DialogTitle>
        <DialogDescription>
          Renseignez vos informations dans le formulaire afin de commencer.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form className="grid gap-4">
          <FormField
            control={form.control}
            name="cniNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N° CNI</FormLabel>
                <FormControl>
                  <Input
                    id="cniNumber"
                    type="text"
                    placeholder="Entrez votre numéro de CNI"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="names"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Noms et prénoms</FormLabel>
                <FormControl>
                  <Input
                    id="names"
                    type="text"
                    placeholder="Entrez votre nom et votre prenom"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de naissance</FormLabel>
                <FormControl>
                  <Input
                    id="birthDate"
                    type="text"
                    placeholder="Entrez votre date de naissance"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Format: JJ/MM/AAAA</FormDescription>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bornAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lieu de naissance</FormLabel>
                <FormControl>
                  <Input
                    id="bornAt"
                    type="text"
                    placeholder="Entrez votre lieu de naissance"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bornAt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sexe</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner votre Sexe" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Masculin">Masculin</SelectItem>
                    <SelectItem value="Feminin">Feminin</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="town"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ville</FormLabel>
                <FormControl>
                  <Input
                    id="town"
                    type="text"
                    placeholder="Entrez votre ville"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="schoolLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niveau d&apos;étude</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selectionner votre niveau d'etude" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Moins de Licence">
                      Moins de Licence
                    </SelectItem>
                    <SelectItem value="Licence">Licence</SelectItem>
                    <SelectItem value="Master">Master</SelectItem>
                    <SelectItem value="Doctorat">Doctorat</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="schoolLevelProof"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preuve du niveau d&apos;étude</FormLabel>
                <FormControl>
                  <CustomFileInput
                    mimeTypes={[
                      "image/png",
                      "image/jpeg",
                      "image/jpg",
                      "image/webp",
                      "application/pdf",
                    ]}
                    name="schoolLevelProof"
                    onChange={(file) => field.onChange(file)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <Label className="">{`Domaines (${domainFields.length})`}</Label>

            {domainFields.length > 0 && (
              <div className="mb-2 space-y-1">
                {domainFields.map((field, index) => (
                  <Fragment key={field.id}>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name={`domains.${index}.value`}
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormLabel className="mb-0 text-xs font-semibold text-primary-600">{`Domaine ${
                              index + 1
                            }`}</FormLabel>
                            <FormControl>
                              <div className="flex gap-2">
                                <Input
                                  placeholder={`Domaine ${index + 1}`}
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  onClick={() => removeDomain(index)}
                                  className="border  rounded-lg bg-red-600 px-2"
                                >
                                  <XIcon className="size-5 text-white" />
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-2"></div>
                    </div>
                  </Fragment>
                ))}
              </div>
            )}

            <div className="w-full flex justify-end">
              <Button
                type="button"
                onClick={() =>
                  appendDomain({
                    value: "",
                  })
                }
                className="flex gap-2 rounded-full border border-primary-200 px-2"
              >
                <PlusIcon className="w-5 text-primary-600" />
              </Button>
            </div>
          </div>

          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CV</FormLabel>
                <FormControl>
                  <CustomFileInput
                    mimeTypes={[
                      "image/png",
                      "image/jpeg",
                      "image/jpg",
                      "image/webp",
                      "application/pdf",
                    ]}
                    name="cv"
                    onChange={(file) => field.onChange(file)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>PHOTO</FormLabel>
                <FormControl>
                  <CustomFileInput
                    mimeTypes={[
                      "image/png",
                      "image/jpeg",
                      "image/jpg",
                      "image/webp",
                      "application/pdf",
                    ]}
                    name="photo"
                    onChange={(file) => field.onChange(file)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referenceNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>N° de Référence</FormLabel>
                <FormControl>
                  <Input
                    id="referenceNumber"
                    type="text"
                    placeholder="Entrez votre numéro de Référence"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lieu de Service</FormLabel>
                <FormControl>
                  <Input
                    id="serviceLocation"
                    type="text"
                    placeholder="Entrez votre numéro de Référence"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <Label className="">{`Experiences (${experienceFields.length})`}</Label>

            {experienceFields.length > 0 && (
              <div className="mb-2 space-y-1">
                {experienceFields.map((field, index) => (
                  <Fragment key={field.id}>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name={`experiences.${index}.value`}
                        render={({ field }) => (
                          <FormItem className="space-y-0">
                            <FormLabel className="mb-0 text-xs font-semibold text-primary-600">{`Expérience ${
                              index + 1
                            }`}</FormLabel>
                            <FormControl>
                              <div className="flex gap-2">
                                <Input
                                  placeholder={`Expérience ${index + 1}`}
                                  {...field}
                                />
                                <Button
                                  type="button"
                                  onClick={() => removeExperience(index)}
                                  className="border  rounded-lg bg-red-600 px-2"
                                >
                                  <XIcon className="size-5 text-white" />
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </Fragment>
                ))}
              </div>
            )}

            <div className="w-full flex justify-end">
              <Button
                type="button"
                onClick={() =>
                  appendExperience({
                    value: "",
                  })
                }
                className="flex gap-2 rounded-full border border-primary-200 px-2"
              >
                <PlusIcon className="w-5 text-primary-600" />
              </Button>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Soumettre</Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
