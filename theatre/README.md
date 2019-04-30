## Instructions


Title: Theatre Line Change

Summary: Can the theatre box office make change for everyone in the line.

The theatre box office needs to sell tickets to everyone
in line. I must sell tickets in the order that people are
in the line. A ticket costs $10 and the theatre box office
must give correct change to everyone when they buy their
ticket.

Everyone in the theatre box office line only has one bill
to pay with: $10, $20, $50.

Given that the theatre box office starts with no change,
determine if they can sell tickets to everyone in line
and give the correct change at the time each ticket is
purchased.

**input**: Array of 10, 20, and 50, representing what bill
      each person in line has.

**output**: true if the box office can sell tickets and make
        change for everyone in line, else false.

For Example:
```js
[10,10,20,10,10,10,50] => true
[20] => false
[10,20,10,20,50] => true
[10,20,20] => false
```