import { Dispatch, SetStateAction, useState } from "react";
import Data from "./Data/Data.json";
import styled from "styled-components";
import { Comment, CommentData } from "./commentInterface";

export default function NewPost({
  handlePostClick,
  newComment,
  setNewComment,
  commentsData,
}: {
  handlePostClick: () => void;
  setNewComment: Dispatch<SetStateAction<string>>;
  newComment: string;
  commentsData: CommentData;
}) {
  const [edit, setEdit] = useState(false);

  const newPostEdit = () => {
    if (newComment.trim() !== "") {
      setEdit(true);
    }
  };

  return (
    <NewCommentSection>
      <img src={Data.currentUser.image.png} alt="" width="40px" height="40px" />
      <input
        type="text"
        name=""
        id="0"
        value={newComment}
        placeholder="Add a comment…"
        onChange={(e) => setNewComment(e.target.value)}
      />

      <Button
        onClick={() => {
          handlePostClick();
          newPostEdit();
        }}
      >
        SEND
      </Button>
    </NewCommentSection>
  );
}

const NewCommentSection = styled.div`
  border-radius: 8px;
  background: var(--white, #fff);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 34px;
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
const Button = styled.button`
  border-radius: 8px;
  background: var(--moderate-blue, #5357b6);
  border: none;
  color: #fff;
  padding: 12px 30px;
`;
