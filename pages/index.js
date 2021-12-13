import Layout from '../components/Layout';
import { StarIcon, ArrowBackIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
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
	Link,
	LinkBox,
	LinkOverlay,
	UnorderedList,
	ListItem,
	Stack,
	Wrap,
	WrapItem,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import data from '../utils/data';

export default function Home() {
	return (
		<Layout title="Home">
			<Container maxW="100%" overflow="hidden" align="center">
				<Text mb="30px" mt="30px" fontSize={32}>
					Stays in New York
				</Text>
				<Box marginBottom="20px" align="Start">
					<ArrowBackIcon color="secondary" />{' '}
					<NextLink href="/" passHref>
						<Link
							color="secondary"
							style={{ textDecoration: 'none' }}
						>
							Back to search
						</Link>
					</NextLink>
				</Box>
				<Wrap spacing="20px" justify="center">
					{data.rooms.map((room) => (
						<WrapItem key={room.name}>
							<LinkBox
								width="400px"
								boxShadow="sm"
								borderWidth="1px"
								rounded="20px"
								overflow="hidden"
							>
								<Image
									src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
									height="350px"
								/>

								<Box p="6">
									<Center
										display="flex"
										alignItems="baseline"
									>
										<Badge
											borderRadius="full"
											px="2"
											colorScheme="teal"
										>
											New
										</Badge>
										<Center
											color="gray.500"
											fontWeight="semibold"
											letterSpacing="wide"
											fontSize="xs"
											textTransform="uppercase"
											ml="2"
										>
											<NextLink href="#" passHref>
												<LinkOverlay>
													<Center>{room.name}</Center>
												</LinkOverlay>
											</NextLink>
										</Center>
									</Center>

									<Center
										marginTop="5px"
										as="span"
										color="gray.600"
										fontSize="sm"
										display="flex"
									>
										<Center>
											<Text>
												Price per night: £{' '}
												{room.pricePerNight}
											</Text>
										</Center>
									</Center>
									<Center>
										<Button
											size="sm"
											mt={1}
											variant="secondaryOutline"
										>
											View Details
										</Button>
									</Center>
									<Box
										display="flex"
										mt="2"
										alignItems="center"
									>
										<StarIcon />

										<Box
											as="span"
											ml="2"
											color="gray.600"
											fontSize="sm"
										>
											12 reviews
										</Box>
									</Box>
								</Box>
							</LinkBox>
						</WrapItem>
					))}
					{/* <WrapItem>
						<LinkBox
							width="350px"
							boxShadow="sm"
							borderWidth="1px"
							rounded="20px"
							overflow="hidden"
						>
							<Image
								src="https://a0.muscache.com/im/pictures/2121b1e3-1d2b-4824-9268-eba1e593bc28.jpg?im_w=720"
								height="350px"
							/>

							<Box p="6">
								<Center display="flex" alignItems="baseline">
									<Badge
										borderRadius="full"
										px="2"
										colorScheme="teal"
									>
										New
									</Badge>
									<Center
										color="gray.500"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="xs"
										textTransform="uppercase"
										ml="2"
									>
										<NextLink href="#" passHref>
											<LinkOverlay>
												<Center>
													Charming Studio less than 10
													Miles to Wells' Beaches!
												</Center>
											</LinkOverlay>
										</NextLink>
									</Center>
								</Center>

								<Center
									marginTop="5px"
									as="span"
									color="gray.600"
									fontSize="sm"
									display="flex"
								>
									<Center>
										<Text>Price: £ 168 per night</Text>
									</Center>
								</Center>
								<Center>
									<Button
										size="sm"
										mt={1}
										variant="secondaryOutline"
									>
										View Details
									</Button>
								</Center>
								<Box display="flex" mt="2" alignItems="center">
									<StarIcon />

									<Box
										as="span"
										ml="2"
										color="gray.600"
										fontSize="sm"
									>
										12 reviews
									</Box>
								</Box>
							</Box>
						</LinkBox>
					</WrapItem>
					<WrapItem>
						<LinkBox
							width="350px"
							boxShadow="sm"
							borderWidth="1px"
							rounded="20px"
							overflow="hidden"
						>
							<Image
								src="/images/28Stag.jpg"
								height="350px"
								maxW="350px"
								ratio={4 / 3}
							/>

							<Box p="6">
								<Center display="flex" alignItems="baseline">
									<Badge
										borderRadius="full"
										px="2"
										colorScheme="teal"
									>
										New
									</Badge>
									<Center
										color="gray.500"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="xs"
										textTransform="uppercase"
										ml="2"
									>
										<NextLink href="#" passHref>
											<LinkOverlay>
												<Center>
													Charming Studio less than 10
													Miles to Wells' Beaches!
												</Center>
											</LinkOverlay>
										</NextLink>
									</Center>
								</Center>

								<Center
									marginTop="5px"
									as="span"
									color="gray.600"
									fontSize="sm"
									display="flex"
								>
									<Center>
										<Text>Price: £ 168 per night</Text>
									</Center>
								</Center>
								<Center>
									<Button
										size="sm"
										mt={1}
										variant="secondaryOutline"
									>
										View Details
									</Button>
								</Center>
								<Box display="flex" mt="2" alignItems="center">
									<StarIcon />

									<Box
										as="span"
										ml="2"
										color="gray.600"
										fontSize="sm"
									>
										12 reviews
									</Box>
								</Box>
							</Box>
						</LinkBox>
					</WrapItem>
					<WrapItem>
						<LinkBox
							width="350px"
							boxShadow="sm"
							borderWidth="1px"
							rounded="20px"
							overflow="hidden"
						>
							<Image
								src="https://a0.muscache.com/im/pictures/70d71940-9610-46b8-b028-cc190bbfe6e9.jpg?im_w=960"
								height="350px"
							/>

							<Box p="6">
								<Center display="flex" alignItems="baseline">
									<Badge
										borderRadius="full"
										px="2"
										colorScheme="teal"
									>
										New
									</Badge>
									<Center
										color="gray.500"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="xs"
										textTransform="uppercase"
										ml="2"
									>
										<NextLink href="#" passHref>
											<LinkOverlay>
												<Center>
													Charming Studio less than 10
													Miles to Wells' Beaches!
												</Center>
											</LinkOverlay>
										</NextLink>
									</Center>
								</Center>

								<Center
									marginTop="5px"
									as="span"
									color="gray.600"
									fontSize="sm"
									display="flex"
								>
									<Center>
										<Text>Price: £ 168 per night</Text>
									</Center>
								</Center>
								<Center>
									<Button
										size="sm"
										mt={1}
										variant="secondaryOutline"
									>
										View Details
									</Button>
								</Center>
								<Box display="flex" mt="2" alignItems="center">
									<StarIcon />

									<Box
										as="span"
										ml="2"
										color="gray.600"
										fontSize="sm"
									>
										12 reviews
									</Box>
								</Box>
							</Box>
						</LinkBox>
					</WrapItem> */}
				</Wrap>
			</Container>
		</Layout>
	);
}
