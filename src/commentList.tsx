import { useState } from "react";
import Data from "./data/data.json";
import NewPost from "./NewPost";
import { Comment, CommentData } from "./commentInterface";

import {
  Button,
  Replay,
  ReplaySection,
  ReplaySubCard,
  SubCard,
  Info,
  Card,
  Delete,
  Input,
  PopUp,
  Overlay,
  Buttons,
  Edit,
} from "./commentStyle";

function CommentList() {
  const [newComment, setNewComment] = useState("");
  const [id, setId] = useState(null);
  const [showReplay, setshowReplay] = useState(false);
  const [edit, setEdit] = useState<number | null>(null);
  const [commentsData, setCommentsData] = useState<CommentData>(Data);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

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
    const day = now.getDate();
    const month = now.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  }

  //   this function is to replay the comments
  const handleReplyClick = (commentIndex: number, item: any) => {
    if (newComment === "") {
      return;
    }
    const newReply = {
      id: Math.floor(Math.random() * 100000),
      content: newComment,
      createdAt: getCurrentTimestamp(),
      score: 0,
      replyingTo: commentsData.currentUser.username,
      user: commentsData.currentUser,
    };

    commentsData.comments[commentIndex].replies.push(newReply);
    setNewComment("");
    setshowReplay(false);
  };

  //   this function is for post the new comment
  const handlePostClick = () => {
    const newPost = {
      id: Math.floor(Math.random() * 100000),
      content: newComment,
      createdAt: getCurrentTimestamp(),
      score: 0,
      replyingTo: commentsData.currentUser.username,
      user: commentsData.currentUser,
      replies: [],
    };
    commentsData.comments.push(newPost);
    setNewComment("");
  };
  const handleEditSubmit = (commentIndex: any, replyId: any) => {
    const updatedCommentsData = { ...commentsData };
    updatedCommentsData.comments[commentIndex].replies[replyId].content =
      updatedCommentsData.comments[commentIndex].replies[
        replyId
      ].content.trim();
    setCommentsData(updatedCommentsData);
    setEdit(null);
  };
  const handleDelete = (commentIndex: any, replyId: any) => {
    const updatedCommentsData = { ...commentsData };
    if (replyId === undefined) {
      // Deleting a post
      updatedCommentsData.comments.splice(commentIndex, 1);
    } else {
      // Deleting a reply
      updatedCommentsData.comments[commentIndex].replies.splice(replyId, 1);
    }
    setCommentsData(updatedCommentsData);
  };
  return (
    <Card>
      {commentsData.comments.map((item) => {
        const index = commentsData.comments.findIndex(
          (comment) => item.id == comment.id
        );

        return (
          <div key={item.id}>
            <SubCard>
              <Info>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <img
                    src={item.user.image.png}
                    alt=""
                    width="32px"
                    height="32px"
                  />
                  <h1>{item.user.username}</h1>
                  <p>{item.createdAt}</p>
                </div>
                <Replay onClick={() => handleClick(index)}>replay</Replay>
              </Info>
              <p>{item.content}</p>
            </SubCard>

            {item.replies.map((comment, id) => {
              return (
                <ReplaySubCard key={id}>
                  <Info>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <img
                        src={comment.user.image.png}
                        alt=""
                        width="32px"
                        height="32px"
                      />
                      <h1>{comment.user.username}</h1>
                      <p>{item.createdAt}</p>
                    </div>
                    {comment.user.username ===
                    commentsData.currentUser.username ? (
                      <div>
                        <Delete
                          onClick={() => {
                            setShowConfirmation(true);
                            setItemToDelete({
                              commentIndex: index,
                              replyId: id,
                            });
                          }}
                        >
                          Delete
                        </Delete>

                        <Edit
                          onClick={() => {
                            setEdit(comment.id);

                            console.log(comment.id);
                          }}
                        >
                          Edit
                        </Edit>
                      </div>
                    ) : (
                      <Replay onClick={() => handleClick(index)}>replay</Replay>
                    )}
                  </Info>
                  {edit == comment.id ? (
                    <Input
                      value={commentsData.comments[index].replies[id].content}
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          console.log(e.key);
                          handleEditSubmit(index, id);
                        }
                      }}
                      onClick={(e) =>
                        console.log((e.target as HTMLInputElement).readOnly)
                      }
                      onChange={(e) => {
                        const clone = { ...commentsData };
                        clone.comments[index].replies[id].content =
                          e.target.value;
                        setCommentsData(clone);
                      }}
                    />
                  ) : (
                    <p>{commentsData.comments[index].replies[id].content}</p>
                  )}
                </ReplaySubCard>
              );
            })}

            {id === index && showReplay && (
              <ReplaySection>
                <img
                  src={commentsData.currentUser.image.png}
                  alt=""
                  width="32px"
                  height="32px"
                />
                <Input
                  type="text"
                  value={newComment}
                  placeholder="new Comment"
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button onClick={() => handleReplyClick(index, item)}>
                  SEND
                </Button>
              </ReplaySection>
            )}
          </div>
        );
      })}
      {showConfirmation && (
        <>
          <Overlay></Overlay>
          <PopUp>
            <h1>Delete comment</h1>
            <p>
              Are you sure you want to delete this comment? This will remove the
              comment and can’t be undone.
            </p>
            <Buttons>
              <button
                className="button1"
                onClick={() => {
                  setShowConfirmation(false);
                  if (itemToDelete) {
                    const { commentIndex, replyId } = itemToDelete;
                    handleDelete(commentIndex, replyId);
                  }
                  setItemToDelete(null);
                }}
              >
                YES, DELETE
              </button>
              <button
                className="button2"
                onClick={() => setShowConfirmation(false)}
              >
                NO, CANCEL
              </button>
            </Buttons>
          </PopUp>
        </>
      )}

      <NewPost
        handlePostClick={handlePostClick}
        setNewComment={setNewComment}
        newComment={newComment}
        commentsData={commentsData}
      />
    </Card>
  );
}

export default CommentList;
