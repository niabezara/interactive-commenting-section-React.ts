import React, { useRef, useState } from "react";
import Data from "./Data/Data.json";
import newComponent from "./newComponent";
import { Comment } from "./commentInterface";

const NewStyle = newComponent(CommentList);

function CommentList(props: any) {
  const [newComment, setNewComment] = useState("");
  const [id, setId] = useState(null);
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [showReplay, setshowReplay] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = (itemIndex: any) => {
    if (id === itemIndex) {
      setId(null);
    } else {
      setId(itemIndex);
      setshowReplay(true);
    }
  };

  function getCurrentTimestamp() {
    const now = new Date();
    return now.toISOString();
  }

  const handleReplyClick = (commentIndex: number, item: any) => {
    if (newComment === "") {
      return;
    }
    const newReply = {
      id: Data.comments[commentIndex].replies.length + 1,
      content: newComment,
      createdAt: getCurrentTimestamp(),
      score: 0,
      replyingTo: Data.currentUser.username,
      user: Data.currentUser,
    };

    Data.comments[item.id - 1].replies.unshift(newReply);
    setNewComment("");
    setshowReplay(false);
  };

  return (
    <div>
      {Data.comments.map((item, index) => {
        return (
          <div key={index}>
            <div {...props}>
              <img src={item.user.image.png} alt="" />
              <h1>{item.user.username}</h1>
              <p>{item.content}</p>
              <button onClick={() => handleClick(index)}>replay</button>
            </div>

            <div style={{ backgroundColor: "green" }}>
              {item.replies.map((comment, id) => {
                return (
                  <div key={id}>
                    <img src={comment.user.image.png} alt="" />
                    <h1>{comment.user.username}</h1>
                    <p>{comment.content}</p>
                    {comment.user.username === Data.currentUser.username ? (
                      <>
                        <button>Edit</button>
                        <button>Delete</button>
                      </>
                    ) : (
                      <button onClick={() => handleClick(index)}>replay</button>
                    )}
                  </div>
                );
              })}
            </div>
            {id === index && showReplay && (
              <div>
                <img src={Data.currentUser.image.png} alt="" />
                <input
                  type="text"
                  value={newComment}
                  placeholder="new Comment"
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={() => handleReplyClick(index, item)}>
                  SEND
                </button>
              </div>
            )}
          </div>
        );
      })}
      <div>
        <h1>{Data.currentUser.username}</h1>
        <img src={Data.currentUser.image.png} alt="" />
        <input
          type="text"
          name=""
          id=""
          placeholder="Add a comment…"
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button>SEND</button>
      </div>
    </div>
  );
}

export default NewStyle;
