import React from 'react';

const AboutMusicSchool = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-5">
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2">
                <img
                    src="https://rhythmo.themerex.net/wp-content/uploads/2017/12/image-12-copyright.jpg"
                    alt="Music School"
                    className="w-full h-auto"
                />
            </div>

            {/* Right Side (Text) */}
            <div className="w-full md:w-1/2 bg-gray-100 p-6 text-center pt-5 lg:pt-32 md:pt-32">
                <h2 className="text-xl font-serif text-gray-400 mb-4">WELCOME THERE</h2>
                <p className="text-6xl font-sans font-bold mb-4">Musician Summer Camp</p>
                <p className="text-lg mb-4">
                    At our School, we share our passion for music with students from all walks of life. Whether young or old, beginner or master, our students grow!
                </p>
            </div>
        </div>
        </div>
    );
};

export default AboutMusicSchool;
