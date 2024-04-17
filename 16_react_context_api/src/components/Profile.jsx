import { useContext, useRef } from 'react';
import { AgeContext } from '../contexts/AgeContext';
import { UserContext } from '../contexts/UserContext';

export default function Profile() {
  // AgeContext의 age와 setAge
  // UserContext의 name과 setName 모두 사용 예정

  const { name, setName } = useContext(UserContext);
  const { age, setAge } = useContext(AgeContext);

  const nameRef = useRef();
  const ageRef = useRef();

  const changeInfo = () => {
    if (
      nameRef.current.value.length < 1 ||
      nameRef.current.value.trim() === ''
    ) {
      alert('이름을 다시 입력해주세요.');
      nameRef.current.focus();

      return;
    } else if (
      ageRef.current.value.length === 0 ||
      ageRef.current.value.trim() === '' ||
      Number(ageRef.current.value) < 1
    ) {
      alert('나이를 입력해주세요.');
      ageRef.current.focus();

      return;
    }

    setAge(Number(ageRef.current.value));
    setName(nameRef.current.value);
    ageRef.current.value = '';
    nameRef.current.value = '';
  };

  return (
    <>
      <h3>User Profile</h3>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
      <input type='text' placeholder='이름을 입력해주세요' ref={nameRef} />
      <input type='number' placeholder='나이를 입력해주세요' ref={ageRef} />
      <button onClick={changeInfo}>프로필 변경</button>
    </>
  );
}
