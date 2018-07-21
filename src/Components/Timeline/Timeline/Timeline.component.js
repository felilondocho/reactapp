import React from 'react';

import Card from '../Card';
import styles from './Timeline.scss';
import { Button } from '../../../../node_modules/antd';

const fetchedPosts = posts => (
  posts.map((post, id) => (
    <Card key={id} post={post} />
  ))
)

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchPosts, currentInitChunk, currentEndChunk } = this.props;
    fetchPosts(currentInitChunk, currentEndChunk);
  }

  render() {
    const { posts, fetchPosts, currentInitChunk, currentEndChunk } = this.props;
    return (
      <div className={styles.timeline}>
        {posts.length && (fetchedPosts(posts))}
        {posts.length && (
          <Button onClick={() => fetchPosts(currentInitChunk, currentEndChunk)}>Load more</Button>
        )}
        {!posts.length && (<h1>Loading...</h1>)}
        {/* {posts.length ? fetchedPosts(posts) : <h1>Loading...</h1>} */}
      </div>
    );
  }
}

export default Timeline;