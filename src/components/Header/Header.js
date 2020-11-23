import React from "react"
import {Link} from "react-router-dom";

const Header = props => {

	const [menuList] = React.useState([
		{
			title: 'Главная',
			link: '/'
		},
		{
			title: 'Контакты',
			link: '/contacts'
		}
	])

	return (
		<header>
			<nav>
				<ul className="nav">
					{
						menuList.map((item => {
							return (
								<li className="nav-item">
									<Link to={item.link} className="nav-link">{item.title}</Link>
								</li>
							)
						}))
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header