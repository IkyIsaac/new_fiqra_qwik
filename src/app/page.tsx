//@ts-nocheck
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="block">
        <h1>My homepage</h1>
        <a href="/home">Home</a>
        <a href="/about">About</a>
      </div>
    </main>
  );
}
