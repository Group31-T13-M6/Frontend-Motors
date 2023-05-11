export const formatBRL = (value: number) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(value);
};

export const desformatBRL = (value: string) => {
  let numberNoSymbol = value.replace(/[R$\s]/g, "");
  numberNoSymbol = numberNoSymbol.replace(/\./g, "").replace(",", ".");
  return parseInt(numberNoSymbol);
};

export const isImageUrl = (url: string) => {
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
  return imageExtensions.test(url) ? url : false;
};

export const formatInitialName = (value: string) => {
  return value
    .split(" ")
    .map((str) => str[0])
    .join("");
};
