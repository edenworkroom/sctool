import popup from 'popup-js-sdk'

let config = {
    name: "Smart Contract Tool",
    contractAddress: "none",
    github: "https://github.com/edenworkroom/sctool",
    author: "eden",
    url: document.location.href,
    logo: document.location.protocol+"//"+document.location.host+"/dapp/dapp.png",
}
popup.init(config, function () {
});

export default popup;
