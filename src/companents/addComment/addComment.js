import React from 'react'
import { Button } from 'reactstrap';

function AddComment(props) {
    return(
        <div>
            <textarea onChange = {props.writeComment}></textarea>
            <Button color="success" onClick = {props.addComment}>Yorum Yap</Button>
        </div>
      );
}

export default AddComment
