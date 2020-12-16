
# [HTTP protocol](https://www.wikiwand.com/en/Hypertext_Transfer_Protocol)
> The Hypertext Transfer Protocol(HTTP) protocol is an application layer protocol for distributed, collaborative, hypermedia information systems.

> HTTP is the foundation of data communication for the World Wide Web.

Follow the statement as above, HTTP protocol have the features:

1. It does work in the application layer.
2. It is an data communication foundation for the World Wide Web.
3. The content transfered is hypertext or hypermedia.
4. The objective served is for the system which is distributed, collaborative and hypermedia information.

## HTTP connection
One TCP connection and the HTTP connection reuses the TCP connection.

## HTTP Features

1. [Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)

> How documents are cached can be controlled by HTTP. The server can instruct proxies and clients, about what to cache and for how long. The client can instruct intermediate cache proxies to ignore the stored document.

* Cache types
    - No Cache
    - Shared Cache
    - Local(private) cache

* Cache Control
    - `Cache-Control: no-store` - Not store anything about the client request or server response.
    - `Cache-Control: no-cache` - Send the request to the origin server for validation before releasing a cached copy.
    - `Cache-Control: public` - The "public" directive indicates that the response may be cached by any cache. This can be useful if pages with HTTP authentication, or response status codes that aren't normally cacheable, should now be cached.
    - `Cache-Control: private` - The "private" indicates that the response is intended for a single user only and must not be stored by a shared cache.
    - `Cache-Control: max-age=100` - The maximum amount(100 seconds) of time in which a resource will be considered fresh. This directive is relative to the time of the request, and overrides the Expires header (if set).
    - `Cache-Control: must-revalidate` - When using the "must-revalidate" directive, the cache must verify the status of the stale resources before using it and expired ones should not be used.

* How to fresh the stale resource with `Cache-Control: max-age=N`
    - ![Picture Flow](https://media.prod.mdn.mozit.cloud/attachments/2016/08/19/13771/2e3dc2278f2aaa83a695e1c1eca98fc0/HTTPStaleness.png)

* Cache Validation
    - `Etag: W/"<etag_value>" or "<etag_value>"` - The [ETag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) response header is an opaque-to-the-useragent value that can be used as a strong validator.
    - `Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT` - The [Last-Modified](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified) response header can be used as a weak validator.

2. Relaxing the origin constraint
3. Authentication
4. Proxy and tunneling
5. Sessions

## HTTP Methods

| name    | Request has Body | Response has Body | Safe | Idempotent | Cacheable |
| :------ | :--------------: | :---------------: | :--: | :---------:| --------: |
| GET     | Optional         | Yes               | Yes  | Yes        | Yes       |
| HEAD    | Optional         | No                | Yes  | Yes        | Yes       |
| POST    | Yes              | Yes               | No   | No         | Yes       |
| PUT     | Yes              | Yes               | No   | Yes        | No        |
| DELETE  | Optional         | Yes               | No   | Yes        | No        |
| CONNECT | Optional         | Yes               | No   | No         | No        |
| OPTIONS | Optional         | Yes               | Yes  | Yes        | No        |
| TRACE   | No               | Yes               | Yes  | Yes        | No        |
| PATCH   | Yes              | Yes               | No   | No         | No        |

## HTTP Status Code

* Informational 1XX
* Successful 2XX
* Redirection 3XX
* Client Error 4XX
* Server Error 5XX
