import React,{ Component } from "react"
import { connect } from "react-redux"

import { fetchUsers, addUser, deleteUser } from "../actions/usersActions"

class User extends Component {
	componentDidMount() {
		this.fetchUsers();
	}

	constructor(props){
		super(props)
		this.state = {delId:""}
		this.delChange = this.delChange.bind(this);
	}

	fetchUsers() {
		if(!this.props.userFetching){
			this.props.dispatch(fetchUsers())
		}else{
			alert("请稍等..")
		}
	}

	addUser() {
		let name = 'new user'+new Date().getTime(),
		    psw = '123456';
		if(!this.props.userAdding){
			this.props.dispatch(addUser(name,psw)).then(() => this.fetchUsers())
		}else{
			alert("请稍等..")
		}
	}

	deleteUsers() {
		if(!this.props.userDeleting){
			if(this.state.delId==='59ae0d725725d70100d0b6df'||this.state.delId==='59ae0dca5725d70100d0b6e0'){
				this.setState({delId: ''})
				alert("你删错人了，笨蛋..")
				return false
			}
			if(this.state.delId){
				this.props.dispatch(deleteUser(this.state.delId)).then(() => this.fetchUsers()).then(() => this.setState({delId: ''}))
			}else{
				alert("请先输入要删除的userId")
			}
		}else{
			alert("请稍等..")
		}
	}

	delChange(e) {
		this.setState({delId: e.target.value});
	}

	render() {
    	var showHtml,loading;
    	const { users } = this.props;

    	if(this.props.userFetching){
    	  loading = <p style={{textAlign:"center",color:"#ccc"}}>loading users...</p>
    	}
    	if(this.props.userAdding){
    	  loading = <p style={{textAlign:"center",color:"#ccc"}}>adding user...</p>
    	}
    	if(this.props.userDeleting){
    	  loading = <p style={{textAlign:"center",color:"#ccc"}}>delete user...</p>
    	}

    	if (!users.length) {
    	  showHtml = 
    	    <div>
    	      <button onClick={this.fetchUsers.bind(this)}>load users</button>
    	      {loading}
    	    </div>
    	}else{
    	  const mappedUsers = users.map(user => <li 
    	    	key={user.id}>
    	      	id:{user.id}<p>name:{user.name}</p>
    	    </li>
    	  )
	
    	  showHtml = 
    	  <div style={{width:"960px",margin:"0 auto"}}>
    	    <button onClick={this.addUser.bind(this)}>add user</button>
    	    <button onClick={this.fetchUsers.bind(this)}>refresh</button>
    	    <button onClick={this.deleteUsers.bind(this)}>delete user</button>
    	    <input type="text" value={this.state.delId}  onChange={this.delChange} placeholder="输入要删除的id" />
    	    {loading}
    	    <ul>{mappedUsers}</ul>
    	  </div>                    
	    }
	
	    return showHtml
	}
}	

function mapStateToProps(state) {
    return {
        users: state.user.users,
        userFetching: state.user.fetching,
        userAdding: state.user.adding,
        userDeleting: state.user.deleting,
    }
}

//包装 component,注入dispatch 和 state 到默认的 connect(select)(User)中
export default connect(mapStateToProps)(User)