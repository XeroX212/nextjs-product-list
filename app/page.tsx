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
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-black">
      <main className="mx-auto max-w-2xl rounded-xl bg-white p-6 dark:bg-zinc-900">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Product List</h1>
          <Link href="/about" className="text-sm underline underline-offset-4">
            About
          </Link>
        </div>

        <ul className="space-y-3">
          {products.map(({ id, ...product }) => (
            <ProductCard key={id} {...product} />
          ))}
        </ul>
      </main>
    </div>
  );
}
