import { cart } from "../routes/stores"

export default function saveToCart(selected, qty, img) {
    selected.qty = qty
    selected.img = img
    cart.update(prev => [...prev, selected])
}