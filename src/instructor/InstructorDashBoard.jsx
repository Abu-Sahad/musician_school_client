//import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';

const InstructorDashBoard = () => {
    return (
     <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/instructor-dashBoard/instructor-cart'><FaShoppingCart></FaShoppingCart>Instructor All Class</Link></li>
                        <li><Link to='/instructor-dashBoard/add-class'><MdPayment></MdPayment> Add Class</Link></li>
                        <li><Link to='/instructor-dashBoard/feedback'><MdPayment></MdPayment> Feedback</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default InstructorDashBoard;