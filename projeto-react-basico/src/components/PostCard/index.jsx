export const PostCard = ({cover, title, body, id}) => {
  return (
    <div className="post">
      <img src={cover} alt="Imagem" />
      <div className="post-card">
        <h1> {title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
};
