

//detect clicks and play respecive sounds
for(var i=0; i< document.querySelectorAll(".key").length ;i++)
{

document.querySelectorAll(".key")[i].addEventListener("click",function(){
    var innerButton = this.innerHTML;
    makeSound(innerButton);
    makeAnimation(innerButton);

});
}


//detect keyboard press and play respective sound
document.addEventListener("keypress", function(event){
makeSound(event.key);
makeAnimation(event.key);
 });


// make sound when specified key is pressed
function makeSound(key)
{
    switch(key)
    {
        case 'a':
            {
        
            var audio1 = new Audio("sounds/clap/mixkit-clapping-slowly-479.wav");
            audio1.play();   
            break;
            }
        

        case 's':
            {
        
            var audio2 = new Audio("sounds/hihat/hihat.mp3");
            audio2.play();
            break;
            }
        

        case 'd':
            {
        
            var audio3 = new Audio("sounds/kick/Kick.mp3");
            audio3.play();
            }
        

        case 'f':
            {
    
        
            var audio4 = new Audio("sounds/openhat/openhat.wav");
            audio4.play(); 
            break;
            }
        

        case 'g':
            {
        
            var audio5 = new Audio("sounds/boom/boom.wav");
            audio5.play();
            break;
            }
        

        case 'h':
            {
        
            var audio6 = new Audio("sounds/ride/ride.mp3");
            audio6.play();
            break;  
            }
        

        case 'j':
            {
        
            var audio7 = new Audio("sounds/snare/snare.mp3");
            audio7.play();
            break;
            }
        

        case 'k':
            {
        
            var audio8 = new Audio("sounds/tom/tom.mp3");
            audio8.play();
            break; 
            }
        
        
        case 'l':
            { 
        
            var audio9 = new Audio("sounds/tink/tink.wav");
            audio9.play();
            break;
            }


            default:
             {
                  console.log(key);
                  break;
                
             }
        

        
    }
}


//Activates animation after detection of keypress or click on specified cases
function makeAnimation(currentkey)
{
    //grabs the button
    var activeButton = document.querySelector("."+currentkey);

    //adding classlist to active button
    activeButton.classList.add("playing");

    //removing added classlist from active button after specified time
    setTimeout(function(){ activeButton.classList.remove("playing"); }, 100);

}