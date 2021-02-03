import About from './components/About';
import Character from './components/Character';
import Episodes from './components/Episodes';
import Footer from './components/Footer';
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';

const App = () => {
	return (
		<div className="app">
			<SplashScreen />
			<Header />
			<About />
			<Character />
			<Episodes />
			<Footer />
		</div>
	);
};

export default App;
