const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
[foo, bar] = [bar, foo];