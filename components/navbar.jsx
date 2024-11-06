import Image from "next/image";
import youngerU from "../public/youngerU.png"
import Link from "next/link";

export default function navbar() {
    return (
    <header>
      <Image src={youngerU} width={150} height={150} alt="Younger U" />

      <nav>
        <ul>
            <li>
                <Link href="/coaching">Coaching</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/podcast">Podcast</Link>
            </li>
            <li>
                <Link href="/articles">Articles</Link>
            </li>
        </ul>
      </nav>
    </header>
    )
}