## Instructions


Convert the provided url to url slugs (https://en.wikipedia.org/wiki/Clean_URL#Slug).

```js
slugUrl('  i am legend  ');
//=> 'i-am-legend'

slugUrl('fooBar 123 $#%');
//=> 'foo-bar-123'

slugUrl('BAR and baz', {separator: '_'});
//=> 'bar_and_baz'
```
Refer to the tests for all cases.
