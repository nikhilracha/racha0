import { Div, Button, Icon, Container } from 'atomize';
import { route } from 'preact-router';
import { useState } from "preact/hooks";
import SideBar from './SideBar';

const Header = () => {

	const [show, setShow] = useState(false);

	return (
		<Container>
			<Div p="1rem" d="flex" bg="transparent" justify="flex-end" >
				<Button
					style={{ zIndex: '3' }}
					d={{ xs: 'none', md: 'flex' }}
					shadow="3"
					rounded="circle"
					hoverShadow="4"
					m={{ r: "1rem" }}
					onClick={() => route('/profile/')}
				>
					Say hi 👋 &nbsp;!
  			</Button>
				<Button
					style={{ zIndex: '3' }}
					h="2.5rem"
					w="2.5rem"
					bg="transparent"
					hoverBg="gray400"
					rounded="lg"
					d={{ xs: 'flex', md: 'none' }}
					onClick={() => setShow(true)}
				>
					<Icon name="Menu" size="20px" color="black" />
				</Button>
			</Div>
			<SideBar
				isOpen={show}
				onClose={() => setShow(false)}
			/>
		</Container >
	);
}

export default Header;
