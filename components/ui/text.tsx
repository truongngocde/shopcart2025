import { cn } from "@/lib/utils";
import React from "react";

const Title = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-3xl font-bold text-shop_btn_dark_green capitalize tracking-wide font-sans",
        className
      )}
    >
      {children}
    </h2>
  );
};

const SubTitle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-3xl font-bold text-shop_btn_dark_green capitalize tracking-wide font-sans",
        className
      )}
    >
      {children}
    </h3>
  );
};

const SubText =({children, className} : {children:React.ReactNode; className?:string}) => {
  return <p className={cn("text-gray-600 text-sm", className)}>{children}</p>
}

export { Title, SubText, SubTitle };
