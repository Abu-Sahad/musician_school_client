import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                return fetch('https://musician-instrument-school.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                });
            })
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            {/* add google login field */}

            <div className="w-full text-center my-8">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
            </div>


        </div>
    );
};

export default SocialLogIn;