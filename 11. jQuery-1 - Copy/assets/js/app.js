
let input = document.querySelector('#inp');

input.onkeyup = function() {
  fetch('users.json')
  .then(response => response.json())
  .then(data => {
    let user = '';

    let value = this.value;
    console.log(value);

    let filteredData = data.users.filter(n => n.username.toLowerCase().includes(value.toLowerCase()))

    console.log(filteredData);

    filteredData.forEach(x => {
      user += `
      <ul>
      <li>${x.id}</li>
      <li>${x.username}</li>
    </ul>
      `
    })

    document.getElementById('users').innerHTML = user
  })
  .catch(err => console.log(err))
}


function GetUsers() {
  fetch('users.json')
  .then(response => response.json())
  .then(data => {
    let user = '';


    data.users.forEach(x => {
      user += `
      <ul>
      <li>${x.id}</li>
      <li>${x.username}</li>
    </ul>
      `
    })

    document.getElementById('users').innerHTML = user
  })
  .catch(err => console.log(err))
}

GetUsers()

