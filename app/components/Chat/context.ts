import { Message, User } from "@/app/types";
import { createContext, useContext } from "react";

interface ContextType {
  messages: Message[];
  customer: User;
  receiver: User;
  newMessage: (text: string) => void;
}

export const ChatContext = createContext<ContextType>({
  messages: [],
  customer: {} as User,
  receiver: {} as User,

  newMessage(text: string) {},
});

export function useChatContext() {
  return useContext(ChatContext);
}
