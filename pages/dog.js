import Header from '../components/Header';
import useSWR from 'swr';

function Dog() {
	return (
		<div>
			<Header />
			<h1>This is going to be a dog page!</h1>
		<style jsx global>{`
			body {
			margin: 0;
			padding: 0;
			}
		`}</style>
		</div>
	)	
}

export default Dog;