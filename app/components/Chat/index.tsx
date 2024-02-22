"use client";

import { useState } from "react";
import { Message, User } from "../../types";
import { ChatContext } from "./context";
import { v4 as randomUUID } from "uuid";
import { Layout } from "./Layout";

export interface ChatProps {
  receiver: User;
  customer: User;
  defaultMessages: string[];
}

export function Chat({ receiver, customer, defaultMessages }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>(
    defaultMessages.map((text) => ({
      id: randomUUID(),
      text,
      author: receiver,
      createdAt: new Date().toISOString(),
    }))
  );

  function newMessage(text: string) {
    setMessages([
      ...messages,
      {
        id: randomUUID(),
        text,
        author: customer,
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  return (
    <ChatContext.Provider value={{ receiver, customer, messages, newMessage }}>
      <Layout />
    </ChatContext.Provider>
  );
}
