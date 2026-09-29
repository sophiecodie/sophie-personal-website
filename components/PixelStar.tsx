/** A tiny five-square pixel star/sparkle, drawn in whatever `color` class is passed. */
export default function PixelStar({
  color = "bg-brand-blue",
  size = "h-1.5 w-1.5",
  className = "",
}: {
  color?: string;
  size?: string;
  className?: string;
}) {
  const cell = `${size} ${color}`;
  return (
    <span aria-hidden className={`inline-grid w-fit grid-cols-3 ${className}`}>
      <span />
      <span className={cell} />
      <span />
      <span className={cell} />
      <span className={cell} />
      <span className={cell} />
      <span />
      <span className={cell} />
      <span />
    </span>
  );
}
