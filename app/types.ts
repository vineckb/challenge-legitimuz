export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  text: string;
  author: User;
  createdAt: string;
}
