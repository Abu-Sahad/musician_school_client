import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
const InstructorAddClass = () => {

    const { user } = useContext(AuthContext);
    const name = user?.displayName;
    const email = user?.email;
    const [info, setInfo] = useState({
        instructor: name,
        email: email,
        status: 'pending',
        enrolled: 0,
    });

    const onChange = (e) => {
        setInfo((values) => ({ ...values, [e.target.name]: e.target.value }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/add-class', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        });

        if (response.ok) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Class Added',
                showConfirmButton: false,
                timer: 1500,
            });

            setInfo({
                instructor: name,
                email: email,
                status: 'pending',
            });
            e.target.reset();

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
            });
        }

    }


    return (
        <div className="mb-4 w-full">
            <h1 className="text-2xl font-bold mb-4 text-center"> Instructor Add Class </h1>
            <div className="card flex-shrink-0 items-center justify-center shadow-2xl bg-base-100">
                <div className="card-body w-10/12">
                    <form className="" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Class Name
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="name"
                                    name='name'
                                    onBlur={onChange}

                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="photoUrl">
                                    Class Image
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="photoUrl"
                                    name='image'
                                    onBlur={onChange}
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Instructor Email
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="email"
                                    id="email"
                                    value={user?.email}
                                    name='email'
                                    onBlur={onChange}
                                />

                            </div>
                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                    Instructor Name
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    id="email"
                                    value={user?.displayName}
                                    onBlur={onChange}
                                />

                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                    Total Seats
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="number"
                                    name="availableSeats"
                                    onBlur={onChange}
                                    id="number" />

                            </div>

                            <div>
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                                    Price
                                </label>
                                <input
                                    className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                                    type="text"
                                    name='price'
                                    id="phoneNumber"
                                    onBlur={onChange}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 mt-4 px-4  rounded focus:outline-none focus:shadow-outline w-full"
                                type="submit" >
                                Add Class
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default InstructorAddClass;