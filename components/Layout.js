import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';
import Header from './Header';

const theme = {
	primaryColor: '#4ABDAC',
	hoverColor: '#2F8377',
	light: '#ffffff',
	primaryFont: "'Open Sans Condensed', sans-serif",
	cursiveFont: "'Shadows Into Light', cursive;"
};

const StyledLayout = styled.div`
	background: white;
	color: ${props => props.theme.primaryColor};
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