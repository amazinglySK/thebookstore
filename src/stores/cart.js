import { browser } from "$app/environment"
import { writable } from "svelte/store"

let storedCart = []
if (browser) storedCart = JSON.parse(localStorage.getItem("cart"))
export const cart = writable(storedCart)

cart.subscribe(val => {
    if (browser) localStorage.setItem("cart", JSON.stringify(val))
})
