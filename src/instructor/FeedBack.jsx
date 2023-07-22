import {useEffect, useState, useContext} from 'react';
import {AuthContext} from '../Providers/AuthProvider';

const FeedBack = () => {
    const [allFeedback,setAllFeedback] = useState([]);
     const {user} = useContext(AuthContext);
    const email = user?.email;
    const getAllCourse = async () => {
  try {
    const allData = await fetch('http://localhost:5000/get-all-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Assuming email is defined elsewhere.
    });

    const data = await allData.json(); // Resolve the Promise to get the data
    
    setAllFeedback(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
console.log('all feedback =>', allFeedback);
useEffect(() => {
  getAllCourse();
}, []);

    return (
       <div className="mb-4 w-full">
            <h1 className="text-2xl font-bold mb-4 text-center"> Feedback </h1>
            <div className="card flex-shrink-0 items-center justify-center shadow-2xl bg-base-100">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {allFeedback.map((item)=>
                <div key={item._id}  className="bg-white p-4 rounded-md shadow-md mb-10 ml-5">
                     <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4" />
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-700 mb-2">Total {item.availableSeats}seats</p>
                    <p className="text-lg font-bold mb-4">Status : Denied </p>
                    <p className="text-lg font-bold mb-4">{item.price}  </p>
                     <p className="text-gray-700 mb-2">
                        <span className='font-bold text-md'>Reason : </span>
                         {item.reason}</p>
                </div>
            )}
                  
            </div>
        </div>
       </div> 
    );
};

export default FeedBack;