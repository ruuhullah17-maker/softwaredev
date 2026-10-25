// const file = document.getElementById("file"),

// box = document.getElementById("box"),

// btn = document.getElementById("btn"),

// namel = document.getElementById("name"),

// password = document.getElementById("password");

// namel.addEventListener("keypress",(e)=>{
//     console.log(e.target.value)
// })







//hexadecimal
const hexadigits =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


//a function to generate a random index
const generateIndex = () => {
    return Math.floor(Math.random() * 16)};


    //write a function to generate the hexadecimal color
    const hexColorGenerator = () => {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let index=generateIndex();
            color += hexadigits[index];
        }
        return color;
    };

const body = document.body;
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");



//listen for the space key press
const spaceFunction =(e) => {
    console.log("A key was pressed!", e.key);
//event
const colorlist= [];

for(let i=0; i<6; i++){
    let color = hexColorGenerator();
    colorlist.push(color);
}

if(e.key === " ") {
    one.style.backgroundColor = colorlist[0];
    one.textContent = colorlist[0];
    two.style.backgroundColor = colorlist[1];
    two.textContent = colorlist[1];
    three.style.backgroundColor = colorlist[2];
    three.textContent = colorlist[2];
    four.style.backgroundColor = colorlist[3];
    four.textContent = colorlist[3];
    five.style.backgroundColor = colorlist[4];
    five.textContent = colorlist[4];
    six.style.backgroundColor = colorlist[5];
    six.textContent = colorlist[5];
  }


}







document.body.addEventListener("keydown", spaceFunction);



