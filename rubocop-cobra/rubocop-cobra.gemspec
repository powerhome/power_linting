# frozen_string_literal: true

require_relative "lib/rubocop/cobra/version"

Gem::Specification.new do |spec|
  spec.name = "rubocop-cobra"
  spec.version = RuboCop::Cobra::VERSION
  spec.authors = ["Carlos Palhares"]
  spec.email = ["chjunior@gmail.com"]

  spec.summary = "Cobra rubocop linters"
  spec.description = "Cobra rubocop linters"
  spec.homepage = "https://github.com/powerhome/power_linting"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 2.7.0"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage
  spec.metadata["changelog_uri"] = "#{spec.homepage}/CHANGELOG.md"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    `git ls-files -z`.split("\x0").reject do |f|
      (f == __FILE__) || f.match(%r{\A(?:(?:bin|test|spec|features)/|\.(?:git|travis|circleci)|appveyor)})
    end
  end
  spec.bindir = "exe"
  spec.executables = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  # Uncomment to register a new dependency of your gem
  # spec.add_dependency "example-gem", "~> 1.0"

  # For more information and examples about making a new gem, check out our
  # guide at: https://bundler.io/guides/creating_gem.html

  spec.add_runtime_dependency "rubocop"
  spec.add_runtime_dependency "rubocop-powerhome"
  spec.metadata["rubygems_mfa_required"] = "true"

  spec.add_development_dependency "pry-byebug", "3.9.0"
end
