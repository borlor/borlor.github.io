# Jekyll blog config/deploy.rb file
require 'mina/bundler'
require 'mina/rails'
require 'mina/git'
#require 'mina/rvm'    # for rvm support. (http://rvm.io)

set :domain, 'nickma.com'
set :deploy_to, '/var/www/simmyleung.info'
set :repository, 'git@bitbucket.org:nma38/simmyleung.info.git'
set :branch, 'master'

# Optional settings:
set :user, 'git'    # Username in the server to SSH to.

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.
    invoke :'git:clone'
    invoke :'bundle:install'
    queue "#{bundle_prefix} jekyll build"
  end
end
