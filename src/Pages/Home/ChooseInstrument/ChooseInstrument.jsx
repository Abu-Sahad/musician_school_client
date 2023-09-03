import React from 'react';

const ChooseInstrument = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-10 rounded">
            <div className="flex flex-col md:flex-row lg:flex-row">
                {/* Left side (image) */}
                <div className="w-full md:w-1/2 lg:w-1/2">
                    <img
                        src="https://i.ibb.co/Sv58qth/music-class1.webp"
                        alt="Instrument"
                        className="w-full h-auto"
                    />
                </div>

                {/* Right side (text) */}
                <div className="w-full md:w-1/2 lg:w-1/2 p-4 bg-slate-200 text-center pt-5 md:pt-20 lg:pt-20">
                    <h1 className="text-6xl font-semibold">
                        How to Choose an Instrument
                    </h1>
                    <p className="text-sky-500 mt-5">MUSICAL INSTRUMENT</p>
                    <p className="mt-4">
                        If you want to dip into the fascinating world of music but don't
                        know how to play musical instruments and are unsure where to start,
                        you definitely need to contact us! Our experts provide professional,
                        practical, and theoretical music instructions that will help you
                        choose the right direction.
                    </p>
                    <button className="mt-4 px-3 py-3 bg-yellow-300 rounded-2xl text-black text-xl">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChooseInstrument;
