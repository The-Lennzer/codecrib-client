import {useState} from 'react';
export default function LoginBox(){
    const [loginCred, setLoginCred] = useState({
        username: '',
        password: ''
    })

    function handleLogin(){
        console.log(loginCred);
    }   

    return(
        <div>
            <div className='flex flex-col'>
                <form onSubmit={(e) => {
                    e.preventDefault(); 
                    handleLogin();
                    }}>
                    <div className="text-2xl font-bold">LOGIN</div>
                    <div>
                        <label className='mr-2 font-bold'>Username</label>
                        <input type="text" placeholder='username' onChange={(e) => setLoginCred({...loginCred, username: e.target.value})}></input>    
                    </div>
                    <div>
                        <label className='mr-2 font-bold'>Password</label>
                        <input type="password" placeholder='password' onChange={(e) => setLoginCred({...loginCred, password: e.target.value})}></input>    
                    </div> 
                    <div>
                        <button className="w-[100px] bg-gray-400 hover:bg-pink-500 text-white font-bol rounded-md" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}