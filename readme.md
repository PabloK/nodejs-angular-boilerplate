### NodeJS - boilerplate

### Developer installation
Here are some simple instructions on how to get started with the project.

* To install simply run ```npm install```
* To test the project run ```npm test``` after installing
* To run the project run ```npm start``` after installing

### Folder structure
  * config: project configuration / envvariables.
  * controllers: express controllers / API.
  * jadeviews: jadetemplates to be converted to html.
  * jssrc: source of client side javascripts.
    * controllers:  Angular controllers (Should only be one NavController)
    * services: Angular services.
    * directives: Angular directives. (Build reusable components)
  * public: statically served files without permission requirements.
    * js: compiled clientside javascripts.
    * images: compiled clientside javascripts.
    * partials: Clientside partial views. (html)
  * tasks: grunt task definitions.
  * test: tests for clientside, serverside and tasks
  * .gitignore: list of files and folders that should not be checked in
  * app.js: the express server main entry point.
  * gruntfile.js: configuration for grunt. Used to run the project in devmode.
  * package.json: project dependencies and version config.
  * readme.md: Information about the project (this file).
