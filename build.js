const fs = require("fs");
const process = require("child_process");

process.execSync("mkdir -p dist");
process.execSync("cp style.css dist/style.css");

const template = fs.readFileSync("./template.html", "utf-8");

const devs_ = require("./devs.json");
const homes_ = require("./homes.json");

devs_.sort(() => Math.random() - 0.5);
homes_.sort(() => Math.random() - 0.5);

//// INDEX /////////////////////////////////////////////////////////////////////

let index = "";
for (const dev of devs) {
}

index += `TODO`;

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
for (const dev of devs_) {
}

devs += `TODO`;

fs.writeFileSync(
  "./dist/devs.html",
  template.replace("{{body}}", `<main id="devs">${index}</main>`)
);

//// homeS //////////////////////////////////////////////////////////////////////

let homes = "";
for (const home of homes_) {
}

homes += `TODO`;

fs.writeFileSync(
  "./dist/homes.html",
  template.replace("{{body}}", `<main id="homes">${index}</main>`)
);
