import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';
import { ErrorMessage } from 'formik';

import './style.css';

function InputField(props) {
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
                    id={name}
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    invalid={showError}
                />
                <ErrorMessage id="#errors" name={name} component={FormFeedback} />
            </FormGroup>
        </div>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    lable: PropTypes.string,
    placeholder: PropTypes.string,
}

InputField.defaultProps = {
    type: 'text',
    lable: '',
    placeholder: ''
}

export default InputField

