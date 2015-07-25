#!/bin/bash

exec /sbin/setuser paper NODE_ENV=production /usr/bin/node /var/paper/pomegranate/index.js >> /var/log/paper-web.log