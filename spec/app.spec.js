const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const { expect } = require("chai");
// chai.use(require("sams-chai-sorted"));
// const { myErrMsgs } = require("../errors/errors");
// const endpointsCopy = require("../endpoints.json");

describe("/api", () => {
  // after(() => {});
  // beforeEach(() => {});

  describe("/", () => {
    it("#api-01 GET 200 Serves up endpoints", () => {
      return request(app)
        .get("/api")
        .expect(200)
        .then((res) => {
          expect(res.body.endpoints).to.be.an("Object");
        });
    });
    it("#api-02 Responds 405 if any other methods are used at this endpoint", () => {
      const url = "/api";
      return Promise.all([
        request(app).del(url),
        request(app).patch(url),
        request(app).post(url),
      ]).then((resArr) => {
        resArr.forEach((response) => {
          expect(405);
        });
      });
    });
  });

  describe("/palette - Stage 1: Nouns", () => {
    it("#pal-01 GET 200 YES: Returns a sentence", () => {
      return request(app)
        .get("/api/palette")
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal-02a GET 200 NO: Returns message to say no sentence can be created from specifications.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy01",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
          expect(res.body.palette).to.equal(null);
        });
    });
    it("#pal-02b GET 200 NO: Returns message to say no sentence could possibly be created from specifications.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy02",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
          expect(res.body.palette).to.equal(null);
        });
    });
    it("#pal-03a GET 200 NO: Returns message to say no sentence, if dummy noun was successfully filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy03",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
          expect(res.body.palette).to.equal(null);
        });
    });
    it("#pal-03b GET 200 NO: Returns message to say no sentence, if dummy noun was successfully filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy04",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
          expect(res.body.palette).to.equal(null);
        });
    });
    it("#pal-03c GET 200 YES: Returns sentence, as dummy noun did not need to be filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy05",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal-03d GET 200 YES: Returns successful sentence 100% of the time, rather than 33%, as one of the dummy nouns should have been filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy06",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal-03e GET 200 NO: Returns message to say no sentence, as dummy noun should have been filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy07",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
          expect(res.body.palette).to.equal(null);
        });
    });
    it("#pal-03f GET 200 YES: Returns successful sentence 100% of the time, even though I've tried to trick it, by asking for Singular and Loc, and including an object that does indeed have Singular but Loc is not within, and does indeed have a Loc but it is inside Plural.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy08",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal-04a GET 200 YES: Returns a sentence where a tantum plurale was allowed, as no particular grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: 51,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
          expect(res.body.palette.split(" ").reverse()[0]).to.equal("majtki.");
        });
    });
    it("#pal-04b GET 200 NO: Returns a sentence where a tantum plurale was not allowed, as singular grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: 52,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
          expect(res.body.palette).to.equal(null);
        });
    });
    it("#pal-04c GET 200 YES: Returns a sentence where a tantum plurale was allowed, as either singular or plural grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: 53,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
          expect(res.body.palette.split(" ").reverse()[0]).to.equal("majtki.");
        });
    });
    it("#pal-05 GET 200 YES: Returns a sentence where end of inflection chain is array.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: 54,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal-06 Responds 405 if any other methods are used at this endpoint", () => {
      const url = "/api/palette";
      return Promise.all([
        request(app).del(url),
        request(app).patch(url),
        request(app).post(url),
      ]).then((resArr) => {
        resArr.forEach((response) => {
          expect(405);
        });
      });
    });
  });

  describe.only("/palette - Stage 2: Adjectives", () => {
    it("#pal-01 GET 200 YES: Returns a sentence where adjective agrees with noun in singular.", () => {
      return request(app)
        .get("/api/palette")
        .send({ sentenceNumber: 55 })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czerwona cebula.", "Czerwone jabłko."]).to.include(
            res.body.palette
          );
          console.log({ palette: res.body.palette });
        });
    });
  });
});
