
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(amount)
}

export function toBoolean(value: string) {
  return value.toLowerCase() === 'true'
}
