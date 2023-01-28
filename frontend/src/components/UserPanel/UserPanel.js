import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Panel = () => {
  const handleSubmit = async (values) => {
    console.log("🚀 ~ file: UserPanel.js:7 ~ handleSubmit ~ values", values)
    await axios
      .post("http://localhost:5001/item/create", values)
      .then((res) => {
      if(res.data.message) {
        alert(res.data.message)
      } else {
        alert(res.data.error)
      }
      });
    
  };

  return (
    <>
      <Formik
      enableReinitialize={true}
        initialValues={{
          name: "",
          category: "",
          stock: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="border border-gray-400 w-1/2 mx-auto flex flex-col items-center justify-center">
            {/* item name */}
            <div className="mb-4 w-full flex flex-col justify-start">
              {/* label and error message */}
              <div className="flex justify-center">
                <label
                  htmlFor="name"
                  className="font-poppins font-bold text-base lg:text-lg"
                >
                  Name
                  <span className="text-red-500 font-extrabold text-xl">*</span>
                  &nbsp;
                </label>
                <p className="text-red-500 font-extrabold text-xl">
                  <ErrorMessage name="name" />
                </p>
              </div>
              <div className="flex justify-center">
                <Field
                  className="focus:outline-none p-2 bg-gray-300"
                  type="text"
                  name="name"
                  placeholder="Enter product Name"
                  required
                />
              </div>
            </div>

              {/* Amount */}
              <div className="mb-4 w-full flex flex-col justify-start">
              {/* label and error message */}
              <div className="flex justify-center">
                <label
                  htmlFor="stock"
                  className="font-poppins font-bold text-base lg:text-lg"
                >
                  Amount
                  <span className="text-red-500 font-extrabold text-xl">*</span>
                  &nbsp;
                </label>
                <p className="text-red-500 font-extrabold text-xl">
                  <ErrorMessage name="stock" />
                </p>
              </div>
              <div className="flex justify-center">
                <Field
                  className="focus:outline-none p-2 bg-gray-300"
                  type="number"
                  name="stock"
                  placeholder="Enter product stock"
                  required
                />
              </div>
            </div>

            {/* category */}
            <div className="mb-4 flex flex-col justify-center mx-12 ">
              <label
                htmlFor="category"
                className="text-2xl font-bold tracking-wider"
              >
                Select items ?
              </label>
              <div>
                <Field
                  as="select"
                  className="focus:outline-none focus:border-green-600 border-b-2 focus:transition-all focus:duration-300 my-2 font-poppins px-4 py-[10px] w-full rounded-xl shadow-md"
                  type="number"
                  name="category"
                >
                  <option value={null}>Select category</option>
                  <option value="computer accesories">
                    computer accesories
                  </option>
                  <option value="personal accesories">
                    personal accesories
                  </option>
                </Field>
              </div>
            </div>

            {/* Radio */}
            <div className="flex justify-center items-center flex-row gap-x-9">
              <label htmlFor="status">Select status</label>
              <div className=" mt-1">
                <div className="form-check">
                  <Field
                    type="radio"
                    required
                    autoComplete="off"
                    id="incoming"
                    name="status"
                    value="incoming"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-black bg-white checked:bg-red-600 checked:border-2 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    incoming
                  </label>
                </div>
              </div>
              <div className=" mt-1">
                <div className="form-check">
                  <Field
                    type="radio"
                    required
                    autoComplete="off"
                    id="outgoing"
                    name="status"
                    value="outgoing"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-black bg-white checked:bg-red-600 checked:border-2 checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <label className="form-check-label inline-block text-gray-800">
                    outgoing
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center my-4">
              <button
                type="submit"
                className="p-2 px-2 bg-green-500 text-white"
              >
                submit
              </button>
            </div>
          </div>
        </Form>

      </Formik>
      
    
    </>
  );
};

export default Panel;
