import Link from "next/link";
import type { ReactNode } from "react";

// src/app/title/layout.tsx

export const metadata = {
  title: "Title Page Layout",
  description: "A separate layout just for the title page",
};

export default function TitleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center ">
     
      <main>{children}</main>
      
      
    </div>
  );
}
