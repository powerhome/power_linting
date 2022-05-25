# frozen_string_literal: true

module RuboCop
  module Cop
    module Naming
      # todo description
      class ViewComponent < RuboCop::Cop::Cop
        # MSG = "Do not directly inherit from a global %<class>s. " \
        #       "Instead, inherit from your component's modularized " \
        #       "%<class>s, such as MyComponent::%<class>s."

        def on_class(node)
          binding.pry
          # inheritance_constant = node.node_parts[1]
          # inheritance_class = inheritance_constant&.source
          # return unless PROTECTED_GLOBAL_CONSTANTS.include?(inheritance_class)

          # add_offense(inheritance_constant,
          #             message: format(MSG, class: inheritance_class))
        end
      end
    end
  end
end
