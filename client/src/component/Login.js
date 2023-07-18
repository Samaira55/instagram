import React from 'react'
import {GitHubSignFunction } from '../ServerMethod/Servermethods';

function Login() {
  return (
    <div>
      <div className="mainlog">

        <div className="snap">
        <li><a href=""><img src='https://i0.wp.com/power2cloud.com/wp-content/uploads/2021/12/Jira_Work_Management_5.png?fit=4125%2C2673&ssl=1' className='login_pic'/></a></li>
              
        </div>
        <div className="logobtn">

        {/* <li><a href=""><img src={require('../images/gitimg.png')} className="brand-logo"/></a></li>    */}

      <button onClick={() => GitHubSignFunction()} class="waves-effect waves-light blue btn "><i class="fa-brands fa-github"></i> Login</button>
              
        </div>
      </div>
    </div>
  )
}

export default Login
