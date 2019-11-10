import React from 'react';

function PostItem ( { data } ) {
  return (
    <div>
      <ul>
        <li>
          <aside className="post">
            <Post data={data} />
            <div className="reply">
              <ul>
              {
                data.comments.map(comment => 
                <Reply
                  key={comment.id}
                  comment={ comment } 
                />)
              } 
              </ul>
            </div>
          </aside>
        </li>
      </ul>
    </div>
  );
}

function Post ( { data } ) {
  return (
    <div className="user-post">
      <div className="user">
        <img src= { data.author.avatar } alt="avatar"/>
        <div>
          <strong> { data.author.name } </strong>
          <span> { data.date } </span>
        </div>
      </div>
      <p> { data.content } </p>
    </div>
  );
}

function Reply ( { comment }) {
  return (
    <li>
      <img src= { comment.author.avatar } alt="avatar"/>
      <div className="reply-text">
        <p><strong>{ comment.author.name } </strong>{ comment.content }</p>
      </div>
    </li>
  );
}

export default PostItem;