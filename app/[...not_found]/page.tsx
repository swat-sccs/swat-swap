import Link from "next/link";
import Image from "next/image";
import AsciiMeme from "@/components/AsciiMeme";

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
      <p>Oopsies! Page not found!</p>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Image
          src="/images/cards/BaldConfused.jpg"
          alt="Page not found"
          width={300}
          height={168}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/">
          <p>Go back to Home</p>
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <AsciiMeme />
      </div>
    </div>
  );
}
