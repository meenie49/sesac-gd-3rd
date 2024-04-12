import React from 'react';

export default function CharacterInfo({ characterInfo }) {
  // characterInfo는 props(부모 -> 자식 전달하는)
  return (
    <>
      <div>Name: {characterInfo.name}</div>
      <div>Age: {characterInfo.age}</div>
      <div>NickName: {characterInfo.nickName}</div>
    </>
  );
}
