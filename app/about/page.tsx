import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500 text-xs font-bold text-white">
              PL
            </span>
            Product List
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-10">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          About this demo
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          File-based routing in action
        </h1>
        <p className="mb-6 text-zinc-600 dark:text-zinc-400">
          This route exists to show file-based routing in Next.js App Router.
          The file at <code>app/about/page.tsx</code> maps to{" "}
          <code>/about</code>.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
        >
          Back to Product List
        </Link>
      </main>
    </div>
  );
}