import { React, useContext } from "react";
import { menuContext } from "../../Hooks/MenuContext";

const DashBoard = () => {
  const { hamBurger } = useContext(menuContext);
  return (
    <>
      <div
        className={
          hamBurger
            ? "fixed top-[75px] right-[5px] left-[100px] transition-all"
            : "fixed top-[75px] right-[5px] left-[300px] transition-all"
        }
      >
        <div className="text-xl font-bold">DashBoard</div>
      </div>
    </>
  );
};

export default DashBoard;
