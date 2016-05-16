---
title: Switching to Blur Theme
author: kd
sort: 1000
group: Customization
template: article.jade
---

If you want to switch theme to the blur, you need to do 2 simple steps:

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

2) Replace theme in `src/sass/theme/common.scss` file:

```scss
@import 'theme/conf/colorScheme/mint';
```

to

```scss
@import 'theme/conf/colorScheme/blur';
```