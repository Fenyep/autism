import { z } from "zod";

const PrecisionValidator = z
  .number()
  .min(0.01, {
    message: "La précision minimale est 0.01.",
  })
  .max(0.9, {
    message: "La précision maximale est 0.9.",
  });

const RequiredFieldValidator = z.string().min(1, {
  message: "Champ requis.",
});

const YearFieldValidator = z
  .number()
  .int()
  .min(1910, {
    message: "Year must be greater than or equal to 1910",
  })
  .max(new Date().getFullYear(), {
    message: "Year must be less than or equal to the current year",
  });

const FileValidator = z
  .array(z.instanceof(File))
  .optional()
  .refine((file) => !!file, { message: "Champ requis." });

const AgeValidator = z.number().min(1, {
  message: "The minimum value is 1.",
});

export {
  PrecisionValidator,
  RequiredFieldValidator,
  FileValidator,
  AgeValidator,
  YearFieldValidator,
};
