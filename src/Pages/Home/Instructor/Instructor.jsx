import { useEffect, useState } from "react";

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://musician-instrument-school.vercel.app/users/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {instructors.map((instructor, index) => (
                    <div key={index} className="bg-white p-4 rounded shadow text-center">
                        <img src={instructor.image} alt={instructor.name} className="w-40 h-40 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
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



{/* <div className="text-center w-full md:w-2/3 lg:w-2/4 mx-auto space-y-5 mb-10">
    <h2 className={`text-3xl font-bold ${theme === 'light' ? "text-gray-900" : "text-gray-100"}`}>Meet our top Instructors</h2>
    <p className={`${theme === 'light' ? "text-gray-900" : "text-gray-400"}`}>Unveiling the Masters of Language Education: Get Inspired by the Unparalleled Expertise, Passion, and Teaching Excellence of our Top Instructors</p>
</div>

<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
        popularInstructors.map(instructor => <Instructor
        key={instructor._id}
        instructor={instructor}
        ></Instructor>)
    }
</div>
</div> */}