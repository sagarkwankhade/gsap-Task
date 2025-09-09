import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">MyProduct</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/signin">Sign In</Link>
        <Link href="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}
