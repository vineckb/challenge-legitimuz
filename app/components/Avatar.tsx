import Image, { ImageProps } from "next/image";

export interface AvatarProps extends Omit<ImageProps, "alt" | "src"> {
  avatar: string;
  name?: string;
}

export function Avatar({ avatar, name, ...props }: AvatarProps) {
  return (
    <Image
      alt={`Avatar ${name}`}
      height="30"
      width="30"
      src={avatar}
      style={{ aspectRatio: "40/40", objectFit: "cover" }}
      className="rounded-full"
      {...props}
    />
  );
}
