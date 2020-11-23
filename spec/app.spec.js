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

  describe("/palette - Stage 5: Sentences with nouns adjectives and verbs.", () => {
    it("#pal05-01a GET 200 YES: Returns a sentence in present.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "girl has red apple",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Kobieta ma czerwone jabłko.",
            "Chłopiec ma czerwone jabłko.",
            "Chłopak ma czerwone jabłko.",

            "Kobieta ma czerwone jabłka.",
            "Chłopiec ma czerwone jabłka.",
            "Chłopak ma czerwone jabłka.",

            "Kobiety mają czerwone jabłko.",
            "Chłopcy mają czerwone jabłko.",
            "Chłopacy mają czerwone jabłko.",
            "Chłopaki mają czerwone jabłko.",

            "Kobiety mają czerwone jabłka.",
            "Chłopcy mają czerwone jabłka.",
            "Chłopacy mają czerwone jabłka.",
            "Chłopaki mają czerwone jabłka.",

            "Kobieta ma czerwoną cebulę.",
            "Chłopiec ma czerwoną cebulę.",
            "Chłopak ma czerwoną cebulę.",

            "Kobieta ma czerwone cebule.",
            "Chłopiec ma czerwone cebule.",
            "Chłopak ma czerwone cebule.",

            "Kobiety mają czerwoną cebulę.",
            "Chłopcy mają czerwoną cebulę.",
            "Chłopacy mają czerwoną cebulę.",
            "Chłopaki mają czerwoną cebulę.",

            "Kobiety mają czerwone cebule.",
            "Chłopcy mają czerwone cebule.",
            "Chłopacy mają czerwone cebule.",
            "Chłopaki mają czerwone cebule.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal05-01b GET 200 YES: Returns a negative sentence in past.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "girl didn't have red apple",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Kobieta nie miała czerwonego jabłka.",
            "Chłopiec nie miał czerwonego jabłka.",
            "Chłopak nie miał czerwonego jabłka.",

            "Kobieta nie miała czerwonych jabłek.",
            "Chłopiec nie miał czerwonych jabłek.",
            "Chłopak nie miał czerwonych jabłek.",

            "Kobiety nie miały czerwonego jabłka.",
            "Chłopcy nie mieli czerwonego jabłka.",
            "Chłopacy nie mieli czerwonego jabłka.",
            "Chłopaki nie mieli czerwonego jabłka.",

            "Kobiety nie miały czerwonych jabłek.",
            "Chłopcy nie mieli czerwonych jabłek.",
            "Chłopacy nie mieli czerwonych jabłek.",
            "Chłopaki nie mieli czerwonych jabłek.",

            "Kobieta nie miała czerwonej cebuli.",
            "Chłopiec nie miał czerwonej cebuli.",
            "Chłopak nie miał czerwonej cebuli.",

            "Kobieta nie miała czerwonych cebul.",
            "Chłopiec nie miał czerwonych cebul.",
            "Chłopak nie miał czerwonych cebul.",

            "Kobiety nie miały czerwonej cebuli.",
            "Chłopcy nie mieli czerwonej cebuli.",
            "Chłopacy nie mieli czerwonej cebuli.",
            "Chłopaki nie mieli czerwonej cebuli.",

            "Kobiety nie miały czerwonych cebul.",
            "Chłopcy nie mieli czerwonych cebul.",
            "Chłopacy nie mieli czerwonych cebul.",
            "Chłopaki nie mieli czerwonych cebul.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal05-01c GET 200 YES: Returns a negative sentence in past.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "red girl didn't have red apple",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czerwona kobieta nie miała czerwonego jabłka.",
            "Czerwony chłopiec nie miał czerwonego jabłka.",
            "Czerwony chłopak nie miał czerwonego jabłka.",

            "Czerwona kobieta nie miała czerwonych jabłek.",
            "Czerwony chłopiec nie miał czerwonych jabłek.",
            "Czerwony chłopak nie miał czerwonych jabłek.",

            "Czerwone kobiety nie miały czerwonego jabłka.",
            "Czerwoni chłopcy nie mieli czerwonego jabłka.",
            "Czerwoni chłopacy nie mieli czerwonego jabłka.",
            "Czerwoni chłopaki nie mieli czerwonego jabłka.",

            "Czerwone kobiety nie miały czerwonych jabłek.",
            "Czerwoni chłopcy nie mieli czerwonych jabłek.",
            "Czerwoni chłopacy nie mieli czerwonych jabłek.",
            "Czerwoni chłopaki nie mieli czerwonych jabłek.",

            "Czerwona kobieta nie miała czerwonej cebuli.",
            "Czerwony chłopiec nie miał czerwonej cebuli.",
            "Czerwony chłopak nie miał czerwonej cebuli.",

            "Czerwona kobieta nie miała czerwonych cebul.",
            "Czerwony chłopiec nie miał czerwonych cebul.",
            "Czerwony chłopak nie miał czerwonych cebul.",

            "Czerwone kobiety nie miały czerwonej cebuli.",
            "Czerwoni chłopcy nie mieli czerwonej cebuli.",
            "Czerwoni chłopacy nie mieli czerwonej cebuli.",
            "Czerwoni chłopaki nie mieli czerwonej cebuli.",

            "Czerwone kobiety nie miały czerwonych cebul.",
            "Czerwoni chłopcy nie mieli czerwonych cebul.",
            "Czerwoni chłopacy nie mieli czerwonych cebul.",
            "Czerwoni chłopaki nie mieli czerwonych cebul.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it.only("#pal05-01d GET 200 YES: Returns a sentence in present.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "101 girl is reading",
          // sentenceNumber: 101,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Kobieta czyta.",
            "Chłopiec czyta.",
            "Chłopak czyta.",
            "Kobiety czytają.",
            "Chłopcy czytają.",
            "Chłopacy czytają.",
            "Chłopaki czytają.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
  });

  describe("/palette - Stage 4: Verbs", () => {
    it("#pal04-01a GET 200 YES: Returns a sentence with a single verb, in present.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "I am reading",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytam.",
            "Czytasz.",
            "Czyta.",
            "Czytamy.",
            "Czytacie.",
            "Czytają.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-01b GET 200 YES: Returns a sentence with a single verb, with person specified.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy12 2per",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytasz.",
            "Czytacie.",
            "Czytałeś.",
            "Czytałaś.",
            "Czytaliście.",
            "Czytałyście.",
            "Będziesz czytał.",
            "Będziesz czytać.",
            "Będziesz czytała.",
            "Będziesz czytać.",
            "Będziecie czytali.",
            "Będziecie czytać.",
            "Będziecie czytały.",
            "Będziecie czytać.",
            "Czytałbyś.",
            "Czytałabyś.",
            "Czytalibyście.",
            "Czytałybyście.",
            "Czytaj.",
            "Czytajcie.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-01c GET 200 YES: Returns a sentence with a single verb, with tense and number specified.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy13a conditional plural",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytano by.",
            "Czytalibyśmy.",
            "Czytałybyśmy.",
            "Czytalibyście.",
            "Czytałybyście.",
            "Czytaliby.",
            "Czytałyby.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-01d GET 200 YES: Returns a sentence with a single verb, with tense number and gender specified.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy13b present 2per f",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytasz.", "Czytacie."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-01e GET 200 YES: Returns a sentence with a single verb in infinitive.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy14 infinitive",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytać."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-01f GET 200 YES: Returns a sentence with a single verb in impersonal.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy15 impersonal",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czyta się.",
            "Czytano.",
            "Będzie czytać się.",
            "Czytano by.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-01g GET 200 YES: Returns a sentence with a single verb in impersonal, even when plural is specified (returns just those impersonals that have plural use).", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy15a impersonal plural",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytano.", "Czytano by."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-02a GET 200 YES: Returns a sentence with a single verb's participle.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy16 participle",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytający.",
            "Czytająca.",
            "Czytające.",
            "Czytający.",
            "Czytające.",
            "Czytany.",
            "Czytana.",
            "Czytane.",
            "Czytani.",
            "Czytane.",
            "Czytając.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-02b GET 200 YES: Returns a sentence with a single verb's participle by gender.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy17 participle female",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytająca.", "Czytana."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-02c GET 200 YES: Returns a sentence with a single verb's participle by gender, with two genders specified.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy19 participle f nonvirile",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytająca.",
            "Czytające.",
            "Czytana.",
            "Czytane.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-02d GET 200 YES: Returns a sentence with a single verb's participle by gender, with two genders specified.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy20 participle n virile",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytające.",
            "Czytający.",
            "Czytane.",
            "Czytani.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-02e GET 200 YES: Returns a sentence with a single verb's participle by gender and person.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy20a participle n virile 2per",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytające.",
            "Czytający.",
            "Czytane.",
            "Czytani.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-03a GET 200 YES: Returns a sentence with a single verb's verbalNoun.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy21 verbalNoun",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytanie."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-03b GET 200 NO: Does not return verbalNoun, when a gender is specified, as the verbalNoun is not a verb.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy22 verbalNoun ~f",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.equal(null);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-04a GET 200 YES: Returns verb in virile when one gender option is given.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy23a past/cond 1per plural m1",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytaliśmy.",
            "Czytaliście.",
            "Czytali.",
            "Czytalibyśmy.",
            "Czytalibyście.",
            "Czytaliby.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-04b GET 200 YES: Returns verb in nonvirile when one gender option is given.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy23b past/cond 1per plural m2",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytałyśmy.",
            "Czytałyście.",
            "Czytały.",
            "Czytałybyśmy.",
            "Czytałybyście.",
            "Czytałyby.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-04c GET 200 YES: Returns verb in nonvirile when two gender options are given.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy23c past/cond 1per plural f/n",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czytałyśmy.",
            "Czytałyście.",
            "Czytały.",
            "Czytałybyśmy.",
            "Czytałybyście.",
            "Czytałyby.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-05a GET 200 YES: Conjugate verb (as virile or nonvirile) to agree with noun in plural.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "girls were reading",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Kobiety czytały.",
            "Chłopcy czytali.",
            "Chłopaki czytali.",
            "Chłopacy czytali.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-05b GET 200 YES: Conjugate verb to agree with noun in singular or plural.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "girl is reading",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Kobieta czyta.", "Kobiety czytają."]).to.include(
            res.body.palette
          );
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-06a GET 200 YES: Conjugate active adjectival participle.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy24a activeadjectival f",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytająca.", "Czytające."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-06b GET 200 YES: Conjugate passive adjectival participle.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy24b activeadjectival m1",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytany.", "Czytani."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal04-06c GET 200 YES: Conjugate contemporary adverbial participle, ignoring any person or number or gender specified.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy24c contemporaryadverbial",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czytając."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
  });

  describe("/palette - Stage 3: Adjectives", () => {
    it("#pal03-01a GET 200 YES: Returns a sentence where adjective agrees with noun in singular.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "red apple",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czerwona cebula.", "Czerwone jabłko."]).to.include(
            res.body.palette
          );
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal03-01b GET 200 YES: Returns a sentence where adjective agrees with noun in nonvirile plural.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          // sentenceNumber: "55a",
          sentenceSymbol: "red apples",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Czerwone cebule.", "Czerwone jabłka."]).to.include(
            res.body.palette
          );
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal03-01c GET 200 YES: Returns a sentence where adjective agrees with noun in virile or nonvirile plural.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          // sentenceNumber: 56,
          sentenceSymbol: "red girls",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Czerwoni chłopcy.",
            "Czerwoni chłopacy.",
            "Czerwoni chłopaki.",
            "Czerwone kobiety.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
  });

  describe("/palette - Stage 2: Nouns", () => {
    it("#pal02-01a GET 200 YES: Returns a sentence where a tantum plurale was allowed, as no particular grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          // sentenceNumber: 51,
          sentenceSymbol: "girl is wearing shirt",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
          expect(res.body.palette.split(" ").reverse()[0]).to.equal("majtki.");
        });
    });
    it("#pal02-01b GET 200 NO: Returns a sentence where a tantum plurale was not allowed, as singular grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          // sentenceNumber: 52,
          sentenceSymbol: "shirt is in wardrobe",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.message).to.equal(
            "No sentence could be created from the specifications."
          );
          expect(res.body.palette).to.equal(null);
        });
    });
    it("#pal02-01c GET 200 YES: Returns a sentence where a tantum plurale was allowed, as either singular or plural grammatical number was requested.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          // sentenceNumber: 53,
          sentenceSymbol: "I often wear shirt",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
          expect(res.body.palette.split(" ").reverse()[0]).to.equal("majtki.");
        });
    });
    it("#pal02-02a GET 200 YES: Returns a sentence where end of inflection chain could be array.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          // sentenceNumber: 54,
          sentenceSymbol: "boys are male",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
  });

  describe("/palette - Stage 1: Basics", () => {
    it("#pal01-01 GET 200 YES: Returns a sentence", () => {
      return request(app)
        .get("/api/palette")
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal01-02a GET 200 NO: Returns message to say no sentence can be created from specifications.", () => {
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
    it("#pal01-02b GET 200 NO: Returns message to say no sentence could possibly be created from specifications.", () => {
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
    it("#pal01-03a GET 200 NO: Returns message to say no sentence, if dummy noun was successfully filtered out.", () => {
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
    it("#pal01-03b GET 200 NO: Returns message to say no sentence, if dummy noun was successfully filtered out.", () => {
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
    it("#pal01-03c GET 200 YES: Returns sentence, as dummy noun did not need to be filtered out.", () => {
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
    it("#pal01-03d GET 200 YES: Returns successful sentence 100% of the time, rather than 33%, as one of the dummy nouns should have been filtered out.", () => {
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
    it("#pal01-03e GET 200 NO: Returns message to say no sentence, as dummy noun should have been filtered out.", () => {
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
    it("#pal01-03f GET 200 YES: Returns successful sentence 100% of the time, even though I've tried to trick it, by asking for Singular and Loc, and including an object that does indeed have Singular (but Loc is not within), and has Plural (with Loc within).", () => {
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
    it("#pal01-03g GET 200 YES: Testing whether object traversing fxn can avoid getting stuck by going down dead-ends.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceNumber: "dummy18",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal01-04a GET 200 YES: Checking in console logs whether structureChunks have indeed been updated with the features (number, gender, gcase) of the finally selected word they structure for.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "I have apple",
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal01-05a GET 200 YES: Check order of words in final sentence, based on one specified order.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy09",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Foobar-A foobar-C foobar-B."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal01-05b GET 200 YES: Check order of words in final sentence, based on multiple specified orders.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "dummy10",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect([
            "Foobar-A foobar-B foobar-C.",
            "Foobar-A foobar-C foobar-B.",
            "Foobar-B foobar-A foobar-C.",
            "Foobar-B foobar-C foobar-A.",
          ]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal01-06a GET 200 YES: Filter by specified lemma.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "I have APPLE",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(res.body.palette).to.equal("Mam jabłko.");
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal01-06b GET 200 YES: Filter by a selection of multiple specified lemmas.", () => {
      return request(app)
        .get("/api/palette")
        .send({
          sentenceSymbol: "I have APPLE/SHIRT",
          useDummy: true,
        })
        .expect(200)
        .then((res) => {
          expect(res.body.palette).to.be.a("String");
          expect(["Mam jabłka.", "Mam majtki."]).to.include(res.body.palette);
          console.log({ palette: res.body.palette });
        });
    });
    it("#pal01-07 Responds 405 if any other methods are used at this endpoint", () => {
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
});
