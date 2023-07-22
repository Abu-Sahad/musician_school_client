import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
//import Swal from "sweetalert2";

const InstructorCard = () => {
    const [allCourse,setAllCourse] = useState([]);
    const {user} = useContext(AuthContext);
    const email = user?.email;

const getAllCourse = async () => {
  try {
    const allData = await fetch('http://localhost:5000/get-all-course', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ instructor_email: email }), // Assuming email is defined elsewhere.
    });

    if (!allData.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await allData.json(); // Resolve the Promise to get the data
    console.log('all data =>', data);
    setAllCourse(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  getAllCourse();
}, []);

    return (
        <div className="w-full">
             <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {allCourse.map((classItem) => (

                <div key={classItem._id} className="bg-white p-4 rounded-md shadow">
                    <img src={classItem.image} alt={classItem.name} className="w-full h-48 object-cover mb-4" />
                    <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
                    <p className="text-gray-700 mb-2">Instructor: {classItem.instructor}</p>
                    <p className={`text-sm mb-2 ${classItem.availableSeats === 0 ? "text-red-500" : ""}`}>
                        Available Seats: {classItem.availableSeats}
                    </p>
                    <p className="text-lg font-bold mb-4">Price: {classItem.price}</p>
                    {classItem.status && <p className="text-lg font-bold mb-4">Status: {classItem.status}</p>}
                    {/* <button  className={`w-full py-2 px-4 rounded-md ${classItem.availableSeats === 0 ? "bg-red-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600" }`}
                        disabled={classItem.total_seat === 0}> Select
                    </button> */}
                </div>

            ))}
        </div>
        </div>
    );
};

export default InstructorCard;