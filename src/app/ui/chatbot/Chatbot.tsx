"use client";

import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { inter } from "../fonts";
import { cn } from "src/lib/utils";
import MessageBubble from "./MessageBubble";
import Message from "src/entities/Message";
import { SendIcon } from "../Icons/Icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "src/components/ui/form";

export default function Chatbot() {
  const [messages, setMessage] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MessageFormSchema = z.object({
    message: z.string().min(1),
  });

  const form = useForm<z.infer<typeof MessageFormSchema>>({
    resolver: zodResolver(MessageFormSchema),
    defaultValues: {
      message: "",
    },
  });

  const addMessage = (message: Message) => {
    setMessage([...messages, message]);
  };

  const onSubmit = (values: z.infer<typeof MessageFormSchema>) => {
    addMessage(
      new Message({
        content: values.message,
        date: new Date(),
      })
    );
    form.reset();
  };

  // Scroll to bottom when component mounts or when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Card className={cn(inter.className, "relative w-full mx-auto")}>
      <CardHeader>
        <CardTitle className="font-inter">
          Agent conversationnel sur l&apos;autisme
        </CardTitle>
        <CardDescription>Que puis-je faire pour vous ?</CardDescription>
      </CardHeader>
      <CardContent className="sm:max-w-[425px] h-[364px] overflow-x-auto overflow-y-auto !px-4 !pb-0">
        <div className="flex flex-col gap-4 pt-4 w-full">
          <MessageBubble
            owner="them"
            message={
              new Message({
                content: "Hi, how can I assist you today?",
                date: new Date(),
              })
            }
          />
          <MessageBubble
            owner="me"
            message={
              new Message({
                content: "Hi, how can I assist you today?",
                date: new Date(),
              })
            }
          />
          {messages.map((message, index) => (
            <Fragment key={index}>
              <MessageBubble owner={"me"} message={message} />
            </Fragment>
          ))}

          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center w-full mt-4 space-x-2"
          >
            <FormField
              name="message"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      id="message"
                      placeholder="Type your message..."
                      className="flex-1"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" size="icon">
              <SendIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </Form>
      </CardFooter>
    </Card>
  );
}
