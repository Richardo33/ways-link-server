const express = require("express");

const router = express.Router();

const { uploadFile } = require("../middleware/upload");

const { auth } = require("../middleware/auth");

const { register, login } = require("../controller/auth");

const {
  createGroupLink,
  getGroupLink,
  getOneGroup,
  editGroup,
  deleteGroup,
} = require("../controller/groupLink");

const { addLink, editLink, getLink } = require("../controller/link");

router.post("/register", register);
router.get("/login", login);

router.post("/grouplink", auth, uploadFile("brandImage"), createGroupLink);
router.get("/getGroup", auth, getGroupLink);
router.get("/getOneGroup/:id", getOneGroup);
router.patch("/editGroup/:id", editGroup);
router.delete("/deleteGroup/:id", deleteGroup);

router.post("/addLink", uploadFile("linkImage"), addLink);
router.get("/getLink", getLink);
router.patch("/editLink/:id", editLink);

module.exports = router;
