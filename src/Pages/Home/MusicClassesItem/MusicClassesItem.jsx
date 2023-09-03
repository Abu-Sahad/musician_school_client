import { useEffect, useState } from "react";

const MusicClassesItem = () => {
    const [classesData, setClassesData] = useState([]);

    useEffect(() => {
        // Fetch data from '/classesList.json'
        fetch('/classesList.json')
            .then((response) => response.json())
            .then((data) => setClassesData(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
            <h4 className="text-center text-2xl font-bold text-red-500">Our Music Class List</h4>
            <h1 className="text-center text-5xl font-bold mb-10 text-[#3498DB]">Explore Our Music Classes List</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {classesData.map((classItem) => (
                    <div
                        key={classItem.id}
                        className="bg-white rounded-lg shadow-md p-4 text-center"
                    >
                        <div className="flex justify-center">
                            <img
                                src={classItem.image}
                                alt={classItem.name}
                                className="w-32 h-32 rounded-xl mb-4"
                            />
                        </div>
                        <h2 className="text-xl font-bold">{classItem.name}</h2>
                        <p className="text-gray-600">{classItem.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MusicClassesItem;
