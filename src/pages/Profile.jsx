import React from 'react';
import authService from '../appwrite/auth/authServices';
import { useEffect } from 'react';
import { useState } from 'react';


function Profile() {

    const [userDt, setUserData] = useState({});
    const date = new Date();

    useEffect(() => {
        authService.getUser()
            .then((user) => {
                setUserData(user);
            })
    }, [])

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className="h-[80vh] bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User database
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Details and informations about user.
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userDt.name}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Phone
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {userDt.phone}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span>
                                    {userDt.emailVerification && (
                                        <span>{userDt.email} <span className='inline-block w-content px-3 text-green-600 font-bold'>verified</span></span>
                                    )}
                                </span>
                                <span>
                                    {!userDt.emailVerification && (
                                        <span>{userDt.email} <span className='inline-block w-content px-3 text-green-600 font-bold line-through decoration-black'>verified</span></span>
                                    )}
                                </span>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Registration
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {date.toDateString(userDt.registration)}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                About
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Profile;