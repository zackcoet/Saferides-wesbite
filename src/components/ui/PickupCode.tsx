type Variant = "blue" | "white";
type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, { fontSize: string; padding: string }> = {
  sm: { fontSize: "1rem", padding: "10px 12px" },
  md: { fontSize: "1.5rem", padding: "12px 16px" },
  lg: { fontSize: "2.25rem", padding: "16px 22px" },
};

type PickupCodeProps = {
  // 4-character code. Spaces are ignored, e.g. "7 3 4 2" or "7342".
  code: string;
  // "blue" = white text on Royal Blue. "white" = Royal Blue text on white.
  variant?: Variant;
  size?: Size;
};

// Static display of a pickup code. Each digit is its own box. No animation.
export default function PickupCode({
  code,
  variant = "blue",
  size = "md",
}: PickupCodeProps) {
  const digits = code.replace(/\s/g, "").split("");
  const { fontSize, padding } = SIZES[size];
  const isBlue = variant === "blue";

  return (
    <div
      className="flex"
      style={{ gap: "6px" }}
      role="img"
      aria-label={`Pickup code ${digits.join(" ")}`}
    >
      {digits.map((digit, i) => (
        <span
          key={i}
          className="inline-flex items-center justify-center tabular-nums"
          style={{
            fontFamily: 'ui-monospace, "SFMono-Regular", Menlo, monospace',
            fontWeight: 700,
            fontSize,
            padding,
            letterSpacing: "0.1em",
            borderRadius: "8px",
            color: isBlue ? "#FFFFFF" : "#1740A6",
            backgroundColor: isBlue ? "#1740A6" : "#FFFFFF",
            border: isBlue ? "none" : "1px solid #1740A633",
          }}
        >
          {digit}
        </span>
      ))}
    </div>
  );
}
