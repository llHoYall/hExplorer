const Application = require("spectron").Application;
const electronPath = require("electron");
const assert = require("assert");
const path = require("path");

describe("Application Launch Test", function() {
  this.timeout(10000);

  beforeEach(() => {
    this.app = new Application({
      path: electronPath,
      args: [path.join(__dirname, "..")]
    });
    return this.app.start();
  });

  afterEach(() => {
    if (this.app && this.app.isRunning()) {
      return this.app.stop();
    }
  });

  it("=> Shows an initial window", () => {
    return this.app.client
      .getWindowCount()
      .then(function(count) {
        assert.equal(count, 1);
      })
      .catch(err => {
        console.log(err);
      });
  });

  it("=> Check title", () => {
    return this.app.client
      .getTitle()
      .then(function(title) {
        assert.equal(title, "hExplorer");
      })
      .catch(err => {
        console.log(err);
      });
  });

  it("=> Check visible browser window", () => {
    return this.app.browserWindow
      .isVisible()
      .then(function(isVisible) {
        assert.equal(isVisible, true);
      })
      .catch(err => {
        console.log(err);
      });
  });
});
