import Link from "next/link";
import { othersSections } from "@/data/others";

/** The smaller fourth Outside of Class row; opens the /others page. */
export default function OthersRow() {
  return (
    <Link href="/others" className="group block border-t border-cream/15 pt-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-baseline gap-4">
          <span className="font-pixel text-base text-cream/50">04</span>
          <h3 className="text-2xl font-medium transition-transform duration-300 group-hover:translate-x-2 sm:text-3xl">
            Others
          </h3>
        </div>
        <span className="flex shrink-0 items-center gap-2 uppercase tracking-wider text-brand-yellow">
          <span className="hidden text-sm sm:inline">Explore</span>
          <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
            ↗
          </span>
        </span>
      </div>

      <p className="mt-3 font-pixel text-base text-cream/50">
        {othersSections.map((s) => s.title).join(" · ")}
      </p>
    </Link>
  );
}
