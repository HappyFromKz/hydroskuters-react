const defaultState = {
  cartItems: []
}

const CREATE_PRODUCT = "CREATE_PRODUCT"
const DELETE_PRODUCT = "DELETE_PRODUCT"
const UPDATE_PRODUCT = "UPDATE_PRODUCT"

export const cartReducer = (state = defaultState, action) =>
{
  switch (action.type) {
    case CREATE_PRODUCT:
      return {...state, cartItems: [...state.cartItems, action.payload]}

    case DELETE_PRODUCT:
      return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)}

    case UPDATE_PRODUCT:
      const { productId, updatedProduct } = action.payload;
      const updatedProducts = state.cartItems.map((product) => {
        if (product.id === productId) {
          return { ...product, ...updatedProduct };
        }
        return product;
      });
      return { ...state, cartItems: updatedProducts };

    default:
      return state
  }
}

export const createProduct = (payload) => ({type: CREATE_PRODUCT, payload})
export const deleteProduct = (payload) => ({type: DELETE_PRODUCT, payload})
export const updateProduct = (payload) => ({type: UPDATE_PRODUCT, payload})