import React from "react"
import Header from "../../../components/Header/Header";

export default class DefaultLayout extends React.Component {

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