import axios from "axios"

export function fetchUsers() {
	return function(dispatch) {
		dispatch({type: "FETCH_USERS"})

		return axios.get("http://rest.learncode.academy/api/ckktest/users")
      		.then((res) => {
      			dispatch({type:"FETCH_USERS_FULFILLED",payload:res.data})
      		})
      		.catch((err) => {
      		  dispatch({type:"FETCH_USERS_REJECTED",payload:err})
      		})
	}

}

export function addUser(name, psw) {
	return function(dispatch) {
		dispatch({type: "ADD_USER"})

		return axios.post("http://rest.learncode.academy/api/ckktest/users",{name:name,psw:psw})
      		.then((res) => {
      			dispatch({type:"ADD_USER_FULFILLED",payload:res.data})
      		})
      		.catch((err) => {
      		  dispatch({type:"ADD_USER_REJECTED",payload:err})
      		})
	}
}

export function deleteUser(id) {
	return function(dispatch) {
		dispatch({type: "DELETE_USER"})

		return axios.delete("http://rest.learncode.academy/api/ckktest/users/"+id)
      		.then((res) => {
      			dispatch({type:"DELETE_USER_FULFILLED",payload:res.data})
      		})
      		.catch((err) => {
      		  dispatch({type:"DELETE_USER_REJECTED",payload:err})
      		})
	}
}