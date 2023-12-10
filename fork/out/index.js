"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const branches_1 = require("./branches");
console.log(`
# TypeScript/Typeholes

A fork of TypeScript with experimental features. All feartures should be considered experimental and unstable.  By no means is anything production readonly

## Feature Branches

`);
Object.entries(branches_1.branches).forEach(([name, branch]) => {
    if (!branch.public)
        return;
    console.log(branchMarkdown(name, branch));
});
function branchMarkdown(name, branch) {
    return `
### ${name}: ${branch.title}

>    ${branch.description.replace(/\n/g, "    \n")}

`;
}
