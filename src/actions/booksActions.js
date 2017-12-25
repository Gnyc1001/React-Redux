"use strict"
//Post a book
export function getBooks(){
    return {
        type:"GET_BOOK",
        //no payload request data
    }
}

//delete a book
export function deleteBooks(id){
    return {
        type:"DELETE_BOOK",
        payload: id
    }
}

//Update a book
export function updateBooks(book){
    return {
        type:"UPDATE_BOOK",
        payload: book
    }
}