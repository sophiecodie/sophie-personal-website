import Link from "next/link";

export default function DancePage() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-brand-yellow px-6 py-24 text-brand-blue md:px-20">
      <Link
        href="/"
        className="w-fit font-pixel text-sm text-brand-blue/60 transition-colors duration-200 hover:text-navy"
      >
        ← back
      </Link>
      <h1 className="mt-8 text-5xl font-medium sm:text-6xl">Dance.</h1>
      <p className="mt-4 max-w-xl text-brand-blue/80">
        Performances, teams, and a few favorite styles — coming soon. For
        now, the short version lives on the home page under Outside of
        Class.
      </p>
    </main>
  );
}
