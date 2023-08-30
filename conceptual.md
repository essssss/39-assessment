### Conceptual Exercise

Answer the following questions below:

-   What is a JWT?

    -   JWT is a JSON web token that contains a payload and a signature

-   What is the signature portion of the JWT? What does it do?

    -   The signature is the payload and a `secret key` that are hashed. It serves as a way for the destination to unhash the signature and compare that payload with the unencrypted payload to make sure they match

-   If a JWT is intercepted, can the attacker see what's inside the payload?

    -   The payload is encoded but NOT encrypted. It is not secret and can be intercepted.

-   How can you implement authentication with a JWT? Describe how it works at a high level.
    -   When a user logs in, we use bcrypt to verify, and then we generate a token. This token is sent with every future request. On the server we use a middleware that checks to see if the token is valid.
-   Compare and contrast unit, integration and end-to-end tests.
    -   unit tests test a single component or function eg: does this model work?, does this route display the correct thing
    -   integration tests test how components/fucntions work together eg: Does this route implement the model and update the database properly?
    -   end-to-end is a test of how the end-user will actually work with the entire application.
-   What is a mock? What are some things you would mock?

    -   a mock is used when we might not have control over something (eg. a massive database, an external api, etc). A mock is a kind of placeholder that will return us some expected data.

-   What is continuous integration?

    -   Continuous integration is when you do small code changes very frequently, rather than large, major update changes

-   What is an environment variable and what are they used for?

    -   Environment variable is how you switch between configurations for, say a test vs development database.

-   What is TDD? What are some benefits and drawbacks?

    -   TDD is test driven development, where the tests are written before the code. This results in a "working backwards" sort of thing
        -   benfits are obviously test coverage, clear goals from the code
        -   some people don't like working this way, it may be inflexible

-   What is the value of using JSONSchema for validation?
    -   JSONSchema is a great way to make sure a user's inputs are valid. If they aren't, JSONSchema will let us know right away.
-   What are some ways to decide which code to test?

    -   Instead of testing the response code and then the database, we can test teh response codes and then we can test the `get` route, which will ensure that the database has also performed correctly

-   What does `RETURNING` do in SQL? When would you use it?

    -   Returning in SQL is a good way to return something in say, a DELETE query. You can choose to return the deleted item, for testing purposes

-   What are some differences between Web Sockets and HTTP?
    -   Web Sockets are like a continuous open connection, rather than HTTP where you send a request, get a response, and then hang up
-   Did you prefer using Flask over Express? Why or why not (there is no right
    answer here --- we want to see how you think about technology)?
    -   I think I generally prefered the structure of a Flask app rather than an Express app. SQLAlchemy was a powerful tool
