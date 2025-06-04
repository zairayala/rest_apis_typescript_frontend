export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN'
    }).format(amount)
}

export function toBoolean(str: string) {
    return str.toLowerCase() === "true"
}