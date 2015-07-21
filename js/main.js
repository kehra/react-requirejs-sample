require.config({
  paths: {
    "react": "libs/react",
    "JSXTransformer": "libs/JSXTransformer",
    "jsx": "libs/jsx",
    "text": "libs/text"
  },

  jsx: {
    fileExtension: '.jsx',
    harmony: true,
    stripTypes: true
  }
});

require(['react', 'jsx!components/app'], function(React, App) {
  App = React.createFactory(App);

  React.render(App(), document.body);
});