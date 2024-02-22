import { MessageView } from "./Message";
import { useChatContext } from "./context";

export function MessagesList() {
  const { messages } = useChatContext();

  return messages.map((message, index) => (
    <MessageView key={index} {...message} />
  ));
}
