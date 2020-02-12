exports.config = {
  projectRoot: './src/app',
  projectName: 'devnote',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog'
      }
    }
  }
};
