import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { MdPayment } from "react-icons/md";

const Dashboard = () => {
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
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</Link></li>
                        <li><Link to='/dashboard/payment'><MdPayment></MdPayment> Payment</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;