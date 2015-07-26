# Pomegranate-docker

### This is the official docker container for the Pomegranate web framework.

## Usage

Develop your Pomegranate site locally, with all of your site assets, (routes, views, models, etc) in a separate git repo.
Clone this repo to a convenient location on your docker host, run the docker container with the following command.
Your local content directory should contain a file named `options.json` which holds the options object you wish to
pass to Pomegranate. [See more here](http://pomegranate.paperelectron.com/docs/configuration/)

```shell
$ docker run -d --name paper -p 8080:8080 -v ~/site_content:/var/pom/content paperelectron/pomegranate-docker
```

You can read more about the main project [here, on Github.](https://github.com/PaperElectron/Pomegranate)