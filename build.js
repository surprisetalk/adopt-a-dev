const fs = require("fs");
const process = require("child_process");

process.execSync("mkdir -p dist");
process.execSync("cp style.css dist/style.css");

const template = fs.readFileSync("./template.html", "utf-8");

const shuf = xs => {
  xs.sort(() => Math.random() - 0.5);
  return xs;
};

//// INDEX /////////////////////////////////////////////////////////////////////

let index = "TODO";

fs.writeFileSync(
  "./dist/index.html",
  template.replace("{{body}}", `<main id="index">${index}</main>`)
);

//// ABOUT /////////////////////////////////////////////////////////////////////

const about = `
  TODO
`;

fs.writeFileSync(
  "./dist/about.html",
  template.replace("{{body}}", `<main id="about">${about}</main>`)
);

//// DEVS //////////////////////////////////////////////////////////////////////

let devs = "";
for (const dev of shuf(require("./devs.json"))) {
}

devs += `TODO`;

fs.writeFileSync(
  "./dist/devs.html",
  template.replace("{{body}}", `<main id="devs">${index}</main>`)
);

//// homeS //////////////////////////////////////////////////////////////////////

let homes = "";
for (const home of shuf(require("./homes.json"))) {
}

homes += `TODO`;

fs.writeFileSync(
  "./dist/homes.html",
  template.replace("{{body}}", `<main id="homes">${index}</main>`)
);
