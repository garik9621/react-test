import React from "react"
import './DanceList.scss'
import DanceItem from "./DanceItem/DanceItem";

export default class DanceList extends React.Component {

	constructor() {
		super();
		this.state = {
			list: [
				{a: ''}
			]

		}
	}

	componentDidMount() {

	}

	render() {
		return (
			<div>
				<DanceItem />
			</div>
		)
	}
}