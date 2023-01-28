import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {

const [data, setData] = useState();
  // const data = [
  //   {
  //     item: `mouse`,
  //     status: `outgoing`,
  //   },
  //   {
  //     item: `keyboard`,
  //     status: `ingoing`,
  //   },
  // ];

  const getAllData = () => {
    axios
      .get("http://localhost:5001/item/all")
      .then((res) => {
        console.log('res data', res)
        setData(res.data)
      })
  }

  useEffect(() => {
    getAllData()
  }, [])
  return (
    <div className="flex justify-center">
      <table className="table-auto">
        {/* :TABLE HEAD */}
        <thead className=" bg-black  text-white text-left  ">
          <tr>
            <th
              className="py-3 px-4 text-lg font-bold  uppercase tracking-wide "
              scope="col"
            >
              Item
            </th>
            <th
              className="py-3  text-lg px-3 font-bold uppercase tracking-wide text-end"
              scope="col"
            >
              status
            </th>

            <th
              className="py-3  text-lg px-3 font-bold uppercase tracking-wide text-end"
              scope="col"
            >
              Category
            </th>
          </tr>
        </thead>

        {/* :TABLE BODY */}
        <tbody className="">
          {data && data.map((user, index) => (
            <tr
              key={user.name}
              className={`${
                index % 2 === 0 ? "bg-slate-200" : "bg-green-200"
              } `}
            >
              <td className="py-3 px-8 text-xs md:text-base text-zinc-700 font-semibold ">
                {user.name} 
              </td>
              <td className="py-3 text-xs md:text-base text-black font-medium ">
                {user.status}
              </td>
              <td className="py-3 text-xs md:text-base text-black font-medium ">
                {user.category} 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
