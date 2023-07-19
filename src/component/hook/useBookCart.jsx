import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const useBookCart = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['bookCart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookCart?email=${user?.email}`);
            return res.json();
        },
    });

    return [cart, refetch];
};

export default useBookCart;