import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-5 p-24" suppressHydrationWarning>
      <div className="font-semibold text-blue-600 text-2xl">Hello Apogeeze</div>
      <Link className="p-3 bg-blue-600 rounded-xl hover:bg-blue-400 text-white" href="/events">Go to Chart</Link>
    </main>
  );
}
