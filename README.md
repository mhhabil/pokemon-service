<p align="center">
  <a href="http://nestjs.com/" target="blank"></a>
</p>

## Description

Pokemon API with NESTJS and MongoDB as persistent database, MongoDB used because it is easier to store and manipulate data with complex JSON-like object like pokemon. In MongoDB, the data is stored in documents using JSON-like structure to represent and interact with data.

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
`http://127.0.0.1:3120/users/register`
```json 
  {
    "username": "mhhabil",
    "password": "mhhabil123"
  }
```
  
#### POST /users/login
`http://127.0.0.1:3120/users/login`
```json 
  {
    "username": "mhhabil",
    "password": "mhhabil123"
  }
```

## pokemons
#### POST /pokemons (Add new pokemon)
`http://127.0.0.1:3120/pokemons`
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
#### POST /pokemons/get-pokemons (Show all pokemons with custom parameters e.g: sort, pokemon type and pokemon name)
`http://127.0.0.1:3120/pokemons/get-pokemons` 
```json 
  {
    "sort": "asc",
    "typeFilter": [
        "GRASS",
        "ICE"
    ],
    "name": "bee"
}
```
#### GET /pokemons/:id (Get pokemon by id)
`http://127.0.0.1:3120/pokemons/{{id}}`
#### PATCH /pokemons/:id (Update pokemon by id)
`http://127.0.0.1:3120/pokemons/{{id}}`
```json
  {
    "name": "Pikachu",
    "alias": "Lightning Bolt",
    "category": [
        "ELECTRIC",
        "PSYCHIC",
        "YELLOW"
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
#### DELETE /pokemons/:id (Delete pokemon by id)
`http://127.0.0.1:3120/pokemons/{{id}}`
#### POST /pokemons/set-captured/:id (Set flag whether the pokemon has been captured or not)
`http://127.0.0.1:3120/pokemons/set-captured/{{id}}`
```json
  {
    "isCaptured": true
}
```


## License

Nest is [MIT licensed](LICENSE).
