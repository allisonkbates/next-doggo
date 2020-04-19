const Intro = () => (
<section className="intro">
	<div className="intro-left">
		<div className="intro-logo">
			<h1>Adopt a <br></br>Doggo</h1>
			<img className="intro-paws" src="/paws-icon.png"></img>
		</div>
		<p className="intro-text">Say something nice about dogs here and how they are the best in the world.</p>
   		<button>Find Your Pup</button>
	</div>
	<div className="intro-right">
		<div className="intro-img">
			<div className="intro-badge">
				<p>Dog of the Day</p>
			</div>
		</div>
	</div>


{/* 
*/}
<style jsx>{`
	.intro {
		padding: 0px 82px;
		display: grid;
		grid-template-columns: 5fr 7fr;
		--primary-color: #4ABDAC;
		--primary-hover: #2F8377;
		--light-color: #ffffff;
		--primary-font: 'Open Sans Condensed', sans-serif;
		--styled-font: 'Shadows Into Light', cursive;	
	}
	h1 {
		font-family: var(--styled-font);
		font-size: 60px;
		color: var(--primary-color);
		line-height: 60px;
	}
	.intro-left {
		grid-column: 1 / 2;
	}
	.intro-text {
		font-family: var(--primary-font);
		font-weight: normal;
		color: var(--primary-color);
		font-size: 18px;
		margin: 0px 75px 30px 0px;
	}
	.intro-logo {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.intro-paws {
		margin: 0px 25px;
		height: 78px;
	}
	button {
		background-color: var(--primary-color);
		color: var(--light-color);
		font-family: var(--styled-font);
		border: none;
		font-size: 18px;
		padding: 0px 25px;
		height: 40px;
	}
	button:hover {
		background-color: var(--primary-hover);
		color: var(--light-color);
	}
	.intro-right {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.intro-img {
		background: url("/cover-dog.png") no-repeat;
		height: 289px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
		margin: 69px;
	}
	.intro-badge {
		background-color: var(--primary-color);
		color: var(--light-color);
		font-family: var(--styled-font);
		font-size: 18px;
		padding: 0px 25px;
		height: 40px;
		width: 190px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0px 194px 20px 0px;
	}


`}</style>
</section>

);

export default Intro;