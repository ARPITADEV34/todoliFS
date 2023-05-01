let todo = []


/**
 * this block will show on page load
 */
function showData() {
  if (todo.length == 0) {
   
    document.getElementById('card').innerHTML = `
    <div >
    <h1 class="text-center"><i class="fa-solid fa-clipboard"></i></h1>
    <h4 class="text-center">No Items Yet</h4>
    </div>
    `
  }
  else {

    document.getElementById('card').innerHTML = ''
    // let time = new Date    
    // let currtime = time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()
    for (let i = 0; i < todo.length; i++) {
      const item = document.getElementById('card')
      item.innerHTML += `
  <div class="col-3 sub" >
  <div class="alert alert-danger" > 
  <h5 class="card-title d-inline-block text-truncate">${todo[i].subject}  <span onclick="deleteData(${i})"><i class="fa-solid fa-circle-xmark"></i></span></h5> 
  
  <div class="lead">${todo[i].currtime}<br><h6 class="font-weight-bold">${todo[i].date}</h6></div>
 
</div>
    `;
    
    }

  }

}
/**
 * for adding one more data recieving the input value 
 */
function addData() {

  if (document.getElementById('subject').value == '') {
    alert('please enter data');
  }
  else {
    let s1 = document.getElementById('subject').value

    document.getElementById('subject').value = ''

    let time = new Date
    let currtime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    let day = time.getDate()
    let month = time.getMonth()
    let year = time.getFullYear()

    let currdate = day + '-' + month + '-' + year


    let data = {
      subject: s1,
      currtime: currtime,
      date: currdate

    }

    todo.unshift(data)
    showData();
  }
}

/** 
 * for deleting data index wise
 *  */
function deleteData(index) {
  console.log(index);
  if (confirm('Are you sure you want to delete')) {
    todo.splice(index, 1)
  }
  showData()
}

showData();

/*
<div class="card" style="width: 18rem;">
    
                          <div class="card-body todo-item">
                         
                              <h5 class="card-title">${todo[i].subject}</h5>              
                              
                              <button href="#" class="btn btn-primary" onclick="deleteData(${i})">Done</button>
                              <p class="float-end" id="currtime">${todo[i].currtime}</p>
                          </div>
                      </div>
                  </div> 
 */