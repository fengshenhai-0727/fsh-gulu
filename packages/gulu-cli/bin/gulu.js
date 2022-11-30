#!/usr/bin/env node
// require('v8-compile-cache');

const fs = require('fs');
const path = require('path');
const cliRoot = path.join(__dirname, '..');
const cliProject = path.join(cliRoot, 'tsconfig.json');
const seedProject = path.join(process.cwd(), 'tsconfig.json');
const cliRunLocal = fs.existsSync(path.join(cliRoot, './scripts/build.sh'));
const projectTsConfig = cliRunLocal ? cliProject : seedProject;

console.log('projectTsConfig',projectTsConfig);

if (fs.existsSync(projectTsConfig)) {
    require('ts-node').register({
        project: projectTsConfig,
        transpileOnly: true
    });
}

const proj = require(`../src`);

proj.run(cliRunLocal);
