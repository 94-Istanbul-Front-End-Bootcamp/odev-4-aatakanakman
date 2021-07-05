import React, { Component } from "react";
import AddComment from "./companents/addComment/addComment";
import Comment from "./companents/comment/comment";
import ReactStars from "react-rating-stars-component";
import alertify from "alertifyjs";

export default class App extends Component {
  
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
  };

  ratingChanged = (newRating) => {
    this.setState({ vote: newRating });
  };

  writeComment = (e) => {

    this.setState({ commentValue : e.target.value});


  }

  addComment = () => {
    
    if (this.state.vote === 0) {

      alertify.error('İlk önce yıldız sayısı seçilmelidir.',2);
    
    }else if(this.state.commentValue.length < 3) {

      alertify.error('Yorumunuz 3 karakterden az olamaz',2);

    }
     else {
      const newState = this.state;

      newState.comments.push({
        text: this.state.commentValue,
        vote: this.state.vote,
      });

      newState.commentValue = "";
      newState.vote = 0;

      
      
      this.setState({
        ...newState,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Yorumlar</h1>
        <Comment comments={this.state.comments} vote = {this.state.vote} commentValue = {this.state.commentValue}></Comment>
        <h3>Yorum EKLE</h3>
        <AddComment writeComment = {this.writeComment} addComment={this.addComment}></AddComment>
        <ReactStars onChange={this.ratingChanged} />
      </div>
    );
  }
}
