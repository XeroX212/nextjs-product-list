import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-black">
      <main className="mx-auto max-w-2xl rounded-xl bg-white p-6 dark:bg-zinc-900">
        <h1 className="mb-3 text-2xl font-semibold">About This Demo</h1>
        <p className="mb-6 text-zinc-700 dark:text-zinc-300">
          This route exists to show file-based routing in Next.js App Router.
          The file at <code>app/about/page.tsx</code> maps to <code>/about</code>.
        </p>

        <Link href="/" className="text-sm underline underline-offset-4">
          Back to Product List
        </Link>
      </main>
    </div>
  );
}
