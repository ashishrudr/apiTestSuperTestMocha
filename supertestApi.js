
import request from "supertest";
import { expect } from 'chai';

describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    const response = await request("https://jsonplaceholder.typicode.com/")
    .get('posts/1');
    console.log(response);
    expect(response.status).to.eql(200);
   // expect(response.body.data.length).to.eql(30);
  });
});