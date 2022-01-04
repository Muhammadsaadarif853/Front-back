import React , {useState} from 'react'
import {Card, Row, Col, Modal, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Class = (props) => {    
//   const [totalCourses, setTotalCourses] = useState(props.clas.courses.length())
    return (
        <>
        <Card>
            {/* <Link to={`/product/${props.student._id}`}>
                <Card.Text> { props.student.name }</Card.Text>
            </Link>  */}
            <Card.Body>    
                <Row>                    
                    <Col>
                        <Card.Text as="div">
                            <strong>Class Name</strong>
                        </Card.Text>
                    </Col>
                    <Col sm={12} md={6} lg={4} xl={6} >                                            
                        <Card.Text as="div">
                            <strong>{props.clas.name}</strong>
                        </Card.Text>
                    </Col>            
                </Row>                       
            </Card.Body>             
        </Card>       
            
      
        </>        
        
        
    )
}

export default Class
