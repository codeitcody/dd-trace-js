'use strict'

const path = require('path')
const readPkgUp = require('read-pkg-up')
const parentModule = require('parent-module')
const semver = require('semver')

function load () {
  const callerPath = parentModule()
  const parentPath = parentModule(callerPath)
  const cwd = path.dirname(parentPath || callerPath)
  const pkg = readPkgUp.sync({ cwd }).pkg || {}

  this._service = pkg.name
}

module.exports = load
