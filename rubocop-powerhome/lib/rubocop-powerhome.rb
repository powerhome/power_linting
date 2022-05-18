# frozen_string_literal: true

require "rubocop"
require "rubocop-performance"
require "rubocop-rails"
require "rubocop-rake"
require "rubocop-rspec"

require_relative "rubocop/powerhome"

RuboCop::Powerhome::Inject.defaults!
