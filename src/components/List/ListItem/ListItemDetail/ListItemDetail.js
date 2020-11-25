import React from 'react'
import {connect} from "react-redux";

const ListItemDetail = props => {

	React.useEffect(() => {
		props.increaseView(props.match.params.code)
	})
	//
	// const [list] = React.useState(props.list)

	const current = props.list.filter(item => item.code === props.match.params.code)[0]

	return(
		<div>
			<h1>{current.title}</h1>
			<p>Просмотров <strong>{current.views}</strong></p>
			<img src={current.img} alt=""/>
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

export default connect(mapPropsToState, mapDispatchToProps)(ListItemDetail)