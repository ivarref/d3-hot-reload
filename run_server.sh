#!/bin/bash

./node_modules/.bin/webpack-dev-server ./entry --hot --inline --module-bind "css=style\!css"