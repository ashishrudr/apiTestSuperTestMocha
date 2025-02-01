
import request from "supertest";
import { expect } from 'chai';

describe("Post reqresponse", function () {
  it("Validate response", async function () {
    const response = await request("https://reqres.in/")
    .post('api/users')
    .send({name: 'john'})
	.set('Accept', /json/)
    console.log(response.body);
    expect(response.status).to.eql(201);
   // expect(response.body.data.length).to.eql(30);
  });
});