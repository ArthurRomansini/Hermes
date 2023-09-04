import axios from "axios";
import Schedule from "../Types/Schedule";

type ReqProps = {
    profissional: string;
    dataInicial: string;
    dataFinal: string;
    };

const getSchedules = async ({profissional, dataInicial, dataFinal}: ReqProps): Promise<Schedule[]> => {

  const res = axios
    .post(
      "http://localhost:3000/agendamentos/listar",
      {
        profissional: profissional,
        dataInicial: dataInicial,
        dataFinal: dataFinal,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const retorno = await res;

  if (retorno) return retorno;
  return [];
};

export default getSchedules;
