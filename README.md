# geenrateUUID
Zero-dependency, pure JavaScript UUID generator.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
node 7.x

### Installing
Clone this repository:

    $ git clone https://github.com/mvilrokx/generate-uuid.git

(or download the zip file and unzip)

Install all the devDependencies (remember, there are no runtime dependencies!).  First ```cd``` into the project root folder and from there run:

    $ npm install

Finally, you can (re)build the library locally, recreate the documentation and run all the tests by issueing the following command:

    $ npm run prod

## Running the tests

    $ npm run test

## Development
If you want to (re)develop parts of the library yourself, you can easily re-build as you develop by using:

    $ npm run watch

This will watch for changes and re-build the library as you code away

## API Documentation
The API Documentation can be found in the ```docs``` directory, published [here](https://mvilrokx.github.io/generate-uuid/).

If you want to (re)write parts of the API's documentation yourself, you can easily re-build by using:

    $ npm run doc

This will re-build the API documentation (in the ```docs``` directory).

## Deployment
For usage in your projects, just install the npm module in your project and require it in your code:

    $ npm install mvilrokx/generate-uuid --save

Then in your code, e.g. ```index.js```

```JavaScipt
import generateUUID from './lib/generateUUID'

const uuid = generateUUID()
```

For more information, refer to [the docs](https://mvilrokx.github.io/generate-uuid/).

## Built With
* [Babel](https://babeljs.io/) - The compiler for writing next generation JavaScript
* [ESLint](http://eslint.org/) - Pluggable JavaScript linter (with Airbnb Base config)
* [Tape](https://github.com/substack/tape) - tap-producing test harness for node and browsers (with [faucet](https://github.com/substack/faucet))
* [JSdoc](http://usejsdoc.org/) - an API documentation generator for JavaScript
* [Webpack](https://webpack.js.org/) - Bundler

## Authors
* Mark Vilrokx - Initial work - [Oracle](https://oracle.com)
