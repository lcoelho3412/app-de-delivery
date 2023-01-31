import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestGet } from '../../services/requests';
import { AdminForm, TableUsers, NavBar } from '../../components';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const fetch = async () => {
    const { role, token } = JSON.parse(localStorage.getItem('user'));

    if (role !== 'administrator') history.push('/');

    const data = await requestGet('/admin/manage', token);

    setUsers(data);
  };

  useEffect(fetch);

  return (
    <>
      <NavBar />
      <AdminForm />
      {users.map(({ name, email, role, id }, index) => (
        <TableUsers
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
