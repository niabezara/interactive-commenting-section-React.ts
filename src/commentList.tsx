import { useState } from "react";
import Data from "./Data/Data.json";
import { Comment } from "./commentInterface";
// import newComponent from "./newComponent";

import NewPost from "./NewPost";
import styled from "styled-components";

function CommentList(props: any) {
  const [newComment, setNewComment] = useState("");
  const [id, setId] = useState(null);
  const [showReplay, setshowReplay] = useState(false);

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
    // setNewComment("");
    setshowReplay(false);
  };
  const handlePostClick = () => {
    const newPost = {
      id: Data.comments.length + 1,
      content: newComment,
      createdAt: getCurrentTimestamp(),
      score: 0,
      replyingTo: Data.currentUser.username,
      user: Data.currentUser,
      replies: [],
    };
    Data.comments.push(newPost);
    setNewComment("");
  };

  const handleEdit = (id: number) => {
    console.log(newComment);
  };
  return (
    <Card>
      {Data.comments.map((item, index) => {
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
                    {comment.user.username === Data.currentUser.username ? (
                      <div>
                        <button onClick={() => handleEdit(id)}>Edit</button>
                        <button>Delete</button>
                      </div>
                    ) : (
                      <Replay onClick={() => handleClick(index)}>replay</Replay>
                    )}
                  </Info>
                  <p>{comment.content}</p>
                </ReplaySubCard>
              );
            })}

            {id === index && showReplay && (
              <ReplaySection>
                <img
                  src={Data.currentUser.image.png}
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

const Button = styled.button`
  border-radius: 8px;
  background: var(--moderate-blue, #5357b6);
  border: none;
  color: #fff;
  padding: 12px 30px;
`;

const Card = styled.div`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const SubCard = styled.div`
  background: var(--white, #fff);
  padding: 24px;
  border-radius: 8px;
`;

const ReplaySubCard = styled(SubCard)`
  margin: 15px 0 15px 50px;
  padding-left: 15px;
`;

const ReplaySection = styled(ReplaySubCard)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  input {
    width: 100%;
    border: none;
    border-radius: 8px;
    border: 1px solid var(--light-gray, #e9ebf0);
    background: var(--white, #fff);
    margin-left: 16px;
    margin-right: 16px;
    height: 96px;
  }
`;

const Replay = styled.button`
  color: var(--moderate-blue, #5357b6);
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  background: transparent;
  border: none;
  &:before {
    content: url("/images/icon-reply.svg");
    background-repeat: no-repeat;
    background-position: center;
  }
`;
