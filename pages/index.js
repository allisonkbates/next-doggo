import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const key = process.env.API_KEY;
const secret = process.env.SECRET;
// dog filters
const type = 'dog';
const status = 'adoptable';
// token vars
var token, tokenType, expires;
//renders
const Index = props => (
	<Layout>
		<div className="cards">
			{props.doggos.map(doggo => (			
			<div className="card" key={doggo.id}>	
		      	<img src={doggo['photos'][0] && doggo['photos'][0]['medium'] ? doggo['photos'][0]['medium'] : '/cheyenne_hero.jpg'} className="dog-img-card"></img>	
		      	<h2 className="badge">{doggo.name}</h2>	
		      	<div className="dog-info">	
		        	<p className="italic-text">{doggo.breeds.primary}</p>	
		        	<p className="body-text">{doggo.description}</p>	
		      	</div>	
		      	<div className="dog-data">	
		          	<div className="data-section">	
		            	<p className="italic-text label">{doggo.size}</p>	
		            	<img src={`${doggo.size}.png`} className="paws"></img>	
		          	</div>	
		          	<div className="data-section">	
		            	<p className="italic-text label">Age</p>	
		            	<p className="results-text">{doggo.age}</p>	
		          	</div>          	
		          	<div>	
		            	<p className="italic-text label">Gender</p>	
		            	<p className="results-text">{doggo.gender === 'Male' ? 'Good Boy' : 'Good Girl' }</p>	
		            	<img src={`${doggo.gender}.png`} className="gender"></img>	
		          	</div>	
		       	</div>	
	       	</div>	
	       	))}
       	</div>
       	<style jsx global>{`
		.cards {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
			padding: 0px 82px 0px 68px;
			--primary-color: #4ABDAC;
			--primary-hover: #2F8377;
			--light-color: #ffffff;
			--light-hover: #E1E8F0;
			--dark-color: #313D4B;
			--primary-font: 'Open Sans Condensed', sans-serif;
			--styled-font: 'Shadows Into Light', cursive;	
		}
		.card {
			width: 250px;
			height: 400px;
			margin: 20px 28px 40px 0px;
			background-color: var(--light-color);
			box-shadow: -10px 0px var(--primary-color), 0px -10px var(--primary-color), -10px -10px var(--primary-color);
			border: 1px solid var(--dark-color);
			border-bottom: 1px solid var(--primary-color);	
			border-right: 1px solid var(--primary-color);
			border-top: 1px solid var(--light-color);
			border-left: 1px solid var(--light-color);
		}
		.dog-img-card {
			margin-bottom: -20px;
			height: 200px;
			width: 250px;
			object-fit: cover;
		}
		.badge {
			background-color: var(--primary-color);
			color: var(--light-color);
			font-family: var(--styled-font);
			font-size: 18px;
			padding: 0px 30px;
			margin: 0px 0px 0px -5px;
			display: inline-flex;
		}
		.dog-info {
			padding: 0px 10px 0px 10px;
		}
		.dog-data {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			padding: 0px;
			margin: 20px 0px 0px 0px;
		}
		.data-section {
			border-right: 1px solid #d5d5d5;
			padding-right: 15px;
		}
		.italic-text {
			font-family: var(--primary-font);
			font-size: 14px;
			font-weight: 300;
			font-style: italic;
			color: var(--dark-color);
		}
		.label {
			margin-top: 0px;
		}
		.body-text {
			font-family: var(--primary-font);
			font-weight: 300;
			font-size: 14px;
			color: var(--dark-color);;
		}
		.results-text {
			font-family: var(--primary-font);
			color: var(--primary-color);
			font-size: 14px;
			display: inline;
		}
		.gender {
			display: inline;
		}
		`}</style>
  	</Layout>
);
var getOAuth = function() {
  return fetch('https://api.petfinder.com/v2/oauth2/token', {
  method: 'POST',
  body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
  headers: {
	'Content-Type': 'application/x-www-form-urlencoded'
	}
  }).then(function(response) {
	return response.json();
  }).then(function(data) {
	console.log('token', data);
	token = data.access_token;
	tokenType = data.token_type;
	expires = new Date().getTime() + (data.expires_in * 1000);
  }).catch(function(err) {
	console.log('something went wrong...', err);
  });
};  

Index.getInitialProps = async function() {
	const getAuth = await getOAuth();
	const getDoggos = await fetch('https://api.petfinder.com/v2/animals?' + 'type=' + type + '&status=' + status, {
		headers: {
	  	'Authorization': tokenType + ' ' + token,
	  	'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	const data = await getDoggos.json();
	const doggos = data.animals;

  return {
    doggos: doggos
  };
};

export default Index;