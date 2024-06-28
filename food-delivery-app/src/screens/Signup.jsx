import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [credentials, setCredentials]=useState({name:"", email: "", password: "", geolocation:"", city:"", state: "", zip:""})
    let navigate = useNavigate()
    const handleSubmit= async(e)=> {
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/createuser", {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, address:credentials.geolocation, city:credentials.city, state:credentials.state, zip:credentials.zip, phone:credentials.phone})
    })
    const json= await response.json();
    console.log(json);
    if(!json.success){
        alert("enter valid credentials");
    }
    else{
        navigate('/login');
    }
    };
    const onChange=(event)=>{
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Name1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={credentials.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   name="email" value={credentials.email} onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" name="geolocation" value={credentials.geolocation} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" name="city" value={credentials.city} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State</label>
                    <input type="text" className="form-control" name="state" value={credentials.state} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="zip" className="form-label">zip</label>
                    <input type="text" className="form-control" name="zip" value={credentials.zip} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" name="phone" value={credentials.phone} onChange={onChange}/>
                </div>
                

                <button type="submit" className="btn btn-info">Submit</button>
                <Link to='/login' className='m-3 btn btn-dark'>Already a user</Link>
            </form>
        </div>
    )
}
