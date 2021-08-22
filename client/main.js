document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(handleText);
};

document.getElementById("fortune_button").onclick = function () {
  axios.get("http://localhost:4000/api/fortunes").then(handleText);
};

document.getElementById("dadJoke").onclick = function () {
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
    .then(function (res) {
      setText(res.data.joke);
    });
};
let Breathtaking = document.getElementById("K").value;

let select = document.getElementById("K");
select.addEventListener("change", function () {
  let Breathtaking = document.getElementById("K").value;
  axios
    .get(`http://localhost:4000/api/breathtaking/${Breathtaking}`)
    .then((res) => {
      const image = document.createElement("img");
      image.src = res.data;
      setElement(image);
    });
});
 let meme = document.getElementById("meme")
 meme.addEventListener('click', function () {
    //  console.log('gotit')
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=NYOEawyux3rXWrO9tyRGCMrDjMyJd2Sk&tag=funny&rating=g')
    .then((res) =>{
        // console.log(res.data)
        const image = document.createElement("img")
        image.src = res.data.data.images.original.url
        setElement(image)
    })
 });

function setElement(elem) {
  const display = document.getElementById("display");
  display.removeChild(display.firstChild);
  display.appendChild(elem);
}

function setText(text) {
  const data = document.createElement("div");
  data.innerHTML = text;
  setElement(data);
}

function handleText(res) {
  setText(res.data);
}


