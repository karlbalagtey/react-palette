import React, { Component } from 'react';
import './ColourBox.css';

class ColourBox extends Component {
	render() {
		return (
			<div style={{ background: this.props.background.color }} className="ColourBox">
				<span>{this.props.background.name}</span>
				<span>MORE</span>
			</div>
		);
	}
}

export default ColourBox;