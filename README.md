# Gatsby Starter Bare

## Setup

### Initializing a new project

WordPress

1. Login to WPEngine (https://my.wpengine.com/) and create a new website ('Add Site')
2. Select "Copy an existing environment to a new site" and then select "gatsbystarter"
3. Add site and environment name and finally click "Add site"

Gatsby

1. Create a new GitLab repo and clone to local machine
2. Download ZIP file of starter theme and unpack in newly created folder
3. Open .env.development and replace GATSBY_WP variable with correct backend URL

The starter theme comes with authentication logic already set up. If the project doesn't require any kind of authentication, we have to delete the pages in src/pages and remove the plugin 'gatsby-plugin-create-client-paths' in gatsby-config.

### Theming

We're using theme-ui under the hood. You can find the config file in /src/gatsby-plugin-theme-ui/index.ts

### Fonts

The fonts are assigned via theme-ui but we need to be load them separately via gatsby-plugin-webfonts in gatsby-config.

### Templates

To add a template, you have to create a PHP file first and upload it to the server. For this you need SFTP credentials which you can get via the WPEngine admin interface. Login to the server, navigate to /wp-content/themes/bare-theme and create a file in here called 'template-[landing-page].php'.

The file content should be:

```
<?php
// Template Name: Landing Page
```

Replace 'Landing Page' with the actual name.

Once you have done that, you can create a new ACF field group and assign the template to a page via WordPress backend.

### Archive

Archive pages will be automatically set up if you create a PHP template with the filename "archive-[post-type]" and template name "Archive [Post Type]", as well as creating a Gatsby file callend "archive.tsx" in '/src/templates/postTypes/[postType]/archive.tsx'.

### Components

See example component in /src/Example.tsx for more information.
Naming convention: CamelCase, components captialized, functions start with a lowercase letter.

### Icons

If not icons are provided by the designer, we'll use the package mdi-material-ui. This contains all icons you can find on https://materialdesignicons.com/

To avoid a FoUC issue for icon height, wrap the icon in an `<IconButton>` (import from theme-ui) or explicitly declare the height directly on the icon.

### Store

For simplicity we're using a custom context function. It works in a very similar way compared to Redux but it's much easier to use. To create a new global variable go to either /src/store/appState.ts or /src/store/userState.ts or create a new file.
Define the variable at the top and write your custom action at the bottom.

```
case "SET_LOGIN_DIALOG":
  draft.loginDialog = payload
  break
```

In order to use the global variable, you have to import the useStore hook.

```
import { useStore } from "../store"
```

Then you can destructure the correct state group to get the desired variable.

```
const [
    {
      appState: { loginDialog },
    },
    dispatch,
  ] = useStore()
```

If you wanna change the variable, you have to dispatch an action like this.

```
const handleCloseDialog = () => dispatch({ type: "SET_LOGIN_DIALOG", payload: false })
```

You can only use useStore it in React components. For functions you would need to pass in the variable/dispatch function.

### Auth

### Utils

### Pixels and Tags

The gatsby plugins for Google Analytics, GTM, Facebook Pixel and LinkedIn Pixel are already set up in the gatsby-config.
You only have to add env variables to Netlify to add them to the live site:
GATSBY_FACEBOOK_PIXEL
GATSBY_GOOGLE_TAG_MANAGER
GATSBY_GOOGLE_ANALYTICS
GATSBY_LINKEDIN_PARTNER_ID

### Favicon

To add a favicon, simply replace the favicon.png file in the /src directory. The image should be a PNG in square format with a resolution of 500x500px (optimal).

## Deploy to Netlify

Login to the desired Netlify account and create a new page from GitLab. Enter all the environment variables like see on the development site.

In the site settings you can copy and paste the "Deploy status badge" and create a webhook, which will be entered into the WordPress backend for deployments (i.e. https://gatsbystarter.wpengine.com/wp-admin/admin.php?page=wp-jamstack-deployments-settings).

## Testing

We use a launch checklist which is maintained in Asana. Don't edit the board directly, but duplicate the project instead and work of the copy. You can access the board here: https://app.asana.com/0/704547084148310/board

## Launch

Go to the Netlify domain settings and add a custom domain. Netlify will then provide you with a A and CNAME record, which you will need to enter in the domain DNS settings (i.e. in GoDaddy).

It's recommended to use www as the primary domain to get all the benefits of their CDN.

Once the website is live under the final domain, you have to add a redirect to /static/\_redirects like:
https://gatsbystarter.netlify.app/* https://gatsbystarter.com/:splat 301!

## Parsing

When working with WordPress and Gatsby we must use the Parser() function whenever we deal with text (though not necessary when using `<Textarea />`) because otherwise certain characters won’t get escaped.

```
import Parser from "html-react-parser"
```