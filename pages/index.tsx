import Image from "next/image";

import vercel from "../public/images/vercel.png";

export default function Home() {
  return (
    <div>
       <Image
        alt="Vercel logo"
        src={vercel}
        width={1000}
        height={1000}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
