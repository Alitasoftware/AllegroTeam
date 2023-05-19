
const API_URL = "https://jsonplaceholder.typicode.com"

const HTMLResponse = document.querySelector("#coments")


fetch(`${API_URL}/comments`)
.then(response => response.json())
.then((users) => {
    const selectedUsers = users.slice(0,3);
    const tpl = selectedUsers.map((user) =>` <div class="testimonial-box">
    <div class="box-top">
        <strong>${user.name}</strong>
        <span>${user.email}</span>                      
    </div>
    <div class="comment">
        <i class="fa-solid fa-quote-left"></i>
        <p>${user.body}</p>
    </div>
    </div>

`);

    HTMLResponse.innerHTML = `<div class="testimonial-box-container" id="coments">${tpl}</div>`;
});

