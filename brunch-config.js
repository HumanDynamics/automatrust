module.exports = {
  files: {
    javascripts: {
      joinTo: {
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
  }
};
