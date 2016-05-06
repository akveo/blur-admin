---
title: README
author: the-wintersmith
sort: 65
group: First Group
template: article.jade
---

Welcome to your new blog! This is the default blog template with RSS, pagination and an archive. There are other templates available -- run `wintersmith new --help` to list them.

## _Repeat after me:_ This is my blog. There are many like it, but this one is mine. My blog is my best friend. It is my life. I must master it as I must master my life. My blog, without me, is useless. Without my blog, I am useless.

Good, now, the directory structure of your blog is as follows:

```
├── config.json               <- site configuration
├── contents
│   ├── about.md
│   ├── archive.json
│   ├── articles              <– each article has its own directory
│   │   ├── another-test
│   │   │   └── index.md
│   │   ├── bamboo-cutter
│   │   │   ├── index.md
│   │   │   └── taketori_monogatari.jpg
│   │   ├── hello-world
│   │   │   └── index.md
│   │   ├── markdown-syntax
│   │   │   └── index.md
│   │   └── red-herring
│   │       ├── banana.png
│   │       └── index.md
│   ├── authors               <- author metadata, check author.jade
│   │   ├── baker.json
│   │   └── the-wintersmith.json
│   ├── css
│   │   └── main.css
│   └── feed.json
├── plugins
│   └── paginator.coffee      <- paginator plugin
├── templates
│   ├── archive.jade
│   ├── article.jade
│   ├── author.jade
│   ├── feed.jade
│   ├── index.jade
│   └── layout.jade
└── views
    └── articles.coffee       <- view that lists articles
```

Articles are sorted by date and 3 are shown per page, you can configure this and more in config.json. Check paginator.coffee for all options related to pagination, most plugins also have their own options.

### A typical article

```markdown
---
title: Hear me blog
author: johndoe
date: 2012-12-12 12:12
---

This will be shown as the article excerpt.

## A h2, hr or <span class="more"> marks where the intro cuts off

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```

## Links in the markdown to other items in the content tree will be resolved for you.

For example a link to `../bamboo-cutter/index.md` resolves to [`/articles/bamboo-cutter/`](../bamboo-cutter/index.md).

---

This is where I leave you to your own devices. Join **#wintersmith** on freenode if you have any questions.
