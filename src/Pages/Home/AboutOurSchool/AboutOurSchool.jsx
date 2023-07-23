const AboutOurSchool = () => {
    return (
        <div className="mb-10">
            <div className="mb-10">
                <h4 className="text-center text-2xl font-bold text-red-500">Dedication to Instructor</h4>
                <h1 className="text-center text-5xl font-bold mb-10 text-[#3498DB]">About The School</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Piano Classes */}
                <div className="bg-white shadow-md rounded-md p-6 space-y-6">
                    <div className="relative h-24  md:h-34 w-24 md:h-34">
                        <img
                            src="https://songbook.qodeinteractive.com/wp-content/uploads/2020/04/h-2-custom-icon-1.png"
                            alt="Piano Classes"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">Piano Classes</h2>
                    <p className="text-gray-700">
                        Piano classes offer a comprehensive curriculum for beginners and advanced students alike. Learn to play the piano with experienced instructors in a supportive environment.
                    </p>
                </div>

                {/* Wind Instruments */}
                <div className="bg-white shadow-md rounded-md p-6 space-y-6">
                    <div className="relative h-24  md:h-34 w-24 md:h-34">
                        <img
                            src="https://songbook.qodeinteractive.com/wp-content/uploads/2020/04/h-2-custom-icon-2.png"
                            alt="Wind Instruments"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">Wind Instruments</h2>
                    <p className="text-gray-700">
                        Explore the world of wind instruments and master the art of playing the flute, saxophone, clarinet, and more. Whether you're a beginner or an intermediate, we have classes to suit your level.
                    </p>
                </div>

                {/* Guitar Lessons */}
                <div className="bg-white shadow-md rounded-md p-6 space-y-6">
                    <div className="relative h-24  md:h-34 w-24 md:h-34">
                        <img
                            src="https://songbook.qodeinteractive.com/wp-content/uploads/2020/04/h-2-custom-icon-3.png"
                            alt="Guitar Lessons"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">Guitar Lessons</h2>
                    <p className="text-gray-700">
                        Unleash your inner rockstar with guitar lessons. From acoustic to electric, our expert instructors will guide you through chords, scales, and solos to enhance your guitar-playing skills.
                    </p>
                </div>

                {/* Drum Experts */}
                <div className="bg-white shadow-md rounded-md p-6 space-y-6">
                    <div className="relative h-24  md:h-34 w-24 md:h-34">
                        <img
                            src="https://songbook.qodeinteractive.com/wp-content/uploads/2020/04/h-2-custom-icon-4.png"
                            alt="Drum Experts"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-md"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">Drum Experts</h2>
                    <p className="text-gray-700">
                        Learn to keep the beat and groove with our drum experts. Whether you're a beginner or looking to improve your drumming techniques, we have the right lessons for you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutOurSchool;
