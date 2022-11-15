import { Component } from "react";
import { Button } from '../../components/Button';
import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import './styles.css';

class Home extends Component {
  state = {
    posts: [],
    allPost: [],
    page: 0,
    postsPerPage: 20
  };

  timeoutUpdate = null;

  async componentDidMount() {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPost: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    console.log('load more posts call');
    const {
      page,
      postsPerPage,
      allPost,
      posts
    } = this.state

    const nextPage = page + postsPerPage;
    const nextPosts = allPost.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  }

  componentDidUpdate() { }

  componentWillUnmount() { }

  render() {
    const { posts, page, postsPerPage, allPost } = this.state;
    const noMorePosts = page + postsPerPage >= allPost.length

    return (
      <>
        <section className="container">
          <Posts posts={posts} />
          <div className="button-container">
            <Button
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts} />
          </div>
        </section>
      </>
    );
  }
}

export default Home;