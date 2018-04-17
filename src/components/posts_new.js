import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
    router : PropTypes.object
};
const contextTypes = {
    router : PropTypes.object
};

class PostsNew extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this)
    }


    onSubmit(props){
        this.props.createPost(props).then(()=>{
            this.context.router.history.push('/');
        });

    }

    render() {

        const { handleSubmit } = this.props;

        return(
            <form onSubmit={ handleSubmit(this.onSubmit) } >
                <h3>Create A New Post</h3>
                <div className={"form-group"}>
                    <Field label={"title"} name={"title"} component={inputField} type={"text"} className={"form-control"} />
                </div>
                <div className={"form-group"}>
                    <Field label={"categories"} name={"categories"} component={inputField} type={"text"} className={"form-control"} />
                </div>
                <div className={"form-group"}>
                    <Field label={"content"} name={"content"} component={textField} className={"form-control"}/>
                </div>
                <div className={"btn-group"}>
                    <button type={"submit"} className={"btn btn-primary"}>Submit</button>
                    <Link to={"/"} className={"btn btn-danger"} >뒤로</Link>
                </div>
            </form>
        );
    }
}

const inputField = ({ input, label, type, className, meta: { touched, error, invalid } }) => (
    <div className={`control-group ${touched && invalid ? 'has-danger' : '' }`}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className={className} />
            {touched && error && <div className={"text-help"}>{error}</div> }
        </div>
    </div>
);
const textField = ({ input, label, className, meta: { touched, error, invalid } }) => (
    <div>
        <label>{label}</label>
        <div>
            <textarea {...input} placeholder={label} className={`${className} ${touched && invalid ? 'has-danger' : '' }`}/>
            {touched && error && <div className={"text-help"}>{error}</div> }
        </div>
    </div>
);

PostsNew.propTypes = propTypes;
PostsNew.contextTypes = contextTypes;

PostsNew = reduxForm({
    form : 'PostsNewForm'
})(PostsNew);

export default connect(null, {createPost})(PostsNew);

