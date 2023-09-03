import React, { useState, useEffect } from 'react';

const MusicGroup = () => {
    const [musicData, setMusicData] = useState([]);

    useEffect(() => {
        // Fetch data from '/musicGroup.json'
        fetch('/musicGroup.json')
            .then((response) => response.json())
            .then((data) => setMusicData(data));
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto mb-10">
            {/* <h4 className="text-center text-2xl font-bold text-red-500">Music Groups</h4> */}
            <h1 className="text-center text-5xl font-bold mb-10 text-[#3498DB]">Music Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {musicData.map((group) => (
                    <div
                        className="bg-white rounded-lg shadow-md p-4 text-center"
                        key={group.id}
                    >
                        <img
                            src={group.image}
                            alt={group.name}
                            className="mx-auto w-32 h-32 rounded-full mb-4"
                        />
                        <h2 className="text-2xl font-bold">{group.name}</h2>
                        <p className="text-gray-600">{group.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MusicGroup;
