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
    <li className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-700">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        ${price.toFixed(2)}
      </p>
      <p className="text-sm">{inStock ? "In stock" : "Out of stock"}</p>
      <FavoriteButton />
    </li>
  );
}
