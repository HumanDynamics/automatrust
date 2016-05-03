module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': 'node_modules/auto-reload-brunch/vendor/auto-reload.js'
      },
      entryPoints: {
        'app/initialize.js': 'app.js'
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  npm: {
    styles: {purecss: ['build/pure.css']}
  },
  plugins: {
    babel: {presets: ['es2015']}
  },
  server: {
    path: 'server.js'
  }
};
