import React from 'react';
import { Field, reduxForm } from 'redux-form';

class Contact extends React.Component {
    constructor (props) {
        super(props);
    }

    handleSubmit (values) {
        alert('Submitted : '+ JSON.stringify(values));
    }

    render () {
        const { pristine, reset, submitting } = this.props;
        return (
            <div>
                <form className="contact" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <Field name="name" component="input" type="text" placeholder="Name"/>
                        <label>Company</label>
                        <Field name="company" component="input" type="text" placeholder="Company"/>
                        <label>Email</label>
                        <Field name="email" component="input" type="email" placeholder="Email"/>
                        <label>Phone Number</label>
                        <Field name="phoneNumber" component="input" type="number" placeholder="Phone Number"/>
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </form>
            </div>
        )
    }
};
export default reduxForm({
    form: 'contact', // a unique identifier for this form
})(Contact);