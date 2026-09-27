

console.log('test 2');

function buttonGoto(x){

          switch(x) {
            case 'adoption': window.open('https://mabsland.com/Adoption.html')
            break;
            case 'fidget':window.open('https://fidgetcube.dev/')
            break;
            case 'fuckai':window.open('https://88x31.datakra.sh/img/random/fuckai.gif')
            break;
            case 'gay':window.open('https://pillowfort.social/posts/1632320')
            break;
            case 'hrt':window.open('https://alyx.sh/posts/hrt-geocities-buttons/')
            break;
            case 'kate':window.open('https://88x31.kate.pet/')
            break;
            case 'hyena':window.open('https://hyenatown.nekoweb.org/')
            break;
            case 'cyber':window.open('https://cyber.dabamos.de/88x31/')
            break;
            case 'sgc':window.open('https://sadgirlsclub.wtf/')
            break;
            case 'feed':window.open('/feed.xml')
            break;
            case 'mini':window.location.href = "/blogs/mini.html"
            break;
            case 'blog':window.location.href = "/blog.html"
            break;
            default:window.open('https://sadgirlsclub.wtf/')
          }
        }

      function goTo(x) {
          y = window.location.pathname
          window.location = y+"#"+x
         //window.location = (""+window.location).replace(/#[A-Za-z0-9_]*$/,'')+"#myAnchor"
         /* switch(x) {
            case 'shelter': open('#shelter')
            break;
            case 'escape from blue marble':
            break;
            case 'eusexua': 
            break;
            case 'unicorns are real': 
            break;
            case 'constant companions': 
            break; */
          }
      function testLoad() {
        //window.location.href = "/testfolder/canvas.html"
        document.getElementById("mainPanelArea")
        //.innerHTML = '<p>test !</p>';  
        var x = '/testfolder/blogofexpand.html'
        //.innerHTML = x;
      }


      // script.js  
function loadHTML(x) {  
  const container = document.getElementById('mainPanelArea');
  filetoLoad = '/testfolder/'+x+'.html'
  /*if (x == 'index') {
    filetoLoad = '/index.html'

  }
  else{
    // Target div where content will be inserted  
    filetoLoad = '/testfolder/'+x+'.html'
  }
    */
    // Fetch the external HTML file  
    fetch(filetoLoad)  
        .then(response => {  
            // Check if the request succeeded (status 200-299)  
            if (!response.ok) {  
                throw new Error(`HTTP error! Status: ${response.status}`);  
            }  
            // Convert response to text (HTML string)  
            return response.text();  
        })  
        .then(html => {  
            // Insert the HTML into the container  
            container.innerHTML = html;
            history.pushState(null, "", x+".html");
            //window.location.pathname = filetoLoad+"#"+x
            //window.location.pathname = filetoLoad
        })  
        .catch(error => {  
            // Handle errors (e.g., file not found, network issues)  
            container.innerHTML = `<p>Error loading content: ${error.message}</p>`;  
        });  
}  

function loadPage(x) {  
  loadcanvas = '/testfolder/canvas.html'
  const container = document.getElementById('wholepage');
  fetch(loadcanvas)  
        .then(response => {  
            // Check if the request succeeded (status 200-299)  
            if (!response.ok) {  
                throw new Error(`HTTP error! Status: ${response.status}`);  
            }  
            // Convert response to text (HTML string)  
            return response.text();  
        })  
        .then(html => {  
            // Insert the HTML into the container  
            container.innerHTML = html;
            history.pushState(null, "", x+".html");
            //window.location.pathname = filetoLoad+"#"+x
            //window.location.pathname = filetoLoad
        })  
        .catch(error => {  
            // Handle errors (e.g., file not found, network issues)  
            container.innerHTML = `<p>Error loading content: ${error.message}</p>`;  
        });  
  console.log('done with load page!') ; 
  //loadHTML(x)
  console.log('done with html');
  setTimeout(function() { grabState();},100);
      }
function grabState() {
  
   name = window.location.pathname;
   console.log(name);
   var partsName = name.substring(name.lastIndexOf('/')+1);
   console.log(partsName);
   var sendPart = partsName.split('.');
   console.log(sendPart[0]);
   loadHTML(sendPart[0]);


}

/*
const hashes = new Map([
    ["blogofexpand", "/"],
    ["friends", "tab2"],
    ["aboutme", "tab3"],
    ["album-recommendations", "tab3"],
    ["video-recommendations", "tab3"],
    ["blogs-full", "tab3"],
    ["blogs-mini", "tab3"],
    ["blogs-expandweb", "tab3"],
    ["blogs-goodfriends", "tab3"],
    ["blogs-punktactics1", "tab3"],
    ["blogs-starguide", "tab3"],
]);







/*
const tabs = document.querySelector("mainPanel")

const hashes = new Map([
    ["blogofexpand", ""],
    ["#friends", "tab2"],
    ["#aboutme", "tab3"],
    ["#album-recommendations", "tab3"],
    ["#video-recommendations", "tab3"],
    ["#blogs-full", "tab3"],
    ["#blogs-mini", "tab3"],
    ["#blogs-expandweb", "tab3"],
    ["#blogs-goodfriends", "tab3"],
    ["#blogs-punktactics1", "tab3"],
    ["#blogs-starguide", "tab3"],
]);


tabs.addEventListener("click", function (event) {
    if (!event.target.id) return;
    update(event.target.id);
});

const update = (tabId) => {
    // remove the active class of the previously selected tab
    const currentTab = tabs.querySelector(".active");

    if (currentTab.id != tabId) {
        currentTab.classList.remove("active");
    }
    // add active class to the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");

    const entry = data.get(tabId);

    if (entry) {
        // update the URL
        history.pushState(null, "", entry.url);
        // change the content
        content.innerHTML = entry.content;
    }
};
*/
/*
if (response.status == 404) {
  hash = window.location.hash;
  try {
     window.location = "/test.html";
     loadHTML(hash);
  }
  catch(err) {
    window.location = "";
  }
}


new Response();

const allowedURLs = ["blogofexpand"]
console.log("test!")
/*
(() => {
  
  if (response.ok != true) {
    path = window.location.pathname;
    if (allowedURLs.includes(path)) {
      loadHTML(path)
    }
    else{
      window.location = "/404.html"
    }
    }
  }

)();




(() => {
    console.log('test 2')
    //hash = window.location.hash;
    //if (hash != "") {
     //window.location = "/test.html";
   // loadHTML(hash);
    
})();
*/