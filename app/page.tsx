export default function Home() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 29.99, inStock: true },
    { id: 2, name: "Mechanical Keyboard", price: 89.0, inStock: true },
    { id: 3, name: "USB-C Hub", price: 39.5, inStock: false },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 p-8 dark:bg-black">
      <main className="mx-auto max-w-2xl rounded-xl bg-white p-6 dark:bg-zinc-900">
        <h1 className="mb-4 text-2xl font-semibold">Product List</h1>

        <ul className="space-y-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700"
            >
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm">
                {product.inStock ? "In stock" : "Out of stock"}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
