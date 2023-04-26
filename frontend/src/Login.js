import React from 'react'

function Login(){
    return (
        <div> 
            <div> 
                <form action="">
                    <div className='mb-3'> 
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email: '/>
                    </div>
                    <div className='mb-3'> 
                        <label htmlFor="password">password</label>
                        <input type="password" placeholder='Enter password: '/>
                    </div>
                    <button className='btn btn-success'>Log in</button>
                    <p></p>
                    <button className='btn btn-default border'>Create Account</button>
                </form>

            </div>
        
        </div>


    )
    }

export default Login 