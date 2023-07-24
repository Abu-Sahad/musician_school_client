import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { MdPayment } from "react-icons/md";
import useAdmin from "../component/hook/useAdmin";
import useInstructor from "../component/hook/useInstructor";

const Dashboard = () => {

    // const isAdmin = true;
    // TODO: admin panel 

    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    if (isAdminLoading) {
        return <div>Loading...</div>;
    }

    if (isInstructorLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? (
                                <>
                                    <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
                                    <li><Link to='/dashboard/admin-class-list'>Manage Classes</Link></li>
                                    <li><Link to='/dashboard/manageUsers'>Manage User</Link></li>

                                </>
                            )
                                :
                                (isInstructor ?

                                    <>
                                        <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
                                        <li><Link to='/dashboard/add-class'>Instructor Add Class</Link></li>
                                        <li><Link to='/dashboard/instructor-cart'>Instructor Class List</Link></li>
                                        <li><Link to='/dashboard/feedback'>Instructor Feedback</Link></li></>
                                    :
                                    <>

                                        <li><Link to='/'> <FaHome></FaHome> Home</Link></li>
                                        <li><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</Link></li>
                                        <li><Link to='/dashboard/payments'><MdPayment></MdPayment> Payment History</Link></li>

                                    </>
                                )
                        }
                        {/* {isInstructor && } */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;