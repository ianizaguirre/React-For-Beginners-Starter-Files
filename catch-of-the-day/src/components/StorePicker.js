import React, { Component, Fragment } from 'react';

class StorePicker extends Component {
	render() {
		return (
			<Fragment>
				<form className="store-selector">
					<h2> Please Enter A Store </h2>

					<input
						required
						type="text"
						placeholder="Store Name"
					/>

					<button type="submit"> Visit Store → </button>
				</form>
			</Fragment>
		);
	}
}

export default StorePicker;