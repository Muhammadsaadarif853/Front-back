import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Teacher = (props) => {
    return (
        <Card>
            {/* <Link to={`/product/${props.teacher._id}`}>
                <Card.Text> { props.teacher.name }</Card.Text>
            </Link>  */}
            <Card.Body> 
                <Row>
                    <Col>{props.teacher._id}</Col>
                </Row>   
                <Row>                    
                    <Col>
                        <Card.Text as="div">
                            <strong>Name</strong>
                        </Card.Text>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} >                                            
                        <Card.Text as="div">
                            <strong>{props.teacher.name}</strong>
                        </Card.Text>
                    </Col>            
                </Row>
                <Row>                    
                    <Col>
                        <Card.Text as="div">
                            <strong>Age</strong>
                        </Card.Text>
                    </Col>
                    <Col  sm={12} md={6} lg={4} xl={3} >                                            
                        <Card.Text as="div">
                            <strong>{props.teacher.age}</strong>
                        </Card.Text>
                    </Col>            
                </Row>
                <Row>                    
                    <Col>
                        <Card.Text as="div">
                            <strong>Gender</strong>
                        </Card.Text>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} >                                            
                        <Card.Text as="div">
                            <strong>{props.teacher.gender}</strong>
                        </Card.Text>
                    </Col>            
                </Row>
                <Row>                    
                    <Col>
                        <Card.Text as="div">
                            <strong>CGPA</strong>
                        </Card.Text>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} >                                            
                        <Card.Text as="div">
                            <strong>{props.teacher.cgpa}</strong>
                        </Card.Text>
                    </Col>            
                </Row>


            </Card.Body>             
        </Card>
    )
}

export default Teacher
