import Image from "next/image";
import youngerU from "../public/youngerU.png"

export default function Home() {
  return (
    <>
      <Image src={youngerU} width={150} height={150} alt="Younger U" />
      <h1>Younger You</h1>
    </>
  );
}
