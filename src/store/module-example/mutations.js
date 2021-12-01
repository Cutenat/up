export function ADD_PRODUCT (state, selectedProduct) {
  state.productsInBasket.push(selectedProduct)
}
export function DELETE_FROM_CART(state,deltProducts){
  state.productsInBasket.push(deltProducts)
}
