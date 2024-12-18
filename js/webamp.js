const Webamp = window.Webamp;
const webamp = new Webamp({
initialTracks: [
    {
    metaData: {
        artist: "DJ Mike Llama",
        title: "Llama Whippin' Intro",
    },
    // NOTE: Your audio file must be served from the same domain as your HTML
    // file, or served with permissive CORS HTTP headers:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
    duration: 5.322286,
    },
    {
    metaData: {
        artist: "Some Artist",
        title: "Title of Second Track",
    },
    url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
    duration: 5.322286,
    },
],
});

// Returns a promise indicating when it's done loading.

if (Webamp.browserIsSupported){
    webamp.renderWhenReady(document.getElementById("webamp"));
} else {
    console.log("no webamp");
}
