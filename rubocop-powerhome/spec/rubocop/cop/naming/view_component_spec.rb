# frozen_string_literal: true

require "spec_helper"

RSpec.describe RuboCop::Cop::Naming::ViewComponent do
  subject(:cop) { described_class.new }

  it "accepts view_component classes ending with 'Component'" do
    expect_no_offenses(<<~RUBY)
      class FooComponent < MyComponent::ApplicationComponent
      end
    RUBY
  end
end
