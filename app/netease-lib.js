var a = "gconf-service, \n" +
    "libatk1.0-0 (>= 1.12.4), \n" +
    "libc6 (>= 2.15), \n" +
    "libcairo2 (>= 1.2.4), \n" +
    "libcups2 (>= 1.3.0), \n" +
    "libdbus-1-3 (>= 1.8.1), \n" +
    "libexpat1 (>= 2.0.1), \n" +
    "libfontconfig1 (>= 2.10.0), \n" +
    "libgcc1 (>= 1:4.0), \n" +
    "libgconf-2-4 (>= 3.2.5), \n" +
    "libgdk-pixbuf2.0-0 (>= 2.22.0), \n" +
    "libglib2.0-0 (>= 2.31.8), \n" +
    "libgtk2.0-0 (>= 2.24.0), \n" +
    "libnspr4 (>= 2:4.9-2~) | libnspr4-0d (>= 1.8.0.10), \n" +
    "libnss3 (>= 2:3.13.4-2~) | libnss3-1d (>= 3.12.4), \n" +
    "libpango-1.0-0 (>= 1.14.0), \n" +
    "libpangocairo-1.0-0 (>= 1.14.0), \n" +
    "libpulse0 (>= 0.99.1), \n" +
    "libsqlite3-0 (>= 3.5.9), \n" +
    "libstdc++6 (>= 5.2), \n" +
    "libtag1v5 (>= 1.9.1-2.4ubuntu1), \n" +
    "vlc (>= 2.1.0), \n" +
    "libx11-6 (>= 2:1.4.99.1), \n" +
    "libx11-xcb1, \n" +
    "libxcb1 (>= 1.6), \n" +
    "libxcomposite1 (>= 1:0.3-1), \n" +
    "libxcursor1 (>> 1.1.2), \n" +
    "libxdamage1 (>= 1:1.1), \n" +
    "libxext6, \n" +
    "libxfixes3, \n" +
    "libxi6 (>= 2:1.2.99.4), \n" +
    "libxrandr2 (>= 2:1.2.99.3), \n" +
    "libxrender1, \n" +
    "libxss1, \n" +
    "libxtst6, \n" +
    "zlib1g (>= 1:1.1.4)";

var b = a.replace(/\s\((.*)\)/g, "");
console.log(b.replace(/\n/g,"").split(",").join(" "));