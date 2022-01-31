# user-profile-component-nine-count
User Profile Presentation Component

## Install

Install the package using `npm`
```
npm install user-profile-component-nine-count
```

this will install the package to your `node_modules` folder

## Usage

After installing import the package in to your javascript code. If you are using a Mac, make sure to a. have node installed nad b. write "node" in terminal and it should say "Welcome to Node.js"

```js
var createUserProfile = require('user-profile-component-nine-count');
```

# API Documentation

### userProfile()
Returns a constructed user profile with `legalName`, `usersFirstName`, `usersLastName`, `userBirthday`, `userAge`, `picture` as properties of the profile object.
Provided example

```js
var userProfile = createUserProfile.userProfile();
console.log(userProfile);

// Output
/*
{ 
    id: 'la4751we-1io3-741u-lmn0-5902883x3xxx',
    legallName: 'Kasey Stewart',
    usersFirstName: 'Kasey',
    usersLastName: 'Stewart',
    userBirthday: 'Jun 8th, 1995',
    userAge: 26,
    picture: 'http://avatars.adorable.io/Kasey-Stewart',
    
}
*/
```
### aPersonsName()
Returns an individual user name with first name and last name.

```js
var aPersonsName = createUserProfile.aPersonsName();
console.log(aPersonsName);

// Output
// => Quinn Lee

```
### userBirthday()
Outputs a users birthday in the `MMM Do[,] YYYY` format.

```js
var userBirthday = createUserProfile.userBirthday();
console.log(userBirthday);

// Output
// => Mar 12th, 1991
```

### userAge()
Outputs a users age.

```js
var userAge = createUserProfile.userAge();
console.log(userAge);

// Output
// => 68
```

### picture()
Outputs a users picture url generated from picrew.me.

```js
var picture = createUserProfile.picture();
console.log(picture);

// Output
// => https://picrew.me/Tyler-McDonald
```
### guid()
Outputs a user GUID.

```js
var guid = createUserProfile.guid();
console.log(guid);

// Output
// => l4931mg3-1s57-66bb-9d53-2qj0b9z0v97
```
## Installing Dependencies

```sh
# install dependencies listed in package.json
$ npm install
```

## Run Unit Tests Locally

```sh
# Run mocha tests with -w flag
$ npm run test:local
```
## Code Coverage

[Istanbul](https://istanbul.js.org/) is used for code coverage analisys. [nyc](https://github.com/istanbuljs/nyc) command-line client is used to support ES6 with babel as the transpiler.
To run unit tests with code coverage report, use the following command.

```sh
# Unit tests with code coverage
$ npm run cover
```

## Code Quality

[Codacy](https://www.codacy.com) is configured on Github for code quality analisys.

# Credits
Random Profile Generator uses some 3rd party packages and APIs for its development. Credit goes to their creators & contributors.
* [Chancejs](http://chancejs.com/) - Chance is used to generate some of the values found in the generated profile.
* [MomentJs](http://momentjs.com/) - MomentJs is implemented as a date converter in the users profiles.
* [Random Name Generator](http://www.random-name-generator.info/) - Referenced to create the random names utilized in ProfileNames JSON.
* [Adorable.io]() - Adorable.io API is used to populate the users image included in the profiles.
