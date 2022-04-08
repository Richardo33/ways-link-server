const { groupLink } = require("../../models");

exports.createGroupLink = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.file);
    const newGroup = await groupLink.create({
      ...data,
      brandImage: req.file.filename,
      idUser: req.user.id,
    });

    const dataGroup = await groupLink.findOne({
      where: {
        id: newGroup.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      dataGroup,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "cannot add",
    });
  }
};

exports.getGroupLink = async (req, res) => {
  try {
    const getData = await groupLink.findAll({
      where: {
        idUser: req.user.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      getData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "cannot get",
    });
  }
};

exports.getOneGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const getData = await groupLink.findOne({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      getData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "cannot get",
    });
  }
};
exports.editGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const dataEdit = req.body;
    const getData = await groupLink.update(dataEdit, {
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      getData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "cannot edit",
    });
  }
};
exports.deleteGroup = async (req, res) => {
  try {
    const { id } = req.params;
    const getData = await groupLink.destroy({
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      getData,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "cannot get",
    });
  }
};
