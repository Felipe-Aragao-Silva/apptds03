import React, {useState} from "react";

const RecoveryPasswordViewModel = () =>{
    const [values, setValues] = useState({
      userToken: '',  
      userEmail: '',
      userPassword: '',
      userConfirmPassword: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const resetPassword = () => {
        console.log(JSON.stringify(values));
    }
    
    return{
        ...values,
        onChange,
        resetPassword,
    };
}

export default RecoveryPasswordViewModel;
