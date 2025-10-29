import React, { type FC, type ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
}

export const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return (
    <section className="w-full bg-white py-8 px-8 rounded-md mb-4 flex flex-col items-center justify-center shadow-sm">
      {children}
    </section>
  );
};
