const insert =  document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <table class="design">
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' '? 'space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.key}</td>
    </tr>
  </table>
    `
})