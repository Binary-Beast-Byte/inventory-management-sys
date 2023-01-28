import axios from "axios";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { toast, ToastContainer } from "react-toastify";
import "./pagination.css";
import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom'

const Tab = ({ data, rowsPerPage }) => {
  // for pagination
  const [users, setUsers] = useState(data.slice(0));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;
  const [pageCount, setPageCount] = useState(
    Math.ceil(data.length / usersPerPage)
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  // const [page, setPage] = useState(1);
  // const { slice, range } = useTable(data, page, rowsPerPage);
  //  console.log(rowsPerPage);
  //  console.log(range)
  //  console.log(slice)
  // for search
  const [searchterm, setSearchTerm] = useState("");
 
  
  return (
    <div className=" text-sm text-left pt-3">
     
      <div className="px-12 text-start sm:px-0">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 md:w-96 sm:w-96">
            <label
              htmlFor="Text"
              className="form-label font-Poppins inline-block mb-2 text-gray-700 font-bold text-sm"
            >
              Search Users
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="Text"
              placeholder="Search Agent Here"
              value={searchterm}
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="w-[94%] text-sm text-left mx-10">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 border border-gray-300 text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Full Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              isDeleted
            </th>
            <th scope="col" className="px-6 py-3">
              isConfirmed
            </th>
            {/* <th scope="col" className="">
            <select
                   className="px-6 py-3 uppercase"
                   onChange={(e)=>{
                    console.log(`${e.target.value} clicked`);
                    if(e.target.value === 'Confirmation Status' || e.target.value === '' ){
                      setUsers(data)
                       setPageCount(Math.ceil(data.length / usersPerPage))
                    }
                   else if(e.target.value === 'Seen'){
                      axios.get('http://localhost:5001/user/confirmedUser').then((res)=>{
                        console.log(res.data)
                        setUsers(res.data);
                        setPageCount(Math.ceil((res.data).length / usersPerPage))
                        
                      })
                    }
                    else if(e.target.value === 'Pending'){
                      axios.get('http://localhost:5001/user/pendingUser').then((res)=>{
                        console.log(res.data)
                        setUsers(res.data);
                        setPageCount(Math.ceil((res.data).length / usersPerPage))
                      })
                    }
                   
                  }}
                 >
                   <option className='uppercase'>Confirmation Status</option>
                   <option className='uppercase'>Seen</option>
                   <option className='uppercase'>Pending</option>
                  
                 </select>
            </th> */}
            <th scope="col" className="px-6 py-3">
              isSuspended
            </th>
            <th scope="col" className="px-6 py-3">
              isBlocked
            </th>
            <th scope="col" className="px-6 py-3">
              MoreInfo
            </th>
          </tr>
        </thead>
        <tbody className=" text-gray-800 text-center">
          {users.length > 0 ? (
            <>
              {data &&
                users
                  .filter((val) => {
                    if (searchterm === "") {
                      return val;
                    } else if (
                      val.name
                        .toLowerCase()
                        .includes(searchterm.toLowerCase()) ||
                      val.email.toLowerCase().includes(searchterm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((val) => (
                    <tr
                      key={val.id}
                      className="border border-gray-300 bg-gray-100 hover:bg-red-100 text-gray-700"
                    >
                      <td className="px-6 py-4 font-medium">{val.id}</td>
                      <td className="px-6 py-4 font-medium">{val.firstName}</td>
                      <td className="px-6 py-4 font-medium">{val.email}</td>
                      <td className="px-6 py-4 font-medium">{val.isDeleted}</td>
                      <td className="px-6 py-4 font-medium">
                        {val.isConfirmed}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {val.isSuspended}
                      </td>
                      <td className="px-6 py-4 font-medium">{val.isBlocked}</td>

                      {/* <td className="px-6 py-4 font-medium">
                  {" "}
                  {val.confirmed === 0 ? (
                    <button
                      className="bg-red-400 w-10"
                      onClick={() => {
                        setTimeout(toast('User Confirmed'), 3000);  
                        confirm(val.email)}}
                    >
                      
                      {" "}
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                  ) : (
                    <button className="bg-green-400 w-10" onClick={()=>{
                      setTimeout(toast('User Suspended'), 3000);  
                      suspend(val.email)}}
                    >
                      <i class="fa fa-check" aria-hidden="true"></i>
                    </button>
                  )}{" "}
                  
                </td>
              <td className="px-6 py-4 font-medium">{val.is_deleted === 0 ? (
                    <span className="bg-green-500 text-white rounded p-2 font-bold capitalize">
                      active
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white rounded p-2 font-bold capitalize">
                      {" "}
                      deleted
                    </span>
                  )}</td> */}
                    </tr>
                  ))}
            </>
          ) : (
            <>
              {data &&
                data
                  .filter((val) => {
                    if (searchterm === "") {
                      return val;
                    } else if (
                      val.name
                        .toLowerCase()
                        .includes(searchterm.toLowerCase()) ||
                      val.email.toLowerCase().includes(searchterm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .slice(pagesVisited, pagesVisited + usersPerPage)
                  .map((val) => (
                    <tr
                      key={val.id}
                      className="border border-gray-300 bg-gray-100 hover:bg-red-100 text-gray-700"
                    >
                      <td className="px-6 py-4 font-medium">{val.id}</td>
                      <td className="px-6 py-4 font-medium">{val.firstName}</td>
                      <td className="px-6 py-4 font-medium">{val.email}</td>
                      <td className="px-6 py-4 font-medium">{val.isDeleted==1 ? "True" : "False"}</td>
                      <td className="px-6 py-4 font-medium">
                        {val.isConfirmed==1 ? "True" : "False"}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {val.isSuspended==1 ? "True" : "False"}
                      </td>
                      <td className="px-6 py-4 font-medium">{val.isBlocked==1 ? "True" : "False"}</td>
                      {/* user suspend button */}
                      <td className="px-6 py-4 font-medium">
                          <Link
                            to={`/get-admin/${val.id}`}
                            className=" w-10 bg-red-400 p-2 text-yellow-500"
                            >
                            <i class="fa-solid fa-user"></i>
                          </Link>
                         
                      </td>
                      {/* Delete User Button */}
                      {/* <td className="px-6 py-4 font-medium">{val.is_deleted === 0 ? (
                    <span className="bg-green-500 text-white rounded p-2 font-bold capitalize">
                      active
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white rounded p-2 font-bold capitalize">
                      {" "}
                      deleted
                    </span>
                  )}</td> */}
                    </tr>
                  ))}
            </>
          )}
        </tbody>
      </table>

      {/* <TableFooter range={range} slice={slice} setPage={setPage} page={page} /> */}
      {searchterm === "" && users.length > 0 ? (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      ) : (
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={
            data.filter((val) => {
              if (
                val.firstName.toLowerCase().includes(searchterm.toLowerCase()) ||
                val.email.toLowerCase().includes(searchterm.toLowerCase())
              ) {
                return val;
              }
            }).length / usersPerPage
          }
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Tab;
