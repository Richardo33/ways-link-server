const { links } = require("../../models");

exports.addLink = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.file);

    const createLink = await links.create({
      ...data,
      linkImage: req.file.filename,
    });

    const dataAdd = await links.findOne({
      where: {
        id: createLink.id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      dataAdd,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "cannot add",
    });
  }
};

exports.getLink = async (req, res) => {
  try {
    const { idGroupLink } = req.body;
    const getData = await links.findAll({
      where: {
        idGroupLink: idGroupLink,
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

exports.editLink = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    // console.log(data);

    const editLink = await links.update(data, {
      where: {
        id: id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      editLink,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "cannot get",
    });
  }
};
