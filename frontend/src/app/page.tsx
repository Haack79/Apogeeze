import Link from "next/link";
export default function Home() {
  return (
    <span className="flex min-h-screen flex-col items-center space-y-5 p-24 bg-black" suppressHydrationWarning>
      <div className="font-semibold text-blue-600 text-2xl">Hello Apogeeze</div>
      <div className="relative">
        <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500 to-orange-700 rounded-xl blur"></div>
        <Link className="relative px-5 py-2 bg-blue-600 rounded-xl hover:bg-blue-400 text-white leading-none" href="/events">Go to Chart</Link>
      </div>
    </span>
  );
}
