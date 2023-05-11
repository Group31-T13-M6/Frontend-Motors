export const formatBRL = (value: number) => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const formatInitialName = (value: string) => {
  return value
    .split(" ")
    .map((str) => str[0])
    .join("");
};


