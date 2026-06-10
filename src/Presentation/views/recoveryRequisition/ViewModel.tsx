import React, {use, useState} from 'react';

const RecoveryRequisitionViewModel = () => {
    const [values, setValues] = useState({
        userEmail: '',
    });

    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const RecoveryRequisition = () => {
        console.log(JSON.stringify(values));
    }


    return {
        ...values,
        onChange,
        RecoveryRequisition,
    }
}

export default RecoveryRequisitionViewModel;