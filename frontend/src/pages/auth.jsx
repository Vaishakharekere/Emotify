import React from 'react'
export  default function Auth() 
{
     const [isLogin,setIsLogin] = useState(true);

    return(
      <div classname = 'container'>
       <div classname='form-container'>
         <div classname='form-toggle'>
             <button classname={islogin ?'active':""} onClick={()=> seIsLogin (true)} >LOGIN</button>
             <button classname={!islogin ?'active':""}onClick={()=> seIsLogin (false)}>SIGNUP</button>
         </div>
       </div>

      </div>
    )
}