import axios from "axios";

type LoginData = {
  conta: string;
  usuario: string;
  senha: string;
};

const setRefreshToken = async (loginData: LoginData): Promise<string> => {

  const res = axios
    .post(
      "http://localhost:3000/auth",
      {
        grant_type: "password",
        account: loginData.conta,
        username: loginData.usuario,
        password: loginData.senha,
        accountUnit: 0,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const retorno = await res;

  if (retorno) return retorno.access_token;
  return 'false';
};

export default setRefreshToken;
