import { MDBCol, MDBInput, MDBRadio } from 'mdb-react-ui-kit';
import PropTypes from "prop-types";

export const InputField = ({ id, type, placeholder, value, onChange, error }) => (
    <MDBCol md="12" className="mb-3">
        {error && <div className="text-danger mb-1">{error}</div>}
        <MDBInput
            wrapperClass="mb-3"
            id={id}
            type={type}
            placeholder={placeholder}
            size="md"
            value={value}
            onChange={onChange}
        />
    </MDBCol>
);

InputField.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
};

export const RadioGroup = ({ name, options, selectedValue, onChange, label }) => (
    <MDBCol md="12" className="mb-3">
        <h6 className="fw-bold mb-2">{label}</h6>
        {options.map((option) => (
            <MDBRadio
                key={option.value}
                name={name}
                value={option.value}
                label={option.label}
                inline
                checked={selectedValue === option.value}
                onChange={onChange}
            />
        ))}
    </MDBCol>
);

RadioGroup.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.string.isRequired,
    selectedValue: PropTypes.string.isRequired,
    onChange: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};