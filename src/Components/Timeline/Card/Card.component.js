import React from 'react';
import { Collapse } from 'antd';

import styles from './Card.scss';

import Comment from '../Comment';

const Panel = Collapse.Panel;

const collapseCallback = (postId, fetchComments, comments) => {
  if (!comments[postId]) {
    fetchComments({ postId });
  }
};

const Card = ({ post, fetchComments, comments, fetchingComments }) => (
  <div className={styles.card}>
    <p>{post.id}</p>
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    <Collapse
      onChange={() => collapseCallback(post.id, fetchComments, comments)}
    >
      <Panel header="Comments">
        {comments[post.id] &&(
          comments[post.id].map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))
        )}
        {fetchingComments && (
          <h3>Loading Comments...</h3>
        )}
      </Panel>
    </Collapse>
  </div>
);

export default Card;