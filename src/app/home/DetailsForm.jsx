import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DetailsForm = ({ loading, data, onSubmit }) => {
    // State
    const [details, setDetails] = useState(data);
    const [submitted, setSubmitted] = useState(false);

    // Effect
    useEffect(() => {
        if (!loading && Object.keys(data).length > 0 && Object.keys(details) <= 0) {
            setDetails(data);
        }

        if (loading && Object.keys(details) > 0) {
            setDetails(data);
        }
    }, [loading, details, data]);

    useEffect(() => {
        if (loading && submitted) {
            setDetails({});
        }
    }, [loading, submitted]);

    const handleChange = e => {
        const { name, value } = e.target;
        if (submitted) {
            setSubmitted(false);
        }

        setDetails({ ...details, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
        onSubmit(details);
    };

    return (
        <div className="form-box">
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="first_name">Nombre</label>
                    <input
                        type="text"
                        name="first_name"
                        className={
                            'form-input' + (!loading && submitted && !details.first_name ? ' error' : '')
                        }
                        value={details.first_name || ''}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    {!loading && submitted && !details.first_name && (
                        <div className="error-block first_name">El nombre es obligatorio.</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Apellidos</label>
                    <input
                        type="text"
                        name="last_name"
                        className={
                            'form-input' + (!loading && submitted && !details.last_name ? ' error' : '')
                        }
                        value={details.last_name || ''}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    {!loading && submitted && !details.last_name && (
                        <div className="error-block last_name">El apellido es obligatorio.</div>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        className={'form-input' + (!loading && submitted && !details.email ? ' error' : '')}
                        value={details.email || ''}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    {!loading && submitted && !details.email && (
                        <div className="error-block email">El email es obligatorio.</div>
                    )}
                </div>
                <div className="form-group">
                    <button className="form-btn" disabled={loading}>
                        {loading ? (
                            <>
                                <i className="fas fa-spinner  fa-spin" /> loading ...
                            </>
                        ) : (
                            'Actualizar'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
};

DetailsForm.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.object,
    onSubmit: PropTypes.func
};

export default DetailsForm;
