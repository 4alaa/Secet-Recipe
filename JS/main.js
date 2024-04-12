// loader
$(document).ready(

$(".loader").fadeIn(1000,function () {
    
    $(".loading").fadeOut(1000)

    $("body").removeClass("overflow-y-hidden")


})

)

// for activeLink in navbar
let navLinks=$(".navbar .nav-link")


for (let i = 0; i < navLinks.length; i++) {
   
    navLinks[i].addEventListener("click",function (e) {
        
        navLinks.removeClass("activeLink")

        $(e.target).addClass("activeLink")
    })
    
}

// for box icons
let gearIcon=document.querySelector(".gear-icon")



  
gearIcon.addEventListener("click",function hideShowIcons() {
    


            gearIcon.classList.add("fa-spin")

   
     if($(".up-icon").attr("style")=="display: none;")
     {
        $(".up-icon").fadeIn(2000,function () {
            
            gearIcon.classList.remove("fa-spin")

        })
        $(".mood-icon").fadeIn(2600)     
        $(".Random-icon").fadeIn(3200)
     }
     else
     {

        $(".up-icon").fadeOut(2000,function () {
            
            gearIcon.classList.remove("fa-spin")

        })
        $(".mood-icon").fadeOut(2600)   
        $(".Random-icon").fadeOut(3200)
     
        }

})


// up icon
document.querySelector(".up-icon").addEventListener("click",function () {
    

    $("html,body").animate({scrollTop:0},2000)

    
})

// mood of page
let moodOfpage="sun"
document.querySelector(".mood-icon").addEventListener("click",function () {
    

    $(".fa-sun").toggleClass("d-none")

    $(".fa-moon").toggleClass("d-none")


    $("body").toggleClass("darkMood")


   if(moodOfpage=="moon")
   {
     moodOfpage="sun"
     Removecheck()
   }
   else
   {
    moodOfpage="moon"

    check()
   }

})


function check() {

    $("#ContainrOFData .category-item.shadow").css("background-color","rgb(30,30,30)")
    $("#ContainrOFData .category-item.shadow").css("color","black")
   

    $(".category-item").css("background-color","rgb(30,30,30)")
    $(".category-item").css("color","black")
    
    
}
function Removecheck() {

    $("#ContainrOFData .category-item.shadow").css("background-color","rgb(255,255,255)")
    $("#ContainrOFData .category-item.shadow").css("color","rgb(33,37,41)")
   

    $(".category-item").css("background-color","rgb(255,255,255)")
    $(".category-item").css("color","rgb(33,37,41)")
    
    
}

// random colors
function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let randomColor
document.querySelector(".Random-icon").addEventListener("click",function () {

    randomColor = generateRandomColor();

    
    document.querySelector(".animate-word").style.cssText = `color: ${randomColor} !important;`;
    document.querySelector(".allView").style.cssText = `color: ${randomColor} !important;`;
    document.querySelector(".DependOnIngradiant").style.cssText = `color: ${randomColor} !important;`;
    document.querySelector(".countryMeals").style.cssText = `color: ${randomColor} !important;`;
    document.querySelector(".MealStartwith").style.cssText = `color: ${randomColor} !important;`;
    document.querySelector(".Searchwith").style.cssText = `color: ${randomColor} !important;`;


    for (let i = 1; i <=4 ; i++) {
        
        
        document.querySelector(`.PopularH2-${i}`).style.cssText = `color: ${randomColor} !important;`;

        
    }



})

// console.log(randomColor); 



// typed js plugin
var typed = new Typed(".animate-word", {
    strings: ["Find Your Favourite Recipe Here ", "All Categories You Want", "All Ingredients", "All Ingredients You Want"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
  });
// for isp top plugin

// init Isotope
var $grid = $('.protoDetails .row .col-12').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

//   for owl plugin
// call of owl plugin
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:4,
      loop:true,
      margin:20,
      slideBy:1,
      autoplay:true,
      responsive : {
// breakpoint from 0 up
0 : {
  items:1,
  

    
},
// breakpoint from 768 up
600: {
  items:2,
  

    
},
    // breakpoint from 768 up
920 : {
  items:3,
  

    
},
1300 : {
  items:4,
  

    
}
}
    });
  });

//   search input
let searchInput=document.querySelector(".searchInput")

let iconSearch=document.querySelector(".iconSearch")


iconSearch.addEventListener("click",async function () {
    
    console.log(searchInput.value)




    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`)
    let finalData=await apiData.json()

    let searchResponse=finalData.meals

    console.log(searchResponse)

    document.querySelector(".Searchwith").classList.remove("d-none")  
    



    if(searchInput.value=="")
    {

        document.querySelector(".allView").classList.add("d-none")
        document.querySelector(".DependOnIngradiant").classList.add("d-none")
        document.querySelector(".countryMeals").classList.add("d-none")
        document.querySelector(".MealStartwith").classList.add("d-none")
        document.querySelector(".allAbout").classList.add("d-none")
        document.querySelector(".aboutDescription").classList.add("d-none")

        
        

        document.querySelector(".Searchwith").classList.remove("d-none")
        
        



        document.querySelector(".Searchwith").innerHTML=`<p class="text-danger fs-3 text-center"> You Should Enter Charcters To Search</p>`

        document.querySelector("#ContainrOFData").innerHTML=""
    }
    else if(searchResponse!=null)
    {
        document.querySelector(".Searchwith").innerHTML=`Meals contains ( ${searchInput.value} ) `

        displaySearch(searchResponse)

    }
    else 
    {

    document.querySelector(".Searchwith").innerHTML=`Sorry No Data with search ( ${searchInput.value} )`

    document.querySelector("#ContainrOFData").innerHTML=""




    // new 
    
   clearAll__2WithoutSearch()

    



   clearAll__1()


    document.querySelector("#ContainrOFData").classList.remove("d-none")


    document.querySelector("#ContainrOFData").classList.remove("d-none")




    }

    
})

function displaySearch(searchResponse) {
    

    let cartoona=``

    for (let i = 0; i < searchResponse.length; i++) {
        
        cartoona+=`
        
        <div class="col-md-${searchResponse.length==1||searchResponse.length==2||searchResponse.length==3?"4":"3"}">
        <div class="meal-item" onclick="getDetailsOfSpecial(${searchResponse[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
          <img src="${searchResponse[i].strMealThumb}" class="img-fluid" alt="">
          <div class="meal-caption">
            <h2>${searchResponse[i].strMeal}</h2>
          </div>
            </div>
        </div>
        
        
        `
        




    }


clearAll__2WithoutSearch()

    



clearAll__1()


    document.querySelector("#ContainrOFData").classList.remove("d-none")


    document.querySelector("#ContainrOFData").classList.remove("d-none")


    document.querySelector("#ContainrOFData").innerHTML=cartoona


 


}



let RadomNumber=Math.round(Math.random()*560) 



let RadomNumberInArea=Math.round(Math.random()*15) 







// all ingradiants
async function getAllIngradiants() {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)

    let finalData=await apiData.json()

    let allIngradiantsResponse=finalData.meals.slice(RadomNumber,RadomNumber+12)

    // console.log(allIngradiantsResponse.meals)

    displayAllIngradiants(allIngradiantsResponse)



}

getAllIngradiants()


function displayAllIngradiants(FromAllIngradiant) {

    var cartoona=``
    for (let i = 0; i < FromAllIngradiant.length; i++) {
        
        cartoona+=
        `
        <div class="col-md-4">
        <div onclick="FilterByCategory('i','${FromAllIngradiant[i].strIngredient}')" class="category-item shadow text-center rounded-3" >
            <img src="https://www.themealdb.com/images/ingredients/${FromAllIngradiant[i].strIngredient}.png" class="img-fluid rounded-3" alt="">
            <h4 class="py-3 ">${FromAllIngradiant[i].strIngredient.slice(0,16)}</h4>
        </div>
        </div>
        
        `

        
    }

    document.getElementById("AllIngredientsRow").innerHTML=cartoona

   
}












// all areas

 
async function getAllAreas() {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

    let finalData=await apiData.json()

    let allAreaResponse=finalData.meals.slice(RadomNumberInArea,RadomNumberInArea+12)

    // console.log(allAreaResponse.meals)

    displayAllAreas(allAreaResponse)

}

getAllAreas()


function displayAllAreas(FromAllAreas) {

    var cartoona=``
    for (let i = 0; i < FromAllAreas.length; i++) {
        
        cartoona+=
        `
        <div class="col-md-4">
        <div onclick="FilterByCategory('a','${FromAllAreas[i].strArea}')" class="category-item shadow text-center rounded-3" >
            <img src="${checkFlag(FromAllAreas[i].strArea)}" class="img-fluid rounded-3" alt="${FromAllAreas[i].strArea}" title="Flag Of ${FromAllAreas[i].strArea}">            
        </div>
        </div>
        
        `

        
    }

    

    document.getElementById("AllAreaRow").innerHTML=cartoona

}


// checking flags of areas
function checkFlag(flagName) {
    
    if(flagName=="American")
    {
        return "./images/American.jpg"
    }
    else if(flagName=="British")
    {
        return "./images/British.png"
    }
    else if(flagName=="Canadian")
    {
        return "./images/Canadian.png"
    }
    else if(flagName=="Chinese")
    {
        return "./images/Chinese.png"
    }
    else if(flagName=="Croatian")
    {
        return "./images/Croatian.jpg"
    }
    else if(flagName=="Dutch")
    {
        return "./images/Dutch.jpg"
    }
    else if(flagName=="Egyptian")
    {
        return "./images/Egyptian.jpg"
    }
    else if(flagName=="Filipino")
    {
        return "./images/Filipino.jpg"
    }
    else if(flagName=="French")
    {
        return "./images/French.png"
    }
    else if(flagName=="Greek")
    {
        return "./images/Greek.jpg"
    }
    else if(flagName=="Indian")
    {
        return "./images/Indian.png"
    }
    else if(flagName=="Irish")
    {
        return "./images/Irish.jpg"
    }
    else if(flagName=="Italian")
    {
        return "./images/Italian.png"
    }
    else if(flagName=="Jamaican")
    {
        return "./images/Jamaican.png"
    }


    else if(flagName=="Japanese")
    {
        return "./images/Japanese.jpg"
    }
    else if(flagName=="Kenyan")
    {
        return "./images/Kenyan.png"
    }
    else if(flagName=="Malaysian")
    {
        return "./images/Malaysian.jpg"
    }
    else if(flagName=="Mexican")
    {
        return "./images/Mexican.jpg"
    }
    else if(flagName=="Moroccan")
    {
        return "./images/Moroccan.jpg"
    }
    else if(flagName=="Polish")
    {
        return "./images/Polish.png"
    }
    else if(flagName=="Portuguese")
    {
        return "./images/Portuguese.jpg"
    }
    else if(flagName=="Russian")
    {
        return "./images/Russian.jpg"
    }
    else if(flagName=="Spanish")
    {
        return "./images/Spanish.jpg"
    }
    else if(flagName=="Thai")
    {
        return "./images/Thai.png"
    }
    else if(flagName=="Tunisian")
    {
        return "./images/Tunisian.jpg"
    }
    else if(flagName=="Turkish")
    {
        return "./images/Turkish.jpg"
    }
    else if(flagName=="Unknown")
    {
        return "./images/Unknown.png"
    }
    else if(flagName=="Vietnamese")
    {
        return "./images/Vietnamese.jpg"
    }
    
}













//  about categories

async function getAllCategories() {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    let finalData=await apiData.json()

    let AllcategoriesResponse=finalData.categories.slice(0,12)
    
    // console.log(AllcategoriesResponse)

    displayAllCategories(AllcategoriesResponse)
}



let category_items
function displayAllCategories(allSelcted) {
    var cartoona=``
    for (let i = 0; i < allSelcted.length; i++) {
        
        cartoona+=
        `
        <div class="col-md-4">
        <div  onclick="FilterByCategory('c','${allSelcted[i].strCategory}')" class="category-item myDesc shadow text-center rounded-3">
            <img  src="${allSelcted[i].strCategoryThumb}" class="img-fluid rounded-3" alt="${allSelcted[i].strCategory}" DataDesc="${allSelcted[i].strCategoryDescription}">
            <h4 class="py-3 ">${allSelcted[i].strCategory}</h4>

        </div>
        </div>
        
        `

        
    }

    document.querySelector(".AllcategoriesRow").innerHTML=cartoona



}

getAllCategories()

let allDesc
let shortDescription

(async function () {
    
    await getAllCategories()

     allDesc=document.querySelectorAll(".myDesc")

     for (let i = 0; i < allDesc.length; i++) {
       
        allDesc[i].addEventListener("click",function (e) {
            
            console.log($(e.target).attr("DataDesc"))
             shortDescription=$(e.target).attr("DataDesc")

             document.querySelector(".allAbout").classList.remove("d-none")
             document.querySelector(".aboutDescription").classList.remove("d-none")

             document.querySelector(".aboutDescription").innerHTML=shortDescription

        })
        
     }

})();



let filteredCategory
async function FilterByCategory(CHAR,SelctedCategory) {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${CHAR}=${SelctedCategory}`)
    let finalData=await apiData.json()
     filteredCategory=finalData.meals

    console.log(filteredCategory)

    if(filteredCategory==null)
    {
        document.querySelector("#desc").innerHTML=`No meal depend on ${SelctedCategory.slice(0,13)} `
        launch_toast()
    }

   
    document.querySelector(".allAbout").innerHTML=SelctedCategory +" Recipes"


    

    document.querySelector(".DependOnIngradiant").classList.add("d-none")

    document.querySelector(".countryMeals").classList.add("d-none")

    document.querySelector(".MealStartwith").classList.add("d-none")

    document.querySelector(".Searchwith").classList.add("d-none")  




    if (CHAR=="i") {

        document.querySelector(".DependOnIngradiant").classList.remove("d-none")

        document.querySelector(".DependOnIngradiant").innerHTML="Recipes depend on "+SelctedCategory

    }
    else if(CHAR=="a")
    {
        document.querySelector(".countryMeals").classList.remove("d-none")
        

        document.querySelector(".countryMeals").innerHTML="Country Meals Of "+SelctedCategory
    }


    



    displayFilteredCategory()

    document.querySelector(".allView").classList.add("d-none")

    searchInput.value=""
    
    $('#exampleModal').modal('hide');
}

function displayFilteredCategory() {
    
    let cartoona=``
    for (let i = 0; i < filteredCategory.length; i++) {

        cartoona+=
        `
        <div class="col-md-${filteredCategory.length==1||filteredCategory.length==2||filteredCategory.length==3?"4":"3"}">
        <div class="meal-item" onclick="getDetailsOfSpecial(${filteredCategory[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
          <img src="${filteredCategory[i].strMealThumb}" class="img-fluid" alt="">
          <div class="meal-caption">
            <h2>${filteredCategory[i].strMeal}</h2>
          </div>
            </div>
        </div>
        
        `
        
    }

clearAll__1()


    document.querySelector("#ContainrOFData").classList.remove("d-none")


    document.getElementById("ContainrOFData").innerHTML=cartoona

}

document.querySelector("#ContainrOFData").classList.add("d-none")

let specialDetails
async function getDetailsOfSpecial(mealID) {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    let finalData=await apiData.json()
    
    specialDetails=finalData.meals

    console.log(specialDetails)

    displaySpcialMeal()
    
}



function displaySpcialMeal() {

    
 


    



    document.querySelector(".myMeal").setAttribute("src",`${specialDetails[0].strMealThumb}`)
    document.querySelector(".details-item h5").innerHTML=`${specialDetails[0].strMeal}`
    document.querySelector(".details-item .span-Category").innerHTML=`${specialDetails[0].strCategory}`
    document.querySelector(".details-item .span-country").innerHTML=`${specialDetails[0].strArea}` +" Meal"

    document.querySelector(".details-item .span-country").addEventListener("click",function () {
        
        FilterByCategory("a",`${specialDetails[0].strArea}`)
    })

    document.querySelector(".details-item .span-Category").addEventListener("click",function () {

        FilterByCategory("c",`${specialDetails[0].strCategory}`)

    })
// for intractions
    let arrayOfInstractions=specialDetails[0].strInstructions.split(".\r")

    let cartoona=``
    for (let i = 0; i < arrayOfInstractions.length; i++) {
       
        cartoona+=
        `
        
        <h3><i class="fa-solid fa-circle-chevron-right me-3 py-4"></i>${arrayOfInstractions[i]}.</h3>

        
        `
        
    }

    
    document.querySelector(".protoDetails .Instruction").innerHTML=cartoona


    // for ingradiants

    let countOfRecipe=``
    for (let j = 1; j < 20; j++) {
       
       if(specialDetails[0][`strIngredient${j}`])
       {

        countOfRecipe+=
        `
        
        
        <div class="col-md-4 DetailsIngradiant">
        <img onclick="FilterByCategory('i','${specialDetails[0][`strIngredient${j}`]}' )" src="https://www.themealdb.com/images/ingredients/${specialDetails[0][`strIngredient${j}`]}.png" class="w-75 rounded-3" alt="">
        <h4 class="text-center"> ${specialDetails[0][`strMeasure${j}`]}  ${specialDetails[0][`strIngredient${j}`]}</h4>
       </div>
        
        `

       }

        
    }

    document.querySelector(".allAbout").classList.add("d-none")
    document.querySelector(".aboutDescription").classList.add("d-none")


    document.querySelector(".Ingredients .row").innerHTML=countOfRecipe




    // for video section
    let videoPath=specialDetails[0].strYoutube.replace("watch?v=","embed/")

    specialDetails[0].strYoutube?
    document.querySelector(".Video").innerHTML=
    `
    <iframe width="100%" class='max-w-full mx-auto' height="315" src="${videoPath}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>

    `:""

    // for more about
    
    specialDetails[0].strSource?document.querySelector(".More").innerHTML=
    `
    <a href="${specialDetails[0].strSource}" target="_blank"  >
    <button class="btn btn-outline-success position-relative start-50 translate-middle-x px-5">More About...</button>
  </a>
    `:""



    // for tags consists
    
    let temp=``

    if(specialDetails[0].strTags!=null)
    {
        let strTags=specialDetails[0].strTags.split(",")

        console.log(strTags)
    
        temp=``
        for (let i = 0; i < strTags.length; i++) {
          
         temp+=`
         
         <span class="bg-danger rounded-pill fs-3 px-3 text-white mb-2 me-3">${strTags[i]}</span>
    
         `
        }
    


        document.querySelector(".items").innerHTML=temp
    }
    else
    {
        document.querySelector(".items").innerHTML=" "

    }

    document.querySelector(".IngredientsLink").click()
    document.querySelector(".instaLink").click()
    document.querySelector(".videoLink").click()
    document.querySelector(".IngredientsLink").click()
    document.querySelector(".instaLink").click()

}










// view all data of Categories,Ingredients,Area



$(".navbar .ApiData").click(function (e) {

    
    let selctedNavLink=$(e.target).attr("data")

    console.log(selctedNavLink)

    document.querySelector(".allAbout").classList.add("d-none")
    document.querySelector(".aboutDescription").classList.add("d-none")

    clearAll__3withoutAllView()

    if(selctedNavLink=="Ingredients")
    {

        getAllFromNav("i")

    }
    else if(selctedNavLink=="Area")
    {
        getAllFromNav("a")

    }

    
})
    

async function getAllFromNav(CHARLink) {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${CHARLink}=list`)

    let finalData=await apiData.json()

    // let fromNav=finalData.meals


    document.querySelector(".allAbout").classList.add("d-none")
    document.querySelector(".aboutDescription").classList.add("d-none")

    $("html,body").animate({scrollTop:1050},1000)


    if(CHARLink=="i")
    {
        let fromNav=finalData.meals
        console.log(fromNav)
        displayAllIngradiantsFromNav(fromNav)


    }
    else if(CHARLink=="a")
    {
        let fromNav=finalData.meals
        console.log(fromNav)
        displayAllAreasFromNav(fromNav)

    }


    console.log(moodOfpage)

checkPageMODE()



}




function displayAllAreasFromNav(fromNav) {

    var cartoona=``
    for (let i = 0; i < fromNav.length; i++) {
        
        cartoona+=
        `
        <div class="col-md-4">
        <div onclick="FilterByCategory('a','${fromNav[i].strArea}')" class="category-item shadow text-center rounded-3" >
            <img src="${checkFlag(fromNav[i].strArea)}" class="img-fluid rounded-3" alt="${fromNav[i].strArea}" title="Flag Of${fromNav[i].strArea}">            
        </div>
        </div>
        
        `

        
    }


clearAll__1()

    searchInput.value=""


    document.querySelector(".allView").classList.remove("d-none")

    document.querySelector(".allView").innerHTML="View Of The All Areas"

    document.querySelector("#ContainrOFData").classList.remove("d-none")

    document.getElementById("ContainrOFData").innerHTML=cartoona

}



function displayAllIngradiantsFromNav(FromAllIngradiant) {

    var cartoona=``
    for (let i = 0; i < FromAllIngradiant.length; i++) {
        
        cartoona+=
        `
        <div class="col-md-4">
        <div onclick="FilterByCategory('i','${FromAllIngradiant[i].strIngredient}')" class="category-item shadow text-center rounded-3" >
            <img src="https://www.themealdb.com/images/ingredients/${FromAllIngradiant[i].strIngredient}.png" class="img-fluid rounded-3" alt="">
            <h4 class="py-3 ">${FromAllIngradiant[i].strIngredient.slice(0,16)}</h4>
        </div>
        </div>
        
        `

        
    }
clearAll__1()

    searchInput.value=""

    document.querySelector(".allView").classList.remove("d-none")

    document.querySelector(".allView").innerHTML="View Of The All Ingradiants"


    document.querySelector("#ContainrOFData").classList.remove("d-none")

    document.getElementById("ContainrOFData").innerHTML=cartoona




}




// for all categories in nav
async function getCateFromNav() {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    let finalData=await apiData.json()

    let AllcategoriesResponse=finalData.categories

clearAll__3withoutAllView()


    $("html,body").animate({scrollTop:1050},1000)


    displayAllCategoriesFromNav(AllcategoriesResponse)
document.querySelector(".allAbout").classList.add("d-none")
document.querySelector(".aboutDescription").classList.add("d-none")

}

document.getElementById("allCategories").addEventListener("click",getCateFromNav)


let fromNav
function displayAllCategoriesFromNav(allSelcted) {
    var cartoona=``
    for (let i = 0; i < allSelcted.length; i++) {
        
        cartoona+=
        `
        <div class="col-md-4">
        <div onclick="FilterByCategory('c','${allSelcted[i].strCategory}')" class="category-item fromNav shadow text-center rounded-3" >
            <img src="${allSelcted[i].strCategoryThumb}" class="img-fluid rounded-3" alt="${allSelcted[i].strCategory}" DataDesc="${allSelcted[i].strCategoryDescription}">
            <h4 class="py-3 ">${allSelcted[i].strCategory}</h4>
        </div>
        </div>
        
        `

        
    }
clearAll__1()

    searchInput.value=""


    document.querySelector(".allView").classList.remove("d-none")

    document.querySelector(".allView").innerHTML="View Of The All Categories"


    document.querySelector("#ContainrOFData").classList.remove("d-none")

    document.querySelector("#ContainrOFData").innerHTML=cartoona




     fromNav=document.querySelectorAll(".fromNav")

     displayForFromNav()


     console.log(moodOfpage)

     if(moodOfpage=="moon")
     {
         check()
     }
     else
     {
        Removecheck()
     }

}


function displayForFromNav() {

    for (let i = 0; i < fromNav.length; i++) {
   
        fromNav[i].addEventListener("click",function (e) {
            
            console.log($(e.target).attr("DataDesc"))


            document.querySelector(".allAbout").classList.remove("d-none")
            document.querySelector(".aboutDescription").classList.remove("d-none")

            document.querySelector(".aboutDescription").innerHTML=$(e.target).attr("DataDesc")

        })
        
    }
     
}












// *************************  الوصفات واسمها كعنوان
document.querySelector(".allAbout").classList.remove("d-none")
document.querySelector(".aboutDescription").classList.remove("d-none")






async function getCateFromNav2() {
    
    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)

    let finalData=await apiData.json()

    let AllcategoriesResponse=finalData.categories.slice(0,12)
    

    displayAllCategoriesFromNav2(AllcategoriesResponse)

document.querySelector(".allAbout").classList.add("d-none")
document.querySelector(".aboutDescription").classList.add("d-none")


}



function displayAllCategoriesFromNav2(allSelcted) {
    var cartoona=``
    for (let i = 0; i < allSelcted.length; i++) {
        
        cartoona+=
        `
        <div class="col-md-4">
        <div onclick="FilterByCategory('c','${allSelcted[i].strCategory}')" class="category-item fromNav shadow text-center rounded-3" >
            <img src="${allSelcted[i].strCategoryThumb}" class="img-fluid rounded-3" alt="${allSelcted[i].strCategory}" DataDesc="${allSelcted[i].strCategoryDescription}">
            <h4 class="py-3 ">${allSelcted[i].strCategory}</h4>
        </div>
        </div>
        
        `

        
    }

clearAll__1()




    // the location of new data
    document.querySelector(".AllcategoriesRow").innerHTML=cartoona








     fromNav=document.querySelectorAll(".fromNav")

     displayForFromNav()


}






// for home click
async function callHome() {
    $("html,body").animate({scrollTop:1050},1000)
    searchInput.value=""
    document.querySelector(".allView").classList.add("d-none")
    document.querySelector("#ContainrOFData").classList.add("d-none")
    document.querySelector(".allAbout").classList.add("d-none")
    document.querySelector(".aboutDescription").classList.add("d-none")
    await getCateFromNav2()
    await getAllIngradiants()
    await getAllAreas()

    document.querySelector(".PopularH2-1").classList.remove("d-none")
    document.querySelector(".PopularH2-2").classList.remove("d-none")
    document.querySelector(".PopularH2-3").classList.remove("d-none")
    document.querySelector(".PopularH2-4").classList.remove("d-none")

    document.querySelector(".alphabetLetters").innerHTML=myCartoona

    document.querySelector(".PopularH2-1").innerHTML="Popular Categories"
    document.querySelector(".PopularH2-2").innerHTML="Popular Ingredients"
    document.querySelector(".PopularH2-3").innerHTML="Popular Areas"
    document.querySelector(".PopularH2-4").innerHTML="List all meals by first letter"


clearAll__3withoutAllView()

    console.log(moodOfpage)

checkPageMODE()
}
document.getElementById("homeLink").addEventListener("click",callHome)


document.querySelector(".navbar-brand").addEventListener("click",callHome)

document.querySelector(".allAbout").classList.add("d-none")
document.querySelector(".aboutDescription").classList.add("d-none")


searchInput.value=""


document.querySelector(".allView").classList.add("d-none")
document.querySelector(".DependOnIngradiant").classList.add("d-none")
document.querySelector(".countryMeals").classList.add("d-none")
document.querySelector(".MealStartwith").classList.add("d-none")
document.querySelector(".Searchwith").classList.add("d-none")  





// List all meals by first letter 

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


let myCartoona=``
for (let i = 0; i < alphabet.length; i++) {
    

    myCartoona+=`
    
    <span onclick="letterClicked('${alphabet[i]}')" class="letter"> ${alphabet[i]} </span> <span class="mx-2"> / </span>
    
    `
    
   
    
}

document.querySelector(".alphabetLetters").innerHTML=myCartoona


async function letterClicked(letterParameter) {

    

   let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letterParameter}`)

   let finalData=await apiData.json()

   let FirstLetterResponse=finalData.meals

   document.querySelector(".MealStartwith").classList.remove("d-none")
    
   document.querySelector(".MealStartwith").innerHTML=`Meals Start With Letter ( ${letterParameter} ) `


   displayletterClicked(FirstLetterResponse)


   searchInput.value=""

   

}



function displayletterClicked(FirstLetterResponse) {
    
    let cartoona=``
    if(FirstLetterResponse==null)
    {
        cartoona=`<p class="text-warning fs-4 text-center sorry">Sorry No Recpie Found</p> 

        <P class="fs-4 text-center soon"> We are adding More Recpies Soon</P>
       
        `
    }
    else
    {
        for (let i = 0; i < FirstLetterResponse.length; i++) {
        
            cartoona+=`
            
            <div class="col-md-3">
            <div class="meal-item" onclick="getDetailsOfSpecial(${FirstLetterResponse[i].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
              <img src="${FirstLetterResponse[i].strMealThumb}" class="img-fluid" alt="">
              <div class="meal-caption">
                <h2>${FirstLetterResponse[i].strMeal}</h2>
              </div>
                </div>
            </div>
            
            
            `
        }

    }

clearAll__1()



    document.querySelector("#ContainrOFData").classList.remove("d-none")

    document.getElementById("ContainrOFData").innerHTML=cartoona
}

// random meal in nav

document.querySelector(".RandomMeal").addEventListener("click",async function () {

    

    let apiData=await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

    let finalData=await apiData.json()

    let RandomMealResponse=finalData.meals

    console.log(RandomMealResponse)

    let cartoona=``

    cartoona=`<div class="col-md-5">
    <div class="meal-item text-center" onclick="getDetailsOfSpecial(${RandomMealResponse[0].idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal"> 
      <img src="${RandomMealResponse[0].strMealThumb}" class="img-fluid" alt="">
      <div class="meal-caption">
        <h2>${RandomMealResponse[0].strMeal}</h2>
      </div>
        </div>
    </div>`



clearAll__2WithoutSearch()

    document.querySelector(".Searchwith").classList.add("d-none")  

    
    searchInput.value=""



clearAll__1()


    document.querySelector("#ContainrOFData").classList.remove("d-none")

    document.querySelector("#ContainrOFData").classList.remove("d-none")

    document.querySelector("#ContainrOFData").innerHTML=cartoona



    $("html,body").animate({scrollTop:700},1000)

    


})


//-------------------------------------------------------------------------------------------



// for toast message


function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}






function clearAll__1() {
        
    document.querySelector(".AllcategoriesRow").innerHTML=""
    document.querySelector("#AllIngredientsRow").innerHTML=""
    document.querySelector("#AllAreaRow").innerHTML=""
    document.querySelector(".alphabetLetters").innerHTML=""


    $(".PopularH2-1").addClass("d-none")
    $(".PopularH2-2").addClass("d-none")
    $(".PopularH2-3").addClass("d-none")
    $(".PopularH2-4").addClass("d-none")
}


function clearAll__2WithoutSearch() {

    document.querySelector(".DependOnIngradiant").classList.add("d-none")
    document.querySelector(".countryMeals").classList.add("d-none")
    document.querySelector(".MealStartwith").classList.add("d-none")  
    document.querySelector(".allView").classList.add("d-none")
  
  
  }


  function clearAll__3withoutAllView() {
    
    document.querySelector(".DependOnIngradiant").classList.add("d-none")
    document.querySelector(".countryMeals").classList.add("d-none")
    document.querySelector(".MealStartwith").classList.add("d-none")
    document.querySelector(".Searchwith").classList.add("d-none")  
  }


  function checkPageMODE() {
    
    if(moodOfpage=="moon")
    {
        check()
    }
    else
    {
        Removecheck()
    }
  
  } 


  