import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";

interface Props {
  title: string;
  path: string;
}

export const MenuSheet = ({ title, path }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <SheetClose asChild>
      <Link
        href={path}
        className="mb-5 font-light text-md"
        onClick={handleClick}
      >
        {title}
      </Link>
    </SheetClose>
  );
};
