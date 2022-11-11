import axios from "axios";
// import { axiosData } from "../api/Users";

// axios
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
// 위 CDN을 public>index.html의 <head> 태그 안에 추가해 주어야 한다.
// but, axios is not defined라고 뜨며 문제가 해결안됨
// -> terminal 에서 'npm install axios'로 직접 설치 후 사용해야한다.
// 설치 후 import axios from 'axios';

// 서버에서 데이터 불러오기 - GET
export const axiosUsers = async () => {
  const response = await axios.get("/api/userController");
  return response.data;
};

// 서버로 데이터 보내주기 - POST
// export const axiosSendData = async () => {
//   const response = await axios.post("/api/userController", axiosData);
//   return respose.data;
// };
