
import request from "supertest";
import { expect } from 'chai';
import apiHelp from "../utils/apiHelpers.js";
const apiHelp1 = new apiHelp();
import testData from "../TestData/testData.js";


describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    
    const response=await apiHelp1.GET(testData.getBaseUrl,testData.getEndpoint);
    expect(response.status).to.eql(200);
    console.log(response.body);
   
  });
});