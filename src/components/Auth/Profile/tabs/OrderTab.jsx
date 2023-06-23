import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../../config";
import { useAuth } from "../../../../context/auth-context";
import dayjs from "dayjs";

export default function OrderTab() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}shipping-order-fetch/?user_id=${user?.user_id}`)
      .then((res) => {
        setOrders(res.data.results);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        {orders?.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {/* table heading */}
              <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
                <td className="py-4 block whitespace-nowrap text-center">
                  Order
                </td>
                <td className="py-4 whitespace-nowrap text-center">Date</td>
                <td className="py-4 whitespace-nowrap text-center">Status</td>
                <td className="py-4 whitespace-nowrap text-center">Amount</td>
                <td className="py-4 whitespace-nowrap  text-center">Action</td>
              </tr>
              {/* table heading end */}
              {/* table body */}
              {orders?.map((order) => (
                <tr className="bg-white border-b hover:bg-gray-50">
                  <td className="text-center py-4">
                    <span className="text-lg text-qgray font-medium">
                      #{order.order_id}
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-qgray  whitespace-nowrap">
                      {dayjs(order.date_created).format("DD-MMMM-YYYY")}
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-sm rounded text-green-500 bg-green-100 p-2">
                      {order.order_status.toUpperCase()}
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                      {order.total_amount}
                    </span>
                  </td>
                  <td className="text-center py-4">
                    <button
                      type="button"
                      className="w-[116px] h-[46px] bg-qyellow text-qblack font-bold"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
              {/* table body end */}
            </tbody>
          </table>
        ) : (
          <h2>No orders yet</h2>
        )}
      </div>
    </>
  );
}
