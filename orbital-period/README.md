Return a new array that transforms the element's average altitude into their orbital periods.
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Here's some constants that are useful - 
```js
  const GM = 398600.4418; // in km3s-2
  const earthRadius = 6367.4447; // in km
```

