export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    cartItem.imageUrl += '?random=' + Math.random()
    state.cartItems.push(cartItem)
  },
}
