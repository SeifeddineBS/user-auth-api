const User = require("../model/User");
var user = require("../model/User");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

exports.find = (req, res) => {


  if(req.query.id)
  {
    const id = req.query.id;
    user.findById(id).then(data=>{
      if(!data){
        res.status(404).send({message:"Not found user with id"+id})
      }
      else {
        res.send(data);
      }
    }).catch(err=>{
      res.status(500).send({message:"Error retrieving user with id "+id})
    })
  }


  else{
  user
    .find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          message:
            err.message || "Error Occured while retriving user Information",
        });
    });}
};

exports.update = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;
  user
    .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Cannot update user with ${id}/Maybe user not found!",
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status.send({ message: "Error update user information" });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  user
    .findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: "Cannot delete with id ${id}.Maybe id is wrong " });
      } else {
        res.send({
          messagge: "User was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
