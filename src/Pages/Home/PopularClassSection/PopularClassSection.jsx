import React, { useEffect, useState } from "react";

const PopularClassSection = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://musician-instrument-school.vercel.app/popular")
            .then(res => res.json())
            .then((data) => {
                setLoading(false);
                setPopularClasses(data);
            })
            .catch((error) => {
                console.error("Error fetching transaction data:", error);
                setLoading(false);
            });
    }, []);
    // console.log(popularClasses)

    return (

        <>
            <h4 className="text-center text-2xl font-bold text-red-500">Our Classes</h4>
            <h1 className="text-center text-5xl font-bold mb-10 text-[#3498DB]">Most Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {popularClasses.slice(0, 6).map((classItem) => (
                    <div key={classItem._id} className="bg-white p-4 rounded-lg shadow-md">
                        <img src={classItem?.image} alt={classItem.name} className="w-full h-48 object-cover mb-4" />
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
