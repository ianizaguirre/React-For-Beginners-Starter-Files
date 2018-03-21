import React, { Component } from 'react';

class AddFishForm extends Component {
	createFish = event => {
		event.preventDefault();
		console.log('CREATE FISH FUNCTION');
	};

	render() {
		return (
			<form className="fish-edit" onSubmit={this.createFish}>
				<input name="name" type="text" placeholder="Name" />
				<input name="price" type="text" placeholder="Price" />

				<select name="status">
					<option value="available">Fresh!</option>
					<option value="unavailable">Sold Out!</option>
				</select>

				<textarea name="desc" placeholder="Desc" />
				<input name="image" type="text" placeholder="Image" />
				<button type="submit">+ Add Fish </button>
			</form>
		);
	}
}

export default AddFishForm;
