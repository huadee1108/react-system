import React, { Component } from 'react'
import { Icon } from 'antd';

export default class TopHeader extends Component {

  render() {
    return (
          <Icon
            className="trigger"
            type={this.props.statusValue ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggle}
          />
    )
  }
}
