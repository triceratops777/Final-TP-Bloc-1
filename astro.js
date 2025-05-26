async function loadAPOD() {
  const apiKey = "5kp9CXO27gIZARdFP0VChPpEBvS8c9WUafPezvED";
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=1`);
  const data = (await response.json())[0];

  const widget = document.getElementById("apod-widget");

  widget.innerHTML = `
    <style>
      .apod-grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto auto;
        gap: 1rem;
        background-color: #111;
        color: white;
        padding: 1rem;
        border-radius: 10px;
        font-family: 'Nunito', sans-serif;
      }

      .title {
        font-family: 'Protest Guerrilla', cursive;
        font-size: 1.5rem;
        color: white;
      }

      .media {
        grid-row: 1 / span 2;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
      }

      .description {
        font-size: 0.95rem;
        line-height: 1.4;
      }
    </style>

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

