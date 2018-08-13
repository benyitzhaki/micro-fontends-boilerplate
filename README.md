# micro-fontends-boilerplate
Experimental boilerplate that was created while exploring micro-frontends using web components

## Structure
 - web-component
   - native-javascript
   - react
   - vue
   - angular
 - demo
    - index.html
 - proxy-server
 
 ### /web-components
 Created diferent types of web-components in order to demonstrate how they can be included in a single page application.
 
 ### /proxy-server
 Used as a middleware to prevent CORS issues and add flexibility to the loaded routes. for example, we could easily load a production component into QA environment or vice versa. this also allows us easy development locally as we can just point them to our localhost
