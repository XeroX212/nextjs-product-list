import FavoriteButton from "./FavoriteButton";

type ProductCardProps = {
  name: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({
  name,
  price,
  inStock,
}: ProductCardProps) {
  return (
    <li className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white p-4 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="min-w-0">
        <p className="font-semibold text-zinc-900 dark:text-zinc-50">{name}</p>
        <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
          ${price.toFixed(2)}
        </p>
        <span
          className={[
            "mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium",
            inStock
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
          ].join(" ")}
        >
          {inStock ? "In stock" : "Out of stock"}
        </span>
      </div>
      <FavoriteButton />
    </li>
  );
}