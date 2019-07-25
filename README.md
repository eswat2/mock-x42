# mock-x42

a simple mock api server

## usage

- `yarn install`
- `yarn dev` - _uses nodemon, see below_

```
➜  mock-imps git:(master) ✗ yarn dev
yarn run v1.17.3
$ nodemon server
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Magic happens here -- http://localhost:8180
--
```

## tests

- `yarn test`

```
➜  mock-imps git:(master) ✗ yarn test
yarn run v1.17.3
$ mocha


  mock-api test suite
    delay
      ✓ 1. should return a number between 500 & 3500 -- 3112
      ✓ 2. should return a number between 500 & 3500 -- 712
      ✓ 3. should return a number between 500 & 3500 -- 1511
      ✓ 4. should return a number between 500 & 3500 -- 3497
      ✓ 5. should return a number between 500 & 3500 -- 2573
      ✓ 6. should return a number between 500 & 3500 -- 1092
      ✓ 7. should return a number between 500 & 3500 -- 821
      ✓ 8. should return a number between 500 & 3500 -- 1323
      ✓ 9. should return a number between 500 & 3500 -- 1823
    id
      ✓ should return a number
    slug
      ✓ should return a string
      ✓ should contain 3 words by default
      ✓ should contain 4 words when requested
    ssns
      ✓ should return an array
      ✓ should return 3 items by default
      ✓ should return 10 items when requested
    vins
      ✓ should return an array
      ✓ should return 3 items by default
      ✓ should return 20 items when requested


  19 passing (21ms)

✨  Done in 0.52s.
```

## dependencies

- [Chai][chai-js] - _a BDD / TDD assertion library_
- [Chance][chance-js]
- [Faker][faker-js]
- [Mocha][mocha-js] - _a JavaScript test framework_
- [node-cache][node-cache] - _simple in memory caching_
- [nodemon][nodemon-io] - _reload, automatically_
- [Sinon][sinon-js] - _test spies, stubs and mocks_
- [vin-generator][vin-gen]






[chai-js]: https://www.chaijs.com/
[chance-js]: https://chancejs.com/
[faker-js]: https://github.com/marak/Faker.js/
[mocha-js]: https://mochajs.org/
[node-cache]: http://mpneuried.github.io/nodecache/
[nodemon-io]: https://nodemon.io/
[sinon-js]: https://sinonjs.org/
[vin-gen]: https://github.com/ArchmageInc/vin-generator


