import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
const ArticlesDetail = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/articles/" + id;
  const { data: article, error, isPending } = useFetch(url);
  return (
    <div>
      {" "}
      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {isPending && (
        <div>
          <h3>Loading...</h3>
        </div>
      )}
      {article && (
        <>
          <img src={article.image} alt={article.title} width={300} />
          <h2>Title: {article.title}</h2>
          <p>
            Author: <i>{article.author}</i>
          </p>
          <p>{article.body}</p>
        </>
      )}
    </div>
  );
};

export default ArticlesDetail;
