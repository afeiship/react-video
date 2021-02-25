import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactVideo from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-video">
        <h1>ReactVideo</h1>
        <ReactVideo
          source={[
            {
              type: 'video/mp4',
              src: 'https://www.runoob.com/try/demo_source/movie.mp4'
            }
          ]}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
