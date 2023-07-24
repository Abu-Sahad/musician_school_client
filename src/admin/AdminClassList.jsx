import { useEffect, useState } from "react";
import ButtonComponents from "./admin-components/ButtonComponents";
const AdminClassList = () => {
    const [allCourse, setAllCourse] = useState([]);

    useEffect(() => {
        fetch('https://musician-instrument-school.vercel.app/admin-get-all-course')
            .then(res => res.json())
            .then(data => setAllCourse(data))
    }, []);

    console.log("Add Class Data => ", allCourse)

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {allCourse.map((classItem, index) => (

                    <div key={index} className="bg-white p-4 rounded-md shadow">
                        <img src={classItem.image} alt={classItem.name} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
                        <p className="text-gray-700 mb-2">Instructor: {classItem.instructor}</p>
                        <p className={`text-sm mb-2 ${classItem.availableSeats === 0 ? "text-red-500" : ""}`}>
                            Available Seats: {classItem.availableSeats}
                        </p>
                        <p className="text-lg font-bold mb-4">Price: {classItem.price}</p>
                        {classItem.status && <p className="text-lg font-bold mb-4">Status: {classItem.status}</p>}

                        <ButtonComponents
                            status={classItem.status}
                            item={classItem}
                        />
                    </div>

                ))}
            </div>
        </div>
    );
};

export default AdminClassList;