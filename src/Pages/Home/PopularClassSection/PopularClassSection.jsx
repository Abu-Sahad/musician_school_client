import React, { useEffect, useState } from "react";

const PopularClassSection = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/popular")
            .then(res => res.json())
            .then((data) => {
                setLoading(false);
                setPopularClasses(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching transaction data:", error);
                setLoading(false);
            });
    }, []);
    console.log(popularClasses)

    return (

        <>

            <h1 className="text-center text-4xl font-bold mb-10 text-[#3498DB]">Popular Class Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {popularClasses.map((classItem) => (
                    <div key={classItem.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">{classItem?.name}</h2>
                        <p className="text-gray-600">Available Seats: {classItem?.availableSeats}</p>
                        <p className="text-gray-600">Price: {classItem?.price}</p>
                        <p className="text-gray-600">Enrolled: {classItem?.enrolled}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularClassSection;
