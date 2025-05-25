"use client";
import {useState} from 'react';
import Api from "@/utils/Api";

export default function SignUpBox(){
    const [signupCreds, setSignupCreds] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
    });
    const [passwordChecker, setPasswordChecker] = useState('');
    const [registerResponse, setRegisterResponse] = useState('');
const [validationErrors, setValidationErrors] = useState<string[]>([]);

async function handleSubmit() {
  const isAnyFieldEmpty = Object.values(signupCreds).some(val => val.trim() === '') || passwordChecker.trim() === '';
  if (isAnyFieldEmpty) {
    setRegisterResponse('Please fill in all fields');
    setValidationErrors([]);
    return;
  }

  if (passwordChecker !== signupCreds.password) {
    setRegisterResponse('Passwords do not match');
    setValidationErrors([]);
    return;
  }

  try {
    const response = await Api.registerUser(signupCreds);
    setRegisterResponse(response.message || 'User registered!');
    setValidationErrors([]);

    setSignupCreds({ name: '', username: '', email: '', password: '' });
    setPasswordChecker('');
  } catch (err: any) {
    setRegisterResponse(err.error || 'Something went wrong');

    if (Array.isArray(err.issues)) {
      const issues = err.issues.map((issue: any) => `${issue.path[0]}: ${issue.message}`);
      setValidationErrors(issues);
    } else {
      setValidationErrors([]);
    }
  }
}

    return(
        <div>
            <div className="flex flex-col gap-2">
                <div>
                    {<span className='text-red-500'><p>{registerResponse}</p></span>}
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className="text-2xl font-bold mb-2">SIGN UP</div>
                    <div>
                        <label className='mr-2'>Name</label>
                        <input type="text" placeholder='Name' value={signupCreds.name} onChange={(e) => setSignupCreds({...signupCreds, name: e.target.value})}></input>
                    </div>
                    <div>
                        <label className='mr-2'>username</label>
                        <input type="text" placeholder='username' value={signupCreds.username} onChange={(e) => setSignupCreds({...signupCreds, username: e.target.value})}></input>
                    </div>
                    <div>
                        <label className='mr-2'>email</label>
                        <input type="email" placeholder='example@email.com' value={signupCreds.email} onChange={(e) => setSignupCreds({...signupCreds, email: e.target.value})}></input>
                    </div>
                    <div>
                        <label className='mr-2'>password</label>
                        <input type="password" placeholder='password' value={signupCreds.password} onChange={(e) => setSignupCreds({...signupCreds, password: e.target.value})}></input>
                    </div>
                    <div>
                        <label className='mr-2'>Retype password</label>
                        <input type="password" placeholder='password' value={passwordChecker} onChange={(e) => setPasswordChecker(e.target.value)}></input>
                    </div>
                    <div className='mt-2'>
                        <button className="w-[100px] bg-gray-400 hover:bg-pink-500 text-white font-bol rounded-md" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )

}