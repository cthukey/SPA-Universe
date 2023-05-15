import { Router } from "./router.js";
const router = new Router()
router.add('/home',"./pages/home.html")
router.add('/universo',"./pages/universo.html")
router.add('/exploracao',"./pages/exploracao.html")

router.handle()


window.onpopstate = () => router.handle()
window.route = () => router.route()












// const routes ={
//     "/home":"./pages/home.html",
//     "/universo":"./pages/universo.html",
//     "/exploracao":"./pages/exploracao.html",
//     "/404":"./pages/erro.html",
// }



// function route(event){
//     event = event || window.event
//     event.preventDefault()

//     window.history.pushState({},"",event.target.href)
    
//     handle()
// }

// function handle(){

//     const {pathname} = window.location
//     const route = routes[pathname] || routes['/404']
    
//     fetch(route)
//     .then(data => data.text())//uma function que esta retornando data.text()
//     .then(html => {
//         document.querySelector('#page').innerHTML = html
//     })

    

