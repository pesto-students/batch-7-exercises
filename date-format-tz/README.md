## Instructions

* Format a date with timezone: 2018-04-30T10:40:35+01:00

dateFormatTz();
//=> '2018-11-30T10:40:35+01:00'

dateFormatTz(0);
//=> '2018-11-30T09:40:35+00:00'

dateFormatTz(new Date());
//=> '2018-11-30T10:40:35+01:00'

dateFormatTz(new Date(), 0);
//=> '2018-11-30T09:40:35+00:00'

dateFormatTz(new Date(2018, 11, 25, 11, 0, 0, 0), -1);
//=> '2018-12-25T09:00:00-01:00'


==== API ====

dateFormatTz([date], [offset])

input =>
Type: date
Default: new Date()

Date to be formatted.

offset =>
Type: number

Offset from UTC in hours.
