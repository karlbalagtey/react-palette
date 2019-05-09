import React, { Component } from 'react';
import ColourBox from './ColourBox';
import './Palette.css';

class Palette extends Component {
	render() {
		const colourBoxes = this.props.colors.map(colour => (
			<ColourBox background={colour} />
		));

		return (
			<div className="Palette">
				{/* Navbar here */}
				
				<div className="Palette-colours">
					{colourBoxes}
				</div>

				{/* Footer here */}
			</div>
		);
	}
}

export default Palette;