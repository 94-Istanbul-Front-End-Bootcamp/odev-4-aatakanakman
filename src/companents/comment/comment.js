/* 
    Yorumların kontrolü ile birlikte, çıkacak olan bilgilendirme 
    kontrol eden component.
*/


import React from 'react'
import ReactStars from "react-rating-stars-component";
import "../../App.css"

function Comment({comments}) {
    return (
        <div>
            {

                comments.length === 0 ? <h5>Henüz hiç yorum yok</h5> :
               
                comments.map(comment  => (<h3 className = "comment" key = {comment.vote}>{comment.text}  <ReactStars classNames = "starts" edit = {false} value = {comment.vote}></ReactStars> </h3>))
                
                
            }
      
            
            
        </div>
    ) 
}

export default Comment
