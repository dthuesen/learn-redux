import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {

    if (!this.props.book) {
      return (
        <div>
          <h5>
            Select a book to get started!
          </h5>
        </div>
      )
    }

    return  ( 
      <div>
        <h1 style={this.props.style}>
          {this.props.title}
        </h1>
        <h3>{this.props.book.title}</h3>
        <p>Amount of pages: {this.props.book.pages}</p>
      </div>
    )
  }
}

function MapStateToProps(state) {
  console.log('book: ', state.activeBook)
  return {
    book: state.activeBook
  }
}

export default connect(MapStateToProps)(BookDetail);