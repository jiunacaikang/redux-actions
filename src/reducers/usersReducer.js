const initialState = {
	users:[],
	fetching:false,
	fetched:false,
	adding:false,
	added:false,
	deleting:false,
	deleted:false,
	error:null,
}
export default function reducer(state = initialState, action){
	switch (action.type) {
		case "FETCH_USERS":
			return {...state, fetching:true}
			break;
		case "FETCH_USERS_REJECTED":
			return {...state, fetching:false, error:action.payload}
			break;
		case "FETCH_USERS_FULFILLED":
			return {
				...state,
				fetching:false,
				fetched:true,
				users:action.payload
			}
			break;
		case "ADD_USER":
			return {
				...state,
				adding:true
			}
			break;	
		case "ADD_USER_REJECTED":
			return {
				...state,
				adding:false, error:action.payload
			}
			break;
		case "ADD_USER_FULFILLED":
			return {
				...state,
				adding:false,
				added:true
			}
			break;			
		case "DELETE_USER":
			return {
				...state,
				deleting:true
			}
			break;	
		case "DELETE_USER_REJECTED":
			return {
				...state,
				deleting:false, error:action.payload
			}
			break;
		case "DELETE_USER_FULFILLED":
			return {
				...state,
				deleting:false,
				deleted:true
			}
			break;	
		default:
			return state			
	}
}