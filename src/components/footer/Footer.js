import { Icon, Div, Text, Row, Col } from "atomize";


const Footer = () => {

    return (
        <Div style={{ position: 'relative' }} d="flex" w="100%" bg="black" align="center" justify="center" m={{ t: { xs: '3rem', md: '3rem' } }}>
            <Row flexDir="column">
                <Col>
                    <Text fontFamily="primary" textAlign="center" textColor="white" textSize="body" m={{ xs: '1rem', md: '1rem' }} >
                        Live Free :)
			        </Text>
                </Col>
                <Col>
                    <Row flexDir="row">
                        <Col>
                            <Icon
                                name="Instagram"
                                size="24px"
                                color="white"
                                m={{ xs: '1rem', md: '1rem' }}
                                onClick={() => console.log("clicked")}
                            />

                        </Col>
                        <Col>
                            <Icon
                                name="Facebook"
                                size="24px"
                                color="white"
                                m={{ xs: '1rem', md: '1rem' }}
                                onClick={() => console.log("clicked")}
                            />
                        </Col>
                        <Col>
                            <Icon
                                name="Github"
                                size="24px"
                                color="white"
                                m={{ xs: '1rem', md: '1rem' }}
                            />
                        </Col>
                        <Col>
                            <Icon
                                name="Linkedin"
                                size="24px"
                                color="white"
                                m={{ xs: '1rem', md: '1rem' }}
                            />
                        </Col>
                        <Col>
                            <Icon
                                name="Twitter"
                                size="24px"
                                color="white"
                                m={{ xs: '1rem', md: '1rem' }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Div>
    )


};

export default Footer;