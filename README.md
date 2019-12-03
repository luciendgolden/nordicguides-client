# NORDIC GUIDES APPLICATION

## Demo 

`https://luciendgolden.github.io/visitfinland-vue/`

[Visit here](https://luciendgolden.github.io/visitfinland-vue/)

## Previewing Locally

```
npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Requirements

### Public view requirements

All the users of the application can see the public site without login. In the pubic site
the following features are required:

* In the starting page there will be general information about pages, and
Lapland. You can use as reference https://www.visitfinland.com/lapland/
* There is a link in navigation “Lapland”. There you can gather some information
about Lapland. Make also a photogrip of photos of Lapland
* Guides page displays the listing of guides. When you click on a guide, you will
see information card about the guide.
* Cities page displays the information about cities. You can see the guides
connected to the city by clicking “Show guides”. When you click on the
Country, you see the cities in that country only. From “Show guides” the
listing of guides is displayed and you can click on guide to see the information
card.
* In “About” page you will show the information about yourself with image of
yourself