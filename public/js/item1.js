const url = new URL(window.location.href);
const houseId = url.searchParams.get("houseId");
console.log(houseId);

let xhr = new XMLHttpRequest();
xhr.responseType = "json";
uri = `http://localhost:3000/house?id=${houseId}`;
console.log(uri);
let method = "GET";
xhr.open(method, uri);
xhr.onload = () => {
  let p = xhr.response[0];
  console.log(p);
  p = `<div class="content container">
                  <main class="main_content">
                    <img
                      class="item1_detail"
                      src="images/${p.hinhanh}"
                      alt=""
                    />
                    <h2 class="title_item">
                      ${p.diachi}
                    </h2>
                    <pre>
                <h3 class="item1_detail2">
                Diện tích sử dụng: ${p.dientich}m2
                </h3>
                ${p.chitiet}
              </pre>
                    <p>Vị trí trên bản đồ:</p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d783.2795523956803!2d105.80321246318101!3d20.955467934755745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad53f3c81901%3A0x105dd5f877c7dd24!2zTmfDtSAyIEjhu691IEzDqiAsIEjhu691IEjDsmE!5e0!3m2!1svi!2s!4v1615890233036!5m2!1svi!2s"
                      width="600"
                      height="450"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </main>
                </div>`;
  document.querySelector(".item1-mobile").innerHTML = p;
  document.querySelector(".item1-desktop").innerHTML = p;
};
xhr.send(null);
