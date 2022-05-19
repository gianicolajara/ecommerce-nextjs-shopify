export const idShopyToId = (id) => {
  return `${id.split("/")[3].toLowerCase()}/${id.split("/")[4]}`;
};

export const idShopyToOnlyId = (id) => {
  return id.split("/")[4].toString();
};

export const idToIdShopify = (typeId = "Product", id = "") => {
  return `gid://shopify/${typeId}/${id}`;
};

export const formatterOptions = (options) => {
  if (!options) return {};
  let newOptions = {};
  options.forEach((option) => {
    newOptions = { ...newOptions, [option.name]: option.value };
  });
  return newOptions;
};

export const getSizesFromProduct = (variants) => {
  if (!variants) return [];
  let sizes = [];
  variants.forEach((variant) => {
    variant.selectedOptions.forEach((option) => {
      if (option.name === "Size") {
        sizes.push(option.value);
      }
    });
  });
  return sizes;
};
