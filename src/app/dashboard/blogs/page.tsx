import Image from "next/image";
import { fetchBlogs } from "src/app/lib/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

import img from "../../../../public/images/side-view-woman-working-as-travel-agent.jpg";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default async function Page() {
  const { data } = await fetchBlogs();

  return (
    <Card className="w-3/4 mx-auto my-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Blogs</CardTitle>
          <CardDescription>List of blog posts</CardDescription>
        </div>
        <Link href="/dashboard/blogs/create">Create Blog</Link>
      </CardHeader>

      <CardContent>
        {data && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((blog) => (
              <Card key={blog.id}>
                <CardHeader>
                  <Image src={img} alt="nature" layout="responsive" />
                  <CardTitle>{blog.title}</CardTitle>
                </CardHeader>
                <CardContent>{blog.content}</CardContent>
                <CardFooter className="flex flex-row items-center justify-end">
                  <Link
                    className="flex justify-end gap-1 items-center group"
                    href={`/dashboard/blogs/${blog.id}`}
                    key={blog.id}
                  >
                    <span className="font-inter font-semibold">View</span>
                    <div className="p-1 border group-hover:scale-110 transition-all rounded-full">
                      <ArrowRightIcon
                        width={20}
                        className="group-hover:translate-x-4 group-hover:scale-110 transition-all"
                      />
                    </div>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
