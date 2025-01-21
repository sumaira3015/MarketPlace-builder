import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./products";
import { categorySchema } from "./categories";
import landingPage from "./landingPage-sections/landingPage";
import hero from "./landingPage-sections/hero";

import ourProducts from "./landingPage-sections/ourProducts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, hero, ourProducts, productSchema, categorySchema], // Ensure topCategories module exists or is correctly named
};