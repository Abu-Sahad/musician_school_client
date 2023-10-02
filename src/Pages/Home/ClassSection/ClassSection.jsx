import { useContext } from "react";
import useClasses from "../../../component/hook/useClasses";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useBookCart from "../../../component/hook/useBookCart";
import useAdmin from "../../../component/hook/useAdmin";
import useInstructor from "../../../component/hook/useInstructor";

const ClassSection = () => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useBookCart();
    const [classes] = useClasses();
    const navigate = useNavigate();
    const location = useLocation();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const handleSelectButton = classItem => {
        if (user && user.email) {
            const selectBookClass = { classBookId: classItem._id, name: classItem.name, image: classItem.image, price: classItem.price, email: user.email };
            fetch('https://musician-instrument-school.vercel.app/bookCart', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectBookClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //refetch cart on navbar
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your class has been Booked Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    } else {
                        Swal.fire({
                            text: "Please login to order the food",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login', { state: { from: location } });
                            }
                        });
                    }
                });
        }
    };

    return (
        <section className="max-w-screen-xl mx-auto mt-10 mb-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {classes.map((classItem) => (

                    <div key={classItem._id} className="bg-white p-4 rounded-md shadow">
                        <img src={classItem.image} alt={classItem.name} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
                        <p className="text-gray-700 mb-2">Instructor: {classItem.instructor}</p>
                        <p className={`text-sm mb-2 ${classItem.availableSeats === 0 ? "text-red-500" : ""}`}>
                            Available Seats: {classItem.availableSeats}
                        </p>
                        <p className="text-lg font-bold mb-4">Price: ${classItem.price}</p>
                        <button
                            onClick={() => handleSelectButton(classItem)}
                            className={`w-full py-2 px-4 rounded-md ${classItem.availableSeats === 0 || isAdmin || isInstructor ? "bg-red-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                                }`}
                            disabled={classItem.availableSeats === 0 || isAdmin || isInstructor}
                        >
                            Select
                        </button>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default ClassSection;
