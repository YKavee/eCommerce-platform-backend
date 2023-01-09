import request from "supertest";
import express from "express";
import router from "../../router";
import OrderManagementService from "../../../service/order-management-service";

const app = new express();
app.use("/", router);

jest.mock("../../../service/product-management-service");

describe("order-management route", () => {
  describe("order-management create order function", () => {
    test("create order request", async () => {
      jest.spyOn(OrderManagementService, "createOrder").mockReturnValueOnce(
        Promise.resolve({
          _id: "1",
          product_id: "11",
          customer_id: "1",
          order_status: "Packing",
          total_price: 2000,
          payment_type: "Cash",
        })
      );

      const response = await request(app)
        .post(`/orders`)
        .send({
          _id: "1",
          product_id: "11",
          customer_id: "1",
          order_status: "Packing",
          total_price: 2000,
          payment_type: "Cash",
        })
        .set("Accept", "application/json");
      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
    });
  });
});
