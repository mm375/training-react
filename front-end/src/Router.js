import * as React from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

import Layout from './components/Layout';
import UserList from './components/Users/UserList';
import PostList from './components/Posts/PostList';

export default function Router() {
  const handleRemoveUser = (userId) => {
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<UserList />}>
          <Route
            path=":userId"
            element={<User onRemoveUser={handleRemoveUser} />}
          />
        </Route>
        <Route path="posts" element={<PostList />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const User = ({ onRemoveUser }) => {
  const { userId } = useParams();

  return (
    <>
      <h2>User: {userId}</h2>

      <button type="button" onClick={() => onRemoveUser(userId)}>
        Remove
      </button>

      <Link to="/users">Back to Users</Link>
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

