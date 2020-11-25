import React from "react"
import {NavLink} from "react-router-dom";
import './Header.scss'

const Header = props => {

	const [menuList] = React.useState([
		{
			title: 'Главная',
			link: '/',
			exact: true
		},
		{
			title: 'Список',
			link: '/list',
			exact: false
		},
		{
			title: 'Контакты',
			link: '/contacts',
			exact: false
		}
	])

	return (
		<header>
			<nav className="mb-5">
				<ul className="nav">
					{
						menuList.map(((item, key) => {
							return (
								<li
									key={key}
									className="nav-item">
									<NavLink
										to={item.link}
										activeClassName='active'
										className="nav-link"
										exact={item.exact}
									>{item.title}</NavLink>
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