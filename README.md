# mock-x42

a simple mock api server...

## deployed

- [root][api-root]
- [api][api-api]
- [api/mock][api-mock]
- [api/mock/auto][api-auto]
- [api/mock/color][api-color]
- [api/mock/gt][api-gt]
- [api/mock/slug][api-slug]
- [api/mock/ssns][api-ssns]
- [api/mock/vins][api-vins]
- [api/mock/uuid][api-uuid]

## usage

- `yarn install`
- `yarn dev` - _uses nodemon, see below_

```
➜ mock-api git:(master) yarn dev
yarn run v1.17.3
$ nodemon server
[nodemon] 1.19.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] starting `node server.js`
Magic happens here -- http://localhost:8180
         mock apis -- http://localhost:8180/api/mock
        sample api -- http://localhost:8180/api/mock/auto
--
```

## docker

if you prefer, you can run this in docker.

- `yarn build` - _docker-compose build_
- `yarn up` - _docker-compose up_
- `yarn down` - _docker-compose down_

```
➜ mock-api git:(master) ✗ yarn up
yarn run v1.17.3
$ docker-compose up
Creating network "mock-api_default" with the default driver
Creating mock-api_web_1 ... done
Attaching to mock-api_web_1
web_1  | yarn run v1.15.2
web_1  | $ node server
web_1  | Magic happens here -- http://localhost:8180
web_1  |          mock apis -- http://localhost:8180/api/mock
web_1  |         sample api -- http://localhost:8180/api/mock/auto
web_1  | --

```

## tests

- `yarn test` - _run tests, single pass_
- `yarn ct` - _run tests, continuously_
- `yarn coverage` - _run coverage report_

```
--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |      100 |      100 |      100 |      100 |                   |
 api          |      100 |      100 |      100 |      100 |                   |
  utils.js    |      100 |      100 |      100 |      100 |                   |
 api/data     |      100 |      100 |      100 |      100 |                   |
  colors.js   |      100 |      100 |      100 |      100 |                   |
  gtSports.js |      100 |      100 |      100 |      100 |                   |
 api/sample   |      100 |      100 |      100 |      100 |                   |
  mock.js     |      100 |      100 |      100 |      100 |                   |
  router.js   |      100 |      100 |      100 |      100 |                   |
--------------|----------|----------|----------|----------|-------------------|
✨  Done in 1.44s.

```

## dependencies

- [Chai][chai-js] - _a BDD / TDD assertion library_
- [Chai-HTTP][chai-io] - _HTTP integration testing with Chai assertions._
- [Chance][chance-js]
- [Docker Desktop for OSX][docker-osx]
- [Docker Desktop for Windows][docker-win]
- [Faker][faker-js]
- [Istanbul][ist-js] - _JavaScript test coverage made simple_
- [Mocha][mocha-js] - _a JavaScript test framework_
- [nodemon][nodemon-io] - _reload, automatically_
- [nyc][nyc-js] - _the Istanbul command line interface_
- [Sinon][sinon-js] - _test spies, stubs and mocks_
- [vin-generator][vin-gen]

## who

- Richard Hess
- [https://eswat2.github.io][eswat2-io]

[eswat2-io]: https://eswat2.github.io
[api-root]: https://mock-x42.eswat2.now.sh/
[api-api]: https://mock-x42.eswat2.now.sh/api
[api-mock]: https://mock-x42.eswat2.now.sh/api/mock
[api-auto]: https://mock-x42.eswat2.now.sh/api/mock/auto
[api-color]: https://mock-x42.eswat2.now.sh/api/mock/color
[api-gt]: https://mock-x42.eswat2.now.sh/api/mock/gt
[api-slug]: https://mock-x42.eswat2.now.sh/api/mock/slug
[api-ssns]: https://mock-x42.eswat2.now.sh/api/mock/ssns
[api-vins]: https://mock-x42.eswat2.now.sh/api/mock/vins
[api-uuid]: https://mock-x42.eswat2.now.sh/api/mock/uuid
[docker-osx]: https://docs.docker.com/docker-for-mac/
[docker-win]: https://docs.docker.com/docker-for-windows/
[chai-js]: https://www.chaijs.com/
[chai-io]: https://www.chaijs.com/plugins/chai-http/
[chance-js]: https://chancejs.com/
[faker-js]: https://github.com/marak/Faker.js/
[ist-js]: https://istanbul.js.org/
[mocha-js]: https://mochajs.org/
[nodemon-io]: https://nodemon.io/
[nyc-js]: https://github.com/istanbuljs/nyc
[sinon-js]: https://sinonjs.org/
[vin-gen]: https://github.com/ArchmageInc/vin-generator
