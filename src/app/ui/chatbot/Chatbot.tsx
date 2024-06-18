"use client";

import { Button } from "src/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "src/components/ui/avatar";
import { Input } from "src/components/ui/input";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <Card className="relative h-full w-full max-w-md mx-auto">
    //   <CardHeader>
    //     <CardTitle>Chat with Support</CardTitle>
    //     <CardDescription>
    //       Speak with a support agent to get your questions answered.
    //     </CardDescription>
    //   </CardHeader>
    //   <CardContent
    //     className={`grid gap-4 py-4 transition-all duration-300 ${
    //       isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    //     }`}
    //   >
    //     {/* <div className="grid items-center grid-cols-[auto_1fr] gap-4">
    //       <Avatar className="border w-10 h-10">
    //         <AvatarImage src="/placeholder-user.jpg" />
    //         <AvatarFallback>AJ</AvatarFallback>
    //       </Avatar>
    //       <div className="grid gap-1">
    //         <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
    //           Alex Johnson (Support) &middot; 2:40pm
    //         </p>
    //         <p>Hi, how can I assist you today?</p>
    //       </div>
    //     </div>
    //     <div className="grid items-center grid-cols-[1fr_auto] gap-4">
    //       <div className="grid gap-1">
    //         <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
    //           You &middot; 2:41pm
    //         </p>
    //         <p>My order hasn&apos;t arrived yet. Can you help me?</p>
    //       </div>
    //       <Avatar className="border w-10 h-10">
    //         <AvatarImage src="/placeholder-user.jpg" />
    //         <AvatarFallback>MG</AvatarFallback>
    //       </Avatar>
    //     </div>
    //     <div className="grid items-center grid-cols-[auto_1fr] gap-4">
    //       <Avatar className="border w-10 h-10">
    //         <AvatarImage src="/placeholder-user.jpg" />
    //         <AvatarFallback>AJ</AvatarFallback>
    //       </Avatar>
    //       <div className="grid gap-1">
    //         <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
    //           Alex Johnson (Support) &middot; 2:42pm
    //         </p>
    //         <p>
    //           Okay, let me look into that for you. What&apos;s your order number?
    //         </p>
    //       </div>
    //     </div>
    //     <div className="grid items-center grid-cols-[1fr_auto] gap-4">
    //       <div className="grid gap-1">
    //         <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
    //           You &middot; 2:43pm
    //         </p>
    //         <p>The order number is #123456789.</p>
    //       </div>
    //       <Avatar className="border w-10 h-10">
    //         <AvatarImage src="/placeholder-user.jpg" />
    //         <AvatarFallback>MG</AvatarFallback>
    //       </Avatar>
    //     </div> */}
    //   </CardContent>
    //   <CardFooter>
    //     <form className="flex items-center w-full space-x-2">
    //       <Input
    //         id="message"
    //         placeholder="Type your message..."
    //         className="flex-1"
    //         autoComplete="off"
    //       />
    //       <Button
    //         type="submit"
    //         size="icon"
    //         onClick={(e) => {
    //           e.preventDefault();
    //           setIsOpen(!isOpen);
    //         }}
    //       >
    //         <SendIcon className="w-4 h-4" />
    //         <span className="sr-only">{isOpen ? "Close" : "Send"}</span>
    //       </Button>
    //     </form>
    //   </CardFooter>
    // </Card>
    <Card className="relative w-full mx-auto">
      <CardHeader>
        <CardTitle className="font-inter">
          Agent conversationnel sur l&apos;autisme
        </CardTitle>
        <CardDescription>Que puis-je faire pour vous ?</CardDescription>
      </CardHeader>
      <CardContent className="sm:max-w-[425px] h-[364px] overflow-auto ">
        <div className="grid gap-4 py-4">
          <AiMessage />
          <UserMessage />
        </div>
      </CardContent>
      <CardFooter>
        <form className="flex items-center w-full mt-4 space-x-2">
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
          />
          <Button type="submit" size="icon">
            <SendIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}

const SendIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    );
  }
);

SendIcon.displayName = "SendIcon";

const AiMessage = () => {
  return (
    <div className="grid items-center grid-cols-[auto_1fr] gap-4">
      <Avatar className="border w-10 h-10">
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>AJ</AvatarFallback>
      </Avatar>
      <div className="grid gap-1 bg-gray-100 p-3 rounded-lg dark:bg-gray-800">
        <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
          Alex Johnson (Support) &middot; 2:40pm
        </p>
        <p>Hi, how can I assist you today?</p>
      </div>
    </div>
  );
};

const UserMessage = () => {
  return (
    <div className="grid items-center grid-cols-[1fr_auto] gap-4">
      <div className="grid gap-1 bg-gray-100 p-3 rounded-lg dark:bg-gray-800">
        <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
          Alex Johnson (Support) &middot; 2:40pm
        </p>
        <p>Hi, how can I assist you today?</p>
      </div>
      <Avatar className="border w-10 h-10">
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>MG</AvatarFallback>
      </Avatar>
    </div>
  );
};
