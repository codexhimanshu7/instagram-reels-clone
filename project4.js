const reels = [
  {
    ismuted:true,
    username: "Aarav Sharma",
    likecount: 12845,
    isliked: false,
    commentcount: 342,
    caption: "Morning ride through the mountains 🌄🏍️",
    video: "video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    sharecount: 184,
    isfollowed: false,
  },
  {
    ismuted:true,
    username: "Priya Verma",
    likecount: 25430,
    isliked: true,
    commentcount: 689,
    caption: "Nothing beats a beach sunset 🌅✨",
    video: "video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/21.jpg",
    sharecount: 412,
    isfollowed: true,
  },
  {
    ismuted:true,
    username: "Rohan Kapoor",
    likecount: 9432,
    isliked: false,
    commentcount: 156,
    caption: "Quick gym session before work 💪",
    video: "16424028_1080_1920_30fps.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    sharecount: 98,
    isfollowed: false,
  },
  {
    ismuted:true,
    username: "Ananya Singh",
    likecount: 45218,
    isliked: true,
    commentcount: 1210,
    caption: "POV: You finally visit your dream destination ✈️❤️",
    video: "16433319_1080_1920_60fps.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/44.jpg",
    sharecount: 923,
    isfollowed: true,
  },
  {
     ismuted:true,
    username: "Kabir Mehta",
    likecount: 18367,
    isliked: false,
    commentcount: 275,
    caption: "Street photography hits different 📸",
    video: "https://www.pexels.com/download/video/38697709/",
    userprofile: "https://randomuser.me/api/portraits/men/55.jpg",
    sharecount: 203,
    isfollowed: false,
  },
  {
     ismuted:true,
    username: "Neha Joshi",
    likecount: 30984,
    isliked: true,
    commentcount: 844,
    caption: "Homemade pasta from scratch 🍝😋",
    video: "16265046_2160_3840_30fps.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/63.jpg",
    sharecount: 517,
    isfollowed: true,
  },
  {
     ismuted:true,
    username: "Aditya Malhotra",
    likecount: 11763,
    isliked: false,
    commentcount: 194,
    caption: "Late night coding session ☕💻",
    video: "16424028_1080_1920_30fps.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/71.jpg",
    sharecount: 129,
    isfollowed: false,
  },
  {
     ismuted:true,
    username: "Sneha Gupta",
    likecount: 51782,
    isliked: true,
    commentcount: 1684,
    caption: "This transition took way too many tries 😂",
    video: "https://www.pexels.com/download/video/38053791/",
    userprofile: "https://randomuser.me/api/portraits/women/76.jpg",
    sharecount: 1102,
    isfollowed: true,
  },
  {
     ismuted:true,
    username: "Vikram Patel",
    likecount: 7986,
    isliked: false,
    commentcount: 102,
    caption: "Weekend football with the squad ⚽🔥",
    video: "https://www.pexels.com/download/video/28833370/",
    userprofile: "https://randomuser.me/api/portraits/men/84.jpg",
    sharecount: 76,
    isfollowed: false,
  },
  {
     ismuted:true,
    username: "Meera Nair",
    likecount: 22491,
    isliked: true,
    commentcount: 538,
    caption: "A peaceful evening by the lake 🌿💙",
    video: "https://www.pexels.com/download/video/37904651/",
    userprofile: "https://randomuser.me/api/portraits/women/90.jpg",
    sharecount: 364,
    isfollowed: true,
  },
];

var allreels = document.querySelector('.all-reels');

function addData() {
  var sum=''
reels.forEach(function(elem,idx){
    sum = sum+`<div class="reel">
                    <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
                            <div class ='mute' id=${idx}> 
                            ${elem.ismuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-fill"></i>'}
                          
                            </div>

                <div class="bottom">
                    <div class="user">
                        <img src="${elem.userprofile}" alt="">
                        <h4>${elem.username}</h4>
                        <button id=${idx}  class='follow'>${elem.isfollowed ? 'Unfollow' : 'Follow'}</button>
                    </div>
                    <h3>${elem.caption}</h3>

                </div>
                <div class="right">
                    <div id=${idx} class="like">
                        <h4 class="like-icon">${elem.isliked ? '<i class=" love ri-heart-3-fill"></i>':'<i class="ri-heart-line"></i>'}</i></h4>
                        <h6>${elem.likecount}</h6>
                    </div>
                    <div class="comment">
                        <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                        <h6>${elem.commentcount}</h6>
                    </div>
                    
                    <div class="share">
                        <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.sharecount}</h6>
                    </div>
                    <div class="menu">
                        <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                
                    </div>
                </div>

                </div>`
})

allreels.innerHTML =sum

}
addData();

allreels.addEventListener('click',function(dets){
  if(dets.target.className=='like'){
    if(!reels[dets.target.id].isliked){
      reels[dets.target.id].likecount++;
    reels[dets.target.id].isliked= true;
    }else{
      reels[dets.target.id].likecount--;
      reels[dets.target.id].isliked= false;
    }
    addData();

  }
  if(dets.target.className=='follow'){
    if(!reels[dets.target.id].isfollowed){
            reels[dets.target.id].isfollowed= true;
    }else{
      reels[dets.target.id].isfollowed= false

    }
      addData();

  }
  if(dets.target.className=='mute'){
    if(!reels[dets.target.id].ismuted){
            reels[dets.target.id].ismuted= true;
    }else{
      reels[dets.target.id].ismuted= false

    }
      addData();

  }

})