import { dreamStudyAxios } from '../config';


const getStudentById = async (studentId: number) => {
    try {
        const response = await dreamStudyAxios.get(`/dreamstudy/students/student/${studentId}`);
    } catch (error) {
        if (error) {

        } else {

        }
    }
}


const getAllStudentsByFirstName = async (studentFirstName: string) => {
    try {
        const response = await dreamStudyAxios.get(`/dreamstudy/students/${studentFirstName}`);
    } catch (error) {
        if (error) {

        } else {

        }
    }
}


const getAllStudentsByLastName = async (studentLastName: string) => {
    try {
        const response = await dreamStudyAxios.get(`/dreamstudy/students/${studentLastName}`);
    } catch (error) {
        if (error) {

        } else {

        }
    }
}
