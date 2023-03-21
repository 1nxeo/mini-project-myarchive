import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Dropdown = ({ item, setItem }) => {
  const [list, setList] = useState(false);
  //   const { cates } = useSelector((state) => state.cates);
  console.log(setItem);
  const choose = (e) => {
    setItem(e.target.value);
    console.log(e.target.value);
    setList(false);
  };
  return (
    <DropdownMenu>
      <DropdownButton onClick={(e) => setList((pre) => !pre)}>
        <div>{item.category}</div>
        <div></div>
        <div>▼</div>
      </DropdownButton>
      {list ? (
        <DropdownContent id="myDropdown">
          <DropdownItem onClick={choose} value="cloth">
            Clothes
          </DropdownItem>
          <DropdownItem onClick={choose} value="it">
            IT
          </DropdownItem>
          <DropdownItem onClick={choose} value="acc">
            Acc
          </DropdownItem>
          <DropdownItem onClick={choose} value="food">
            Food
          </DropdownItem>
          <DropdownItem onClick={choose} value="pet">
            Pet
          </DropdownItem>
          <DropdownItem onClick={choose} value="etc">
            Etc
          </DropdownItem>
        </DropdownContent>
      ) : null}
    </DropdownMenu>
  );
};

const DropdownMenu = styled.div`
  /* position: relative; */
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: white;
  color: black;
  padding: 12px;
  font-size: 16px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
`;

const DropdownContent = styled.div`
  width: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  /* display: none; */
`;

const DropdownItem = styled.button`
  color: black;
  width: 300px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: white;
  border: 1px transparent;
  border-radius: 10px;
  &:hover {
    background-color: lightgray;
  }
`;

export default Dropdown;
