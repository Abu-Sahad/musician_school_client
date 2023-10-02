import { useEffect, useState } from "react";

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://musician-instrument-school.vercel.app/users/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="px-4 md:px-0 md:pt-10 md:pb-20">
                <div className="text-center w-full md:w-2/3 lg:w-2/4 mx-auto space-y-5 mb-10">
                    <h4 className=" mt-8 text-center text-2xl font-bold text-red-500">Our Instructor</h4>
                    <h1 className="mt-2 mb-10 text-[#3498DB] text-center text-5xl font-bold">Popular Instructor</h1>
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        instructors.slice(0, 6).map((instructor, index) => (
                            <div key={index} className="p-5 border border-gray-500 border-opacity-20 rounded-xl cursor-pointer bg-white">
                                <div className="h-full text-center">
                                    <img alt="" className="w-40 h-40 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={instructor.image} />
                                    <h2 className="font-medium text-sm text-gray-900">{instructor.name}</h2>
                                    <p className="text-gray-500">{instructor.email}</p>
                                    <span className="inline-block h-[5px] w-10 rounded-full bg-[#1ebbfe] mt-6"></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructor;



