import React from 'react'

interface UserDetailsProps {
    id: number
    name: string
    email: string
}
const UserDetails =async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/', {
        cache: 'no-store'})  // Disable caching for this request
    const users: UserDetailsProps[] = await res.json()
    console.log(users)
  return (
    <div>
      <h1>User Details</h1>
     
      <table className='table-auto border-collapse border border-slate-400'>
        <thead>
            <tr>
                <th className='border border-slate-300'>ID</th>
                <th className='border border-slate-300'>Name</th>
                <th className='border border-slate-300'>Email</th>
            </tr>
        </thead>
        <tbody>
        {users.map(user=>
            <tr key ={user.id}>
                <td className='border border-slate-300'>{user.id}</td>
                <td className='border border-slate-300'>{user.name}</td>
              <td className='border border-slate-300'>{user.email}</td>
            </tr>
        )}
        </tbody>
        </table>
    </div>
  )
}

export default UserDetails
