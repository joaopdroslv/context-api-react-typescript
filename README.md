# React + TypeScript Product App

A simple `React + TypeScript` project demonstrating a product listing page with dynamic filtering capabilities. This project uses a context-based approach to manage product data and filters.

## Tech Stack

- `React` for UI rendering
- `TypeScript` for static typing
- `Tailwind CSS` for styling
- `Context API` for state management
- `Custom components` for tags, multi-select, range sliders, and action buttons

## Key Components

- **ProductsProvider / ProductsContext**
  Handles fetching products, storing filters, and providing methods to update or clear filters.
  Accessible via `useProductsContext` hook.
- **ProductsPage**
  Main page that wraps the product filter and list inside the provider.

- **ProductsFilter**
  Displays filtering UI components for keywords, categories, suppliers, and price ranges.
  Allows clearing and applying filters.

- **ProductsList**
  Displays the filtered list of products (implementation depends on your ProductService).

- **UI Components**
- `TagsInput`: Input for keyword tags
- `MultiSelectInput`: Select multiple categories or suppliers
- `RangeSliderInput`: Select price ranges
- `ActionButton`: Reusable button component
