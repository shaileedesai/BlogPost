import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import PostLisiting from './components/PostListing';
import PostDetail from './components/PostDetail';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/"  element={<PostLisiting/>} />
        <Route path="/post/:postId"  element={<PostDetail/>} />
        <Route path="/Add"  element={<AddPost/>} />
        <Route path="/Edit/:postId"  element={<EditPost/>} />
        <Route>404</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
