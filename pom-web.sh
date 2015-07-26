#!/bin/bash
export NODE_ENV=production
exec /sbin/setuser pom /usr/bin/node /var/pom/index.js >> /var/log/pomegranate-web.log
