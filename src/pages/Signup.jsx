import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth/authServices';


function Signup() {

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const signupHandler = async (e) => {
        e.preventDefault();
        const user = await authService.signupUser({email, password, name});
        navigate('/login');
    }

    return (
        <div className='w-full h-[90vh]'> 
            <div className="h-full bg-gray-100 flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <h1 className="font-thin text-center text-2xl mb-5">Signup to abcdBlog</h1>  
                    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                        <div className="px-5 py-7">
                            <form action="" onSubmit={signupHandler}>
                            <label className="font-semibold text-sm text-gray-600 pb-1 block">Full Name</label>
                                <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>{setName(e.target.value)}}/>
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                                <input type="email" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>{setEmail(e.target.value)}}/>
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                <input type="password" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>{setPassword(e.target.value)}}/>
                                <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Signup</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    )
}

export default Signup;