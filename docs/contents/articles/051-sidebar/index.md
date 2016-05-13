---
title: Sidebar
author: vl
sort: 900
group: Components
template: article.jade
---

Sidebar is used to provide convenient way of navigation in our application. 
Application support only one sidebar per angular application. 
That means sidebar is basically a singletone object.
Currently sidebar supports level 1 and 2 sub menus.
 
Sidebar can be created using `baSidebar` directive:
```html
<ba-sidebar></ba-sidebar>
```


For now it support only javascript configuration. And can be configured manually or via `ui-router` states.
They can be used either combined or one at a time.


## Manual configuration

For manual configuration you need to use `baSidebarServiceProvider` provider in angular [configuration block](https://docs.angularjs.org/guide/module#configuration-blocks).
The provider has `addStaticItem` method, which receives menuItem object as an argument, which can have following properties:

<table>
<thead>
<tr>
<td>property</td>
<td>type</td>
<td>meaning</td>
</tr>
</thead>
<tbody>

<tr>
<td>title</td>
<td>String</td>
<td>Name of the menu item</td>
</tr>

<tr>
<td>icon</td>
<td>String</td>
<td>Icon (it's class name) to be displayed near title</td>
</tr>

<tr>
<td>stateRef</td>
<td>String</td>
<td>`ui-router` state associated with this menu item</td>
</tr>

<tr>
<td>fixedHref</td>
<td>String</td>
<td>Url associated with this menu item</td>
</tr>

<tr>
<td>blank</td>
<td>String</td>
<td>Specifies if following Url should be opened in new browser tab</td>
</tr>

<tr>
<td>subMenu</td>
<td>Array of menu items</td>
<td>List of menu items to be displayed as next level submenu</td>
</tr>

</tbody>
</table>

## Route configuration

By default sidebar iterates through all **ui-router** states you defined in your application and looks for `sidebarMeta` property in them.
For each state with this property found sidebar element is created. 

States are being grouped hierarchically. 
That means if there's parent abstract state for some state and they both have `sidebarMeta` property, it will be displayed as a sub item of that abstract state menu item.  

Name of the item is taken from `state`'s `title` property. Sample state configuration, which will be included in sidebar:
```javascript
$stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        });
```

`sidebarMeta` object can have following properties:

<table>
<thead>
<tr>
<td>property</td>
<td>type</td>
<td>meaning</td>
</tr>
</thead>
<tbody>

<tr>
<td>icon</td>
<td>String</td>
<td>Icon (it's class name) to be displayed near title</td>
</tr>

<tr>
<td>order</td>
<td>Number</td>
<td>Element's order in current hierarchy</td>
</tr>

</tbody>
</table>