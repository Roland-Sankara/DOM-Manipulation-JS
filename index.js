// Accessing an HTML element
let headingElement = document.querySelector('#heading');
headingElement.innerText = 'Hello world';
headingElement.style.color = 'Orange';

// Create a new Element
let paragraph = document.createElement('p');
// Inserting paragraph text
paragraph.innerText = 'Here is the Paragraph text';
// Innserting html to the paragraph 
paragraph.innerHTML = 'Manipulation is <b>awesome</b>';

// Adding an image
let image = document.createElement('img');
image.setAttribute('src','https://cdn-images.welcometothejungle.com/5DDbrp9_kdlw05Z0hzc7kYEpaaruHhUUWJqs-nW1o8k/rs:auto:980::/q:85/czM6Ly93dHRqLXByb2R1Y3Rpb24vdXBsb2Fkcy9jYXRlZ29yeS9jb3Zlci8yNjYwLzE1NDg4My9jb2xsZWN0aW9uX2NhdGVnb3J5X2JlaGluZF90aGVfY29kZS5qcGc')
image.setAttribute('alt','image of code');
image.style.width = '300px';


let bodyElement = document.querySelector('body');
// adding the paragrap element to the body
bodyElement.appendChild(paragraph);
// adding the image element to the body
bodyElement.appendChild(image);

// Delete element
// deleting the heading element from the body
bodyElement.removeChild(headingElement);



//Events in DOM Manipulation
// Learn about more events here; https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click',function(){
    let colors = ['red','teal','black','orange'];
    let randomColor = Math.floor(Math.random() * colors.length);
    bodyElement.style.backgroundColor = colors[randomColor];
})

// Learn about the JS Math Object here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

