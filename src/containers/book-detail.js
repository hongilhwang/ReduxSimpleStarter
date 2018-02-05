import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BookDetail extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {

        if( !this.props.book )
            return <div>책을 선택해주세요.</div>;

        return(
            <div>
                <h3>Details for :</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
      book: state.activeBook
    };
}
export default connect(mapStateToProps)(BookDetail);