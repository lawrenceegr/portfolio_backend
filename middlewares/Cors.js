const cors = require("cors");

module.exports = (app) => {
  const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Accept-Language",
    ],
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));
};
