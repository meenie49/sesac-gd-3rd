import { useState } from 'react';

export default function CharacterContainer() {
  // 사용자의 데이터가 담긴 객체의 배열
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: '뽀로로',
      age: '7',
      nickName: '사고뭉치',
    },
    {
      id: 2,
      name: '루피',
      age: '5',
      nickName: '공주님',
    },
    {
      id: 3,
      name: '크롱',
      age: '4',
      nickName: '장난꾸러기',
    },
  ]);
  // selectedCharacter state 선언
  // 선택된 캐릭터의 정보를 객체 형태로 저장할 예정
  // 조적ㄴ 중에서 선택된 캐릭터가 없을 때 CharacterInfo 컴포넌트를 렌더링 하지
  // 초기값을 null로 주어 해당 state로 조건부 렌더링까지 할 수 있도록 작성
  // 임의로 값이 없다고 정한경우 -> null
  // 클릭한 데이터의 저장할 곳이 필요하기 때문에 selectedCharcter를 만듦
  // 지금 선택된 캐릭터가 없으므로 null 만약 기존의 선택이 필요한 경우 한 객체를 복붙하면 됨
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  // handleClick 함수 (인자: 선택된 버튼의 name의 값)
  // characters 배열에서 인자로 받은 name의 값과 동일한 요소를
  // selectedCharacter state에 저장
  const handClick = (name) => {
    const selected = characters.find((character) => character.name === name);
  };
  // characters 배열에서 인자로 받은 name의 값과 동일한 요소를
  // selectedCharacter state에 저장

  return (
    <>
      {/* key를 virtual dom과 비교하기 위해 필요하고, 유니크한 값이여야함 */}
      {/* characters 배열 순회하며 버튼 렌더링 하기 */}
      {characters.map((charactor) => (
        <button key={charactor.id} onClick={() => handleClick(charactor.name)}>
          {charactor.name}
        </button>
      ))}

      {/* 선택된 캐릭터 정보를 props로 전달하기 */}
      {/* selectedCharacter state의 값이 없는 경우 CharactorInfo 컴포넌트 렌더링 X */}
      {/* charactorInfo는 키 즉 키 값으로 접근하는 것 */}
      {selectedCharacteor && (
        <CharactorInfo charactorInfo={selectedCharacteor} />
      )}
    </>
  );
}
