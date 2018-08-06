import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/'
import { Link } from 'react-router-dom';

class PostsIndex extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map((post) => {
            return (
                <li className={"list-group-item"} key={post.id}>
                    <Link to={`posts/${post.id}`}>
                        <span className={"pull-xs-right"}>{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            )
        });
    }

    render() {
        return(
            <div>
                <div className={"text-xs-right"}>
                    <Link to={"/posts/new"} className={"btn btn-primary"}>
                        create form
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className={"list-group"}>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state){
    return { posts : state.posts.all }
}

const mapDispatchToProps = ( dispatch ) => {

  const action = type => dispatch({type});
  return {
    fetchPosts : () => action(actions.FETCH_POSTS)
  }
}


export default connect( mapStateToProps, mapDispatchToProps )(PostsIndex);