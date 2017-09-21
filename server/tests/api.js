const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();
chai.use(chaiHttp);

describe('/POST Login', () => {
  it('it should Login to the system', (done) => {
    done();
  });
});

describe('/POST create new Gnome', () => {
  it('it should create new Gnome', (done) => {
    done();
  });
});

describe('Check if new Gnome is in db', () => {
  it('Gnome should be saved in db', (done) => {
    done();
  });
});

describe('/GET Gnomes', () => {
  it('it should get all Gnomes objects', (done) => {
    done();
  });
});

describe('/PUT Update Gnome', () => {
  it('it should update a Gnome', (done) => {
    done();
  });
});

describe('/DELETE Delete Gnome', () => {
  it('it should delete Gnome', (done) => {
    done();
  });
});

describe('/GET Logout', () => {
  it('it should logout from the system', (done) => {
    done();
  });
});
