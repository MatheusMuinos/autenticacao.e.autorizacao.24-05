@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (autenticacao.e.autorizacao.24-05) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /workspaces/autenticacao.e.autorizacao.24-05/package.json:

{
  "name": "autenticacao.e.autorizacao.24-05",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) 

npm notice
npm notice New major version of npm available! 10.8.2 -> 11.3.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.3.0
npm notice To update run: npm install -g npm@11.3.0
npm notice
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm intall nodemon --save.dev
Unknown command: "intall"


Did you mean this?
  npm install # Install a package
To see a list of supported npm commands, run:
  npm help
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ 
]@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm install

up to date, audited 1 package in 289ms

found 0 vulnerabilities
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm install nodemon --save.dev

added 29 packages, and audited 30 packages in 3s

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm intall jsonwebtoken bcryptjs helmet cors express-rate-limit dotenv mongoose
Unknown command: "intall"


Did you mean this?
  npm install # Install a package
To see a list of supported npm commands, run:
  npm help
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ pm isntall jsonwebtoken bcryptjs helmet cors express-rate-limit doten
v mongoosepm
bash: pm: command not found
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm intall jsonwebtoken bcryptjs helmet cors express-rate-limit doten
v mongoose
Unknown command: "intall"


Did you mean this?
  npm install # Install a package
To see a list of supported npm commands, run:
  npm help
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm isntall jsonwebtoken bcryptjs helmet cors express-rate-limit dote
nv mongoose

added 99 packages, and audited 129 packages in 6s

21 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm run start:docker-database
npm error Missing script: "start:docker-database"
npm error
npm error Did you mean this?
npm error   npm run star:docker-database # run the "star:docker-database" package script
npm error
npm error To see a list of scripts, run:
npm error   npm run
npm error A complete log of this run can be found in: /home/codespace/.npm/_logs/2025-04-24T22_58_24_433Z-debug-0.log
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $ npm run start:docker-database

> autenticacao.e.autorizacao.24-05@1.0.0 start:docker-database
> docker compose up -d

WARN[0000] /workspaces/autenticacao.e.autorizacao.24-05/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Running 18/18
 ✔ mongo Pulled                                                                                                                       29.9s 
 ✔ mongo-express Pulled                                                                                                               29.5s 
[+] Running 3/3
 ✔ Network autenticacaoeautorizacao24-05_default            Created                                                                    0.1s 
 ✔ Container autenticacaoeautorizacao24-05-mongo-express-1  Started                                                                    0.8s 
 ✔ Container autenticacaoeautorizacao24-05-mongo-1          Started                                                                    0.8s 
@MatheusMuinos ➜ /workspaces/autenticacao.e.autorizacao.24-05 (main) $