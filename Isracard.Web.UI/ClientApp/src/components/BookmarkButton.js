import React, { Component } from 'react';
import axios from "axios";
import {SearchResult} from "./SearchResult";
import {BookmarkApi} from "../data/BookmarkApi";

export class Bookmarks extends Component {
  displayName = Bookmarks.name

  constructor(props) {
      super(props);
      this.state = {bookmarked: false};
  }

  handleBookmark(item, e) {
    return BookmarkApi.bookmarkItem(item);
}

  render() {
    if(this.bookmarked)
    {
        return (<Glyphicon glyph='star' />);
    }
    
    return (
      <button onClick={(e) => this.handleBookmark(this.props.item, e)}>
          Bookmark
      </button>
  );
  }
}
