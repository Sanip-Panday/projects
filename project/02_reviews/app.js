  
  
const reviews = [
{
    id: 1,
    name: "Harry Oreo" ,
    job: "ux designer",
    img: "./oldman.jpg",

    text: "Hi, I'm a good ux and ui designer and i have 2,3 year of experience on ux design."


},
{
    id: 2,
    name: "Sabin Oreo" ,
    job: "ux designer",
    img: "https://res.cloudinary.com/dttkw5ckl/image/upload/v1672460945/samples/people/boy-snow-hoodie.jpg" ,

    text: "a book or other written or printed work, regarded in terms of its content rather than its physical form."

},
{
    id: 3,
    name: "Bikash Oreo" ,
    job: "web designer",
    img: "https://res.cloudinary.com/dttkw5ckl/image/upload/v1672460943/samples/people/smiling-man.jpg" ,

    text:"Hi, I'm a good ux and ui designer and i have 2,3 year of experience on ux design."
},
{
    id: 4,
    name: "Sam Oreo" ,
    job: "Phthon developer",
    img: "https://res.cloudinary.com/dttkw5ckl/image/upload/v1672460941/samples/people/kitchen-bar.jpg",

    text: "Hello everyone i'm from Italy and i have been coding since i was 15. My journey was very awesome ."
}, 
]



//select items

 const img = document.getElementById("person-img");

 const author = document.getElementById("author");

 const job = document.getElementById("job");

 const info = document.getElementById("info");


 const prevBtn = document.querySelector('.prev-btn')
 const nextBtn = document.querySelector('.next-btn')

 //set starting item

 let currentItem = 0;

 //load intial item
 window.addEventListener('DOMContentLoaded', function(){





    /*let item = reviews[currentItem];
     img.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;*/

//1st ma yo program set garesi showperson ma copy garnu parxa

showPerson(currentItem);

 });
 
 //show person based on item

 function showPerson(){
    let item = reviews[currentItem];
     img.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
 }

 //show next person

 nextBtn.addEventListener('click', function(){
    currentItem++;
   
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
 });


  //show prev person

  prevBtn.addEventListener('click', function(){
    currentItem--;
   
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
 });




