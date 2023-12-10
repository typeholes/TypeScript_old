"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branches = void 0;
exports.branches = {
    "diagnostic-args": {
        public: true,
        title: "Diagnostics shouldn't be just strings",
        description: `
Adds an \`args\` property containing an array of the diagnostic arguments
Arguments can be strings, number, or StructuredDiagnosticArguments
        `,
    },
    "eopt-list": {
        public: true,
        title: "Adds a list of EOPT mismatches to the EOPT diagnostics",
        description: "",
    },
    "sarif": {
        public: true,
        title: "Adds a command line options to output diagnositcs in SARIF format",
        description: "",
    },
};
