"use client";

import { Button } from "src/components/ui/button";
import Image from "next/image";
import React, { useMemo } from "react";
import { UploadIcon, XIcon } from "../Icons/Icons";
import { useToast } from "src/components/ui/use-toast";

export type MimeTypes =
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "image/webp"
  | "image/gif"
  | "image/svg+xml"
  | "image/*"
  | "application/pdf"
  | "video/mp4"
  | "video/*"
  | "audio/mp3"
  | "audio/wav"
  | "audio/ogg"
  | "audio/mp4"
  | "audio/*";

interface CustomFileInputProps {
  name: string;
  preview?: boolean;
  mimeTypes?: Array<MimeTypes>;
  maxFileSize?: number;
  onChange?: (file: File) => void;
}
export default function CustomFileInput({
  name,
  preview = false,
  mimeTypes = ["image/*", "application/pdf"],
  maxFileSize = 2 * 1024 * 1024,
  onChange,
}: CustomFileInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { toast } = useToast();

  const acceptStr = useMemo(() => mimeTypes.join(","), [mimeTypes]);

  const fromKbToMb = (bytes: number) => {
    return (bytes / 1024 / 1024).toFixed(2);
  };

  // Function to handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file.type, acceptStr);

      // Validate file type
      if (!acceptStr.includes(file.type)) {
        // Handle invalid file type (not audio)
        toast({
          title: "Invalid file type",
          description: `Please select a valid ${name} file.`,
          variant: "destructive",
        });
        e.target.value = "";
      } else {
        // Validate file size (less than 2MB)
        if (file.size > maxFileSize) {
          // Handle file size too large
          toast({
            title: "File size too large",
            description: `Please select a file less than ${fromKbToMb(
              maxFileSize
            )}MB.`,
            variant: "destructive",
          });
          e.target.value = "";
        } else {
          // File is valid, pass to react-hook-form
          onChange?.(file);
        }
      }
    }
  };

  return (
    <div className="grid w-full gap-2">
      <div className="relative flex items-center justify-between rounded-md border border-gray-300 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 dark:border-gray-700 dark:bg-gray-950">
        <input
          type="file"
          id={name}
          name={name}
          onChange={handleFileChange}
          ref={inputRef}
          accept={acceptStr}
          className="block w-full cursor-pointer rounded-md border-gray-300 file:mr-4 file:cursor-pointer file:border-0 file:bg-transparent file:py-2 file:px-4 file:text-sm file:font-medium file:text-indigo-600 focus:border-indigo-600 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-950 dark:file:text-indigo-400"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => inputRef.current?.click()}
          className="absolute right-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
        >
          <UploadIcon className="h-5 w-5" />
          <span className="sr-only">Upload</span>
        </Button>
      </div>
      {preview ? (
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Image
              src="/placeholder.svg"
              alt="Preview"
              width={100}
              height={100}
              className="rounded-md border border-gray-300 object-cover dark:border-gray-700"
            />
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-500"
          >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
