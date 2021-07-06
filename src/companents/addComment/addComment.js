
/* 
    Input işlemlerini kontrol eden component
*/


import React from 'react'
import { Button } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
import "../../App.css"


function AddComment(props) {
    return(
        <div>
            <textarea id="textarea" onChange = {props.writeComment}></textarea>
            <div ><ReactStars classNames="starts" onChange = {props.ratingChanged}></ReactStars>     </div>
            <Button color="success" onClick = {props.addComment}>Yorum Yap</Button>
        </div>
      );
}

export default AddComment
