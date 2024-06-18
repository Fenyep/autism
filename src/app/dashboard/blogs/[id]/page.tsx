import Link from "next/link";
import { redirect } from "next/navigation";
import { fetchBlogById } from "src/app/lib/actions";
import { Button } from "src/components/ui/button";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data } = await fetchBlogById(id);

  if (!data) return;

  return (
    <main className="w-[90%] mx-auto h-[40vh] flex flex-col justify-between border">
      <div>
        <h1 className="font-inter font-bold text-3xl">{data.title}</h1>
        <p className="font-inter font-medium text-base text-gray-400">
          {data.content}
        </p>
      </div>

      <div className="flex gap-2">
        <Link
          className="bg-blue-300 text-white  px-4 py-2"
          href={`/dashboard/blogs/${data.id}/edit`}
        >
          Edit
        </Link>
        <Button variant={"destructive"}>Delete</Button>
      </div>
    </main>
  );
}
