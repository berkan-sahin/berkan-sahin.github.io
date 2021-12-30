/**
 * This script adds a fancy faux prompt to the beginning of your title, that is, the <h1> element
 * Which looks like [domain.tld ~/relative/path/to/page] Page Title
*/

// Gruvbox colors
const bracketColor = "#cc241d";
const nameColor = "#d79921";
const dotColor = "#98971a";
const tldColor = "#458588";
const dirColor = "#b16286";

const slashAtEnd = /\/$/;
const navBits = /#[A-Za-z0-9-]*$/;
const siteURL = /^https?:\/\/[A-Za-z0-9.]*/;

const originalTitle = document.getElementsByTagName("h1")[0].innerText;

var pageURL = document.baseURI;
const domainComponents = pageURL.split("/")[2].split(".");

var dirSequence = pageURL.replace(siteURL, " ~")
                         .replace("/index.html", "")
                         .replace(navBits, "")
                         .replace(slashAtEnd, "");

var fancyTitle = "";
fancyTitle += "[".fontcolor(bracketColor);
fancyTitle += domainComponents[domainComponents.length - 2].fontcolor(nameColor);
fancyTitle += ".".fontcolor(dotColor);
fancyTitle += domainComponents[domainComponents.length - 1].fontcolor(tldColor);
fancyTitle += dirSequence.fontcolor(dirColor);
fancyTitle += "] ".fontcolor(bracketColor);
fancyTitle += originalTitle;

document.getElementsByTagName("h1")[0].innerHTML = fancyTitle;
