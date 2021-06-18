$.ajax({
  type: "GET",
  dataType: "json",
  url: "/house",
})
  .done((house) => {
    house.forEach(
      ({ id, ten, diachi, giatien, dientich, chitiet, hinhanh }) => {
        let desk = `<div class="col-md-2"><div class="item box_border">
                <div style="text-align: center" class="pt-2 pb-2">
                  <img
                    class="img_main"
                    src="images/${hinhanh}"
                    alt=""
                  />
                </div>
                <span class="title_sell"
                  ><a href="item1.html?houseId=${id}"
                    >${ten} ${dientich}m<sup>2</sup> GIÁ ${giatien}</a
                  ></span
                >
              </div></div>
    `;
        let mobile = `<div class="box_border row pt-1">
              <div class="col-6">
                <img class="img_main" src="images/${hinhanh}" alt="" />
              </div>
              <div class="col-6">
                <span
                  ><a href="item1.html?houseId=${id}" class="title_sell"
                    >${ten}</a
                  ></span
                >
                <span class="price">Giá ${giatien}</span>
                <span class="price">${dientich}m<sup>2</sup></span>
                <p>${diachi},Thanh Trì,Hà Nội</p>
                <p style="height: 150px; overflow: hidden">
                  ${chitiet}
                </p>
              </div>
            </div>`;
        let houseMobile = $(".house-mobile");
        let houseDesk = $(".house-desk");
        houseMobile.append(mobile);
        houseDesk.append(desk);
      }
    );
  })
  .fail((error) => {
    console.log("error");
  });
