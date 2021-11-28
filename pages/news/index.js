import Link from "next/link"; //use Link for stay on SPA.

export default function News() {
  return (
    <>
      <h1>The news Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJs is a great framework
          </Link>
        </li>
        <li>Something happen.</li>
      </ul>
    </>
  );
}
