export const cpfMask = (v: string) => {
  v = v.replace(/\D/g, "");

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
  }
  return v;
};

export const phoneMask = (v: string) => {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d)/, "($1) $2");
  v = v.replace(/(\d)(\d{4})$/, "$1-$2");

  return v;
};
export const dateMask = (v: string) => {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d)/, "$1/$2");
  v = v.replace(/(\d)(\d{4})$/, "$1/$2");

  return v;
};

export const cepMask = (v: string) => {
  v = v.replace(/\D/g, "");

  v = v.replace(/(\d{2})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1-$2");

  return v;
};
