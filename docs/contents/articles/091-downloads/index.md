---
title: Downloads
author: vl
sort: 900
group: Other
template: article.jade
---

If you have problems installing node.js and/or other tools to build and run BlurAdmin on your machine and you just want to download html/js/css files, you can find links for download on this page.

Development (non-compressed) files can be found in `{ARCHIVE_ROOT}/blur-admin-{VERSION}/dev-release` directory. Compressed files are in `{ARCHIVE_ROOT}/blur-admin-{VERSION}/release` directory.
Then you can just open `index.html` to view your local version.

**Please note**: *As chrome doesn't support AJAX requests, when you open HTML file via **file** protocol, you might need to disable web security to have your template running.*

Sample command on OS X:

```bash
open -a Google\ Chrome --args --disable-web-security --user-data-dir=~/ChromeDevSession/
```

Sample command on Linux:

```bash
google-chrome --user-data-dir="~/chrome-dev-session" --disable-web-security
```

Sample command on Windows:

```bash
start chrome --user-data-dir="C:/Chrome dev session" --disable-web-security
```

## Links for downloads

[BlurAdmin 1.2.0](/blur-admin/downloads/blur-admin-1.2.0.zip)

