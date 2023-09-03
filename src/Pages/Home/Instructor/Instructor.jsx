import { useEffect, useState } from "react";

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://musician-instrument-school.vercel.app/instructor')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {instructors.map((instructor, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow">
                        <img src={instructor.image} alt={instructor.name} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{instructor.name}</h2>
                        <p className="text-gray-500 mb-2">{instructor.email}</p>
                        {instructor.numClassesTaken && (
                            <p className="text-xl font-semibold mb-2">Classes taken: {instructor.numClassesTaken}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instructor;
