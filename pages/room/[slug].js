import { useRouter } from 'next/router';
import data from '../../utils/data';
import {
	Text,
	AspectRatio,
	Button,
	Center,
	Spacer,
	Flex,
	Image,
	Container,
	Box,
	Badge,
	LinkBox,
	LinkOverlay,
	UnorderedList,
	ListItem,
	Grid,
	GridItem,
} from '@chakra-ui/react';

function RoomScreen() {
	const router = useRouter();
	const { slug } = router.query;
	const room = data.rooms.find((a) => a.slug === slug);
	if (!room) {
		return <div>Room Not Found</div>;
	}

	return (
		<Text fontSize="3xl" ml={10}>
			{room.name}
		</Text>
	);
}

export default RoomScreen;
