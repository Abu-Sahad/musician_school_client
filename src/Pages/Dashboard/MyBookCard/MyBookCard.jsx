import { FaTrashAlt } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import useBookCart from "../../../component/hook/useBookCart";

const MyBookCard = () => {
    const [cart] = useBookCart();
    return (
        <div>
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
                            cart.map((row, index) => <tr
                                key={row._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{row.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {row.price}
                                </td>
                                <td><button className="btn btn-error"><FaTrashAlt></FaTrashAlt>Delete</button></td>
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