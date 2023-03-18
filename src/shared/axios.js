import axios from "axios";
import { cookies } from "./cookies";

const token = cookies.get("token");

const apis = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

apis.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function(config){
    
      console.log('인터셉터 요청 성공!');
      return {...config,
        headers: {
          authorization: `Bearer ${token}`,
        },}
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function(error){
      console.log('인터셉터 요청 오류');
      return Promise.reject(error)
      // return error 가 아님 !! 꼭 프로미스.리젝트 여야만 함
  }
)

apis.interceptors.response.use(
  // 응답을 내보내기 전 수행되는 함수
  function(response){
      console.log("인터셉터 응답 받았습니다!");
      return {...response,
        headers: {
          authorization: `Bearer ${token}`,
        },}
  },

  // 오류 응답을 내보내기 전 수행되는 함수
  function(error){
      console.log("인터셉터 응답오류 발생");
      return Promise.reject(error)
  }
  
)

export default apis