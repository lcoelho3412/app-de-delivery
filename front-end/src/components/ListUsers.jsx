import PropTypes from 'prop-types';
import { requestDelete } from '../services/requests';

export default function ListUsers({ name, email, role, id, index }) {
  const deleteUser = async (user) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await requestDelete(`/admin/${user}`, token);
  };
  return (
    <>
      <div data-testid={ `admin_manage__element-user-table-item-number-${id}` }>
        Item:
        {index}
      </div>

      <div data-testid="admin_manage__input-email">
        Nome:
        {name}
      </div>

      <div data-testid={ `admin_manage__element-user-table-email-${id}` }>
        Email:
        {email}
      </div>

      <div data-testid={ `admin_manage__element-user-table-role-${id}` }>
        Role:
        {role}
      </div>

      <button
        type="submit"
        data-testid={ `admin_manage__element-user-table-remove-${id}` }
        onClick={ () => deleteUser(id) }
      >
        Excluir
      </button>
    </>
  );
}

ListUsers.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
