async function loadAPOD() {
  const apiKey = "5kp9CXO27gIZARdFP0VChPpEBvS8c9WUafPezvED";
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=1`); //gets a random image
  const data = (await response.json())[0]; //access the data

  const widget = document.getElementById("apod-widget");

  widget.innerHTML = `
    <div class="apod-grid">
      <div class="title">${data.title}</div>
      <div class="media">
        ${
          data.media_type === "image"
            ? `<img src="${data.url}" alt="${data.title}" style="width:100%;">`
            : `<iframe src="${data.url}" frameborder="0" style="width:100%; height:100%; min-height:400px;"></iframe>`
        }
      </div>
      <div class="description">${data.explanation}</div>
    </div>
  `;
}

loadAPOD();

