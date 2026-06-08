import React, {useState} from "react";

const RegisterViewModel = () => {
    const [values, setValues] = useState({
      userName: '',
      userDisplayName: '',
      userEmail: '',
      userPhone: '',
      userPassword: '',
      userConfirmPassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register = () => {
        console.log(JSON.stringify(values));
    }

    return {
        onChange,
        ...values,
        register,
    };
}

export default RegisterViewModel;