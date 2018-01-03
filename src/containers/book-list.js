import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';

/**
 * This class is a container component. It gets the state of the application.
 */
class BookList extends Component {

  renderList() {
    return this.props.books.map( (book) => {
      return (
        <li 
        key={book.title} 
        onClick={ () => this.props.selectBook(book) }
        className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    const title = this.props.title;
    return (
      <div>
        <h1 style={this.props.style}>{title}</h1>
        <ul className="list-group col-sm-4">
          { this.renderList() }
        </ul>
      </div>
      );
    }
  }

  /**
   * This function is the glue between React and Redux.
   * This function maps the application state to the props of this (container) component.
   */
  function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BooksList
    return {
      books: state.books // <-- The Books Reducer is returning the books property (an Array of objects)
    }
  }

  // Anything returned from this function will end up as props
  // on the booksList container.
  function mapDispatchToProps(dispatch) {
    // Whenever 'selectBook' (the action creator function) is called, the result should be passed to all of our reducers (dispatched).
    // The result of the action creator will flow throught the 'dispatch' function (second argument of the returned 
    // 'bindActionCreators(...)' function call), which then spits it out to all the reducers in the app.
    return bindActionCreators({ selectBook: selectBook }, dispatch ); //<-- first argument (selectBook) is the imported object of the action creator
  }

  // Promote 'BookList' from a normal component to a container component - it needs to know
  // about the new dispatch method, 'selectBook'. Makes it available as a prop.
  export default connect(mapStateToProps, mapDispatchToProps)(BookList);
  