import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CLASS_NAME = 'react-video';

export default class ReactVideo extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If show controls.
     */
    controls: PropTypes.bool,
    /**
     * Video source list.
     */
    source: PropTypes.array
  };

  static defaultProps = {
    source: [],
    controls: true
  };

  render() {
    const { className, source, ...props } = this.props;
    return (
      <video
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {source.map((item) => {
          return <source key={item.src} {...item} />;
        })}
        Your browser not support HTML5 video Tag.
      </video>
    );
  }
}
