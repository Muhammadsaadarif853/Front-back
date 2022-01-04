import React , {useState} from 'react'
import {Card, Row, Col, Modal, Button, FormControl, Form} from 'react-bootstrap'
import classes from '../classes.js'
import Class from '../components/Class'

const ClassScreen = () => {
    
    const [show, setShow] = useState(false);
    const [classname, setClassname] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addclass = () =>{
        const newClass = {}
        newClass.name = classname
        classes.push(newClass)
        handleClose()
    }
    return (
        <>  
            <Row >
                    <Col sm={12} md={6} lg={4} xl={10}> <h1>All Classes</h1></Col>
                    <Col className="mt-3 ml-auto" sm={12} md={6} lg={4} xl={2}><Button variant='success' onClick={handleShow}> <i className='fa fa-plus'></i> Add Class</Button></Col>
            </Row>
            <Row>
                {classes.map((clas) => (
                    <Col key={clas._id} sm={12} md={6} lg={4} xl={12}>
                        <Class clas={clas}/>
                    </Col>
                ))}
            </Row> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder="Enter the class name here"
                        aria-label="Classname"
                        aria-describedby="basic-addon1"
                        type="text"
                        name="name"
                        onChange={event => setClassname(event.target.value)}

                        />
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={addclass}>
                    Add class
                </Button>
                </Modal.Footer>
            </Modal>
          
        </>
    )
}
export default ClassScreen
