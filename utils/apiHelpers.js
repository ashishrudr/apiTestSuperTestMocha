import request from "supertest";
import { expect } from 'chai';

class apiHelpers

{
   async GET(baseUrl,endpoint)
    
    {
       const response = await request(baseUrl)
           .get(endpoint);
        console.log(response.body);
        console.log("I am in get");
           
        expect(response.status).to.eql(200);
        return response;
    }
    POST(baseUrl, endpoint, data)
    {
        return request(baseUrl)
        .post(endpoint)
        .send(data);
    }
    print()
    {
        console.log("Hello from apiHelpers");
    }
}

export default apiHelpers;