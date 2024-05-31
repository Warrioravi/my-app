import React from 'react'
import { User } from '../Interfaces/common';



type UserListProps={
    users: User[];
}

  

export const UserList = ({users}: UserListProps) => {
    return (
        <div className='userListWrapper'>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>JobTitle</th>
                    <th>Email Address</th>
                    <th>Phone</th>
                    <th>Company</th>
                </tr>
                {users.map((user)=>{
                    return  <tr>
                    <td className='id'>{user.ID}</td>
                    <td>{user.FirstNameLastName}</td>
                    <td>{user.JobTitle}</td>
                    <td>{user.EmailAddress}</td>
                    <td>{user.Phone}</td>
                    <td>{user.Company}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}
