let prev = document.querySelectorAll('.lessons_ul > li');

let les = document.querySelectorAll('#content > section');

function show_lesson(sec){

  for(const k of les.keys()){
console.log(sec, "      ", k);
    if(k == sec)
      les[k].style = '';
    else
      les[k].style.display = 'none';

  }

}