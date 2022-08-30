

document.getElementById("theme_toggle").onclick = () => {
      document.documentElement.classList.toggle('dark');
      // save state of theme
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : ''
}
function remove_item(parent) {
  parent.remove()
}



function add_item(parent,new_item_div){  
  const wrapper = document.createElement('div');
  wrapper.innerHTML= new_item_div.innerHTML;
  parent.appendChild(wrapper)
}
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  