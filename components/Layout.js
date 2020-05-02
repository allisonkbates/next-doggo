import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Intro from './Intro';
import CardLayout from './CardLayout';

const theme = {
	primary: '#4ABDAC',
	hoverColor: '#2F8377',
	white: '#ffffff'
};

const StyledLayout = styled.div`
	background: white;
	color: ${props => props.theme.primary};
`;

class Layout extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<StyledLayout>
					<Meta />
					<Header />
					{this.props.children}
				</StyledLayout>
			</ThemeProvider>
		)
	}
}


export default Layout;