import { PostCard } from '../PostCard/index';

export const Posts = ({ counter, posts }) => {
    return (
        <>
            <div className="posts">
                <p>{counter}</p>
                {posts.map(post => (
                    <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
                ))}
            </div>
        </>
    )
}