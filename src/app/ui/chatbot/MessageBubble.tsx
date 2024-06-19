import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import Message from "src/entities/Message";
import { formatTime } from "src/utils/dateHelpers";
import Reveal from "../reveal";

type MessageProps = {
  owner: "me" | "them";
  message: Message;
};

export default function MessageBubble({ owner, message }: MessageProps) {
  return (
    <Reveal variant={owner === "me" ? "to-left" : "to-right"}>
      <div className="flex items-start gap-4 w-full">
        {owner === "them" ? (
          <>
            <Avatar className="border w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 bg-gray-200 p-2 rounded-lg flex-1 sm:max-w-[276px]">
              <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
                Chat Bot (Support) &middot; {formatTime(message.date)}
              </p>
              <p className="break-words">{message.content}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-1 bg-gray-200 p-2 rounded-lg flex-1 sm:max-w-[276px]">
              <p className="font-medium text-sm text-gray-500 leading-none dark:text-gray-400">
                Vous &middot; {formatTime(message.date)}
              </p>
              <div className="break-words">{message.content}</div>
            </div>
            <Avatar className="border w-10 h-10">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>MG</AvatarFallback>
            </Avatar>
          </>
        )}
      </div>
    </Reveal>
  );
}
