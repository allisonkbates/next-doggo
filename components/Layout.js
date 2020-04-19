import Header from './Header';
import Intro from './Intro';
import CardLayout from './CardLayout';

const Layout = props => (
	<div>
		<Header/>
		<Intro />
		<CardLayout />
		{props.children}
	<style jsx global>{`
		body {
			margin: 0;
			padding: 0;
		}
	`}
	</style>
	</div>
);

export default Layout;