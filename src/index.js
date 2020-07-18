import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Akshat"
          date="Today at 6:00 pm"
          content="Nice Blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Chopra"
          date="Today at 4:00 pm"
          content="Nice Blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          date="Today at 7:00 pm"
          content="Nice Blog Post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
