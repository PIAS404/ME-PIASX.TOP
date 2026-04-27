async function loadData(file) {
  const res = await fetch(`data/${file}.json`);
  const data = await res.json();

  let html = "";

  data.forEach(item => {
    if(item.link){
      html += `
      <div class="card">
        <h3>${item.name}</h3>
        <a href="${item.link}" target="_blank">Open</a>
      </div>`;
    } else {
      html += `
      <div class="card">
        <h3>${item.name}</h3>
        <button onclick="copyText('${item.value}')">Copy</button>
      </div>`;
    }
  });

  document.getElementById("content").innerHTML = html;
}

function copyText(text){
  navigator.clipboard.writeText(text);
  alert("Copied!");
}
