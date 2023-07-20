import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const useInstructor = () => {
    const { user } = useContext(AuthContext);

    // Add a log to check if the email is being passed correctly
    console.log('User Email:', user?.email);

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`);
            return res.json();
        }
    });


    return [isInstructor?.instructor, isInstructorLoading];
}

export default useInstructor