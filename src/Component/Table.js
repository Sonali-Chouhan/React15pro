import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

const Table = () => {
  const { show, setshow } = useState(
      {
          setpassword:false,
          
      }
  );
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    
  };

const handleClickShowPassword = () => {
	setshow({ ...show, setpassword: !show.setpassword });
    
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit())}>
        <input type="first_name" {...register("first_name")} />
        <input type="last_name" {...register("last_name")} />
        <input type="email" {...register("email")} />
        <input
        type={show.setpassword ? "text" : "password"}
          {...register("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {show.setpassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <input type="number" {...register("phone_no")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Table;
