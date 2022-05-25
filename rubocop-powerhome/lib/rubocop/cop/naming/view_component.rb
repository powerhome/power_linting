# frozen_string_literal: true

module RuboCop
  module Cop
    module Naming
      # todo description
      class ViewComponent < RuboCop::Cop::Cop
        def on_class(node)
          inheritance_klass = node.node_parts[1]&.source
          return unless view_component_class?(inheritance_klass)

          klass = node.node_parts[0]&.source
          return if klass.end_with?("Component")

          add_offense(node.node_parts[0], message: "End ViewComponent classnames with 'Component'")
        end

      private

        def view_component_class?(inheritance_klass)
          inheritance_klass.end_with?("::ApplicationComponent") ||
            inheritance_klass.end_with?("ViewComponent::Base")
        end
      end
    end
  end
end
