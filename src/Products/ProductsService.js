export const listProducts = async () => {
  const response = await fetch(`/api/products`);

  if (response.ok) {
    /*if response is ok  */
    return await response.json(); /* await response will return */
  }
  throw new Error("Something went wrong");
};

export const retrieveProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Something went wrong");
};
