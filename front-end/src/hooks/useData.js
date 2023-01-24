import { useState } from 'react';

export default function useData() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  return { user, setUser };
}
