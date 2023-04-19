import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ArticlesListPage from './components/ArticlesListPage';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My Awesome Blog</h1>
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
