import { useEffect, useState } from "react";

const ClassSection = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data));
    }, []);

    console.log(classes);

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {classes.map((classItem) => (

                <div key={classItem.id} className="bg-white p-4 rounded-md shadow">
                    <img src={classItem.image} alt={classItem.name} className="w-full h-48 object-cover mb-4" />
                    {console.log(classItem.image)}
                    <h2 className="text-xl font-bold mb-2">{classItem.name}</h2>
                    <p className="text-gray-700 mb-2">Instructor: {classItem.instructor}</p>
                    <p className={`text-sm mb-2 ${classItem.availableSeats === 0 ? "text-red-500" : ""}`}>
                        Available Seats: {classItem.availableSeats}
                    </p>
                    <p className="text-lg font-bold mb-4">Price: {classItem.price}</p>
                    <button
                        className={`w-full py-2 px-4 rounded-md ${classItem.availableSeats === 0 ? "bg-red-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                        disabled={classItem.availableSeats === 0}
                    >
                        Select
                    </button>
                </div>

            ))}
        </div>
    );
};

export default ClassSection;
