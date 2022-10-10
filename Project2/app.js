

let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( function (btn){
    btn.addEventListener("click",(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            value.textContent = count;
        }
        else if(styles.contains("increase")){
            count++;
            value.textContent = count;
        }
        else{
            count=0;
            value.textContent = count;
        }

        // if(count>0){
        //     value.style.color ="yellow";
        // }
        // if(count<0){
        //     value.style.color ="green";
        // }
        // if(count==0){
        //     value.style.color = "red";
        // }
    });
});

