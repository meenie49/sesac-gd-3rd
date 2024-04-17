import { useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function UserProvider(props) {
  const [name, setName] = useState('meenie');
  return (
    // userContext 내부에 있는 컴포넌트들이 name과 setName에 접근할 수 있도록
    <UserContext.Provider value={{ name, setName }}>
      {props.children}
    </UserContext.Provider>
  );
}
