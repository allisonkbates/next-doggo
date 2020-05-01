import App from 'next/app';
import Layout from '../components/Layout';

class myApp extends App {
	render() {
		const { Component } = this.props;

		return (
      <Layout>
        <Component />
      </Layout>
		);
	}
}

export default myApp;