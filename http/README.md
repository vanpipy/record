
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
> To prevent snooping and other privacy invasions, Web browsers enforce strict separation between Web sites. Only pages from the **same origin** can access all the information of a Web page. Though such constraint is a burden to the server, HTTP headers can relax this strict separation on the server side, allowing a document to become a patchwork of information sourced from different domains; there could even be security-related reasons to do so.

3. Authentication
> Some pages may be protected so that only specific users can access them. Basic authentication may be provided by HTTP, either using the WWW-Authenticate and similar headers, or by setting a specific session using HTTP cookies.

4. [Proxy and tunneling](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling)
> Servers or clients are often located on intranets and hide their true IP address from other computers. HTTP requests then go through proxies to cross this network barrier. Not all proxies are HTTP proxies. The SOCKS protocol, for example, operates at a lower level. Other protocols, like ftp, can be handled by these proxies.

5. Sessions
> Using HTTP cookies allows you to link requests with the state of the server. This creates sessions, despite basic HTTP being a state-less protocol. This is useful not only for e-commerce shopping baskets, but also for any site allowing user configuration of the output.

The [HTTP cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser.

Cookies are mainly used for three purposes:

* **Session management** - Logins, shopping carts, game scores, or anything else the server should remember
* **Personalization** - User preferences, themes, and other settings
* **Tracking** - Recording and analyzing user behavior

After receiving an HTTP request, a server can send one or more [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) headers with the response.

Example:

```
// Set-Cookie: <cookie-name>=<cookie-value>

// Response header

HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

// Request again - request header

GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

The lifetime of a cookie can be defined in two ways:

* Session cookies are deleted when the current session ends. The browser defines when the "current session" ends, and some browsers use session restoring when restarting, which can cause session cookies to last indefinitely long.
* Permanent cookies are deleted at a date specified by the Expires attribute, or after a period of time specified by the Max-Age attribute.

Example:

```
Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
```

Restrict access to cookies

There are a couple of ways to ensure that cookies are sent securely and are not accessed by unintended parties or scripts: the Secure attribute and the HttpOnly attribute.

Example:

```
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

Define where cookies are sent

The Domain and Path attributes define the scope of the cookie: what URLs the cookies should be sent to.

Example:

```
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Path=<path-value>
```

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
