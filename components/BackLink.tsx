import Link from "next/link";

/**
 * "← back" to the home page. Navigates in-app (no reload) and leaves the
 * scroll position to HomeScrollMemory, which returns you to where you were.
 */
export default function BackLink({ href, className }: { href: string; className: string }) {
  return (
    <Link href={href} scroll={false} className={className}>
      ← back
    </Link>
  );
}
