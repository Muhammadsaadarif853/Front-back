import React , {useEffect} from 'react'
import {Row, Col } from 'react-bootstrap'
import students from '../students.js'
import Student from '../components/Student'

const HomeScreen = () => {
    return (
        <>
            <h1>All students</h1>
            <Row>
                {students.map((student) => (
                    <Col key={student._id} sm={12} md={6} lg={4} xl={12}>
                        <Student student={student}/>
                    </Col>
                ))}
            </Row>   
        </>
    )
}
export default HomeScreen
