// const express = require("express");
// const router = express.Router();

// router.get("/test-user", (req, res) => {
//   res.send("User route working");
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
// const { registerUser } = require("../controllers/userController");

// router.post("/register", registerUser);

const { registerUser, loginUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
