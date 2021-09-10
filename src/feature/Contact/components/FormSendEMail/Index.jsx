import React from 'react'
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types'
import InputField from '../../../../customfields/InputField/InputField';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
import './style.css'
import TextAreaField from '../../../../customfields/InputFieldArea/TextArea';

function FormEMail(props) {

    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const validationShema = Yup.object().shape({
        name: Yup.string().required("This is field is required"),
        email: Yup.string().email('Invalid Email').required("This is field is required"),
        subject: Yup.string().required("This is field is required"),
        message: Yup.string().required("This is field is required")
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={(values, actions) => {
                props.onSubmit(values);
                actions.resetForm({
                    values: {
                        name: '',
                        email: '',
                        message: '',
                        subject: '',
                    }
                })
            }}
        >
            {
                formikProps => {
                    return (
                        <Form>
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <FastField
                                        name="name"
                                        component={InputField}

                                        placeholder="Name"
                                    />
                                </div>
                                <div className="col-12 col-lg-6">
                                    <FastField
                                        name="email"
                                        component={InputField}

                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-12">
                                    <FastField
                                        name="subject"
                                        component={InputField}

                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="col-12">
                                    <FastField
                                        name="message"
                                        component={TextAreaField}

                                        placeholder="Message"
                                    />
                                </div>
                                <div className="col-12">
                                    <FormGroup>
                                        <Button type="submit" className="btn-send-email">Send Message</Button>
                                    </FormGroup>
                                </div>
                            </div>

                        </Form>
                    )
                }
            }
        </Formik>
    )
}

FormEMail.propTypes = {
    onSubmit: PropTypes.func,

}

FormEMail.defaultProps = {
    onSubmit: null,
}

export default FormEMail

