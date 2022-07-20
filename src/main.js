const mb_nav_btn = document.getElementById("mb_nav_btn");
const hidden_nav_part = document.getElementById("hidden_nav_part");
const mb_nav_oppen = document.getElementById("mb_nav_oppen");
const mb_nav_close = document.getElementById("mb_nav_close");

let hidden_part_is_visble = false;
mb_nav_btn.onclick = (e) => {
  // change the contorle mb _nav btn icon
  mb_nav_oppen.classList.toggle("hidden");
  mb_nav_close.classList.toggle("hidden");

  if (!hidden_part_is_visble) {
    hidden_nav_part.classList.replace("max-h-0", "max-h-[200px]");
  } else {
    hidden_nav_part.classList.replace("max-h-[200px]", "max-h-0");
  }

  hidden_part_is_visble = !hidden_part_is_visble;
};



// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{   questions and answers section   }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

const QandA_items = document.querySelectorAll('.QandA_item');

QandA_items.forEach(item => {
  item.onclick = (e) => {
    const answer = item.querySelector('.answer');
    answer.classList.toggle('max-h-fit')
     
  }
})