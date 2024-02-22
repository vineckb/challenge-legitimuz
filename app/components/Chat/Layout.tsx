import { Heading } from "./Heading";
import { NewMessageForm } from "./NewMessageForm";
import { MessagesList } from "./MessagesList";
import { PropsWithChildren } from "react";

export function Layout() {
  return (
    <Wrapper>
      <Heading />
      <Content>
        <MessagesList />
        <NewMessageForm />
      </Content>
    </Wrapper>
  );
}

function Wrapper({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      {children}
    </div>
  );
}

function Content({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col p-4 overflow-hidden flex-1">{children}</div>
  );
}
