/**
 * @fileoverview Do not use Lodash&#39;s partial
 * @author 
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-lodash-partial"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-lodash-partial", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "partial(() => doSomething())",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
