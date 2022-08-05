import axios from "axios";
const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"

function createToken(){
  const auth = localStorage.getItem("hash")
  const config = {
    headers: {
      Authorization: `Bearer ${auth}`
    }
  }

  return config
}

function postSignUpData(body){
  const promise = axios.post (`${BASE_URL}/auth/sign-up`, body)
  return promise
}

function postLogin(body){
  const promise = axios.post (`${BASE_URL}/auth/login`, body);
  return promise
}

function getHabits(){
  const config = createToken();
  const promise = axios.get (`${BASE_URL}/habits`, config);
  return promise
}

function postHabit(){
  const config = createToken();
  console.log(config)
}

export {postSignUpData, postLogin, postHabit, getHabits}