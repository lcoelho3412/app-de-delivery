import PropTypes from 'prop-types';
import { requestDelete } from '../services/requests';

export default function TableUsers({ name, email, role, id, index }) {
  const deleteUser = async (user) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await requestDelete(`/admin/manage/${user}`, token);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            data-testid={ `admin_manage__element-user-table-item-number-${id}` }
          >
            {index}
          </td>

          <td data-testid={ `admin_manage__element-user-table-name-${id}` }>{name}</td>

          <td data-testid={ `admin_manage__element-user-table-email-${id}` }>
            {email}
          </td>

          <td data-testid={ `admin_manage__element-user-table-role-${id}` }>
            {role}
          </td>
          <td data-testid={ `admin_manage__element-user-table-remove-${id}` }>
            <button type="submit" onClick={ () => deleteUser(id) }>
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

TableUsers.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
