import React, { useState, useEffect } from 'react'
//import { UserDetails } from './UserDetails';
import { Pagination } from './Pagination';
import { Loader } from './Loader';
import { UserList } from './UserList';
import { User } from '../Interfaces/common';

export const UserGrid = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);

  //fetch userdetails for first page on first render
  useEffect(() => {
    async function getUsers() {
      try {
        setLoading(true);
        const response = await fetch(`https://give-me-users-forever.vercel.app/api/users/${(page - 1) * 10}/next`);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    }

    getUsers();
  }, [page]);

  return (
    <div className='userGrid'>
      <h3 className='userHeader'>Users</h3>
      <UserList users={users} />
      <Pagination currPage={page} setPage={setPage} />
       {isLoading && <Loader />}
    </div>
  );

}



