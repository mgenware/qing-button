const nodeMajor = parseInt(process.versions.node.split('.')[0], 10);

const runTestCmd = 'wtr dist_tests/**/*.test.js --node-resolve --playwright --browsers webkit';

function npx(cmd) {
  let r = 'npx';
  if (nodeMajor >= 16) {
    r += ' -y';
  }
  r += ` ${cmd}`;
  return r;
}

export default {
  // Starts development mode: watches and compiles all source files including tests.
  dev: {
    run: ['#clean', 'tsc -b tests -w'],
    envGroups: ['development'],
  },

  // Runs tests (you need to build the project first).
  t: runTestCmd,
  // Runs tests in watch mode (you need to build the project first).
  tw: `${runTestCmd} --watch`,

  // Cleans, lints, compiles and runs tests.
  build: {
    run: ['#clean', 'tsc -b tests', '#lint', '#manifest', '#t'],
    envGroups: ['production'],
  },

  // Deletes compiled files (auto triggered by `npm run r dev` or `npm run r build`).
  clean: {
    run: {
      del: ['dist', 'dist_tests'],
    },
  },

  // Lints the project using ESLint (auto triggered by `npm run r build`).
  lint: 'eslint --max-warnings 0 --ext .ts src/ tests/',

  // Validate the manifest.
  manifest: npx('validate-custom-elements-manifest'),

  _: {
    envGroups: {
      production: {
        NODE_ENV: 'production',
      },
      development: {
        NODE_ENV: 'development',
      },
    },
  },
};
