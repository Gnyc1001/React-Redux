"use strict"
//REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';

//import combined reducerss
import reducers from '../reducers/index';
//import actions
import {addToCart} from '../actions/booksActions';
import {postBooks, deleteBooks, updateBooks} from '../actions/booksActions';


//create store
const store = createStore(reducers, middleware);
const middleware = applyMiddleware(logger());

// store.subscribe(function(){
//     console.log('current state is: ', store.getState());
    //console.log('current price: ', store.getState()[1].price);
//})
import BooksList from './components/pages/bookslist';
//create and dispatch actions
render(
    <Provider store={store}>
    <BooksList />
    </Provider>, document.getElementById('app')
);
// STEP 2 create and dispatch actions
store.dispatch(postBooks(
    [{
      id: 1,
      title:'this is the book title',
      description: 'this is the book description',
      price: 33.33
    },
    {
      id: 2,
      title:'this is the second book title',
      description: 'this is the second book description',
      price: 50 
    }]
))
// DELETE a book
store.dispatch(deleteBooks(
        {id: 1}
    ))
// UPDATE a book
store.dispatch(updateBooks(
    {
      id: 2,
      title:'Learn React in 24h'
    }
  ))
//-->> CART ACTIONS <<--
// ADD to cart
store.dispatch(addToCart([{id: 1}]))