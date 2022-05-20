import React,{useState} from 'react';
import axios from 'axios';
import Nav from './Nav';

const Create = () => {

  // state
  const [state, setState] = useState({
    title: '',
    content: '',
    user: ''
  });

  // destruct values from state
  const{title, content, user}= state;

  // onChange event handler
  const handleChange = (name) => (event) => {
    //console.table('name: ', name,'event: ' , event.target.value);
    setState({...state, [name]: event.target.value});
  }

  //another way to write the arrow function
  // function handleChange(name){
  //   return function(event) {
  //     setState({...state, [name]: event.target.value});
  //   }
  // }

  // handle submit method
  const onSubmit = event => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/post`, {title, content, user})
    .then(res => {
      // empty the state
      setState({...state, title:'', content:'', user:''});
      //show succes message
      alert(`Post titled: ${res.data.title} is created.`);
    })
    .catch(err => {
      console.log(err.response.data.error);
      alert(err.response.data.error);
    })

  }


  
  return (
  <div className="container pb-5">
    <Nav />
        <h1>CREATE POST</h1>
        <br />
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input onChange={handleChange('title')} value={title} type="text" className="form-control" placeholder="Post title" required />
            </div>
            <br />
            <div className="form-group">
                <label className="text-muted">Content</label>
                <textarea onChange={handleChange('content')} value={content} type="text" className="form-control" placeholder="Write something.." required />
            </div>
            <br />
            <div className="form-group">
                <label className="text-muted">User</label>
                <input onChange={handleChange('user')} value={user} type="text" className="form-control" placeholder="Your name" required />
            </div>
            <br />
            <div>
                <button className="btn btn-primary">Create</button>
            </div>
        </form>
    </div>
  )

};

export default Create;
