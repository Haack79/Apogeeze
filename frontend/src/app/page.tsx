import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <span className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>Hello Apogeeze!</p>
        <Link href="/events">To Events Chart</Link>
    </span>
  );
}
