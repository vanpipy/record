
# HTTP protocol
`
The Hypertext Transfer Protocol(HTTP) protocol is an application layer protocol for distributed, collaborative, hypermedia information systems.

HTTP is the foundation of data communication for the World Wide Web.
`
Follow the statement as above, HTTP protocol have the features:

1. It does work in the application layer.
2. It is an data communication foundation for the World Wide Web.
3. The content transfered is hypertext or hypermedia.
4. The objective served is for the system which is distributed, collaborative and hypermedia information.

## HTTP connection
One TCP connection and the HTTP connection reuses the TCP connection.

## HTTP Features

1. Caching
2. Relaxing the origin constraint
3. Authentication
4. Proxy and tunneling
5. Sessions

## HTTP Methods

|name|Request has Body|Response has Body|Safe|Idempotent|Cacheable|
|GET|Optional|Yes|Yes|Yes|Yes|
|HEAD|Optional|No|Yes|Yes|Yes|
|POST|Yes|Yes|No|No|Yes|
|PUT|Yes|Yes|No|Yes|No|
|DELETE|Optional|Yes|No|Yes|No|
|CONNECT|Optional|Yes|No|No|No|
|OPTIONS|Optional|Yes|Yes|Yes|No|
|TRACE|No|Yes|Yes|Yes|No|
|PATCH|Yes|Yes|No|No|No|

## HTTP Status Code

* Informational 1XX
* Successful 2XX
* Redirection 3XX
* Client Error 4XX
* Server Error 5XX
