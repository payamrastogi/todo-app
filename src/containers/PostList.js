import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import {deletePost} from '../actions';

function PostList ({postReducer, onDelete}) {
    return (
        <div>
            {postReducer.map(post => {
                return (
                    <Post post={post} onDelete={ onDelete } key={post.id}/>
                );
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        postReducer: state.postReducer
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onDelete: (id) => {
            dispatch(deletePost(id));
        }
    };
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(PostList)