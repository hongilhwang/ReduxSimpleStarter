import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const contextTypes = {
  router : PropTypes.object
};

class PostsShow extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){

        this.props.fetchPost(this.props.match.params.id);
    }

    onDeleteClick(){
        this.props.deletePost(this.props.match.params.id).then( ()=>{
            this.context.router.history.push('/');
        });
    }
    render() {

        const { post } = this.props;

        if( !this.props.post ){
            return <div>Loading...</div>
        }

        return(
            <div className="row">
                <div className={"col-md-12 btn-group"}>
                    <Link to={"/"} className={"btn btn-primary"}>Back to index.</Link>
                    <button onClick={this.onDeleteClick.bind(this)} className={"btn btn-danger"}>Delete post</button>
                </div>
                <div className={"col-md-12"}>
                    <h3>{post.title}</h3>
                    <h6>Categories : {post.categories}</h6>
                    {post.content}
                </div>
            </div>
        );
    }
}

function mapStateToProps( state ){
    return { post : state.posts.post }
}

PostsShow.contextTypes = contextTypes;

export default connect( mapStateToProps, { fetchPost, deletePost } )(PostsShow);