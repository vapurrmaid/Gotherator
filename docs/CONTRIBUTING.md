:sparkling_heart: Hey! Thanks for checking this out - this project welcomes contributions! :sparkling_heart:

The following is a set of guidelines for contributing to Gotherator. These are mostly guidelines, not rules. Use your best judgment, 
and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Pull Requests](#pull-requests)
  * [Local Development](#local-development)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

## Code of Conduct

This project and everyone participating in it is governed by the [Gotherator Code of Conduct](CODE_OF_CONDUCT.md). 
By participating, you are expected to uphold this code. Please report unacceptable behavior to 
[vapurrmaid@gmail.com](mailto:vapurrmaid@gmail.com).

## What should I know before I get started?
Mainly, it is best to review the documentation and contributing guidelines! 

### Design Decisions

As of current, all of the Requirements and Development Processes are maintained and documented 
in the [SRS](/SRS/SRS.pdf). The [Projects Board](https://github.com/vapurrmaid/Gotherator/projects) area
keeps track of the set of features required for a major *semver* release. 
All Features have associated [Milestones](https://github.com/vapurrmaid/Gotherator/milestones). The Github flow as detailed by
[Scott Chacon](http://scottchacon.com/2011/08/31/github-flow.html) is used with respect to issues, PRs and branches. 

## How Can I Contribute?

### Adding Designs, Artwork, Submissions

**TODO:*** (The project is not yet deployed)

### Reporting Bugs

**TODO:** (The project is not yet deployed)

### Pull Requests
**All Accepted PRs should include test specs**

PRs are encouraged to generate discussion, they do not need to be perfect at first! Each feature/issue is in its own descriptive branch. 
Feel free to fork and send a PR 
[here's a quick refresher on how](http://kbroman.org/github_tutorial/pages/fork.html). If you have any additional questions
first check to see if it is documented in the SRS. If it is *not* documented there, please open a new topic or send an email.

### Local Development

#### Configuration
For security, configuration variables/keys are ignored. In order to work with PostgreSQL locally, you'll need to 
[download](https://www.postgresql.org/download/)
it and setup a user. In order to interface with the project, create a file located in `config/config.js`. It will have the following
Object:

```javascript
module.exports = {
	development: {
		dialect: 'postgres',
		username: '<your_postgres_user_name>',
		password: '<your_postgres_password>',
		database: '<your_postgres_db>',
		host: 'localhost'
	},
	test: {
		dialect: 'postgres',
		username: 'quizzrtest', // I left this in as an example
		password: 'test',       // of the credentials I use
		database: 'quizzr_test',
		host: 'localhost', 
		logging: false // set to true if you'd like to see all SQL statements while running tests
	}
};
```
For the databases I use `gotherator_dev` and `gotherator_test`, but it's entirely up to you as they exist on your system!

If this wasn't enough, you'll also need another set of keys for use elsewhere in the app! This will certainly change in time, 
but I currently have it setup as follows:

`config/keys`

``` javascript
if (process.env.NODE_ENV === 'production') {
	// we are in production - prod keys
	module.exports = require('./prod');
}

else if (process.env.NODE_ENV === 'test') {
	module.exports = require('./test'); // congif/test.js
}

else {
	// development, return dev keys
	module.exports = require('./dev'); // config/dev.js
}
```

You shouldn't need to make a production (`config/prod.js`) file. Test and dev will look similar - the reason they are separated is that the test db gets wiped before/after each test, whereas the dev db retains seeds.

Here is a generic skeleton for `config/dev.js` which again is the same key mapping for test, just containing different values.

``` javascript
// dev.js - DO NOT COMMIT
module.exports = {
	googleClientID: '<get this from setting up google API>',
	googleClientSecret: '<get this from setting up google API>',
	cookieKey: '<any random string>',          // this is used to serialize/deserialize cookies
	secret: '<a super long randomized string>' // this is used to encrypt passwords
};
```
#### Running Tests or Development
The client and server run separately. In order to make this possible, `concurrently` and `nodemon` are used.

- `npm install`
- Run All Tests (server): `npm run test` This runs each test ONCE.
- Unit Tests (server): `npm run test:unit` This uses nodemon watcher, allowing for TDD.
- Integration Tests (Server): `npm run test:integration` This uses nodemone watcher, allowing for TDD
- Development (Both): `npm run dev` This creates an express server on port 8080 and you can view the material on port 3000. It hot reloads any saved changes.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Further information is encouraged. Should you wish to describe the commit further, leave a blank line after the initial line, then add extra details.
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :non-potable_water: `:non-potable_water:` when plugging memory leaks
    * :memo: `:memo:` when writing docs
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings
    
### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/). Comments
adhere to [JS Docs](usejsdoc.org).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`

### Specs Styleguide (TDD)

- Include thoughtfully-worded, well-structured [Jasmine](https://jasmine.github.io/) specs in the `./test` folder.
- *Note:* Server and Client tests are separate (ie `./test` vs `./client/test`)


### Documentation Styleguide

* For comments use [JSDoc](http://usejsdoc.org).
* All wireframes are made with [Balsamiq Mockups](https://balsamiq.com/). 
Separate Images (to be included in documents) can be generated with any tool of your choice (ex draw.io), but mockups are source controlled.
* The SRS is currently a `.odt` made with Libre Office. However this will eventually migrated
to a LaTeX document as `v1` approaches!
