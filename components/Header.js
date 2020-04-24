import Link from 'next/link';

const Header = () => (
	<div>
		<img src="/dog-icon.png"></img> {/* A JSX comment */}
		<nav>
			<ul>
				<li>
					<Link href="/">
						<a>Find a Pup</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href="/dog">
						<a>Doggos</a>
					</Link>
				</li>
			</ul>
		</nav>
	<style jsx>{`
		div {
			height: 75px;
			margin: 0px;
			padding: 0px 82px; 
			background-color: #4ABDAC;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		nav {
			align-items: center;
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
		}
		li a {
			padding-left: 12px;
			font-family: 'Arial';
			font-weight: 300;
			font-size: 18px;
			text-decoration: none;
			color: #ffffff;
		}
		li:hover {
		}
	`}</style>
	</div>
);

export default Header;
