const express = require("express");
const router = express.Router();
const User = require("../../model/user-model/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class ProductManagementDao {
  async addUsers(req, res) {
    const hashedPass = await new Promise((resolve, reject) => {
      bcrypt.hash(req.password, 10, (err, hash) => {
        if (err) {
          reject(err);
        } else {
          const user = new User({
            email: req.email,
            password: hash,
          });
          User.create(user)
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        }
      });
    });
    return hashedPass;
  }

  async loginUsers(req, res) {
    const token = await new Promise((resolve, reject) => {
      User.find({ email: req.email })
        .exec()
        .then((user) => {
          if (user.length < 1) {
            reject(new Error("User not found!"));
          } else {
            bcrypt.compare(req.password, user[0].password, (err, result) => {
              if (err) {
                reject(new Error("Auth failed"));
              }
              if (result) {
                const token = jwt.sign(
                  {
                    email: user[0].email,
                    userId: user[0]._id,
                  },
                  process.env.JWT_KEY,
                  {
                    expiresIn: "1h",
                  }
                );
                resolve(token);
              }
            });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
    return token;
  }
}
module.exports = new ProductManagementDao();
