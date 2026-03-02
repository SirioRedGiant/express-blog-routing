const express = require("express");
const router = express.Router(); // crea un server per i post

//note array dei post importati dalla cartella --> data
const posts = require("../data/posts");

//^ Index --> Lista dei post (GET)
router.get("/", (req, res) => {
  res.send("Lista dei post");
});

//^ Show --> Dettagli di un singolo post (GET)
router.get("/:id", (req, res) => {
  res.send(`Dettagli del post numero ${req.params.id}`);
});

//^ Store --> Creazione di un nuovo post (POST)
router.post("/", (req, res) => {
  res.send("Creazione nuovo post");
});

//^ Update --> Modifica totale di un post (PUT)
router.put("/:id", (req, res) => {
  res.send(`Modifica totale del post ${req.params.id}`);
});

//^ Destroy --> Eliminazione di un post (DELETE)
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

//^ Esportazione del router
module.exports = router;
