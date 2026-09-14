"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const classes = [
    "ml-4 shrink-0 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
    isFavorite
      ? "border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600"
      : "border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800",
  ].join(" ");

  return (
    <button
      type="button"
      onClick={() => setIsFavorite((prev) => !prev)}
      className={classes}
    >
      {isFavorite ? "★ Favorited" : "☆ Favorite"}
    </button>
  );
}