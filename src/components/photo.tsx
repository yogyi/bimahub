import Image from "next/image";
import { cn } from "cn";

type PhotoProps = {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
};

export function Photo({
  src,
  alt,
  ratio = "aspect-[4/3]",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className,
  imageClassName,
}: PhotoProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[12px] bg-muted",
        ratio,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
