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

const QandA_items = document.querySelectorAll(".QandA_item");

QandA_items.forEach((item) => {
  item.onclick = (e) => {
    const answer = item.querySelector(".answer");
    const arrow = item.querySelector(".icon_q");
    arrow.classList.toggle("icon_q_top");
    answer.classList.toggle("max-h-fit");
  };
});

//// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{   video player js   }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
const videos_section = document.getElementById("videos_section");
const video_items = document.querySelectorAll(".video_item");
const video_over_layer = document.getElementById("video_over_layer");
// create frame video inside video overlayer and play the video
function createVideoFrame(video_id) {
  let iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    ` https://www.youtube.com/embed/${video_id}?autoplay=1&rel=0`
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  );
  document.getElementById("video_parrent").appendChild(iframe);
}

// oppen the video
video_items.forEach((item) => {
  item.onclick = (e) => {
    video_over_layer.classList.remove("hidden");
    // console.log(item.dataset.id)

    createVideoFrame(item.dataset.id);
  };
});

// remove the video from the doom
video_over_layer.onclick = (e) => {
  // remove the iframe
  video_over_layer.querySelector("iframe").remove();
  // make the overlayer hidden
  video_over_layer.classList.add("hidden");
};


// add video img to each video item

// const thumbs_imgs = document.querySelectorAll('.thumb_img');
video_items.forEach(item => {
  const youtube_id = item.dataset.id;
  item.querySelector('.thumb_img').setAttribute('src',`https://i.ytimg.com/vi/${youtube_id}/hqdefault.jpg`)
});
