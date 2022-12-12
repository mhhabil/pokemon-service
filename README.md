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
## users
#### POST /users/register
Request: {
    "username": "mhhabil",
    "password": "mhhabil123"
  }
  
#### POST /users/login
Request: {
    "username": "mhhabil",
    "password": "mhhabil123"
}

## pokemons
#### POST /pokemons (Add new pokemon)
```json 
  {
    "name": "Bulbasaur",
    "alias": "Grass Flying",
    "category": [
      "FLYING",
      "PSYCHIC",
      "GRASS"
    ],
    "catched": true,
    "image": "",
    "detail": {
      "description": "Grass pokemon with psychic power.",
      "weight": "250",
      "height": "4"
    },
    "stats": {
      "hp": 110,
      "attack": 90,
      "defense": 75,
      "speed": 59
    }
  } 
```
#### POST /pokemons/get-pokemons (Get all pokemons with custom parameters e.g: sort, pokemon type and pokemon name)
#### GET /pokemons/:id (Get pokemon by id)
#### PATCH /pokemons/:id (Update pokemon by id)
#### DELETE /pokemons/:id (Delete pokemon by id)
#### POST /pokemons/set-captured/:id (Set flag whether the pokemon has been captured or not)


## License

Nest is [MIT licensed](LICENSE).
