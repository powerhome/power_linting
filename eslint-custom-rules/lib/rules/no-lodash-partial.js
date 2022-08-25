/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Do not use Lodash's partial",
      recommended: true,
      url: "https://github.com/powerhome/rfcs/blob/main/0072-deprecate-lodash-partial.md",
    },
    schema: [],
    messages: {
      unexpectedPartial: "Unexpected Lodash's partial, see: https://github.com/powerhome/rfcs/blob/main/0072-deprecate-lodash-partial.md"
    }
  },

  create(context) {
    const sourceCode = context.getSourceCode();
    const text = sourceCode.getText();

    return {
      CallExpression(node) {
        const lastToken = sourceCode.getLastToken(node);
        const lastCalleeToken = sourceCode.getLastToken(node.callee);

        if(lastCalleeToken.value === 'partial' && text.indexOf('lodash') > -1)
          context.report({
            node,
            loc: {
              start: {
                line: lastCalleeToken.loc.end.line,
                column: lastCalleeToken.loc.end.column - 1
              },
              end: lastToken.loc.start
            },
            messageId: "unexpectedPartial",
          });
      }
    };
  },
};
