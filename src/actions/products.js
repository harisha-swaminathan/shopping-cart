import database from '../firebase/firebase';

// ADD_PRODUCT
export const addProduct = ({pid,id,title,img,price,author,description,inCart,count,total}) => ({
  type: 'ADD_PRODUCT',
  product:{
    pid,
    id,
    title,
    img,
    price,
    author, 
    description,
    inCart,
    count,
    total
  }
});

export const startAddProduct= ({id,title,img,price,author,description,inCart,count,total}) => {
  return (dispatch,getState) => {
    const uid=getState().auth.uid;
    const product = {id,title,img,price,author,description,inCart:true,count:1,total };

    return database.ref(`users/${uid}/products`).push(product).then((ref) => {
      dispatch(addProduct({
        pid:ref.key,
        ...product
      }));
    });
  };
};

//SET_PRODUCT

export const setProducts=(products)=>({
  type:'SET_PRODUCTS',
  products
});


export const setStartProducts=()=>{
  const products=[];
  return (dispatch,getState) => {
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/products`).once('value').then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        products.push({
          pid:childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }).then(()=>{
      dispatch(setProducts(products));
    });
  }; 
}

//REMOVE_PRODUCT

export const removeProduct = ({ pid } = {}) => ({
  type: 'REMOVE_PRODUCT',
  pid
});

export const startRemoveProduct=({ pid } = {})=>{
  return (dispatch,getState) => {
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/products/${pid}`).remove().then(() => {
      dispatch(removeProduct({pid}));
    })
  }; 
}

//EDIT_PRODUCT

export const editProduct= (pid,count, total) => ({
  type: 'EDIT_PRODUCT',
  pid,
  count,
  total
});
 
export const startEditProduct=(pid,count,total)=>{
  console.log('action');
  return(dispatch,getState)=>{
    const uid=getState().auth.uid;
     return database.ref(`users/${uid}/products/${pid}`).update({
      count,
      total
     }
    ).then(()=>{
      console.log('db updated');
      console.log(`id ${pid}, count ${count}, total ${total}`)
      dispatch(editProduct(pid,count,total));
    });
  }
}

//Remove_all

export const removeAll = () => ({
  type: 'REMOVE_ALL'
  
});

export const startRemoveAll=()=>{
  return (dispatch,getState) => {
    const uid=getState().auth.uid;
    return database.ref(`users/${uid}/products`).remove().then(() => {
      dispatch(removeAll());
    })
  }; 
}

