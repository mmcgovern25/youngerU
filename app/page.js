import Link from "next/link";


export default function Home() {
  return (
    <>
    <header>
    <div className="slideshow"></div>

    <div>
      <div className="hero">
        <h1 className="text-4xl text-center font-bold mb-2">Younger Today, Younger Now, YoungerU</h1>
        <p className="mb-4 text-center">Slow down or even reverse your biological age starting today.</p>
      </div>
      <div className="cta text-center justify-between">
        <Link href="/community" className="mr-4">Join the Community</Link>
        <Link href="/coaching">Explore Meal Plans</Link>
      </div>
    </div>
    </header>

    <main>

    </main>
    </>
  );
}
