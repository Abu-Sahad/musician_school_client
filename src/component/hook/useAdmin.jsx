import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext);

    // Add a log to check if the email is being passed correctly
    console.log('User Email:', user?.email);

    const { data: isAdmin, isLoading: isAdminLoading, error: isAdminError } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
            return res.json();
        }
    });

    // Add logs to check the values
    console.log('isAdmin:', isAdmin);
    console.log('isAdminLoading:', isAdminLoading);
    console.log('isAdminError:', isAdminError);

    return [isAdmin?.admin, isAdminLoading];
}

export default useAdmin