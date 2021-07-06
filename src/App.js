
/* 
    state yönetimini yapan ve propslarda dağıtım yapan ana component
*/


import React, { Component } from "react";
import AddComment from "./companents/addComment/addComment";
import Comment from "./companents/comment/comment";
import alertify from "alertifyjs";
import "./App.css";

export default class App extends Component {
  // State tanımlamaları  yapıldı.
  state = {
    comments: [],
    commentValue: "",
    vote: 0,
  };

  // Yıldız seçme ve derecelendirme state yönetimi için fonksiyon 
  ratingChanged = (newRating) => {
    this.setState({ vote: newRating });
  };

  //Textarea içindeki değer ve state yönetimi için fonksiyon
  writeComment = (e) => {
    this.setState({ commentValue: e.target.value });
  };

  // Butona tıklandığında yönetilen fonksiyon
  addComment = () => {
    document.getElementById("textarea").value = "";

    if (this.state.vote === 0) {
      alertify.error("İlk önce yıldız sayısı seçilmelidir.", 2);
    } else if (this.state.commentValue.length < 3) {
      alertify.error("Yorumunuz 3 karakterden az olamaz", 2);
    } else {
      this.setState({ starChange: true });
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
      <div className="App">
        <h1>Yorumlar</h1>
        <Comment comments={this.state.comments}></Comment>
        <h3>Yorum EKLE</h3>
        <AddComment
          starChange={this.state.starChange}
          ratingChanged={this.ratingChanged}
          writeComment={this.writeComment}
          addComment={this.addComment}
        ></AddComment>
      </div>
    );
  }
}
