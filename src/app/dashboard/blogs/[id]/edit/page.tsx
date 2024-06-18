import { fetchBlogById } from "src/app/lib/actions";
import UpdateBlogForm from "src/app/ui/blogs/update-blog";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const { data } = await fetchBlogById(id);
  return <main>{data && <UpdateBlogForm blog={data} />}</main>;
}
