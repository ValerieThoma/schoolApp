import axios from 'axios';

export default function(teacherId){
	const url = `${window.apiHost}/teachers/courses/${teacherId}/get`;
	console.log("hey");
	const axiosPromise = axios.get(url);
	return{
		type: "GET_COURSES",
		payload: axiosPromise
	}
}
