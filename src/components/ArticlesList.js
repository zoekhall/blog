import { Link } from 'react-router-dom';
//p displays a sample of text (first 150 characters)

const ArticlesList = ({ articles }) => {
	return (
		<>
			<h1>Articles</h1>
			{articles.map((article) => (
				<Link
					key={article.name}
					to={`/articles/${article.name}`}>
					<h3>{article.title}</h3>
					<p>{article.content[0].substring(0, 150)}...</p>
				</Link>
			))}
		</>
	);
};

export default ArticlesList;
