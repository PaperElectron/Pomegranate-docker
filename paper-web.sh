#!/bin/bash
export NODE_ENV=production
exec /sbin/setuser paper /usr/bin/node /var/paper/pomegranate/index.js >> /var/log/paper-web.log
