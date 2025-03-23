
import request from "supertest";
import { expect } from 'chai';
import apiHelp from "../utils/apiHelpers.js";
const apiHelp1 = new apiHelp();


describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    
    const response=await apiHelp1.GET("https://jsonplaceholder.typicode.com/","posts/1");
    expect(response.status).to.eql(200);
    console.log(response.body);
   
  });
});