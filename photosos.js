let time = new Date()

let get_time = document.getElementById("time")
get_time.innerHTML = time



let counter = 0;

// دالة لزيادة القيمة وعرضها
function increaseCounter() {
  counter++;
  document.getElementById('counterDisplay').textContent = counter;
}
