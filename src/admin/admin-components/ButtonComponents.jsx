import { useState } from 'react';
import Swal from 'sweetalert2';

const ButtonComponents = ({ item }) => {
    const [status, setStatus] = useState('pending');
    const [data, setData] = useState(item);

    const approve = async () => {
        setStatus('approve');
        const updateData = {
            ...data,
            status: 'approve'
        };
        await fetch('https://musician-instrument-school.vercel.app/admin-approve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        });
        Swal.fire({
            title: 'Course Approved',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        // Handle response from the server if needed
        // console.log(await response.json());
    };

    const denied = async () => {
        setStatus('denied');
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        });

        if (text) {
            // Display the user-entered message in a simple alert-like popup
            Swal.fire({
                title: 'Course Denied',
                text: text,
                icon: 'error',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });

            const updateData = {
                ...data,
                status: 'denied',
                reason: text // Store the user-entered message as the reason for denial
            };

            await fetch('https://musician-instrument-school.vercel.app/admin-denied', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });
        }
    };

    return (
        <div>
            <button
                className={`w-full text-white py-2 px-4 my-2 rounded-md bg-green-500 
             hover:bg-green-700 ${status === 'pending' ? 'bg-green-500' : 'bg-gray-600 cursor-not-allowed'}`}
                disabled={status !== 'pending'}
                onClick={approve}
            >
                Approve
            </button>

            <button
                className={`w-full text-white py-2 px-4 rounded-md bg-rose-500 hover:bg-rose-700 ${status === 'pending' ? 'bg-red-500 ' : 'bg-gray-600 cursor-not-allowed'}`}
                disabled={status !== 'pending'}
                onClick={denied}
            >
                Denied
            </button>
        </div>
    );
};

export default ButtonComponents;
