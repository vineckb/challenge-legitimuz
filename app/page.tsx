import { Chat } from "@/app/components/Chat";
import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

const receivers = Array.from({ length: 3 }).map(() => ({
  id: randomUUID(),
  name: faker.person.fullName(),
  avatar: faker.image.avatarGitHub(),
}));

const customer = {
  id: randomUUID(),
  name: faker.person.fullName(),
  avatar: faker.image.avatarGitHub(),
};

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 ">
      {receivers.map((receiver, index) => (
        <Chat
          key={index}
          receiver={receiver}
          defaultMessages={[
            "Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu teste.",
            "Siga as instruções detalhadas no Notion oficial e boa sorte!",
          ]}
          customer={customer}
        />
      ))}
    </div>
  );
}
