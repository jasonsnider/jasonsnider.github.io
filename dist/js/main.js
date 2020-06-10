let uri = `https://api.github.com/users/jasonsnider/repos`;
let xhr = new XMLHttpRequest();
xhr.open('GET', uri);
xhr.setRequestHeader(
  'Content-Type',
  'application/json; charset=UTF-8'
);

xhr.send();

xhr.onload = function(){
  let data = JSON.parse(xhr.response);
console.log(data);
  flexRow = document.createElement('div');
  flexRow.classList='flex-row';

  for(i=0; i<data.length; i++){
    //if(i % 3 == 0) {
    //  flexRow = document.createElement('div');
    //  flexRow.classList='flex-row';
    //  Repos.appendChild(flexRow);
    //}


    let flexItem = document.createElement('div');
    flexItem.classList='flex-item';

    let repo = document.createElement('a');
    repo.classList='repo';
    repo.href = data[i]['html_url'];
    repo.innerHTML = `<h2>${data[i]['name']}</h2>
      <p>${data[i]['description']}</p>

      <div>
        <span class="language">${data[i]['language']}</span>
      </div>
      `;
    flexItem.appendChild(repo);
    flexRow.appendChild(flexItem);

  }

  Repos.appendChild(flexRow);
}
