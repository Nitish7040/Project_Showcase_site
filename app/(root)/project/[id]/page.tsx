import { Boxes } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg text-white">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes className="w-12 h-12 text-white" />

        <p className="relative text-lg font-semibold mt-4">18 February 2025</p>

        <h1 className="relative text-3xl md:text-5xl font-bold text-center">
          This is a great masterpiece project
        </h1>
        <p className="relative max-w-5xl text-center text-lg opacity-80 mt-2">
          This is a nice project description
        </p>
      </div>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Main Image */}
        <Image
          src="/photo-1737804719022-f70a238a65ef.avif"
          alt="Project"
          className="w-full h-auto rounded-xl shadow-lg"
          width={800}
          height={500}
          priority
        />

        {/* Author Info */}
        <div className="mt-10 flex items-center gap-5">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/photo-1737804719022-f70a238a65ef.avif"
              alt="Author"
              className="rounded-full shadow-lg"
              width={64}
              height={64}
            />
          <div>
            <h2 className="text-lg font-semibold">Author Name</h2>
            <p className="text-sm text-gray-500">@Username</p>
          </div>

          </Link>

          <p className="category-tag">
            Electronics
          </p>
        </div>

<h3 className="text-30-bold mt-10">Project Description</h3>
<p className="no-result">No Detais Provided</p>

<hr className="divider"/>
      </section>
    </>
  );
};

export default Page;
