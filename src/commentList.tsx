import { useState } from "react";
import Data from "./Data/Data.json";
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
} from "./commentStyle";

function CommentList() {
  const [newComment, setNewComment] = useState("");
  const [id, setId] = useState(null);
  const [showReplay, setshowReplay] = useState(false);
  const [edit, setEdit] = useState(false);
  const [commentsData, setCommentsData] = useState<CommentData>(Data);

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

    commentsData.comments[item.id - 1].replies.push(newReply);
    // setNewComment("");
    setshowReplay(false);
  };
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
    // setNewComment("");
  };

  const handleEdit = (id: number, comment: any, index: number) => {
    setEdit(true);
  };
  return (
    <Card>
      {commentsData.comments.map((item, index) => {
        return (
          <div key={index}>
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
                        <button onClick={() => handleEdit(id, comment, index)}>
                          Edit
                        </button>
                        <button>Delete</button>
                      </div>
                    ) : (
                      <Replay onClick={() => handleClick(index)}>replay</Replay>
                    )}
                  </Info>
                  {edit ? (
                    <input
                      value={commentsData.comments[index].replies[id].content}
                      onKeyDown={(e) => {
                        if (e.key == "Enter") {
                          setEdit(false);
                        }
                      }}
                      onClick={(e) =>
                        console.log((e.target as HTMLInputElement).readOnly)
                      }
                      onChange={(e) => {
                        console.log("hello");
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
                <input
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
      <NewPost
        handlePostClick={handlePostClick}
        setNewComment={setNewComment}
        newComment={newComment}
        handleEdit={handleEdit}
      />
    </Card>
  );
}

export default CommentList;
