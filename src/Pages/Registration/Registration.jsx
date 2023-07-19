import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Registration = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const { createUser, updateProfileArea } = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                return updateProfileArea(data.name, data.photoURL); // Return the promise
            })
            .then(() => {
                const saveUser = { name: data.name, email: data.email };
                return fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                });
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('user profile info updated');
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
            .catch(error => console.log(error));
    };
    const password = watch('password');

    return (
        <div className="mb-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Registration Page</h1>
            <div className="card flex-shrink-0 shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="name"
                                    {...register('name', { required: true })}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="email"
                                    id="email"
                                    {...register('email', { required: true })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs italic">Email is required.</p>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="password"
                                    id="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).*/,
                                    })}
                                />
                                {errors.password?.type === 'required' && (
                                    <p className="text-red-500 text-xs italic">Password is required.</p>
                                )}
                                {errors.password?.type === 'minLength' && (
                                    <p className="text-red-500 text-xs italic">Password must be at least 6 characters long.</p>
                                )}
                                {errors.password?.type === 'pattern' && (
                                    <p className="text-red-500 text-xs italic">
                                        Password must contain at least one capital letter and one special character.
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="password"
                                    id="confirmPassword"
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value) => value === password || 'Passwords do not match.',
                                    })}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs italic">{errors.confirmPassword.message}</p>
                                )}
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="photoUrl">
                                    Photo URL (optional)
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="photoUrl"
                                    {...register('photoUrl')}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
                                    Gender (optional)
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="gender"
                                    {...register('gender')}
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                                    Phone Number (optional)
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="phoneNumber"
                                    {...register('phoneNumber')}
                                />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                                    Address (optional)
                                </label>
                                <textarea
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    id="address"
                                    {...register('address')}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 mt-4 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                        <div>
                            <p className="mb-0 mt-2 pt-1 text-xl font-bold">
                                Have an account ?
                                <Link
                                    to='/login'
                                    className="text-red-700 transition duration-150 ease-in-out hover:text-danger-600 focus:text-red-600 active:text-red-700"
                                >  Login
                                </Link>
                            </p>
                        </div>

                        <div>
                            <div>
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">OR</p>
                                </div>

                                <a
                                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    style={{ backgroundColor: '#3b5998' }}
                                    href="#!"
                                    role="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                    Continue with Facebook
                                </a>
                                <a
                                    className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                                    style={{ backgroundColor: '#55acee' }}
                                    href="#!"
                                    role="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                    Continue with Twitter
                                </a>
                            </div>
                        </div>

                    </form>


                </div>
            </div>
        </div>
    );
};

export default Registration;





