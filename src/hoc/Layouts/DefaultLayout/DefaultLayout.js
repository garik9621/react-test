import React from "react"
import Header from "../../../components/Header/Header";

export default class DefaultLayout extends React.Component {

	/*constructor(props) {
		super(props);
	}*/

	render() {
		return (
			<div className="default-layout">
				<div className="container">
					<Header />
					{ this.props.children }
				</div>
			</div>
		)
	}
}