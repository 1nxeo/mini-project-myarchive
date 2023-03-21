import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { changeCates } from "../redux/modules/cateSlice";
import { useDispatch, useSelector } from "react-redux";
import { cookies } from "../shared/cookies";

function Category({ chil }) {
  const dispatch = useDispatch();
  const token = cookies.get("token");
  const { users } = useSelector((state) => state.users);
  // const loginStatus = users.isLogin;

  return (
    // <>
    //   <div class="window-body">
    //     <menu role="tablist">
    //       <li role="tab" aria-selected="true">
    //         <a href="#tabs">Desktop</a>
    //       </li>
    //       <li role="tab">
    //         <a href="#tabs">My computer</a>
    //       </li>
    //       <li role="tab">
    //         <a href="#tabs">Control panel</a>
    //       </li>
    //       <li role="tab">
    //         <a href="#tabs">Devices manager</a>
    //       </li>
    //       <li role="tab">
    //         <a href="#tabs">Hardware profiles</a>
    //       </li>
    //       <li role="tab">
    //         <a href="#tabs">Performance</a>
    //       </li>
    //     </menu>
    //     <div class="window" role="tabpanel">
    //       <div class="window-body">
    //         {children}
    //       </div>
    //     </div>
    //   </div>
    // </>
    <StCateBar>
      <StButtonBox>
        <button
          value="notdone"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          All
        </button>
        <button
          value="cloth"
          onClick={(e) => {
            dispatch(changeCates(e.target.value));
          }}
        >
          Clothes
        </button>
        <button
          value="it"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          IT
        </button>
        <button
          value="acc"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Acc
        </button>
        <button
          value="food"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Food
        </button>
        <button
          value="pet"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          Pet
        </button>
        <button
          value="etc"
          onClick={(e) => dispatch(changeCates(e.target.value))}
        >
          etc
        </button>
      </StButtonBox>
      <StButtonBox>
        {token ? (
          <button
            value="done"
            onClick={(e) => dispatch(changeCates(e.target.value))}
          >
            구매한 아이템
          </button>
        ) : null}
      </StButtonBox>
    </StCateBar>
  );
}

const StCateBar = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

const StButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Category;
