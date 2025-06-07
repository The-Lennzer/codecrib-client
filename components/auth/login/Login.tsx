import {useState} from 'react';
import Api from '@/utils/Api';
import { useRouter } from 'next/navigation';
export default function LoginBox(){
    const router = useRouter(); 
    const [loginCred, setLoginCred] = useState({
        username: '',
        password: ''
    })

    const handleLogin = async () => {
        const res = await Api.loginUser(loginCred);
        console.log(res.data);
        console.log(res.status);
        if(res.status === 200){ 
            router.push('/projects/create-project');
        }
    }   

    return(
        <div>
            <div className='flex flex-col text-black'>
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
                        <button className="w-[100px] bg-gray-400 hover:bg-pink-500 text-black font-bol rounded-md" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}