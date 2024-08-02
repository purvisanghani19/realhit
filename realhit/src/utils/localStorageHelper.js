export const getProductData = () => {
  const data = localStorage.getItem("cartdata");
  return data ? JSON.parse(data) : [];
};

export const setProductData = (data) => {
  localStorage.setItem("cartdata", JSON.stringify(data));
};
