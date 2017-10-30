import {createStore} from 'redux';


//define reducers
const reducer = (state = [], action) => {
    switch(action.type){
        case "POST_BOOK":
        let books = state.concat(action.payload);
        return state = books;
        break;
    }
    return state
}
const store = createStore(reducer);

//create the store
store.subscribe ( () => {
    console.log('current state is ', store.getState());
    //console.log('current price is ', store.getState()[1].price);
})

//create and dispatch actions
store.dispatch({
    type: "POST_BOOK",
    payload: [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 28.99
    },
    {
        id: 2,
        title: 'this is another book title',
        description: 'this is another book description',
        price: 43.99
    }
]
})

store.dispatch({
    type: "POST_BOOK", 
    payload: {
        id: 3,
        title: 'this is the three book title',
        description: 'this is the three book description',
        price: 243.99
    }
})