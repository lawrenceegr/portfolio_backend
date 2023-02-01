// helpers/error.js
module.exports = {
    handleError: (err, res) => {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error" });
    },
  };
  