// Products Reducer

const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        action.product
      ];

    case 'REMOVE_PRODUCT':
     return state.filter(({ pid }) => pid !== action.pid);

     case 'EDIT_PRODUCT':
    console.log('reducre');
     return state.map((product) => {
       if (product.pid === action.pid) {
         return {
           ...product,
           count:action.count,
          total:action.total
         };
       } else {
         return product;
       };
     });

      case 'SET_PRODUCTS':
    return action.products;
    
    default:
      return state;
  }
};
