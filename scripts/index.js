let obj = parseUrl('http://ffwagency.com/do/any/php?a=1#foo');

function parseUrl(url) {
    let parts = url.split( "#" ),
        result = {};
    result.url = url;
    result.hash = ( parts.length > 1 ? ( ( url = parts.shift() ) || 1 ) && parts.join( "#" ) : "" );url = ( parts = url.split( "?" ) ).shift();
    result.search = parts.join( "?" );
    result.scheme = ( parts = url.split( "://" ) ) && parts.length > 1 ? parts.shift() : "";
    result.host = ( ( parts = parts.join( "://" ).split( "/" ) ) && parts.length > 1 && parts[0].indexOf(".") > 0 || result.scheme ) && parts.shift() || "";
    result.script = parts.pop();
    result.path = ( parts.length > 0 ? "/" : "" ) + parts.join( "/" );

    return result;
}
console.log(obj);
