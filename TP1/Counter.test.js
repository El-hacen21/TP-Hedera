const { expect } = require("chai");

describe("Counter", function () {
  let Counter, counter;

  beforeEach(async function () {
    Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
  });

  it("should start with a count of 0", async function () {
    expect(await counter.count()).to.equal(0);
  });

  it("should increment the count", async function () {
    await counter.increment();
    expect(await counter.count()).to.equal(1);
  });

  it("should decrement the count after incrementing", async function () {
    await counter.increment();
    await counter.decrement();
    expect(await counter.count()).to.equal(0);
  });

  it("should revert when trying to decrement at zero", async function () {
    await expect(counter.decrement()).to.be.revertedWith("Le compteur est deja a zero.");
  });

  it("getCount() should return the same as count()", async function () {
    await counter.increment();
    const countFromGetter = await counter.getCount();
    const countPublic = await counter.count();
    expect(countFromGetter).to.equal(countPublic);
  });
});
