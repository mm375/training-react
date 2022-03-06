import React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './post.scss';
import PostCard from './PostCard';

export default function UserList() {
  const [data] = useState(Array(12).fill({
    name: 'Shrimp and Chorizo Paella',
    desc: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  }));
  return (
    <div className='post-list'>
      <div className='row'>
        {
          data.map((item, idx) => <PostCard {...item} key={idx} />)
        }
      </div>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <Pagination count={10} />
      </Stack>
    </div>
  );
}
