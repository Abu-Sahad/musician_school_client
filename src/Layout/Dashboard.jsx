import { Link, Outlet } from "react-router-dom";
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { MdPayment } from "react-icons/md";

const Dashboard = () => {

    const isAdmin = true;
    // TODO: admin panel 
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
                            isAdmin ? <>
                                <li><Link to='/dashboard/admin'> <FaHome></FaHome> Admin Home</Link></li>
                                <li><Link to='/dashboard/manageClass'>Manage Classes </Link></li>
                                <li><Link to='/dashboard/manageUsers'>Manage User</Link></li>
                            </> : <>
                                <li><Link to='/dashboard/home'> <FaHome></FaHome> User Home</Link></li>
                                <li><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</Link></li>
                                <li><Link to='/dashboard/payment'><MdPayment></MdPayment> Payment</Link></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;