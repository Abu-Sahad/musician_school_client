import { FaTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import useBookCart from "../../../component/hook/useBookCart";
import Swal from "sweetalert2";

const MyBookCard = () => {
    const [cart, refetch] = useBookCart();


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
                fetch(`http://localhost:5000/bookCart/${item._id}`, {
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
        <div className="w-full">
            <h1 className="text-center text-4xl font-bold mb-5">My Cart : {cart.length}</h1>

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
                            <th>Payment</th>
                            <th></th>
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
                                    {item.price}
                                </td>
                                <td><button onClick={() => handleDelete(item)} className="btn btn-error"><FaTrashAlt></FaTrashAlt>Delete</button></td>
                                <td><button className="btn bg-slate-400 "><MdPayment></MdPayment> Pay</button></td>

                            </tr>)
                        }



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookCard;