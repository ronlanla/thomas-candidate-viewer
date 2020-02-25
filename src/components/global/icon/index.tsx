import classnames from 'classnames';
import React, { Component } from 'react';

import './icon.css';

interface IconProps {
  name: string;
  class?: string;
}

class Icon extends Component<IconProps> {
  render () {
    return (
      <div className={classnames('Icon', `icon-${this.props.name}`, this.props.class)}/>
    );
  }
}

export default Icon;