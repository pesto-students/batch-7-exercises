## Instructions

Implement Sudan Function defined as

F(n,x,y) = x+y when n = 0

F(n,x,y) = x when y = 0 and n >= 0

F(n,x,y) = F(n-1, F(n,x,y-1), F(n,x,y-1) + y)
          when y > 0 and n >= 0

Help with Sudan Function:
https://en.wikipedia.org/wiki/Sudan_function

input: Object containing:
      n: Non-negative Integer
      x: Non-negative Integer
      y: Non-negative Integer

output: Integer as defined above.
