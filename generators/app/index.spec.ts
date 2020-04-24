/* eslint-disable jest/expect-expect */
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

const name = 'test-project';
const email = 'alex@test.com';
const description = 'description of test project';
const username = 'alanturing';
const fullname = 'Alan Turing';
const license = 'MIT';

describe('generator-typescript-library-starter:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withPrompts({ name, description, username, email, fullname, license });
  });

  it('creates files', () => {
    assert.file([
      'LICENSE',
      'package.json',
      'README.md',
      '.gitignore',
      'index.ts',
      'tsconfig.json',
      '.eslintrc.js',
      'src/index.ts',
      'src/index.spec.ts',
    ]);
  });

  it('replaces prompt values', () => {
    assert.fileContent('LICENSE', fullname);
    assert.fileContent('LICENSE', new Date().getFullYear().toString());
    assert.fileContent('package.json', username);
    assert.fileContent('package.json', description);
    assert.fileContent('README.md', name);
  });
});