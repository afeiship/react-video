# react-video
> React video wrapper.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-video
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| controls  | bool   | false    | true    | If show controls.                     |
| source    | array  | false    | []      | Video source list.                    |


## usage
1. import css
  ```scss
  @import "~@jswork/react-video/dist/style.css";

  // or use sass
  @import "~@jswork/react-video/dist/style.scss";

  // customize your styles:
  $react-video-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactVideo from '@jswork/react-video';
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

  ```

## documentation
- https://afeiship.github.io/react-video/


## license
Code released under [the MIT license](https://github.com/afeiship/react-video/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-video
[version-url]: https://npmjs.org/package/@jswork/react-video

[license-image]: https://img.shields.io/npm/l/@jswork/react-video
[license-url]: https://github.com/afeiship/react-video/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-video
[size-url]: https://github.com/afeiship/react-video/blob/master/dist/react-video.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-video
[download-url]: https://www.npmjs.com/package/@jswork/react-video
