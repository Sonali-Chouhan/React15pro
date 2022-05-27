import React,{useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const Aboutone = () => {
  const [values, setValues] = React.useState({
    Username: "",
    lastName: "",
    password: "",
	confirmPassword:'',
    showPassword: false,
  });
  const [error, setError] = useState({
    Username: "",
	lastName: "",
    password: "",
    confirmPassword: "",
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const onInputChange = (event) => {
    const { name, value } = event.target;
    setValues((pre) => ({
      ...pre,
      [name]: value,
    }));
    validateInput(event);
  };

  const validateInput = (event) => {

	event.preventDefault();
    const { name, value } = event.target;
    setError((pre) => {
      const dataObject = { ...pre, [name]: "" };
      switch (name) {
        case "Username":
          if (!value) {
            dataObject[name] = "Please enter Username.";
          }
          break;
		  case "lastName":
          if (!value) {
            dataObject[name] = "Please enter Username.";
          }
          break;
        case "password":
          if (!value) {
            dataObject[name] = "Please enter Password.";
          } else if (values.confirmPassword && value !==values.confirmPassword) {
            dataObject["confirmPassword"] =
              "Password and confirmPassword not match";
          } else {
            dataObject["confirmPassword"] = values.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;
        case "confirmPassword":
          if (!value) {
            dataObject[name] = "Please enter confirmPassword .";
          } else if (values.password && value !== values.password) {
            dataObject[name] = "Password and confirmPassword not match";
          }

          break;
        default:
          break;
      }
      return dataObject;
    });
  };
  const handleSubmit=(event)=>{
	  console.log("va;ue",values)
  }

   
  
  return (
    <div
    // style={{
    // 	marginLeft: "30%",
    // }}
    >
      <h4>How to show and hide password in ReactJS?</h4>

      <InputLabel htmlFor="standard-adornment-password">
        Enter your Name
      </InputLabel>

      <Input
        type="name"
        onChange={onInputChange}
        value={values.Username}
		onBlur={validateInput}
      />
      <InputLabel htmlFor="standard-adornment-password">
        Enter  your  last
      </InputLabel>

      <Input
        type="lastName"
        onChange={onInputChange}
        value={values.lastName}
		onBlur={validateInput}
      />
      <InputLabel htmlFor="standard-adornment-password">
        Enter your Password
      </InputLabel>

      <Input
        type={values.showPassword ? "text" : "password"}
		onChange={onInputChange}
		onBlur={validateInput}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
	  <InputLabel htmlFor="standard-adornment-password">
        Enter your ConfirmPassword
      </InputLabel>

      <Input
        type='confirmPassword'
        onChange={onInputChange}
		onBlur={validateInput}
        value={values.confirmPassword}
        
      /><br></br>
      <button type="submit" onClick={(event) => handleSubmit(event)}>
        submit
      </button>
    </div>
  );
};

export default Aboutone;
