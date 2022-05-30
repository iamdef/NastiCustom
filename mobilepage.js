
function updateGallery() {
    let fullGal = document.getElementById('gallery');
    fullGal.innerHTML = '<div class="card" id="first-card"><img src="images/catkofta_1.jpg" alt="Drawing skull on the bag"></div><div class="card" id="second-card"><img src="images/catkofta_3.jpg" alt="Miyagi on the sweatshirt"></div><div class="card" id="third-card"><img src="images/miyagikofta_2.jpg" alt="Gorilla on the baseball cap"></div><div class="card" id="fourth-card"><img src="images/miyagikofta_3.jpg" alt="Nickname on the baseball cap"></div><div class="card" id="fifth-card"><img src="images/dragonbag_1.jpg" alt="Drawing dragon on the bag"></div><div class="card" id="sixht-card"><img src="images/dragonbag_2.jpg" alt="Cat on the sweatshirt"></div><div class="card" id="sixht-card"><img src="images/kepka_1.jpg" alt="Cat on the sweatshirt"></div><div class="card" id="sixht-card"><img src="images/kepka_2.jpg" alt="Cat on the sweatshirt"></div><div class="card" id="sixht-card"><img src="images/bag_1.jpg" alt="Cat on the sweatshirt"></div><div class="card" id="sixht-card"><img src="images/bag_4.jpg" alt="Cat on the sweatshirt"></div>'
}

if (screen.width > 480) {
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage']
    });
    
    //methods
    fullpage_api.setAllowScrolling(true);
    } else if (screen.width < 480) {
        updateGallery();
    }


