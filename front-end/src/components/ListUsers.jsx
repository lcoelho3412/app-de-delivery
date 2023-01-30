import PropTypes from 'prop-types';
import { requestDelete } from '../services/requests';

export default function ListUsers({ name, email, role, id, index }) {
  const deleteUser = async (user) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await requestDelete(`/admin/manage/${user}`, token);
  };
  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Tipo</th>
        <th>Excluir</th>
      </tr>

      <tr>
        <td data-testid={ `admin_manage__element-user-table-item-number-${id}` }>
          {index}
        </td>

        <td data-testid="admin_manage__input-email">{name}</td>

        <td data-testid={ `admin_manage__element-user-table-email-${id}` }>
          {email}
        </td>

        <td data-testid={ `admin_manage__element-user-table-role-${id}` }>
          {role}
        </td>
        <button
          type="submit"
          data-testid={ `admin_manage__element-user-table-remove-${id}` }
          onClick={ () => deleteUser(id) }
        >
          Excluir
        </button>
      </tr>
    </table>
  );
}

ListUsers.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
