const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");

const app = require("../api/app");
// const connection = require('../database/models/index');

const { expect, use } = chai;

use(chaiHttp);

describe("Testando o endpoint de login e registro", function () {
  it("Testando o login de uma pessoa ", async function () {
    const response = await chai.request(app).post("/login").send({
      email: "zebirita@email.com",
      password: "$#zebirita#$",
    });

    expect(response.status).to.be.equal(200);
  });
  it("Testando o registro de uma pessoa ", async function () {
    const response = await chai.request(app).post("/register").send({
      email: "eu@email.com",
      password: "$#zebirita#$",
      name: "zé",
      role: "user",
    });

    expect(response.status).to.be.equal(201);
  });

  afterEach(sinon.restore);
});
