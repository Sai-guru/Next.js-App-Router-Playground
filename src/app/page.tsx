import Image from "next/image";
// import Title from "@/components/Title/Title";
import { Metadata } from "next";
import Link from "next/dist/client/link";

// export const metadata: Metadata = {
//   title: "root page file",
//   description: "cool",
//   openGraph:{
//     title: "enjoying og title",
//     description: "cool",
//     images:["https://media.gettyimages.com/id/1166695965/photo/futuristic-cyborg-religion-and-control.jpg?s=612x612&w=0&k=20&c=cbzk-v65SL35RiTDVEwRsIYKGCmOrjHYRJwlI9NmpnQ="]
//   }
// };

export  const generateMetadata  =()=> {
  return {
    title: "dynamic root page file",
    description: "cool",
    openGraph: {
      title: "enjoying og title",
      description: "cool",
      images: [
        "https://media.gettyimages.com/id/1166695965/photo/futuristic-cyborg-religion-and-control.jpg?s=612x612&w=0&k=20&c=cbzk-v65SL35RiTDVEwRsIYKGCmOrjHYRJwlI9NmpnQ=",
      ],
    },
  };
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>Welcome to Next.js!</h1>
          <Link href="/title">Go to Title Layout</Link>
         
         
        </div>
      </main>
    </div>
  );
}
