const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const { expect } = require("chai");
// chai.use(require("sams-chai-sorted"));
// const { myErrMsgs } = require("../errors/errors");
// const endpointsCopy = require("../endpoints.json");

describe("/api", () => {
  after(() => {});
  beforeEach(() => {});

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

  describe("/palette", () => {
    it("#pal-01 GET 200 Returns a sentence", () => {
      return request(app)
        .get("/api/palette")
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
        });
    });
    it("#pal-02a GET 200 Returns no content with message if no sentence could possibly be created from specifications.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: "dummy01",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
        });
    });
    it("#pal-02b GET 200 Returns no content with message if no sentence could possibly be created from specifications.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: "dummy02",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
        });
    });
    it("#pal-03a GET 200 Returns no content with message, if dummy noun was successfully filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: "dummy03",
          useDummyWords: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
        });
    });
    it("#pal-03b GET 200 Returns no content with message, if dummy noun was successfully filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: "dummy04",
          useDummyWords: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
        });
    });
    it("#pal-03c GET 200 Returns sentence, as dummy noun did not need to be filtered out.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: "dummy05",
          useDummyWords: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
        });
    });
    it("#pal-04a GET 200 Returns a sentence where a tantum plurale was allowed, as no particular grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: 51,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(res.body.palette.split(" ").reverse()[0]).to.equal("majtki.");
        });
    });
    it("#pal-04b GET 200 Returns a sentence where a tantum plurale was not allowed, as singular grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: 52,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(res.body.palette.split(" ")[0]).to.not.equal("Majtki");
        });
    });
    it("#pal-04c GET 200 Returns a sentence where a tantum plurale was allowed, as either singular or plural grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          egSentenceNumber: 53,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(res.body.palette.split(" ").reverse()[0]).to.equal("majtki.");
        });
    });
    it("#pal-05 Responds 405 if any other methods are used at this endpoint", () => {
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
});
