"use strict"
import {createStore} from 'redux';
import reducers from '../reducers/index';
import {postBooks, deleteBooks, updateBooks} from '../actions/booksActions';
import {addToCart} from '../actions/booksActions';

//create store
const store = createStore(reducers);

store.subscribe(function(){
    console.log('current state is: ', store.getState());
    //console.log('current price: ', store.getState()[1].price);
})
//create and dispatch actions
store.dispatch(postBooks({
    type:"POST_BOOK",
    payload: [{
        id: 1,
        title:'this is the book title',
        description:'this is the book descript',
        price: 35.99
      },
      {
        id: 2,
        title:'this is the second book title',
        description: 'this is the second book descript',
        price: 50
      }]
    })
)

    //delete a book
    store.dispatch(deleteBooks({
        type:"DELETE_BOOK",
        payload: {id: 1}
    })
)

    // UPDATE a book
    store.dispatch(updateBooks({
        type:"UPDATE_BOOK",
        payload:{id: 2,
        title:'Learn React in 24h'}
    })
)

  // {cart actions}
  // add to cart
    store.dispatch(addToCart([{id: 1}]))
    store.dispatch({
        type:"ADD_TO_CART",
        payload: {id: 2}
    })