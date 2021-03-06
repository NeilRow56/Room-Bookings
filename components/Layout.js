import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { Text, Box, Flex } from '@chakra-ui/react';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Navbar />
			<Flex
				backgroundColor="blue.50"
				padding="10px"
				minHeight="87vh"
				marginLeft="5px"
				marginRight="5px"
			>
				{children}
			</Flex>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Bookings.Com',
	description: 'notes and todos',
	keywords: 'notes, todos',
};
