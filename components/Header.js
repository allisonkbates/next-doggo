import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.div`
	height: 75px;
	margin: 0px;
	padding: 0px 82px; 
	background-color: ${props => props.theme.primaryColor};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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
		font-family: ${props => props.theme.primaryFont};
		font-weight: 300;
		font-size: 18px;
		text-decoration: none;
		color: #ffffff;
	}
`;

const Header = () => (
	<StyledHeader>
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
			</ul>
		</nav>
	</StyledHeader>
);

export default Header;