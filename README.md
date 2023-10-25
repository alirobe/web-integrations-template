# Web Integrations Template

- This project contains a Windows Web Service or Docker Container designed for internal rapid development using node + typescript.
- It is designed for small, simple, low-risk projects.
- It relies on rotatable keys for authentication.
- It relies on Azure App Proxy for limited internal publishing.
- It was originally designed to facilitate an [Azure Integration Services](https://azure.microsoft.com/en-us/products/category/integration) pattern.
 
## Good to know:

- Some Git + DevSecOps.
- Some TypeScript (it's quite similar to C#).
- REST, OData, SQL and JSON Schema will help.
- Basic Windows Server experience, OR experience deploying docker containers.

## How it works

All actions must be called with some sort of fixed key, either in a header, or the query string. 
All secrets and keys are defined `local.settings.json` or in ENV variables, for now - but you should move them somewhere more secure.

- Windows Task Scheduler + Powershell can make requests to the URLs, so they're run regularly. Those can use the query string like so: `Invoke-WebRequest http://localhost:3000/action?apiKey=<WEB_INTEGRATIONS_API_KEY>`
- If you set up an Azure App Proxy Application, it can be configured to add headers. It should add two: `token` should match the setting `AZURE_CUSTOM_HEADER_TOKEN` (make a note in a shared maintenance calendar to rotate this key regularly), and the `upn`, with the (unverified) UPN of the user for logging purposes.

These are not best practices, but they're a practical starting point. 

It's up to you to implement further security and secret management however you see fit. 

For OpSec reasons I won't give any further guidance.

#### Warning: The `local.settings.json` or environment variables should not be committed to the repo or stored in the container. ####

## Local development: getting started

- Ensure node version manager (`nvm`) is installed on your machine.
- cd to this directory
- `nvm install <VERSION_NUMBER>` (check `.nvmrc` for version number)
- `nvm use lts`
- `npm install`
- Use VS Code to create `local.settings.json` file in root, containing `{"$schema": "./local.settings.schema.json"}`. 
- Close and re-open the file. intellisense will pick up the schema and provide autocomplete and validation. Provide required settings and save.
- Run `npm start`
- No compile step exists. nodemon will restart the service every time you make a change.


## Deployment

Partial instructions in the relevant `deploy` folder. 

#### Security note: This template is a quick start template only. It uses nodemon in 'production'. Fix this before going live. ####
