import { ProductType } from "../shared/types/productType";

const useFilterProducts = (products: ProductType[], keyword: string) => {
  const pattern = new RegExp(keyword, "i");

  const filteredArray = products.filter((string) => pattern.test(string.name));

  filteredArray.sort((a, b) => {
    const indexA = a.name.toLowerCase().indexOf(keyword.toLowerCase());
    const indexB = b.name.toLowerCase().indexOf(keyword.toLowerCase());

    if (indexA === indexB) {
      return a.name.length - b.name.length;
    }

    return indexA - indexB;
  });

  return filteredArray;
};

export default useFilterProducts;
