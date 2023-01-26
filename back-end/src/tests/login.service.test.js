const { expect } = require("chai");
const sinon = require("sinon");
const { validateLogin } = require("../api/services/login.services");
const { User } = require("../database/models");
console.log(User);

describe("Testa o serviço de login", function () {
  it("Deveria retornar um token", async function () {
    const inputUser = {
      email: "zebirita@email.com",
      password: "$#zebirita#$",
    };
    const outputToken = {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjozLCJlbWFpbCI6InplYmlyaXRhQGVtYWlsLmNvbSIsIm5hbWUiOiJDbGllbnRlIFrDqSBCaXJpdGEiLCJyb2xlIjoiY3VzdG9tZXIifSwiaWF0IjoxNjc0NTk2MjgzLCJleHAiOjE2NzQ2ODI2ODN9.wNH2HO4WnvnVhyPhioa9sB7VkVdto4xK78iD6OsO5C8",
    };
    console.log(User);
    sinon.stub(User, "findOne").resolves(outputToken);

    const result = await validateLogin(inputUser);

    expect(result).to.be.deep.equal(outputToken);
  });
  afterEach(function () {
    sinon.restore();
  });
});
