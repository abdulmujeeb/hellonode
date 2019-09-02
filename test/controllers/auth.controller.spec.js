var assert = require('assert');
var authController = require("../../src/controllers/auth.controller");

describe('AuthController', function() {
    describe('isAuthorized', function() {
        it('Should return false if not authorized', function() {
            assert.equal(false, authController.isAuthorized(['user'], 'admin'));
        })
    })
})
