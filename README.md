# Akar Core API

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Run `npm install`.

### Database Setup
Setup database driver to use, example using mysql:
- MySql:
```bash
npm i mysql
```

The list of supported databases: [AdonisJs Supported Databases](https://adonisjs.com/docs/4.1/database#_supported_databases)

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
