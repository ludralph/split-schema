# Reproduce Large schemas generate huge index.d.ts causing slow autocomplete and type-checking in your editor

This repository attempts to reproduce the problems discussed in this [github issue](https://github.com/prisma/prisma/issues/4807)

## Getting started

### 1. Clone the repository and run npm install to install the dependencies

Clone this repository:

```
git clone https://github.com/ludralph/reproduction-schema.git
```

Install npm dependencies:

```
cd reproduction-schema
npm install
```

### 2. Create the database

create a .env file at the root and add an environment variable `DB_URL`
The value of `DB_URL` will be your database connection string
For example: DB_URL=postgresql://username:password@localhost:5432/postgres


### 3. Generate the Prisma Client

Execute with this command: 

```
npx prisma generate
```

## Testing for slow autocomplete and typechecking
1. Open `script.ts` file  and test for slow autocomplete when trying to create a  script
2. Open node_module/.prisma/client/index.d.ts to observe how long it takes the generated file to load in the IDE (This mostly applies to Intellij IDEA and Webstorm). Not reproducible in VSCode

## Using Split generated types and test for fast autocomplete and typechecking
In scr/generated directory, you will see files created based on model names. Theses files hold the types associated with that particular model. For example:

Given this model in the schema.prisma file
```prisma
model ab_email_domain {
  id     Int    @id(map: "pk_ab_email_domain") @default(autoincrement())
  domain String @unique
  props  Json   @default("{}")
  groups Json   @default("{}")
}
```
There is a file named `ab_email_domain.d.ts` that contains the types for the model. This can be seen [here](https://github.com/ludralph/split-schema/blob/main/src/generated/ab_email_domain.d.ts)

We also have the index.d.ts file that exports those types. This can be seen [here](https://github.com/ludralph/split-schema/blob/main/src/generated/index.d.ts)

The Prisma generated logic can be found in `utils.d.ts` file. This can be seen [here](https://github.com/ludralph/split-schema/blob/main/src/generated/utils.d.ts)



In `script.ts` file, instead of importing from `@prisma/client`, you should import from `./src/generated/utils`

You can then test the Autocomplete and Typechecking on the split generated types. From the test carries out, this is very fast.

### Node Version
Node v20.2.0

