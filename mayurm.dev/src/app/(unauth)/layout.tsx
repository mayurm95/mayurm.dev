import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mayur Mahajan",
  description: "mayurm.dev porfolio",
};

export default async function PublicLayout({ children }: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div className=" mt-0 mx-auto max-w-full mt-[1rem]">
       {children}     
    </div>
  );
} 