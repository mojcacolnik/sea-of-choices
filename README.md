# Sea of choices

This is a web app for a cruiseship agency.

It is a full-stack JavaScript app. On the backend it has Node.js, Express.js and MongoDB. On the frontend it has Vue.js and Vuex.

# Installation

Fork the repository.

In the directory you would like to have the project, clone the repository

```bash
$ git clone git@github.com:mojcacolnik/sea-of-choices.git
```

Open the project in your coding environment.

# Install the dependencies

```
$ docker-compose up --build
```

# Run the stack

```
$ docker-compose up
```

# Access the stack from a browser

Open up your /etc/hosts file.

In UNIX and VSCode, it can be opened via the following

```bash
open /etc/hosts
```

In Windows you can use the path `C:\Windows\System32\Drivers\etc\hosts in Windows`

Add the following line to your hosts file

```
127.0.0.1 runtheworld.localhost
```

# Development mode

You can also run the app in development environment if desired. Instead of running `docker-compose up`, run the following command:

```sh
$ docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```


# LICENSE

```
MIT LICENSE
Copyright (c) 2021 Mojca Colnik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```