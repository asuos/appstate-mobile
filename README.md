# AppState Mobile Application

A cross platform mobile phone application for Appalachian State University.

## Setting up your development environment

You need a mac with the package manager `pip`, `homebrew` and `git` installed.

    $ brew install redis node nginx
    $ easy_install pip
    $ pip install virtualenv
    $ cd ~/your/development/folder
    $ git clone git@cmspilot.appstate.edu:appstate-mobile.git

## Building the app

    $ cd appstate-mobile/server
    $ virtualenv --no-site-packages env 
    $ source ./env/bin/activate
    $ pip install -r consumer/requirements.txt

