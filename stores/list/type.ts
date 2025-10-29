export interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
  createdAt: string; // ISO string
}

export interface ListStore {
  items: ListItem[];
  itemIdToEdit: string;
  itemIdtoDelete: string;

  // Create
  /**
   * Adds a new item to the store.
   * Returns the created item.
   */
  addItem: (payload: { title: string; subtitle?: string }) => ListItem;

  // Read
  /**
   * Get an item by id. Returns undefined if not found.
   */
  getItem: (id: string) => ListItem | undefined;

  // Update
  /**
   * Update an existing item by id.
   * Returns the updated item or undefined if not found.
   */
  updateItem: (
    id: string,
    payload: { title?: string; subtitle?: string }
  ) => ListItem | undefined;

  // Delete
  /**
   * Removes an item by id.
   * Returns true if removed, false if not found.
   */
  removeItem: (id: string) => boolean;

  // Utilities
  /**
   * Replace the entire items array (useful for imports/exports or resets).
   */
  setItems: (items: ListItem[]) => void;

  /**
   * Clears all stored items.
   */
  clearItems: () => void;

  // UI
  setItemIdToEdit: (id: string) => void;
  setItemIdToDelete: (id: string) => void;
}
