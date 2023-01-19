'use strict'

// Modal auto load 
// const myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
// myModal.show()

//Chon
const chkEmailId = document.querySelector('#inpEmail');
const btnSubmit = document.querySelector('.submit');
const chkEmailContainer = document.getElementById("chk-email");
const infoContainer = document.getElementById("personal-info");
const errType = document.querySelector(".errType");
const errNull = document.querySelector(".errNull");
const errFalse = document.querySelector(".errFalse");


//email true
const emailTrue = "DaoNguyen@funix.edu.vn";

// const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// let result = text.match(regex);






//click button
btnSubmit.addEventListener('click',function(){
    //Check email
    const emailRegex = 
    new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "gm");
    const isValidEmail = emailRegex.test(chkEmailId.value);
    //console.log(isValidEmail);

    //true
    if(chkEmailId.value === emailTrue){
        chkEmailContainer.classList.add("hidden");
        infoContainer.classList.remove("hidden");
    }
    // null
    else if(chkEmailId.value === ""){
        errNull.classList.remove("hidden");
        errType.classList.add("hidden");
        errFalse.classList.add("hidden");
    }
        // type email
        else if(isValidEmail === false ){
            errType.classList.remove("hidden");
            errNull.classList.add("hidden");
            errFalse.classList.add("hidden");
           
        }
        else
        {
            errFalse.classList.remove("hidden");
            errNull.classList.add("hidden");
            errType.classList.add("hidden");
        }
})


/*   
    Ẩn danh thẻ div trong từng phần info để xác định đang hover info nào

*/

//hover kngiem

const hoverInfo = document.querySelector('.job-info-wrap');
const messMore = document.querySelector('.message-more');

//Bien xac dinh dang mo info hay chua
let step =1;

//event hover
hoverInfo.addEventListener("mousemove", (event) => {
    
    //alert(this.info-1);
    //Neu chua mo info thi SHow messMore
    if(step===1){
        //event.target.style.color = "purple";
        messMore.classList.remove('hidden');

         //over mose
         hoverInfo.addEventListener('mouseleave',(event) => {
            messMore.classList.add('hidden');
        })
    }
    else{  
         
    }
  

    //show info
    hoverInfo.addEventListener('mousedown',(event) => {
        step=2;
        const expContent = document.querySelector('.experience-content');
        expContent.classList.remove('hidden');
        messMore.classList.add('hidden');

        const messLess = document.querySelector('.message-less');
        messLess.classList.remove('hidden');

        // //event click vao Less more de an info
        messLess.addEventListener("click", (event) => {
            expContent.classList.add('hidden');
            messLess.classList.add('hidden');
            //Tra lai gia tri ban dau chua show info
            step=1;
        })
    })

})


//hover hoc van

const hoverInfo1 = document.querySelector('.job-info-wrap1');
const messMore1 = document.querySelector('.message-more1');

//Bien xac dinh dang mo info hay chua
let step1 =1;

//event hover
hoverInfo1.addEventListener("mousemove", (event) => {
    
    //alert(this.info-1);
    //Neu chua mo info thi SHow messMore
    if(step1===1){
        //event.target.style.color = "purple";
        messMore1.classList.remove('hidden');

         //over mose
         hoverInfo1.addEventListener('mouseleave',(event) => {
            messMore1.classList.add('hidden');
        })
    }
    else{  
         
    }
  

    //show info
    hoverInfo1.addEventListener('mousedown',(event) => {
        step1=2;
        const expContent1 = document.querySelector('.experience-content1');
        expContent1.classList.remove('hidden');
        messMore1.classList.add('hidden');

        const messLess1 = document.querySelector('.message-less1');
        messLess1.classList.remove('hidden');

        // //event click vao Less more de an info
        messLess1.addEventListener("click", (event) => {
            expContent1.classList.add('hidden');
            messLess1.classList.add('hidden');
            //Tra lai gia tri ban dau chua show info
            step1=1;
        })
    })

})



//hover Hoat Dong

const hoverInfo2 = document.querySelector('.job-info-wrap2');
const messMore2 = document.querySelector('.message-more2');

//Bien xac dinh dang mo info hay chua
let step2 =1;

//event hover
hoverInfo2.addEventListener("mousemove", (event) => {
    
    //alert(this.info-1);
    //Neu chua mo info thi SHow messMore
    if(step2===1){
        //event.target.style.color = "purple";
        messMore2.classList.remove('hidden');

         //over mose
         hoverInfo2.addEventListener('mouseleave',(event) => {
            messMore2.classList.add('hidden');
        })
    }
    else{  
         
    }
  

    //show info
    hoverInfo2.addEventListener('mousedown',(event) => {
        step2=2;
        const expContent2 = document.querySelector('.experience-content2');
        expContent2.classList.remove('hidden');
        messMore2.classList.add('hidden');

        const messLess2 = document.querySelector('.message-less2');
        messLess2.classList.remove('hidden');

        // //event click vao Less more de an info
        messLess2.addEventListener("click", (event) => {
            expContent2.classList.add('hidden');
            messLess2.classList.add('hidden');
            //Tra lai gia tri ban dau chua show info
            step2=1;
        })
    })

})




//hover So Thich

const hoverInfo3 = document.querySelector('.job-info-wrap3');
const messMore3 = document.querySelector('.message-more3');

//Bien xac dinh dang mo info hay chua
let step3 =1;

    //event hover
    hoverInfo3.addEventListener("mousemove", (event) => {
    
    //alert(this.info-1);
    //Neu chua mo info thi SHow messMore
    if(step3===1){
        //event.target.style.color = "purple";
        messMore3.classList.remove('hidden');

         //over mose
         hoverInfo3.addEventListener('mouseleave',(event) => {
            messMore3.classList.add('hidden');
        })
    }
    else{  
         
    }
    //show info
    hoverInfo3.addEventListener('mousedown',(event) => {
        step3=2;
        const expContent3 = document.querySelector('.experience-content3');
        expContent3.classList.remove('hidden');
        messMore3.classList.add('hidden');

        const messLess3 = document.querySelector('.message-less3');
        messLess3.classList.remove('hidden');

        // //event click vao Less more de an info
        messLess3.addEventListener("click", (event) => {
            expContent3.classList.add('hidden');
            messLess3.classList.add('hidden');
            //Tra lai gia tri ban dau chua show info
            step3=1;
        })
    })

})


//hover ngon ngu

const hoverInfo4 = document.querySelector('.job-info-wrap4');
const messMore4 = document.querySelector('.message-more4');

//Bien xac dinh dang mo info hay chua
let step4 =1;

    //event hover
    hoverInfo4.addEventListener("mousemove", (event) => {
    
    //alert(this.info-1);
    //Neu chua mo info thi SHow messMore
    if(step4===1){
        //event.target.style.color = "purple";
        messMore4.classList.remove('hidden');

         //over mose
         hoverInfo4.addEventListener('mouseleave',(event) => {
            messMore4.classList.add('hidden');
        })
    }
    else{  
         
    }
    //show info
    hoverInfo4.addEventListener('mousedown',(event) => {
        step4=2;
        const expContent4 = document.querySelector('.experience-content4');
        expContent4.classList.remove('hidden');
        messMore4.classList.add('hidden');

        const messLess4 = document.querySelector('.message-less4');
        messLess4.classList.remove('hidden');

        // //event click vao Less more de an info
        messLess4.addEventListener("click", (event) => {
            expContent4.classList.add('hidden');
            messLess4.classList.add('hidden');
            //Tra lai gia tri ban dau chua show info
            step4=1;
        })
    })

})


//hover ky nang

const hoverInfo5 = document.querySelector('.job-info-wrap5');
const messMore5 = document.querySelector('.message-more5');

//Bien xac dinh dang mo info hay chua
let step5 =1;

    //event hover
    hoverInfo5.addEventListener("mousemove", (event) => {
    
    //alert(this.info-1);
    //Neu chua mo info thi SHow messMore
    if(step5===1){
        //event.target.style.color = "purple";
        messMore5.classList.remove('hidden');

         //over mose
         hoverInfo5.addEventListener('mouseleave',(event) => {
            messMore5.classList.add('hidden');
        })
    }
    else{  
         
    }
    //show info
    hoverInfo5.addEventListener('mousedown',(event) => {
        step5=2;
        const expContent5 = document.querySelector('.experience-content5');
        expContent5.classList.remove('hidden');
        messMore5.classList.add('hidden');

        const messLess5 = document.querySelector('.message-less5');
        messLess5.classList.remove('hidden');

        // //event click vao Less more de an info
        messLess5.addEventListener("click", (event) => {
            expContent5.classList.add('hidden');
            messLess5.classList.add('hidden');
            //Tra lai gia tri ban dau chua show info
            step5=1;
        })
    })

})