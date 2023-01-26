import { cart } from "../stores/cart"

export default function saveToCart(selected, qty, addn) {
    selected.qty = qty

    for (const opt of Object.keys(addn)) {
        selected[opt] = addn[opt]
    }
    cart.update(prev => {
        console.log(prev, selected)
        return [...prev, selected]
    })
}