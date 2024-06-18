import { Label } from "src/components/ui/label";
import { LoginForm } from "../ui/signin/LoginForm";
import { Input } from "src/components/ui/input";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center ">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className=" text-muted-foreground">
              Enter your username below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="example" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link> */}
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/medium-shot-woman-working-travel-agency.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

// <main className="flex absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex-col items-center justify-between">
{
  /* <LoginForm /> */
}
{
  /* </main> */
}
