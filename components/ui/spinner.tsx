import { Loader } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "animate-spin text-primary dark:text-primary-dark",
  {
    variants: {
      size: {
        default: "h-4 w-4",
        sm: "h-2 w-2",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        icon: "h-10 w-10",
      },
      variant: {
        default: "text-primary dark:text-primary-dark",
        secondary: "text-secondary dark:text-secondary-dark",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}
const Spinner: React.FC<SpinnerProps> = ({ size, variant }) => {
  return (
    <Loader
      className={cn(spinnerVariants({ size, variant }))}
      aria-label="Loading..."
    />
  );
};

export default Spinner;
