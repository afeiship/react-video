# react-video
> React video wrapper.

## installation
```shell
npm install -S @feizheng/react-video
```

## update
```shell
npm update @feizheng/react-video
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| controls  | bool   | true    | If show controls.                     |
| source    | array  | []      | Video source list.                    |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-video/dist/style.scss";

  // customize your styles:
  $react-video-options: ()
  ```
2. import js
  ```js
  import ReactVideo from '@feizheng/react-video';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
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

  ```

## documentation
- https://afeiship.github.io/react-video/
