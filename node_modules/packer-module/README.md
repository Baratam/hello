packer-module
====================

This plugin inspects, builds and runs single AngularJS modules. Every module contains a part of the functionality of an enterprise application. By splitting applictions into smaller modules the testability of the application will improve.

Packer-module splits the build process in multiple steps. First step is to inspects all the javascript sources with a default jshint configuration. Next step is the concatenation of all app, css and mock sources to the dist folder. Then minify and uglify are used to generate compressed versions of the module. Last step is to move all required folders (views, images and fonts) to the dist folder.

For testing porposes it is required that every module can run standalone. Extra context that is needed to start the module is placed in the run folder. This wraps the module and makes it run on its own. When E2E mocks are needed to run the application they can be placed into the mocks folder. This gives the posibility to also use the mocks in into the integration build if necessary.

Grunt Modules
------------
The following Grunt modules are loaded and configured to build and package angular modules

- grunt-contrib-concat : 0.4.0
- grunt-contrib-copy : 0.5.0
- grunt-contrib-connect : "0.8.0
- grunt-contrib-watch : "0.6.1
- grunt-contrib-jshint : "0.10.0
- grunt-contrib-uglify : "0.5.0
- grunt-contrib-cssmin : "0.10.0
- grunt-bower-task : 0.4.0


Grunt Task
----------
The following Grunt tasks are registered to build and run angular modules.

- module
- module:run

More information
----------------
http://packerjs.io
