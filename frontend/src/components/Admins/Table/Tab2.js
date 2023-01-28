import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";

const Tab2 = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/admin/all").then((response) => {
      console.log(response.data);
      setUser(response.data);
    });
  }, []);
  return (
    <div>
       {
        user && user ?
      <Table data={user} rowsPerPage={8} />
      : 'loading..'
       }
    </div>
  );
};

export default Tab2;
