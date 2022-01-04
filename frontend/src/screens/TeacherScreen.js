import React , {useEffect, useState} from 'react'
import {Row, Col } from 'react-bootstrap'
import Student from '../components/Teacher'
import axios from 'axios'
const TeacherScreen = () => {

    const[teachers, setTeachers] = useState([]);

    useEffect(()=>{
        const importTeachers = async () =>{
            const res = await axios.get('http://127.0.0.1:3000/api/teachers');  
            setTeachers(res.data)            
        } 

        importTeachers()

    },[])
    return (
        <>
            <h1>All Teachers</h1>
            <Row>
                {teachers.map((teacher) => (
                    <Col key={teacher._id} sm={12} md={6} lg={4} xl={12}>
                        <Student teacher={teacher}/>
                    </Col>
                ))}
            </Row>   
        </>
    )
}
export default TeacherScreen
