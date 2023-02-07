//under tiden bilden hämtas ska 'loading' visas







async function getDogImage() {

    const h1 = document.createElement("h1");
    document.body.append(h1);
    h1.innerText = "Loading";
    h1.style.color = "black";

    const dogUrl = `https://dog.ceo/api/breeds/image/random`;


    //destructuring
    const response = await fetch(dogUrl);
    const { message } = await response.json();
    console.log(message);

    // const data = await response.json();
    // console.log(data);

    // return message;

    const img = document.createElement('img');
    document.body.append(img);
    img.src = message;

    h1.remove();
    return 4;
}


console.log('före getDogImage anropas');
// getDogImage();
console.log(getDogImage());
console.log('efter getDogImage anropas');


//ex.destructuring
// const obj = {
//     e1: 1,
//     e2: 2
// };

// const {e1} = obj;
// console.log(e1);