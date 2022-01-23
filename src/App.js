import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home.jsx';
import Login from './views/Login/Login.jsx';
import SignUp from './views/Login/SignUp.jsx';
import PrivatePage from './views/PrivatePage/PrivatePage.jsx';
import Header from './components/Header/Header.jsx';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
	return (
		<ChakraProvider>
			<Switch>
				<Route exact path='/'>
					<Login />
				</Route>
				<Route exact path='/signup'>
					<SignUp />
				</Route>
				<Route exact path='/home'>
					<Home />
				</Route>
				<Route exact path='/privatepage'>
					<PrivatePage />
				</Route>
			</Switch>
		</ChakraProvider>
	);
}
