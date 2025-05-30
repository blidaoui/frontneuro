import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utilities additionnelles
export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("fr-FR").format(date);
}
 