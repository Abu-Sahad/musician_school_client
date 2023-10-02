import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import useAdmin from "../component/hook/useAdmin";
import useInstructor from "../component/hook/useInstructor";
import { useSpring } from "@react-spring/web";

// import { useEffect, useState } from "react";
// import axios from "axios";

const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    // const [userData, setUserData] = useState([]);
    // const [loading, setLoading] = useState(true); // Initialize loading state


    // Sidebar animation
    const sidebarAnimation = useSpring({
        transform: "translateX(0%)",
        from: { transform: "translateX(-100%)" },
        config: { tension: 280, friction: 60 },
    });

    // useEffect(() => {
    //     axios.get("https://musician-instrument-school.vercel.app/users")
    //         .then((response) => {
    //             setUserData(response.data);
    //             setLoading(false); // Set loading to false when data is loaded
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching user data:", error);
    //             setLoading(false); // Set loading to false on error as well
    //         });
    // }, []); // Empty dependency array to run once on component mount

    if (isAdminLoading || isInstructorLoading) {
        return <div>Loading...</div>;
    }

    // const loggedInUser = userData.find(user => user.id === ); 

    // // Determine the initial role to display for the logged-in user
    // let initialRoleContent = null;
    // if (loggedInUser) {
    //     const { name, role } = loggedInUser;
    //     initialRoleContent = (
    //         <div className="bg-blue-500 text-white p-4 rounded-lg">
    //             <p className="text-lg font-bold">{name}</p>
    //             <p className="text-sm">Role: {role}</p>
    //         </div>
    //     );
    // }

    return (
        <div style={sidebarAnimation}>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* {initialRoleContent} */}
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                            {isAdmin ? (
                                <>
                                    <li><Link to='/'>
                                        <FaHome />
                                        Home
                                    </Link></li>
                                    <li><Link to='/dashboard/admin-class-list'>Manage Classes</Link></li>
                                    <li><Link to='/dashboard/manageUsers'>Manage User</Link></li>
                                </>
                            ) : (isInstructor ? (
                                <>
                                    <li><Link to='/'>
                                        <FaHome />
                                        Home
                                    </Link></li>
                                    <li><Link to='/dashboard/add-class'>Instructor Add Class</Link></li>
                                    <li><Link to='/dashboard/instructor-cart'>Instructor Class List</Link></li>
                                    <li><Link to='/dashboard/feedback'>Instructor Feedback</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to='/'>
                                        <FaHome />
                                        Home
                                    </Link></li>
                                    <li><Link to='/dashboard/mycart'><FaShoppingCart /> My Cart</Link></li>
                                    <li><Link to='/dashboard/payments'><MdPayment /> Payment History</Link> </li>
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
