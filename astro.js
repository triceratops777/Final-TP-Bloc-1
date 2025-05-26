async function loadAPOD() {
  const apiKey = "5kp9CXO27gIZARdFP0VChPpEBvS8c9WUafPezvED"; // Replace with your API key if you have one
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
  const data = await response.json();

  const widget = document.getElementById("apod-widget");

  widget.innerHTML = `
    <div style="background:#111; color:white; padding:1rem; border-radius:10px; max-width:600px;">
      <h2 style="font-family: 'Protest Guerrilla', cursive;">${data.title}</h2>
      ${data.media_type === "image"
        ? `<img src="${data.url}" alt="${data.title}" style="width:100%; border-radius:10px; margin-top:1rem;" />`
        : `<iframe src="${data.url}" frameborder="0" style="width:100%; height:400px; border-radius:10px;"></iframe>`
      }
      <p style="margin-top:1rem; font-family: 'Nunito', sans-serif;">${data.explanation}</p>
    </div>
  `;
}

loadAPOD();
