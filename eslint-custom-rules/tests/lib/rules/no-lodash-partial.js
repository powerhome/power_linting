"use strict";

const rule = require("../../../lib/rules/no-lodash-partial"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
const errorMessage = "Unexpected Lodash's partial, see: https://github.com/powerhome/rfcs/blob/main/0072-deprecate-lodash-partial.md";
const errors = [{ message: errorMessage, type: "CallExpression" }]
const parserOpts = { ecmaVersion: 6, sourceType: "module" }

ruleTester.run("no-lodash-partial", rule, {
  valid: [
    {
      code: "partial(foo)", // Since there's no lodash we assume it's not lodash's partial
    },
    {
      code: "doSomething()",
    },
    {
      code: "() => { doSomething() }",
      parserOptions: parserOpts,
    },
    {
      code: "() => doSomething()",
      parserOptions: parserOpts,
    }
  ],
  invalid: [
    {
      code: "import lodash from 'lodash' \n lodash.partial(doSomething, 'foo')",
      errors: errors,
      parserOptions: parserOpts,
    },
    {
      code: "import { partial } from 'lodash' \n partial(doSomething, 'foo')",
      errors: errors,
      parserOptions: parserOpts,
    },
    {
      code: "import { partial } from 'lodash' \n partial(doSomething)",
      errors: errors,
      parserOptions: parserOpts,
    },
    {
      code: "import { partial } from 'lodash' \n () => partial(doSomething)",
      errors: errors,
      parserOptions: parserOpts,
    },
  ],
});
