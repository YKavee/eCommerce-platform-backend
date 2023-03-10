import request from "supertest";
import express from "express";
import router from "../../router";
import UserManagementService from "../../../service/user-management/user-management-service";

const app = new express();
app.use("/", router);

jest.mock("../../../service/user-management/user-management-service");

describe("user-management route", () => {
  describe("create new user request function", () => {
    test("create new user request", async () => {
      jest.spyOn(UserManagementService, "addUser").mockReturnValueOnce(
        Promise.resolve({
          email: "sysco@gmail.com",
          password:
            "$2b$10$d1wx6r5Ai/Mcj8m0p9qbv.oFaim3seKIvJdNC/avWjO2E3P1vh0zu",
          _id: "63c3977a5e908e698164fbeb",
          __v: 0,
        })
      );

      const response = await request(app)
        .post(`/users/signup`)
        .send({
          email: "sysco@gmail.com",
          password: "123",
        })
        .set("Accept", "application/json");
      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
    });
  });
});
