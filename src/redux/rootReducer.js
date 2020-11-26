const initialState = {
	list: [
		{
			title: 'Евразия',
			code: 'evraziya',
			img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Eurasia_%28orthographic_projection%29.svg',
			views: 0
		},
		{
			title: 'Африка',
			code: 'africa',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/550px-Africa_%28orthographic_projection%29.svg.png',
			views: 0
		},
		{
			title: 'Австаралия',
			code: 'australia',
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Australia_%28orthographic_projection%29.svg/541px-Australia_%28orthographic_projection%29.svg.png',
			views: 0
		}
	]
}

export default function reactReducer(state = initialState, action) {



	switch (action.type) {
		case 'ONE_MORE_VIEW':

			const updateState = {
				...state,
				list: state.list.map(item => {

					const newItem = {
						...item
					}

					if(item.code === action.code) {
						newItem.views++
					}

					return newItem
				})
			}

			return updateState

		default: break;
	}

	return state
}