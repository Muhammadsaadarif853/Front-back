import React , {useEffect, useState} from 'react'
import {Row, Col } from 'react-bootstrap'
// import students from '../students.js'
import Student from '../components/Student'
import axios from 'axios'
const HomeScreen = () => {

    const[students, setStudents] = useState([]);

    useEffect(()=>{
        const importStudents = async () =>{
            const res = await axios.get('http://127.0.0.1:3000/api/students');  
            setStudents(res.data)            
        } 

        importStudents()

    },[])
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
