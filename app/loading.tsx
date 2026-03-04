export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-black">
      <main className="mx-auto max-w-2xl rounded-xl bg-white p-6 dark:bg-zinc-900">
        <h1 className="text-2xl font-semibold">Loading...</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
          Fetching page data, please wait.
        </p>
      </main>
    </div>
  );
}
