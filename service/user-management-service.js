const UserManagementDao = require("../dao/user-management-dao");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UserManagementService {
  async addUser(req, res) {
    try {
      const response = await UserManagementDao.addUsers(req);
      return response;
    } catch (error) {
      return error;
    }
  }

  async loginUser(req, res) {
    try {
      const response = await UserManagementDao.loginUsers(req);
      return response;
    } catch (error) {
      return error;
    }
  }
}
module.exports = new UserManagementService();
