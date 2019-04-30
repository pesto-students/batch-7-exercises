Write a JS function that validates an HTTP request object.
The object has the properties method, uri, version and message.
Your function must receive the object as a parameter and verify
that each property meets the following requirements:

method – can be GET, POST or DELETE
uri – must be a valid resource address or an asterisk (*); a resource address is a
combination of alphanumeric characters and periods(.); the URI cannot be an empty string
version – can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
message – may contain any number of non-special characters;
special characters are <, >, \, &, ', "

If a request is valid, return it unchanged. If any part fails the check,
throw an Error with message `"Invalid request header: Invalid {Method/URI/Version/Message}"`.
Replace the part in curly braces with the relevant word. Note that some of the properties may
be missing, in which case the request is invalid. Check the properties in the order in which they
are listed here. If more than one property is invalid, throw an error for the first encountered.
Check the requestValidator test cases for further information.
