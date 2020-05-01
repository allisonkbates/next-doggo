import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Intro from './Intro';
import CardLayout from './CardLayout';

const theme = {
	primary: '#4ABDAC'
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
					<Intro />
					<CardLayout>{this.props.children}</CardLayout>
				</StyledLayout>
			</ThemeProvider>
		)
	}
}


export default Layout;