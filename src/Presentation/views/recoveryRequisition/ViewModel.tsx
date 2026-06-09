import React, {use, useState} from 'react';

const RecoveryRequisitionViewModel = () => {
    const [values, setValues] = useState({
        userEmail: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }


    return {
        ...values,
        onChange,
    }
}

export default RecoveryRequisitionViewModel;