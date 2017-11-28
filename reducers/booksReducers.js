"use strict"
//book reducers
export function bookReducers(state={books:[]}, action){
    switch(action.type){
        case "POST_BOOK":
        //let books = state.books.concat(action.payload);
        //return {books};
            return {books:[...state.books,...action.payload]}
        break;
        case "DELETE_BOOK":
        //create copy of current array of books
        const currentBookToDelete = [...state.books]
        //determine at index in books array is the boox to be deleted
        const indexToDelete = currentBookToDelete.findIndex(function(book){
            return book.id === action.payload.id;
        })
            return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_BOOK":
        //create copy of curreny array of books
        const currentBookToUpdate = [...state.books]
        //determine at which index books array is the book to delete
        const indexToUpdate = currentBookToUpdate.findIndex(function(book){
            return book.id === action.payload.id;
        })
        //create a new book with new values and same array index of the item to replace.  Use {...} spread operator also can use concat method as well
        const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: aciton.payload.title
        }
        console.log('what is the newBookToUpdate', newBookToUpdate);
        //use slice to remove the book at the specified inx, replace with new object and join with the rest in the array.
            return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
        break;
    }
    return state
}