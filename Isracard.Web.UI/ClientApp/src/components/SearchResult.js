import React, { Component } from 'react';
import axios from 'axios';
import {Glyphicon, NavItem} from "react-bootstrap";
import {BookmarkApi} from "../data/BookmarkApi";

export class SearchResult extends Component {
    displayName = SearchResult.name

    constructor(props) {
        super(props);
    }

    handleBookmark(item) {
        return BookmarkApi.bookmarkItem(item);
    }

    renderResult(items) {
        return (
            <div>
                <h2>Total: {items.length}</h2>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>
                         &nbsp;
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item =>
                        <tr key={item.id}>
                            <td>
                                <img className="img-thumbnail" src={item.owner.avatar_url}/>
                            </td>
                            <td>{item.full_name}</td>
                                <td>
                                    {this.renderActions(item)}
                                </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }

    renderActions(item) {
        let bookMarkEnabled = this.props.bookMarkEnabled;
        let isBookmarked = item.bookmarked;

        if(isBookmarked)
        {
            return (<Glyphicon glyph='star' />);
        }
        if(!bookMarkEnabled)
        {
            return (<span></span>);
        }

        return (
            <button className="btn btn-info" onClick={(e) => this.handleBookmark(item, e)}>
                Bookmark
            </button>
        );
    }

    render() {
        let props = this.props;
        let contents = props.items && props.items.length <= 0 ?
            <h3>No results</h3> :
            this.renderResult(props.items);

        return (
            <div>
                {contents}
            </div>
        );
    }

}

SearchResult.defaultProps = {
    items: [],
    bookMarkEnabled: true
}

