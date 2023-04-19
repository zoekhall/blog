import { useParams } from "react-router-dom";

const ArticlePage = () => {
	const { articleId } = useParams();
	return (
		<h1>This is the article page!</h1>
	);
};

export default ArticlePage;
