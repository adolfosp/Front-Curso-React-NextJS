import { Component } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { loadPosts } from "./utils/load-posts";

class App extends Component {
  state = {
    posts: [],
  };

  timeoutUpdate = null;

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { posts, counter } = this.state;
    return (
      <>
        <section className="container">
          <Posts counter={counter} posts={posts} />
        </section>
      </>
    );
  }
}

export default App;