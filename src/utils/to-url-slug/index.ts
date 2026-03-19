export const toUrlSlug = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD") // Decomposes combined characters (é -> e + ´)
    .replace(/[\u0300-\u036f]/g, "") // Removes the accent marks
    .trim()
    .replace(/[^\w\s-]/g, "") // Removes anything that isn't a word, space, or dash
    .replace(/[\s_-]+/g, "-") // Replaces spaces/underscores with a single dash
    .replace(/^-+|-+$/g, ""); // Trims dashes from start/end
