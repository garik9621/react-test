import React from "react"
import './ListItem.scss'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const ListItem = props => {

	return (
		<div>
			<Link to={`/list/${props.item.code}`}>{props.item.title} просмотров {props.item.views}</Link>
		</div>
	)
}

function mapPropsToState(state) {
	return {
		list: state.list
	}
}

function mapDispatchToProps(dispatch) {
	return {
		increaseView: (code) => dispatch({type: 'ONE_MORE_VIEW', code})
	}
}

export default connect(mapPropsToState, mapDispatchToProps)(ListItem)