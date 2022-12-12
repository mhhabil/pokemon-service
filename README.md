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

## API List
# users
<p>POST /users/register</p>
<p>POST /users/login</p>

# pokemons
<p>POST /pokemons (Add new pokemon)</p>
<p>POST /pokemons/get-pokemons (Get all pokemons with custom parameters e.g: sort, pokemon type and pokemon name)</p>
<p>GET /pokemons/:id (Get pokemon by id)</p>
<p>PATCH /pokemons/:id (Update pokemon by id)</p>
<p>DELETE /pokemons/:id (Delete pokemon by id)</p>
<p>POST /pokemons/set-captured/:id (Set flag whether the pokemon has been captured or not)</p>


## License

Nest is [MIT licensed](LICENSE).
