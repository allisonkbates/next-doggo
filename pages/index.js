import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const key = '';
const secret = '';
// dog filters
const size = 'large';
const type = 'dog';
const status = 'adoptable';
// token vars
var token, tokenType, expires;

//renders
const Index = props => (
	<Layout>
		<h1>Doggos</h1>
		<div className="cards">
			{props.doggos.map(doggo => (
			<div className="card">
	      		<img src="/dog-card.png" className="dog-img-card"></img>
	      		<h2 className="badge" id="badge"></h2>
	      		<div className="dog-info">
	        		<p className="italic-text">{doggo.name}</p>
	        		<p className="body-text">{doggo.description}</p>
	      		</div>
	      		<div className="dog-data">
	          		<div className="data-section">
	            		<p className="italic-text label">Size</p>
	            		<img src="/paw-size-icon.png" className="paws"></img>
	          		</div>
	          		<div className="data-section">
	            		<p className="italic-text label">Age</p>
	            		<p className="results-text">YOUNG</p>
	          		</div>          
	          		<div>
	            		<p className="italic-text label">Gender</p>
	            		<p className="results-text">GOOD BOY</p>
	            		<img src="/male-icon.png" className="gender"></img>
	          		</div>
	       		</div>
	       	</div>
	       	))}
       	</div>
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
	const getDoggos = await fetch('https://api.petfinder.com/v2/animals?size=' + size + '&type=' + type + '&status=' + status, {
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