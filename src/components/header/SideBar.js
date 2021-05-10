import { Div, Button, SideDrawer } from "atomize";

const SideBar = ({ isOpen, onClose }) => {
    return (
        <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "50vw", sm: "4rem" }}>
            <Div d="flex" justify="flex-end">
                <Button
                    style={{ zIndex: '3' }}
                    shadow="3"
                    rounded="circle"
                    hoverShadow="4"
                    w={{ xs: '35vw' }}
                    m={{ r: "1rem" }}
                    onClick={onClose}
                >
                    Say hi 👋!
  			</Button>

            </Div>
        </SideDrawer>
    );
};

export default SideBar;