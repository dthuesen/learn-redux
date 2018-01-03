import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    const bookListH1Style = {color: 'red', fontSize: '1.3em'}
    const bookDetailH1Style = {color: 'darkred', fontSize: '1.3em'}
    return (
      <div>
        <BookList title={"BookList Component"} style={bookListH1Style}/>
        <BookDetail title={"Details for:"}style={bookDetailH1Style}/>
      </div>
    );
  }
}
