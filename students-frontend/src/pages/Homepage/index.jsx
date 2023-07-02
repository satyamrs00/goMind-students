import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material'

const Homepage = () => {
    const [students, setStudents] = useState([])
    const [newStudent, setNewStudent] = useState({})
    const [colleges, setColleges] = useState([])
    const [departments, setDepartments] = useState([])

    const getColleges = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/colleges`)
            setColleges(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getDepartments = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/departments`)
            setDepartments(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getStudents = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/students`)
            setStudents(res.data)
        } catch (err) {
            console.log(err)
        }
    }


    const saveStudent = () => {
        try {
            axios.post(`${process.env.REACT_APP_API_URL}/api/students`, {
                ...newStudent,
                college: newStudent.college === 'other' ? newStudent.new_college : newStudent.college,
                department: newStudent.department === 'other' ? newStudent.new_department : newStudent.department,
                new_college: undefined,
                new_department: undefined
            })
            setStudents([...students, newStudent])
        } catch (err) {
            console.log(err)
            window.alert('Error saving the data')
        }
    }


    useEffect(() => {
        const init = async () => {
            await getStudents()
            await getColleges()
            await getDepartments()
        }
        init() 
    }, [])

    return (
        <div className="w-full h-screen bg-[#f0f0f0] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 overflow-hidden">
            <div className=" flex flex-col items-center justify-start gap-4 p-4 bg-[#fff] h-full rounded-lg overflow-y-auto">
                <h1 className="text-4xl font-bold p-5">
                    Create a new student
                </h1>
                <div className='flex gap-4 w-full justify-center items-center'>
                    <TextField variant='outlined' label='First Name' onChange={(e) => setNewStudent({...newStudent, first_name: e.target.value})} value={newStudent.first_name} className='w-full md:w-1/2' />
                    <TextField variant='outlined' label='Last Name' onChange={(e) => setNewStudent({...newStudent, last_name: e.target.value})} value={newStudent.last_name} className='w-full md:w-1/2' />
                </div>
                <TextField fullWidth variant='outlined' label='Email' onChange={(e) => setNewStudent({...newStudent, email: e.target.value})} value={newStudent.email} />
                <FormControl fullWidth variant='outlined'>
                    <InputLabel>College</InputLabel>
                    <Select fullWidth variant='outlined' label='College' onChange={(e) => setNewStudent({...newStudent, college: e.target.value})} value={newStudent.college} >
                        {colleges.map((college) => (
                            <MenuItem value={college}>{college}</MenuItem>
                        ))}
                        <MenuItem value='other'>Other</MenuItem>
                    </Select>
                </FormControl>
                {newStudent.college === 'other' && (
                    <TextField fullWidth variant='outlined' label='College Name' onChange={(e) => setNewStudent({...newStudent, new_college: e.target.value})} value={newStudent.new_college} />
                )}
                <FormControl fullWidth variant='outlined'>
                    <InputLabel>Department</InputLabel>
                    <Select fullWidth variant='outlined' label='Department' onChange={(e) => setNewStudent({...newStudent, department: e.target.value})} value={newStudent.department} >
                        {departments.map((department) => (
                            <MenuItem value={department}>{department}</MenuItem>
                        ))}
                        <MenuItem value='other'>Other</MenuItem>
                    </Select>
                </FormControl>
                {newStudent.department === 'other' && (
                    <TextField fullWidth variant='outlined' label='Department Name' onChange={(e) => setNewStudent({...newStudent, new_department: e.target.value})} value={newStudent.new_department} />
                )}
                <Button variant='contained' onClick={saveStudent} >Save</Button>
            </div>
            <div className=" flex flex-col items-center justify-start gap-4 p-4 bg-[#fff] h-full rounded-lg overflow-y-auto">
                <h1 className="text-4xl font-bold p-5">
                    Students
                </h1>
                {students.map((student) => (
                    <div className='flex gap-2 w-full bg-white rounded-lg shadow-md'>
                        <div className='text-[#8BC34A] bg-[#DCEDC8] px-16 h-full rounded-s-lg flex items-center justify-center text-4xl font-bold'>
                            {student.first_name[0]}
                            {student.last_name ? student.last_name[0] : ''}
                        </div>
                        <div className='flex flex-col gap-2 p-4'>
                            <div className='text-2xl font-bold'>{student.first_name} {student.last_name}</div>
                            <div className='text-lg '>{student.email}</div>
                            <div className='text-lg '>{student.college} - {student.department}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage