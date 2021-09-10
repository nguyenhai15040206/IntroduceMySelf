import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label, Input } from 'reactstrap';
import { ErrorMessage } from 'formik';
import './style.css';

function TextAreaField(props) {
    const {
        form, field,
        type, lable, placeholder
    } = props;

    const { name } = field;
    const { errors, touched } = form;

    const showError = errors[name] && touched[name];
    return (
        <div>
            <FormGroup className="form-group">
                {lable && <Label for={name}>{lable}</Label>}
                <Input
                    className="input"
                    id={name}
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    invalid={showError}
                />
                <ErrorMessage name={name} component={FormFeedback} />
            </FormGroup>
        </div>
    )
}

TextAreaField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    lable: PropTypes.string,
    placeholder: PropTypes.string,
}

TextAreaField.defaultProps = {
    type: 'textarea',
    lable: '',
    placeholder: ''
}

export default TextAreaField

