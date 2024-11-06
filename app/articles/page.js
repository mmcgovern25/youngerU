import Link from "next/link";

export default function Articles() {
    return (
    <>
        <h1>Articles</h1>
        <p>
            <Link href="/articles/post-1">Post 1</Link>
        </p>
        <p>
            <Link href="/articles/dontmatter">Post 2</Link>
        </p>
    </>
    )
}