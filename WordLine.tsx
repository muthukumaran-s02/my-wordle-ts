import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

interface AppProps {}
interface AppState {
  letters: string[];
  i: Number;
}

export default class WordLine extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      letters: ['', '', '', '', ''],
      i: 0,
    };
  }

  render() {
    return (
      <div>
        for(i in this.state.letters)
        {
          <div key={this.state.i.toString()}>
            <input
              type="text"
              className="word-box"
              value={this.state.letters[this.state]}
            />
          </div>
        }
      </div>
    );
  }
}
