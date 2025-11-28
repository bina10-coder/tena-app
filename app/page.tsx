import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  console.log(userId);

  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Welcome to<br />
            <span className="text-blue-700 text-5xl md:text-6xl">Tena-Plus</span>
          </h1>
        </div>
      </div>

      <div className="text-center max-w-xl flex flex-col items-center justify-center">
        <p className="mb-8">
          lorem ipsum dolor sit amet, 
          consector adipisicing elit, 
          sed do eiusmod tempor
        </p>

        <div className="flex flex-col gap-4">
          {userId ? (
            <></>
          ) : (
            <>
              <Link href="/sign-up">
                <button className="px-6 py-3 bg-blue-600 text-white rounded">
                  New patient
                </button>
              </Link>

              <Link href="/sign-in">
                <button className="px-6 py-3 bg-gray-700 text-white rounded">
                  Login to account
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
