import React from "react";
import {Route, Switch} from 'react-router-dom'
import './App.css';
import DefaultLayout from "./hoc/Layouts/DefaultLayout/DefaultLayout"
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import DanceList from "./components/DanceList/DanceList";

function App() {
  return (
    <div className="App">
		<DefaultLayout>
			<Switch>
				<Route exact path="/" component={Main}/>
				<Route exact path="/dances" component={DanceList}/>
				<Route exact path="/contacts" component={Contacts}/>
				<Route component={() => <h1>Страница не найдена</h1>}/>
			</Switch>
		</DefaultLayout>
    </div>
  );
}

export default App;
