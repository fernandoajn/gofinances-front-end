export const formatValue = (value: number | string): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    Number(value),
  );

export const formatDate = (date: Date): any => {
  const parsedDate = new Date(date);

  const formatted = `${parsedDate.getDate()}/${
    parsedDate.getMonth() + 1
  }/${parsedDate.getFullYear()}`;

  return formatted;
};
