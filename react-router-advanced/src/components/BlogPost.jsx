import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {postId}</h2>
      <p>This is a dynamic route displaying content for post {postId}.</p>
    </div>
  );
};

export default BlogPost;
