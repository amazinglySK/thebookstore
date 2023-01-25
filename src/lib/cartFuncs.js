import { cart } from "../stores/cart"

export default function saveToCart(selected, qty, img) {
    selected.qty = qty
    selected.img = img
    cart.set(prev => [...prev, selected])
}