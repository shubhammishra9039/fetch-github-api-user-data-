let table = document.getElementById("table");

async function getData() {
  try {
    let userData = await fetch("https://api.github.com/users");
    userData = await userData.json();
    console.log(userData);
    userData.forEach(({ id, login, avatar_url, type }) => {
      table.innerHTML += `
        <tr>
    <td>${id}</td>
    <td>${login}</td>
    <td><img src=${avatar_url} alt=""></td>
    <td>${type}</td>
       </tr>
            `;
      console.log(id);
    });
  } catch (error) {
    table.innerHTML = "Data Note Fetch";
    console.log(error.massage);
  }
}

getData();
