# mock-x42

a simple mock api server...

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
        sample api -- http://localhost:8180/api/mock/gt
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
web_1  |         sample api -- http://localhost:8180/api/mock/gt
web_1  | --

```

## tests

- `yarn test` - _run tests, single pass_
- `yarn ct` - _run tests, continuously_
- `yarn coverage` - _run coverage report_


```
➜ mock-api git:(master) ✗ yarn coverage
yarn run v1.17.3
$ nyc mocha --recursive


  gtSports test suite
    ✓ data: should be an array
    ✓ total: should be an number
    ✓ total: should be equal to the length of data
    ✓ filters: should be an object
    filters test suite
      ✓ nonExotics: should exist in filters
      ✓ nonExotics: should filter data
      ✓ exotics: should exist in filters
      ✓ exotics: should filter data
      ✓ makes: should exist in filters
      ✓ makes: should filter data
      ✓ groups: should exist in filters
      ✓ groups: should filter data

  mock-api test suite
    mocks test suite
      colorGet
        generalApi test suite - color
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api color
          ✓ api: should return data as string
      gtGet
        generalApi test suite - gt
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api gt
          ✓ api: should return data as object
      slugGet
        ✓ data: should contain 3 words by default
        ✓ data: should contain 4 words when requested
        generalApi test suite - slug
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api slug
          ✓ api; should return header with x-mock-count 3
          ✓ api: should return data as string
      slugGet
        ✓ data: should contain 3 words by default
        ✓ data: should contain 4 words when requested
        generalApi test suite - slug
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api slug
          ✓ api; should return header with x-mock-count 3
          ✓ api: should return data as string
      ssnsGet
        ✓ data: should return 3 items by default
        ✓ data: should return 10 items when requested
        generalApi test suite - ssns
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api ssns
          ✓ api; should return header with x-mock-count 3
          ✓ api: should return data as array
      uuidGet
        ✓ data: should contain dashes
        ✓ data: should contain dashes -- 5
        generalApi test suite - uuid
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api uuid
          ✓ api: should return data as string
      vinsGet
        ✓ data: should return 3 items by default
        ✓ data: should return 10 items when requested
        generalApi test suite - vins
          ✓ api: should be a function
          ✓ api: should return an object
          ✓ api: should include 3 properties: status, header, data
          ✓ api: should return status set to 200
          ✓ api; should return header with x-mock-api vins
          ✓ api; should return header with x-mock-count 3
          ✓ api: should return data as array

  app router test suite
    createRouter
      ✓ should be a function
      ✓ should return an object
    api test suite
      GET: api
        ✓ should respond to api with object
      GET: api/color
        ✓ should respond to api/color with string
      GET: api/gt
        ✓ should respond to api/gt with object
      GET: api/slug
        ✓ should respond to api/slug with string
      GET: api/ssns
        ✓ should respond to api/ssns with array
      GET: api/uuid
        ✓ should respond to api/uuid with string
      GET: api/vins
        ✓ should respond to api/vins with array

  utils test suite
    delay
      ✓ 1. should return a number between 500 & 3500 -- 3483
      ✓ 2. should return a number between 500 & 3500 -- 1998
      ✓ 3. should return a number between 500 & 3500 -- 1808
      ✓ 4. should return a number between 500 & 3500 -- 2114
      ✓ 5. should return a number between 500 & 3500 -- 3033
      ✓ 6. should return a number between 500 & 3500 -- 3415
      ✓ 7. should return a number between 500 & 3500 -- 2949
      ✓ 8. should return a number between 500 & 3500 -- 890
      ✓ 9. should return a number between 500 & 3500 -- 2326
    respondTo
      ✓ should be a function
      ✓ should call header
      ✓ should call status
      ✓ should call json


  90 passing (64ms)

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


