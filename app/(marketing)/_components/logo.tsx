import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/blocnote_icon_light.svg"
        alt="BlocNote"
        width={32}
        height={32}
        className="h-8 w-8"
      />{" "}
      <h1
        className={cn(
          poppins.className,
          "text-2xl font-semibold text-primary dark:text-primaryDark"
        )}
      >
        BlocNote
      </h1>
    </div>
  );
};

export default Logo;
