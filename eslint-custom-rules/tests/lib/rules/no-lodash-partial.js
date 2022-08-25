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
const errorMessage = "Unexpected Lodash's partial, see: https://github.com/powerhome/rfcs/blob/main/0072-deprecate-lodash-partial.md";

ruleTester.run("no-lodash-partial", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "'lodash' \n partial(doSomething, 'foo')",
      errors: [{ message: errorMessage, type: "CallExpression" }],
    },
  ],
});
