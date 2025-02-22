import { auth, signIn, signOut } from "@/auth";

import Link from "next/link";
import React from "react";

const Navbar = async () => {

const session  = await auth();

  return (
    <header>
      <nav className="bg-blue-900 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">
            <h2>Logo</h2>
          </div>
    {session && session?.user ? (
      <>
       {/* Navigation Links */}
       <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link
                href="#"
                className="hover:text-blue-300 transition duration-300"
              >
                create
              </Link>
            </li>
            <li>
            <form action={async () => {
        "use server";
        await signOut({redirectTo: "/" });
      }}
      >

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
      </form>

      {/* form for login   */}
            </li>
            <li>
              <Link
                href={`/user/sessionid`}  // for redirect to user profile
                className="hover:text-blue-300 transition duration-300"
              >
               {session?.user?.name}
              </Link>
            </li>
          </ul>
      
      </>
    ) : (
      <form action={async () => {
        "use server";
        await signIn('github');
      }}
      >

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign In
      </button>
      
      </form>
    )}
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
