import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Mayur Mahajan",
  description: "mayurm.dev porfolio",
};

export default async function PrivateLayout({ children }: Readonly<{
  children: React.ReactNode;
}>){
 const session = true;
//   const session = await auth();
  return (
    <div className="text-center mt-0 mx-auto max-w-[1280px]">
      {session ? (
        children
      ) : (
        <div>
          <h1>Not authenticated</h1>
          <Link className="primary-btn" href="/sign-in">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
} 