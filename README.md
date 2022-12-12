<p align="center">
  <a href="http://nestjs.com/" target="blank"></a>
</p>

## Description

Pokemon API

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```
## API List
# users
<p>POST /users/register</p>
<p>POST /users/login</p>

# pokemons
POST /pokemons (Add new pokemon)/n
POST /pokemons/get-pokemons (Get all pokemons with custom parameters e.g: sort, pokemon type and pokemon name)
GET /pokemons/:id (Get pokemon by id)
PATCH /pokemons/:id (Update pokemon by id)
DELETE /pokemons/:id (Delete pokemon by id)
POST /pokemons/set-captured/:id (Set flag whether the pokemon has been captured or not)


## License

Nest is [MIT licensed](LICENSE).
