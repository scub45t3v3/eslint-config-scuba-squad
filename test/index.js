'use strict';

(() => {
  const unit = require('unit.js');
  const config = require('../.eslintrc');

  describe('eslint-config-scuba-squad', () => {
    it('should be an object hash', () => {
      unit
        .object(config)
        .hasProperty('env')
        .hasProperty('parserOptions')
        .hasProperty('rules');
    }); // end it

    describe('#env', () => {
      it('should be an object hash', () => {
        unit
          .object(config.env)
          .hasProperty('node', true)
          .hasProperty('es6', true);
      }); // end it
    }); // end describe #env

    describe('#parserOptions', () => {
      it('should be an object hash', () => {
        unit
          .object(config.parserOptions)
          .hasProperty('ecmaVersion', 2018)
          .hasProperty('sourceType', 'script');
      }); // end it
    }); // end describe #parserOptions

    describe('#rules', () => {
      it('should be an object hash', () => {
        unit
          .object(config.rules)
          .isNotEmpty();
      }); // end it
    }); // end describe #rules
  }); // end describe eslint-config-scuba-squad
})(); // end IIFE