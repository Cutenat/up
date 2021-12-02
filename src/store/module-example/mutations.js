export function ADD_PRODUCT (state, selectedProduct) {
  let found = state.productsInBasket.find(product => product.id === selectedProduct.id);
  if (found) {
    found.quantity ++;
    found.totalPrice = found.quantity * found.price;
  } else {
    state.productsInBasket.push(selectedProduct);
    selectedProduct.totalPrice = selectedProduct.price

  }
  state.cartCount++;
  console.log(state.cartCount)
}


export function PRODUCT_MUTATION(state, products){
  console.log(state.products)
  return(
    state.products=products
  )
}


