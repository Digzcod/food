const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "PHP",
  style: "currency",
});

export default function FormattedPriceCurrency(curr) {
  return CURRENCY_FORMATTER.format(curr);
}
