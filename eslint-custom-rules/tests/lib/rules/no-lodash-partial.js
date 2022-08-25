"use strict";

const rule = require("../../../lib/rules/no-lodash-partial"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
const errorMessage = "Unexpected Lodash's partial, see: https://github.com/powerhome/rfcs/blob/main/0072-deprecate-lodash-partial.md";

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
      parserOptions: { ecmaVersion: 6 },
    },
    {
      code: "() => doSomething()",
      parserOptions: { ecmaVersion: 6 },
    }
  ],
  invalid: [
    {
      code: "import lodash from 'lodash' \n lodash.partial(doSomething, 'foo')",
      errors: [{ message: errorMessage, type: "CallExpression" }],
      parserOptions: { ecmaVersion: 6, sourceType: "module" },
    },
    {
      code: "import { partial } from 'lodash' \n partial(doSomething, 'foo')",
      errors: [{ message: errorMessage, type: "CallExpression" }],
      parserOptions: { ecmaVersion: 6, sourceType: "module" },
    },
    {
      code: "import { partial } from 'lodash' \n partial(doSomething)",
      errors: [{ message: errorMessage, type: "CallExpression" }],
      parserOptions: { ecmaVersion: 6, sourceType: "module" },
    },
    {
      code: "import { partial } from 'lodash' \n () => partial(doSomething)",
      errors: [{ message: errorMessage, type: "CallExpression" }],
      parserOptions: { ecmaVersion: 6, sourceType: "module" },
    },
  ],
});
