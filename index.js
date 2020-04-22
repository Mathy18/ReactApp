import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
return (
  
<div className  = "ui container comments">
<ApprovalCard>
  <CommentDetail author = "sam" TimeAgo ="Today 4.45pm" Comments = "Nice Blog" avatar = {faker.image.avatar()}/>
  <CommentDetail author = "alex" TimeAgo ="Today 4.55pm" Comments = "I like the subject" avatar = {faker.image.avatar()}/>
  <CommentDetail author = "jane" TimeAgo ="Today 4.15pm" Comments = "Nice Content" avatar = {faker.image.avatar()}/>
  </ApprovalCard>
  </div>


);
};

  ReactDOM.render (
  <App/>,
  document.getElementById ('root')  
  )
