import Image from "next/image";
import { clsx } from "clsx";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function TreeEmblem({
  size = 64,
  className,
  priority = false,
  alt = "Pallavi Bhaskar — tree-of-life emblem",
}: Props) {
  return (
    <Image
      src="/assets/tree-of-life-emblem.png"
      alt={alt}
      width={size}
      height={size}
      priority={priority}
      className={clsx("select-none", className)}
      style={{ width: size, height: size }}
    />
  );
}
