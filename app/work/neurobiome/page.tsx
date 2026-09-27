import Link from "next/link";

export default function NeurobiomePage() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-brand-blue px-6 py-24 text-cream md:px-20">
      <Link
        href="/"
        className="w-fit font-pixel text-sm text-cream/60 transition-colors duration-200 hover:text-brand-yellow"
      >
        ← back
      </Link>
      <p className="mt-8 font-pixel text-sm text-brand-yellow/70">01</p>
      <h1 className="mt-2 text-5xl font-medium sm:text-6xl">
        Neurobiome Navigator
      </h1>
      <p className="mt-4 max-w-xl text-cream/80">
        Full case study coming soon. For now, see the overview on the home
        page under Selected Works.
      </p>
    </main>
  );
}
