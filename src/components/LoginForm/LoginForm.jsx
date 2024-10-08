import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
// import { login } from "../../redux/auth/operations"; 
import toast, { Toaster } from 'react-hot-toast';
import { useId } from "react";
import css from './LoginForm.module.css';
import { Button } from "../Button/Button";


export default function LoginForm() {

    const emailFieldId = useId();
    const passwordFieldId = useId();

    const successToast = () => toast.success('Successfully logged in!');
    const errorToast = () => toast.error('There has been an error, try reloading the page');


    const ValidationSchema = Yup.object().shape({
        email: Yup.string().email().required("Required!"),
        password: Yup.string().min(6, "Too short!").max(20, "Too long!").required("Required!"),
    });

    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(login({
            email: values.email,
            password: values.password,
        })).unwrap()
            .then(() => { successToast() })
            .catch(() => { errorToast() });

        actions.resetForm();
    
    }

    return (
        <div>
            <Toaster />
            <Formik 
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={ValidationSchema}>
                <Form className={css.form}>
                    <div className={css.container}>
                        <label className={css.labelContainer} htmlFor={emailFieldId}>Email</label>
                        <Field className={css.input} type="email" name="email" id={emailFieldId}></Field>
                        <ErrorMessage className={css.error} name="email" component="span"/>
                    </div>

                    <div className={css.container}>
                        <label className={css.labelContainer} htmlFor={passwordFieldId}>Password</label>
                        <Field className={css.input} type="password" name="password" id={passwordFieldId}></Field>
                        <ErrorMessage className={css.error} name="password" component="span"/>
                    </div>

                    <Button className={css.formBtn} type="submit">Login</Button>
                </Form>
            </Formik>
        </div>
        
    )
}