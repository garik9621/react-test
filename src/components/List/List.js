import React from "react"
import './List.scss'
import ListItem from "./ListItem/ListItem";
import {connect} from "react-redux";

class List extends React.Component {

	render() {
		return (
			<div>
				{this.props.list.map((item, key) => {
					return (
						<ListItem
							key={key}
							item={item}
						/>
					)
				})}

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		list: state.list
	}
}

export default connect(mapStateToProps)(List)