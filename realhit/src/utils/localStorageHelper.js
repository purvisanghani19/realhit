export const getProductData = () => {
  const data = localStorage.getItem("cartdata");
  return data ? JSON.parse(data) : [];
};

export const setProductData = (data) => {
  localStorage.setItem("cartdata", JSON.stringify(data));
};

export const getUserdetails = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : {};
};

export const setUserdetails = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};
