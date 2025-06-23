import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "Tools",
};

export default async function ToolsLayout({ children }: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className="text-center mt-0 mx-auto max-w-[1280px]">
       {children}     
    </div>
  );
} 