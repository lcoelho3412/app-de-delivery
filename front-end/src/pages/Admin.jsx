import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListUsers from '../components/ListUsers';
import NavBar from '../components/NavBar';
import NewUserForm from '../components/NewUserForm';
import { requestGet } from '../services/requests';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const fetch = async () => {
    const { role, token } = JSON.parse(localStorage.getItem('user'));

    if (role !== 'administrator') history.push('/');

    const data = await requestGet('/admin', token);

    setUsers(data);
  };

  useEffect(fetch);

  return (
    <>
      <NavBar />
      <NewUserForm />
      {users.map(({ name, email, role, id }, index) => (
        <ListUsers
          key={ index }
          name={ name }
          email={ email }
          role={ role }
          id={ id }
          index={ index + 1 }
        />
      ))}
    </>
  );
}
