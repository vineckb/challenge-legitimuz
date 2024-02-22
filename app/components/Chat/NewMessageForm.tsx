import { FormEvent, useState } from "react";
import { SendIcon } from "../icons/Send";
import { useChatContext } from "./context";

export function NewMessageForm() {
  const { newMessage } = useChatContext();
  const [text, setText] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!text) return;

    newMessage(text);
    setText("");
  }

  return (
    <form
      className="flex items-center gap-4 border-t p-4 mt-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-w-0"
        placeholder="Digite sua mensagem aqui..."
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full w-10 h-10"
        type="submit"
        disabled={!text}
      >
        <SendIcon />
      </button>
    </form>
  );
}
