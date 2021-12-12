import Layout from '../components/Layout';
import { Text, Box, List, ListItem, UnorderedList } from '@chakra-ui/react';

export default function Home() {
	return (
		<Layout>
			<Box paddingStart="20" paddingTop="10">
				<Text fontSize="25px" fontWeight="bold">
					Rooms
				</Text>
				<UnorderedList>
					<ListItem>Room 1</ListItem>
					<ListItem>Room 2</ListItem>
					<ListItem>Room 3</ListItem>
				</UnorderedList>
			</Box>
		</Layout>
	);
}
