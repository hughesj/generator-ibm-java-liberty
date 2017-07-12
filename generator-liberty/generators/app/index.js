/*
 * Copyright IBM Corporation 2017
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Generator = require('yeoman-generator');
const Handlebars = require('handlebars');
const fspath = require('path');
const fs = require('fs');
const extend = require('extend');
const Defaults = require('../../lib/defaults');

var defaults = new Defaults();

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    //create command line options that will be passed by YaaS
    defaults.setOptions(this);
    extend(this, opts.context);   //inject the objects and functions directly into 'this' to make things easy
    this.logger.writeToLog("Liberty Generator context", opts.context);
    var ext = this.promptmgr.add(require('../prompts/liberty.js'));
    ext.setContext(opts.context);
    this.patterns.push('picnmix');
    this.conf.addMissing(opts, defaults);
    this.logger.writeToLog("Liberty Generator conf (final)", this.conf);
  }

  initializing() {
  }


  prompting() {
    //do not add questions in here, use the promptmgr on the context if you need to get input from the user
  }

  configuring() {
    this.configure(this);
  }

  writing() {
    return this.defaultWriter(this);   //use the default writer supplied by the context.
  }

  end() {
  }

};
