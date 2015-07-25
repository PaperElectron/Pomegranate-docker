#Get baseimage up and running.

FROM phusion/baseimage:0.9.16

RUN apt-get update && apt-get -y install \
  build-essential \
  python \
  git \
  curl

RUN curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
  echo 'deb https://deb.nodesource.com/node012 trusty main' > /etc/apt/sources.list.d/nodesource.list && \
  echo 'deb-src https://deb.nodesource.com/node012 trusty main' >> /etc/apt/sources.list.d/nodesource.list

RUN apt-get update && apt-get install -y nodejs && node -v && npm -v
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV PAPER_HOME /var/paper
ENV APPLICATION_HOME $PAPER_HOME/pomegranate
ENV CONTENT_HOME $PAPER_HOME/content

# If you bind mount a volume from host/volume from a data container,
# ensure you use same uid

RUN useradd -d "$PAPER_HOME" -u 1000 -m -s /bin/bash paper

RUN mkdir /etc/service/paper-web
ADD paper-web.sh /etc/service/paper-web/run

EXPOSE 8080

VOLUME $CONTENT_HOME

RUN mkdir $APPLICATION_HOME

ADD default_content/ $CONTENT_HOME

ADD index.js $APPLICATION_HOME/
WORKDIR $APPLICATION_HOME
RUN chown -R paper "$PAPER_HOME"
RUN npm install pomegranate lodash


CMD ["/sbin/my_init"]
