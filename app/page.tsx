import Link from "next/link";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return [
    { id: 1, name: "Wireless Mouse", price: 29.99, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 89.0, inStock: true },
    { id: 3, name: "USB-C Hub", price: 39.5, inStock: false },
  ];
}

export default async function Home() {
  const products = await getProducts();

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
          <nav className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-10">
        <section className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Featured gear
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            A tiny demo storefront
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Server-side rendered product data, streaming loading states, and a
            client-side favorite toggle — everything you need to see the App
            Router in action.
          </p>
        </section>

        <ul className="space-y-4">
          {products.map(({ id, ...product }) => (
            <ProductCard key={id} {...product} />
          ))}
        </ul>
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-600">
        Built with Next.js 16 · App Router demo
      </footer>
    </div>
  );
}