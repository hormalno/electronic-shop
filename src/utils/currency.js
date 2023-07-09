export const priceView = (price, currency) => {
    if (currency === "USD") {
        if (price > 0) {        
            return "$ " + price.toFixed(2);
        } else {
            return "$ 0.00";
        }
    } else if (currency === "EUR") {
        if (price > 0) {
            return (price* 0.91).toFixed(2) + " €";
        } else {
            return "0.00 €";
        }
    } else {
        if (price > 0) {
            return price.toFixed(2);
        } else {
            return "0.00";
        }
    }
};