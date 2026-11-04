type TypographyH3Props = React.ComponentProps<"h3">;

export function TypographyH3({ className, ...props }: TypographyH3Props) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className ?? ""}`}
      {...props}
    />
  );
}