import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="text-center text-success">React hook form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form w-50 mt-5"
        style={{ margin: "auto" }}
      >
        <div className="form-group">
          <p>Username</p>
          <input {...register("username")} className="form-control" />
        </div>
        <div className="form-group">
          <p>Password</p>
          <input {...register("password")} className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-outline-success" type="submit">
            Login
          </button>
        </div>
      </form>
      <div className="text-center w-100">
        <NavLink to="/">
          Back to home
        </NavLink>
      </div>
    </div>
  );
}
