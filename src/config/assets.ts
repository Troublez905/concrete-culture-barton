export const brandAssets = {
  logo: "/brand/concrete-culture-logo.png",
  mark: "/brand/cc-mark-red-cyan.png",
  storefront: "/brand/storefront-package.png",
  writers: "/brand/built-for-writers.png",
  capsule: "/brand/capsule-drop.png",
  supplies: "/brand/shop-supplies.png",
  freightTools: "/brand/freight-yard-tools.png"
};

export function productAssetFor(category: string) {
  if (category === "Limited Drops" || category === "Apparel") return brandAssets.capsule;
  if (category === "3D-Printed Tools") return brandAssets.freightTools;
  if (category === "Spray Paint" || category === "Caps" || category === "Mops" || category === "Paint Markers") return brandAssets.writers;
  return brandAssets.supplies;
}
