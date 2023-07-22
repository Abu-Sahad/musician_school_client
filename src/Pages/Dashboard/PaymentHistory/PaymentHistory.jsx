import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const [transaction, setTransaction] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/payment/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setTransaction(data);
                console.log(data)
            })
            .catch((error) => {
                console.error("Error fetching transaction data:", error);
                setLoading(false);
            });
    }, [user.email]);
    console.log(transaction)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map((item) => (
                        <tr key={item.transactionId}>
                            <td>{item.transactionId}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;
