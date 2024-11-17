import Link from "next/link";
import Image from "next/image";
import AsciiMeme from "@/components/AsciiMeme";
import { SocialMediaSharing } from "../components/SocialMediaSharing";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <p className="font-bold text-4xl text-center">Oopsies! Page not found!</p>
      <div className="w-[40rem] h-96 bg-red-500 relative mt-4 mb-4">
        <Image
          src="/images/cards/BaldConfused.jpg"
          alt="Page not found"
          layout="fill"
          className="object-cover object-center"
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/">
          <p className="underline text-blue-400 hover:text-blue-500">
            Go back to Home
          </p>
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <AsciiMeme />
      </div>
    </div>
  );
}
