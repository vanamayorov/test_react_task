import * as yup from 'yup';


export const schema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field")
        .matches(/^([^0-9]*)$/, "Name should not contain numbers")
        .min(2, "The name must be at least 2 characters.")
        .max(60, "User name should not be more than 60 characters"),
    email: yup
        .string()
        .email("The email must be a valid email address.")
        .min(2, "Email should not be less than 2 characters")
        .max(100, "Email should not be more than 100 characters")
        .required("Email is a required field"),
    phone: yup
        .string()
        .required("Phone is a required field")
        .matches(/^[+]{0,1}380([0-9]{9})$/, "Phone should have correct format")
        .min(13, "User phone should not be less than 12 characters"),
    jobPosition: yup.mixed().required("Job position is a required field"),
    file: yup
        .mixed()
        .test("type", "Unsupported file type(jpeg/jpg are only supported)", (value) => {
            return value === null || (value && ['image/jpeg', 'image/jpg'].includes(value[0]?.type))
        })
        .test("fileSize", "The photo may not be greater than 5 Mbytes.", (value) => {
            return value === null || (value && value[0]?.size <= 5000000)
        })

});