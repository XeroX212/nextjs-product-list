import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-black">
      <main className="mx-auto max-w-2xl rounded-xl bg-white p-6 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold">Page Not Found</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          The page you requested does not exist.
        </p>

        <Link href="/" className="mt-4 inline-block text-sm underline underline-offset-4">
          Go back home
        </Link>
      </main>
    </div>
  );
}
