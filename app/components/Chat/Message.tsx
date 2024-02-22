import { Message } from "../../types";
import { Avatar } from "../Avatar";
import { useChatContext } from "./context";

export interface MessageProps extends Message {}

export function MessageView({ text, author }: MessageProps) {
  const { receiver } = useChatContext();

  if (author.id === receiver.id) {
    return (
      <div className="rounded-lg bg-gray-100 p-4 text-sm max-w-[85%] self-start mb-4">
        {text}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 mb-4">
      <Avatar {...author} />

      <div className="flex-1">
        <div className="rounded-lg border p-4 text-sm">{text}</div>
      </div>
    </div>
  );
}
