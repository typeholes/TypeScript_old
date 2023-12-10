import {
    type Branch,
    branches,
} from "./branches";

console.log(`
# TypeScript/Typeholes

A fork of TypeScript with experimental features. All feartures should be considered experimental and unstable.  By no means is anything production ready and there is a very good chance it never will be

## Feature Branches

`);

Object.entries(branches).forEach(([name, branch]) => {
    if (!branch.public) return;

    console.log(branchMarkdown(name, branch));
});

function branchMarkdown(name: string, branch: Branch) {
    return `
### ${name}: ${branch.title}

- ${branch.description.trim().replace(/(\n *)/g, "$1- ")}

`;
}
