import { Icon, Div, Text, Image, Button, Row, Col } from "atomize";

import Typewriter from 'react-simple-typewriter'
import 'react-simple-typewriter/dist/index.css'
import Particles from "preact-particles";
import Footer from '../../components/footer/Footer';


const Home = () => (
	<>
		{/* <Container> */}
		<Particles
			id="tsparticles"
			options={{
				background: {
					color: {
						value: "#ffffff",
					},
					//position: "relative",
					opacity: 0
				},
				fullScreen: {
					enable: true,
					//position: "relative",
					zIndex: 0
				},
				fpsLimit: 20,
				particles: {
					color: {
						value: "#030303",
					},
					links: {
						color: "#030303",
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: "none",
						enable: true,
						outMode: "bounce",
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							value_area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: "circle",
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		/>
		<Div d="flex" m={{ t: '4rem' }} align="center" justify="center">
			<Row flexDir="column">
				<Col>
					<Text fontFamily="primary" textAlign="center" justify="center" textSize="display1" m={{ b: "2rem" }}>
						{' '}
						<span style={{ color: 'black', fontWeight: 'bold' }}>
							{/* Style will be inherited from the parent element */}
							<Typewriter
								loop
								cursor
								cursorStyle='_'
								typeSpeed={200}
								deleteSpeed={50}
								delaySpeed={1000}
								words={['Hello!', 'Namaste!', 'Bonjour!', 'Hola!']}
							/>
						</span>
					</Text>
				</Col>
				<Col>
					<Image h="12rem" style={{ position: 'relative' }} rounded="circle" w="11rem" m={{ b: "2rem" }} src="https://res.cloudinary.com/dxg3rmriu/image/upload/v1620526854/edited.png" />
				</Col>
			</Row>
		</Div>


		<Div style={{ position: 'relative' }} d="flex" w="100%" bg="black" align="center" justify="center">
			<Row flexDir="column">
				<Col>
					<Text fontFamily="primary" textAlign="center" textColor="white" textSize="heading" m="1rem">
						I'm Sri Nikhil Racha 🧑‍💻
					</Text>
				</Col>
				<Col>
					<Text
						fontFamily="primary"
						textAlign="center"
						tag="section"
						textColor="white"
						textSize="body"
						m={{
							l: { xs: '1rem', md: '6rem' },
							t: '1rem',
							r: { xs: '1rem', md: '6rem' },
							y: '5rem'
						}}>
						I am a Computer Science Engineer, I ❤️&nbsp; to develop mobile and Web applications.
						Technology and Engineering has driven me in such a way that not a day goes by without thinking about innovation. I believe everything that we see in SciFi movies will be possible eventually in the near future. Apart from my nerdy side, I love cooking, traveling and have a soft spot for animals.
					</Text>
				</Col>
				<Col>
					<Row flexDir="column">
						<Col>
							<Text fontFamily="primary" textAlign="center" textColor="white" textSize="heading" m="1rem">
								What I do?
								</Text>
						</Col>
					</Row>
					<Div
						m={{
							l: { xs: '1rem', md: '6rem' },
							t: '1rem',
							r: { xs: '1rem', md: '6rem' },
							y: '5rem'
						}}>
						<Row flexDir={{ xs: 'column', md: 'row' }}>
							<Col>
								<Div
									d="flex"
									flexDir="column"
									rounded="xl"
									bg="white"
									align="center"
									justify="center"
									hoverTextColor="gray500"
									transition
									hoverBg="gray500"

								>
									<Image h="4rem" w="4rem" m={{ b: "2rem", t: "2rem" }} src="https://res.cloudinary.com/dxg3rmriu/image/upload/v1620539762/graphic-design.png" />
									<Text fontFamily="primary" textAlign="center" textColor="black" textSize={{ xs: "caption", md: "subheader" }} m="1rem">
										UI/UX
									</Text>
								</Div>
							</Col>
							&nbsp;
							<Col>
								<Div
									d="flex"
									flexDir="column"
									rounded="xl"
									bg="white"
									align="center"
									justify="center"
									hoverTextColor="gray500"
									transition
									hoverBg="gray500"

								>
									<Image h="4rem" w="4rem" m={{ b: "2rem", t: "2rem" }} src="https://res.cloudinary.com/dxg3rmriu/image/upload/v1620540322/application.png" />
									<Text fontFamily="primary" textAlign="center" textColor="black" textSize={{ xs: "caption", md: "subheader" }} m="1rem">
										Mobile Application Development
									</Text>
								</Div>
							</Col>
							&nbsp;
							<Col>
								<Div
									d="flex"
									flexDir="column"
									rounded="xl"
									bg="white"
									align="center"
									justify="center"
									hoverTextColor="gray500"
									transition
									hoverBg="gray500"

								>
									<Image h="4rem" w="4rem" m={{ b: "2rem", t: "2rem" }} src="https://res.cloudinary.com/dxg3rmriu/image/upload/v1620540476/coding.png" />
									<Text fontFamily="primary" textAlign="center" textColor="black" textSize={{ xs: "caption", md: "subheader" }} m="1rem">
										Web Application Development
									</Text>
								</Div>
							</Col>
						</Row>
					</Div>
				</Col>
			</Row>
		</Div>
		<Div style={{ position: 'relative' }} d="flex" w="100%" align="center" justify="center">

			<Row flexDir="column">
				<Col>
					<Text fontFamily="primary" textAlign="center" textColor="black" textSize="heading" m="1rem">
						My Works!
					</Text>
				</Col>
				<Col>
					<Div
						m={{
							l: { xs: '1rem', md: '6rem' },
							t: '1rem',
							r: { xs: '1rem', md: '6rem' },
							y: '2rem'
						}}>
						<Row flexDir={{ xs: 'column', md: 'row' }}>
							<Col>
								<Button
									shadow="3"
									h="20rem"
									w="20rem"
									textColor="black"
									bg="gray200"
									hoverBg="gray300"
									p={{ x: "1.75rem" }}
									hoverShadow="4"
									m={{ r: "1rem" }}
								>
									<Row flexDir="column">
										<Col>
											<Text fontFamily="primary" textAlign="center" textColor="black" textSize="title" m={{ xs: '1rem', md: '1rem' }} >
												Jobster
											</Text>
										</Col>
										<Col>
											<Text fontFamily="primary" textAlign="center" textColor="black" textSize="caption" m={{ xs: '1rem', md: '1rem' }} >
												This is job recruting platform built using React, Redux, ExpressJS and MySQL
											</Text>
										</Col>
										<Col>
											<Icon
												name="Github"
												size="24px"
												color="black"
												m={{ xs: '1rem', md: '1rem' }}
											/>
										</Col>
									</Row>
								</Button>
							</Col>
							&nbsp;
							<Col>
								<Button
									shadow="3"
									h="20rem"
									w="20rem"
									textColor="black"
									bg="black"
									hoverBg="light"
									p={{ x: "1.75rem" }}
									hoverShadow="4"
									m={{ r: "1rem" }}
								>
									<Row flexDir="column">
										<Col>
											<Text fontFamily="primary" textAlign="center" textColor="white" textSize="title" m={{ xs: '1rem', md: '1rem' }} >
												ConnectUS
											</Text>
										</Col>
										<Col>
											<Text fontFamily="primary" textAlign="center" textColor="white" textSize="caption" m={{ xs: '1rem', md: '1rem' }} >
												This is Volunteer recruting platform built for Goverment of Sikkim using AngularJS, Ionic, PHP and MySQL.
											</Text>
										</Col>
										<Col>
											<Icon
												name="Github"
												size="24px"
												color="white"
												m={{ xs: '1rem', md: '1rem' }}
											/>
										</Col>
									</Row>
								</Button>
							</Col>
							&nbsp;
							<Col>
								<Button
									shadow="3"
									h="20rem"
									w="20rem"
									textColor="black"
									bg="gray200"
									hoverBg="gray300"
									p={{ x: "1.75rem" }}
									hoverShadow="4"
									m={{ r: "1rem" }}
								>
									<Row flexDir="column">
										<Col>
											<Text fontFamily="primary" textAlign="center" textColor="black" textSize="title" m={{ xs: '1rem', md: '1rem' }} >
												Medco
											</Text>
										</Col>
										<Col>
											<Text fontFamily="primary" textAlign="center" textColor="black" textSize="caption" m={{ xs: '1rem', md: '1rem' }} >
												Medco is a cross platform application where individuals can locate their medicines prescribed by doctors in their vicinity.
											</Text>
										</Col>
										<Col>
											<Icon
												name="Github"
												size="24px"
												color="black"
												m={{ xs: '1rem', md: '1rem' }}
											/>
										</Col>
									</Row>
								</Button>
							</Col>

						</Row>
					</Div>
				</Col>
				<Col>
					<Div d="flex" align="flex-end" justify="flex-end">
						<Button
							suffix={
								<Icon
									name="LongRight"
									size="16px"
									color="white"
									m={{ l: "1rem" }}
								/>
							}
							shadow="3"
							hoverShadow="4"
							m={{ r: "1rem" }}
						>
							More
  					</Button>
					</Div>
				</Col>
			</Row>
		</Div>
		<Footer />
		{/* </Container> */}
	</>
);

export default Home;
