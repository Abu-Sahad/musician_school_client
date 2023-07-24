import { FaTrashAlt } from "react-icons/fa";
import useBookCart from "../../../component/hook/useBookCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyBookCard = () => {
    const [cart, refetch] = useBookCart();

    const totalPrice = cart.reduce((acc, value) => acc + value.price, 0);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://musician-instrument-school.vercel.app/bookCart/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })


    }

    return (
        <div className=" w-full">
            <div className='flex justify-around mb-10'>
                <p className='uppercase font-semibold text-2xl'>Total Items: {cart.length}</p>
                <p className='uppercase font-semibold text-2xl'>Total Price: {totalPrice}</p>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ${item.price}
                                </td>
                                <td><button onClick={() => handleDelete(item)} className="btn btn-error"><FaTrashAlt></FaTrashAlt>Delete</button></td>
                                <td><Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-warning">pay</button></Link></td>
                            </tr>)
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookCard;