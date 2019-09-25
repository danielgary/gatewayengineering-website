const exec = require("child_process").exec;
const fs = require("fs");

console.log("Starting prebuild process");

// get the local branch
exec("git branch | grep \\* | cut -d ' ' -f2", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }

  let BRANCH = `${stdout.replace(/\n/g, " ").replace(/\//g, "\\/")}`;

  if (process.argv[2]) {
    BRANCH = process.argv[2];
  }

  // copy the template to the actual config yml file
  fs.copyFileSync(
    "./static/admin/netlify-cms-config.yml",
    "./static/admin/config.yml"
  );

  // replace the constant with the local branch name
  exec(
    `sed -i -e "s/NETLIFY_CMS_BRANCH/${BRANCH}/g" ./static/admin/config.yml`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Prebuild process complete");
    }
  );
});
