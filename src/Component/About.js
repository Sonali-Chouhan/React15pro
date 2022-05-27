import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const About = () => {
    const [values, setValues] = React.useState({
	Username:'',
	password: "",
	Lastname:'',
	phone:'',
	showPassword: false,
});

const handleClickShowPassword = () => {
	setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
	event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
	setValues({ ...values, [prop]: event.target.value });
};
const handleSubmit=(event)=>{
	event.preventDefault();
	console.log("data",values)

}
  return (
        <div
	// style={{
	// 	marginLeft: "30%",
	// }}
	>
	<h4>How to show and hide password in ReactJS?</h4>
	<InputLabel >
		Enter Your Username
	</InputLabel>
	<Input
		type="Username"
		onChange={handlePasswordChange("Username")}
		value={values.Username}
	
	/>
	<InputLabel >
		Enter Your Lastname
	</InputLabel>
	<Input
		type="Lastname"
		onChange={handlePasswordChange("Lastname")}
		value={values.Lastname}
	
	/>
	<InputLabel >
		Enter Your phone
	</InputLabel>
	<Input
		type="phone"
		onChange={handlePasswordChange("phone")}
		value={values.phone}
	
	/>
	<InputLabel htmlFor="standard-adornment-password">
		Enter Your Password
	</InputLabel>
	<Input
		type={values.showPassword ? "text" : "password"}
		onChange={handlePasswordChange("password")}
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
	<br></br>
	<button onClick={(event)=>handleSubmit(event)}>submit</button>
	
    </div>
  )
}

export default About;



