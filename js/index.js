
const API_URL = "https://jsonplaceholder.typicode.com"

const HTMLResponse = document.querySelector("#coments")


fetch(`${API_URL}/users`)
.then(response => response.json())
.then((users) => {
    const tpl = users.map((user) =>` <div class="testimonial-box">
    <div class="box-top">
        <strong>${user.name}</strong>
        <span>${user.username}</span>                      
    </div>
    <div class="comment">
        <i class="fa-solid fa-quote-left"></i>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci hic quas optio asperiores inventore dolorum, facilis soluta tempora reiciendis voluptatum delectus possimus repellendus sequi consectetur quibusdam, laboriosam quasi quis.</p>
    </div>
    </div>

`);
    HTMLResponse.innerHTML = `<div class="testimonial-box-container" id="coments">${tpl}</div>`;
});

