import About from './components/About';
import Character from './components/Character';
import Episodes from './components/Episodes';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
	return (
		<div className="app">
			<Header />
			<About />
			<Character />
			<Episodes />
		</div>
	);
};

export default App;
