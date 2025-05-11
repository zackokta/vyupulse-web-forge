
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  background?: "default" | "muted" | "primary";
}

const maxWidthMap = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "full": "max-w-full",
};

const backgroundMap = {
  default: "bg-background",
  muted: "bg-secondary",
  primary: "bg-primary text-primary-foreground",
};

const Section = ({
  children,
  className,
  id,
  title,
  subtitle,
  centered = false,
  maxWidth = "full",
  background = "default",
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24", 
        backgroundMap[background],
        className
      )}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className={cn(
            "mb-12 md:mb-16", 
            centered && "text-center mx-auto",
            maxWidth !== "full" && maxWidthMap[maxWidth]
          )}>
            {title && <h2 className="heading-lg mb-4">{title}</h2>}
            {subtitle && <p className="body-lg text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        <div className={cn(
          centered && "mx-auto text-center",
          maxWidth !== "full" && maxWidthMap[maxWidth]
        )}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
