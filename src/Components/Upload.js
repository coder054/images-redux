import React from 'react';

export default class Upload extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			  <div className="upload-wr">
			    <input type="file" multiple accept="image/*" />
			  </div>

		);
	}
}
