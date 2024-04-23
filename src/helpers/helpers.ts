export function formatPrice(price: string) {
    let result = price[0] + price[1]
    const priceValues = price.slice(2)
    for (let i = 0; i < priceValues.length; i++) {
        if (i % 3 === 0) {
            result += ' ' + priceValues[i]
        } else {
            result += priceValues[i]
        }
    }
    return result
}
