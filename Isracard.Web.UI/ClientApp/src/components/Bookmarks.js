import React, { Component } from 'react';
import axios from "axios";
import {SearchResult} from "./SearchResult";
import {BookmarkApi} from "../data/BookmarkApi";

export class Bookmarks extends Component {
  displayName = Bookmarks.name

  constructor(props) {
      super(props);
      this.state = {items: [], loading: true};

      BookmarkApi.getItems()
          .then(data => {
              this.setState({loading: false});
              this.setState({items: data});
          });
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.dateFormatted}>
              <td>{forecast.dateFormatted}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : <SearchResult items={this.state.items} bookMarkEnabled={false}/>;

    return (
      <div>
        <h1>Bookmarks</h1>
        {contents}
      </div>
    );
  }
}
