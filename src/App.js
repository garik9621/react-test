import React from "react";
import {Route, Switch} from 'react-router-dom'
import './App.css';
import DefaultLayout from "./hoc/Layouts/DefaultLayout/DefaultLayout"
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import List from "./components/List/List";
import ListItemDetail from "./components/List/ListItem/ListItemDetail/ListItemDetail";

function App() {
  return (
    <div className="App">
		<DefaultLayout>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/list" component={List}/>
				<Route path="/list/:code" component={ListItemDetail} />
				<Route path="/contacts" component={Contacts}/>
				<Route component={() => <h1>Страница не найдена</h1>}/>
			</Switch>
		</DefaultLayout>
    </div>
  );
}

export default App;
