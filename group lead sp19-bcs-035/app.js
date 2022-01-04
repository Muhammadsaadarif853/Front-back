import express from 'express'
import teachers from './teachers.js'
import students from './students.js'

const app =express();


import Class from './Models/class.js';

app.get('/api/teachers', (req, res)=>{
    res.json(teachers);
})

app.get('/api/teachers/:id', (req, res)=>{
    
    const teacher = teachers.find((t)=> t._id === req.params.id)
    res.json(teacher)

})

app.get('/api/students', (req, res)=>{
    res.json(students)
})

app.get('/api/students/:id', (req, res)=>{
    const student = students.find((s) => s._id === req.params.id)
    res.json(student)
})



app.listen(5000,()=>console.log("working on port 5000"))