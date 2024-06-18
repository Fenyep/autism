"use server";

import { Blog } from "src/entities/Blog";
import supabase from "../../../supabase";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
});

const CreateBlog = FormSchema.omit({ id: true });

export async function createBlog(formData: FormData) {
  const { title, content } = CreateBlog.parse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  try {
    const { data, error } = await supabase
      .from("blogs")
      .insert([{ title, content }])
      .select();

    console.log(data, error);

    return {
      data,
      error,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function fetchBlogs() {
  try {
    const { data, error } = await supabase.from("blogs").select("*");

    return {
      data: data ? (data as Blog[]) : [],
      error,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function fetchBlogById(id: string) {
  try {
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id);

    console.log(data, error);

    return {
      data: data ? (data[0] as Blog) : null,
      error,
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
