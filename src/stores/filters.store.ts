import { atom } from "nanostores";

export const filters = atom<string[]>([]);

export function addFilter(filter: string) {
  if (filters.get().includes(filter)) {
    return;
  }

  filters.set([...filters.get(), filter]);
}

export function removeFilter(filter: string) {
  let mutableFilters: string[] = filters.get();
  const indexToRemove: number = mutableFilters.indexOf(filter, 0);

  if (indexToRemove < 0) {
    return;
  }

  mutableFilters.splice(indexToRemove, 1);
  filters.set([...mutableFilters]);
}

export function toggleFilter(filter: string) {
  if (filters.get().includes(filter)) {
    removeFilter(filter);
    return;
  }

  addFilter(filter);
}
