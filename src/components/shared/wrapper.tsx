import React from "react";
import { cn } from "~/lib/utils";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-2xl px-2.5 md:px-10 xl:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
