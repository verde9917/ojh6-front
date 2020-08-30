const max_sub = 3
const max_main = 8

window.onload = () => {
    const host = "wss://websockets-server-test.herokuapp.com/pipe";
    //var host = "ws://localhost:8080/pipe";
    const ws = new WebSocket(host);

    const forDebug = () => {
        const message = "Debug Message"
        ws.send("{ \"id\":\"client\", \"text\":\""+message+"\"}")
    }

    const todokeyell = () => {
        appear()

        const sub_rand = Math.floor(Math.random() * max_sub) + 1 //乱数を発生
        const sub_mp3path = "./sound/call-sub-" + sub_rand + ".mp3"
        const subcall = new Audio(sub_mp3path)
        subcall.volume = 0.4
        subcall.play()  // 再生
        subcall.currentTime = 0

        const main_rand = Math.floor(Math.random() * max_main) + 1 //乱数を発生
        const main_mp3path = "./sound/call-main-" + main_rand + ".mp3"
        const maincall = new Audio(main_mp3path)
        maincall.volume = 0.7
        maincall.play()  // 再生
        maincall.currentTime = 0
    }

    document.getElementById("btn").addEventListener("click", forDebug)
    ws.addEventListener("message", todokeyell)
}