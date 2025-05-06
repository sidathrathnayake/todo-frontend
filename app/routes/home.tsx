import type { Route } from "./+types/home";
import { Tasks } from "../modules/tasks/tasks";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TODO App" },
    { name: "description", content: "Welcome to TODO APP!" },
  ];
}

export default function Home() {
  return <Tasks />;
}
