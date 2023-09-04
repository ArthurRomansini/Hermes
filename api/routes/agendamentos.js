var express = require("express");
var router = express.Router();
var axios = require("axios");

router.post(
  "/listar/",
  async (req, res, next) => {
    const profissional = req.body.profissional;
    const dataInicial = req.body.dataInicial;
    const dataFinal = req.body.dataFinal;

    console.log(profissional, dataInicial, dataFinal);
    try {
      const getSchedules = axios
        .get(
          `https://api.ninsaude.com/v1/atendimento_agenda/listar/agendamento/profissional/${profissional}/dataInicial/${dataInicial}/dataFinal/${dataFinal}`,
          req.body,
          {
            headers: req.header,
          }
        )
        .then((schedules) => {
          return schedules;
        })
        .catch((error) => {
          res.status(401);
          res.body = error;
        });

      const schedules = await getSchedules;
      schedules?.status === 200;
      res.json(schedules);
    } catch {
      res.status(error.response.status);
      res.json({ message: error.response.data.message });
    }
  }
);

module.exports = router;
