import React from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Student = (props) => {
    return (
        <Card>
            {/* <Link to={`/product/${props.student._id}`}>
                <Card.Text> { props.student.name }</Card.Text>
            </Link>  */}
            <Card.Body> 
                <Row>
                    <Col>{props.student._id}</Col>
                </Row>   
                <Row>                    
                    <Col>
                        <Card.Text as="div">
                            <strong>Name</strong>
                        </Card.Text>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={3} >                                            
                        <Card.Text as="div">
                            <strong>{props.student.name}</strong>
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
                            <strong>{props.student.age}</strong>
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
                            <strong>{props.student.gender}</strong>
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
                            <strong>{props.student.cgpa}</strong>
                        </Card.Text>
                    </Col>            
                </Row>


            </Card.Body>             
        </Card>
    )
}

export default Student
