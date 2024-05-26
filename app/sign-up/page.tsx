'use client'

import { Title } from "@components/Title.component";
import { SignUpForm } from "./components/SignUpForm.component";

export default function Home() {  
  return (
    <main className="flex flex-col items-center p-4">
      <Title size="h1">Sign up</Title>
      <SignUpForm />
    </main>
  );
}
