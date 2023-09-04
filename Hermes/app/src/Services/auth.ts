import axios from "axios";

// curl --location 'https://api.ninsaude.com/v1/oauth2/token' \
// --header 'Content-Type: application/x-www-form-urlencoded' \
// --header 'cache-control: no-cache' \
// --data-urlencode 'grant_type=password' \
// --data-urlencode 'account=••••••' \
// --data-urlencode 'username=••••••' \
// --data-urlencode 'password=••••••' \
// --data-urlencode 'accountUnit=••••••'

type LoginData = {
  conta: string;
  usuario: string;
  senha: string;
};

const setRefreshToken = async (loginData: LoginData) => {
  const req = axios
    .post(
      "https://api.ninsaude.com/v1/oauth2/token",
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
          "Access-Control-Allow-Origin" : "*",
        },
      }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default setRefreshToken;
