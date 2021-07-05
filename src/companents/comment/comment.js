import React from 'react'

function Comment({comments , vote ,commentValue}) {
    return (
        <div>
            {

                comments.length === 0 ? <h5>Henüz hiç yorum yok</h5> :
               
                comments.map(comment  => (<h3 key = {comment.vote}> Comment : {comment.text} , Vote : {comment.vote} </h3>))
                
                // <h5>Yıldız = {comments.vote} Comment = {comments.title}</h5>
            }
      
            
            
        </div>
    )
}

export default Comment
