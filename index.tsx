import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import WordLine from './WordLine';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<WordLine />, document.getElementById('root'));
