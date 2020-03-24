import ReactVideo from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <h1>ReactVideo</h1>
        <ReactVideo
          source={[
            {
              type: 'video/mp4',
              src: 'https://www.runoob.com/try/demo_source/movie.mp4'
            }
          ]}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
