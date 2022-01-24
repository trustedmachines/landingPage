function setupAOS(){
        AOS.init();
}

function setProgress(){
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
}

function toggleSteps(e) {
   var btn = e.target;

   if(btn.id === 'customerBtn'){
       if(btn.classList.contains('btn-primary')){
           // is already active
           // developerBtn must be outlined
           var developerBtn = document.getElementById('developerBtn');
           developerBtn.classList.remove('btn-primary');
           developerBtn.classList.add('btn-outline');
       }else{
           // customer btn was not active
           btn.classList.remove('btn-outline-primary')
           btn.classList.add('btn-primary')

           var developerBtn = document.getElementById('developerBtn');
           developerBtn.classList.remove('btn-primary');
           developerBtn.classList.add('btn-outline-primary');
       }

       // disable developer
       var developerCollapse = document.getElementById('developer');
       developerCollapse.classList.remove('show');

       // enable customer
       var customerCollapse = document.getElementById('customer');
       customerCollapse.classList.add('show');
   }else{
       if(btn.classList.contains('btn-primary')){
           // is already active
           // developerBtn must be outlined
           var customerBtn = document.getElementById('customerBtn');
           customerBtn.classList.remove('btn-primary');
           customerBtn.classList.add('btn-outline');
       }else{
           // customer btn was not active
           btn.classList.remove('btn-outline-primary')
           btn.classList.add('btn-primary')

           var customerBtn = document.getElementById('customerBtn');
           customerBtn.classList.remove('btn-primary');
           customerBtn.classList.add('btn-outline-primary');
       }

       // disable customer
       var customerCollapse = document.getElementById('customer');
       customerCollapse.classList.remove('show');

       // enable developer
       var developerCollapse = document.getElementById('developer');
       developerCollapse.classList.add('show');

   }
}

function changeIcon(e){
    var icon = e.target.children[0];
    console.log(icon.classList);

    if(icon.classList.contains('color-blue')){
        icon.classList.remove('color-blue');
        icon.classList.add('color-white');
    }else{
        icon.classList.add('color-blue');
        icon.classList.remove('color-white');
    }

   console.log(e.target.children[0]);

}
