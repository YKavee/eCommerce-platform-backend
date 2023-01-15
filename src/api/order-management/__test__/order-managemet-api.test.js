import request from "supertest";
import express from "express";
import router from "../../router";
import OrderManagementService from "../../../service/order-management/order-management-service";

const app = new express();
app.use("/", router);

jest.mock("../../../service/order-management/order-management-service");

describe("order-management route", () => {
  describe("order-management create order function", () => {
    let mockGetAllOrders;
    beforeEach(() => {
      mockGetAllOrders = jest.fn().mockReturnValue([
        {
          _id: "1",
          product_id: "11",
          customer_id: "1",
          order_status: "Packing",
          total_price: 2000,
          payment_type: "Cash",
        },
        {
          _id: "2",
          product_id: "12",
          customer_id: "1",
          order_status: "Packing",
          total_price: 5000,
          payment_type: "Cash",
        },
      ]);
    });

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

    test("get all orders", async () => {
      OrderManagementService.getAll = mockGetAllOrders;

      const response = await request(app)
        .get(`/orders`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
    });
  });
});
