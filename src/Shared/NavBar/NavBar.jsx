import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useBookCart from "../../component/hook/useBookCart";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useBookCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    
    const commonLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-instructor'>Instructors</Link></li>
        <li><Link to='/all-class'>Classes</Link></li>
        <li>
            <Link to="/dashboard/mycart">
                <button className="btn gap-2 btn-sm">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>

    </>
    return (
        <div className="navbar  bg-opacity-30 pr-10 bg-black text-[#bd8731]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {commonLink}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl font-bold">Musicine</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {commonLink}
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <>
                        <div style={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "50%", // This will create a circular shape
                            overflow: "hidden" // To clip the image within the circular container
                        }}>
                            <img
                                src={user.photoURL}
                                alt="User"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>

                        <button className="btn btn-sm ms-2 text-[#bd8731]"><Link className="me-2" to='/dashboard'>Dashboard</Link></button>

                        <button onClick={handleLogOut} className="btn btn-ghost btn-sm">LogOut</button>
                    </> : <>
                        <li><Link to="/login">Login</Link></li>
                    </>
                }
            </div>
        </div>
    );
};

export default NavBar;