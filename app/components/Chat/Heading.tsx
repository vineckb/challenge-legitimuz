import { PropsWithChildren } from "react";
import { Avatar } from "../Avatar";
import { useChatContext } from "./context";

export function Heading() {
  const { receiver } = useChatContext();
  return (
    <header className="flex items-center p-4 border-b">
      <div className="flex items-center space-x-4">
        <Avatar {...receiver} width={40} height={40} />
        <Title>{receiver.name}</Title>
      </div>
    </header>
  );
}

function Title({ children }: PropsWithChildren) {
  return <h1 className="text-xl font-bold">{children}</h1>;
}
