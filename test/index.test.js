var supertest = require("supertest");
var should = require("should");
var server = supertest.agent("http://127.0.0.1:5000");

describe("Unit test for 'seeUsersMeetings' functionality", function () { //Unit test begin
    it("should return an object and 'meetings' should be a property of the object", function (done) {
        server
            .post("/seeUsersMeetings") // calling 'seeUsersMeetings' api
            .send({
                "_id": "62573eface79fb198feac3b4",
                "userId": "62581f64ce79fb198feac3bb"
            })
            .expect("Content-type", /json/)
            .expect(200) // This is HTTP response
            .end(function (err, res) {
                res.status.should.equal(200); //HTTP status code should be 200
                res.body.should.have.property('meetings') //Response object should have the property 'meetings' which contains the scheduled meetings of the specified user
                done();
            });
    });
});
