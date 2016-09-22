require.config({
  baseUrl: './',
  paths: {
    /* modules */
    'lazy': 'modules/lazy/lazy',

    /* utils */
    'loader': 'utils/loader',

    /* vendor */
    'angular': 'bower_components/angular/angular',
    'ui-router': 'bower_components/angular-ui-router/release/angular-ui-router',
    'q': 'bower_components/q/q',
    'oclazyload': 'bower_components/oclazyload/dist/ocLazyLoad.require',

    /* requirejs plugins */
    'text': 'bower_components/text/text'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'ui-router': {
      deps: ['angular']
    },
    'q': {
      exports: 'q'
    },
    'oclazyload': {
      deps: ['angular']
    }
  }
});