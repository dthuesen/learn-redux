// Action Creator function
// This function will be called from the container by an onClick event. 
// This action will be bound to the props in the container component
// by the 'bindActionCreators(...)' function call.
export function selectBook(book) {
  console.log('A book has been selected: ', book.title);
  // selectBook is an Action Creator and it needs to return an action,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}