// src/stores/useListStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ListItem, ListStore } from './type';

/**
 * Persistent Zustand store using localStorage.
 * - Keys are namespaced by `list-management-storage`
 * - Data is automatically rehydrated on load.
 */
export const useListStore = create<ListStore>()(
  persist(
    (set, get) => ({
      items: [],
      itemIdToEdit: '',
      itemIdtoDelete: '',

      addItem: ({ title, subtitle }) => {
        // Basic normalization/validation inside the store:
        const normalizedTitle = (title ?? '').trim();
        if (!normalizedTitle) {
          throw new Error('addItem: title is required and must not be empty.');
        }

        const newItem: ListItem = {
          id: crypto.randomUUID(),
          title: normalizedTitle,
          subtitle: subtitle?.trim() || undefined,
          createdAt: new Date().toISOString(),
        };

        set((state) => ({
          items: [newItem, ...state.items], // newest items first
        }));

        return newItem;
      },

      getItem: (id: string) => {
        return get().items.find((it) => it.id === id);
      },

      updateItem: (
        id: string,
        payload: { title?: string; subtitle?: string }
      ) => {
        const currentItems = get().items;
        let updatedItem: ListItem | undefined;

        const newItems = currentItems.map((it) => {
          if (it.id !== id) return it;

          // merge changes, avoid empty title
          const newTitle =
            payload.title !== undefined ? payload.title.trim() : it.title;
          if (!newTitle) {
            throw new Error('updateItem: title must not be empty.');
          }

          updatedItem = {
            ...it,
            title: newTitle,
            subtitle:
              payload.subtitle !== undefined
                ? payload.subtitle.trim() || undefined
                : it.subtitle,
            // keep createdAt unchanged
          };

          return updatedItem;
        });

        if (!updatedItem) return undefined;

        set({ items: newItems });
        return updatedItem;
      },

      removeItem: (id: string) => {
        const prev = get().items;
        const exists = prev.some((it) => it.id === id);
        if (!exists) return false;

        const filtered = prev.filter((it) => it.id !== id);
        set({ items: filtered });
        return true;
      },

      setItems: (items: ListItem[]) => {
        const normalized = items.map((it) => ({
          id: it.id || crypto.randomUUID(),
          title: (it.title ?? '').trim(),
          subtitle: it.subtitle?.trim() || undefined,
          createdAt: it.createdAt || new Date().toISOString(),
        }));
        set({ items: normalized });
      },

      clearItems: () => set({ items: [] }),

      setItemIdToEdit: (id: string) => set({ itemIdToEdit: id }),
      setItemIdToDelete: (id: string) => set({ itemIdtoDelete: id }),
    }),
    {
      name: 'list-management-storage', // localStorage key
      // versioning can help with migrations in future
      version: 1,
    }
  )
);

export default useListStore;
