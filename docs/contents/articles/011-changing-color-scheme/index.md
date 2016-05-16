---
title: Changing Color Scheme
author: vl
sort: 900
group: Customization
template: article.jade
---

If you want to change template color scheme, you need to do 4 simple steps:

1) Override theme and colors in config (`src/app/theme/theme.config.js`):
```javascript
  baConfigProvider.changeTheme({blur: true});

  baConfigProvider.changeColors({
    default: 'rgba(#000000, 0.2)',
    defaultText: '#ffffff',
    dashboard: {
      white: '#ffffff',
    },
  });
```
Note:
- you shouldn't change default config directly (`theme.configProvider.js`). Instead of that you can override color scheme on the configuration step (`theme.config.js`)

2) Create your own color scheme, like `src/sass/theme/conf/colorScheme/_mint.scss` and `src/sass/theme/conf/colorScheme/_blur.scss`. And replace it in `src/sass/theme/common.scss` file:

```scss
@import 'theme/conf/colorScheme/mint';
```

to

```scss
@import 'theme/conf/colorScheme/custom';
```

3) Replace background images: `src/app/assets/img/blur-bg.jpg` and `src/app/assets/img/blur-bg-blurred.jpg`

4) Run application `gulp serve`

Here's an example of template with another color scheme:

![](new-color-scheme.jpg)