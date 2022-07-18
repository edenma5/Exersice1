//products details
const detailsPro = document.querySelector('.detailsPro');
const moreDetails = document.querySelector('.moreDetails');
const instructions = document.querySelector('.instructions');
const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const panel3 = document.querySelector('.panel3');
const plusSymbol1 = document.querySelector('.plusSymbol1');
const plusSymbol2 = document.querySelector('.plusSymbol2');
const plusSymbol3 = document.querySelector('.plusSymbol3');

detailsPro.addEventListener('click', () => {
    detailsPro.style.fontWeight = 'bold';
    moreDetails.style.fontWeight = 'normal';
    instructions.style.fontWeight = 'normal';
    panel1.style.maxHeight = '200px';
    panel2.style.maxHeight = '0';
    panel3.style.maxHeight = '0';
    plusSymbol1.style.transform = 'rotate(45deg)';
    plusSymbol2.style.transform = 'rotate(0deg)';
    plusSymbol3.style.transform = 'rotate(0deg)';
})
moreDetails.addEventListener('click', () => {
    detailsPro.style.fontWeight = 'normal';
    moreDetails.style.fontWeight = 'bold';
    instructions.style.fontWeight = 'normal';
    panel1.style.maxHeight = '0';
    panel2.style.maxHeight = '200px';
    panel3.style.maxHeight = '0';
    plusSymbol1.style.transform = 'rotate(0deg)';
    plusSymbol2.style.transform = 'rotate(45deg)';
    plusSymbol3.style.transform = 'rotate(0deg)';
})
instructions.addEventListener('click', () => {
    detailsPro.style.fontWeight = 'normal';
    moreDetails.style.fontWeight = 'normal';
    instructions.style.fontWeight = 'bold';
    panel1.style.maxHeight = '0';
    panel2.style.maxHeight = '0';
    panel3.style.maxHeight = '200px';
    plusSymbol1.style.transform = 'rotate(0deg)';
    plusSymbol2.style.transform = 'rotate(0deg)';
    plusSymbol3.style.transform = 'rotate(45deg)';
})




//Colors Area 
const mainImg = document.getElementById('mainImg');
const colorText = document.getElementById('colorText');
const colorBox1 = document.getElementById('colorBox1');
const colorBox2 = document.getElementById('colorBox2');
const colorBox3 = document.getElementById('colorBox3');
colorBox1.addEventListener('click', () => {
    colorBox1.style.border = '1.5px solid rgb(81, 81, 81)';
    colorBox2.style.border = '0';
    colorBox3.style.border = '0';
    mainImg.src = 'Images/white bowl.jpg';
    colorText.innerText = 'לבן';
});
colorBox2.addEventListener('click', () => {
    colorBox2.style.border = '1.5px solid rgb(81, 81, 81)';
    colorBox1.style.border = '0';
    colorBox3.style.border = '0';
    mainImg.src = 'Images/black bowl.jpg';
    colorText.innerText = 'שחור';
});
colorBox3.addEventListener('click', () => {
    colorBox3.style.border = '1.5px solid rgb(81, 81, 81)';
    colorBox2.style.border = '0';
    colorBox1.style.border = '0';
    mainImg.src = 'Images/yellow bowl.jpg';
    colorText.innerText = 'צהוב';
});

//Favorite Heart
const emptyHeart = document.querySelector('.emptyHeart');
const fullHeart = document.querySelector('.fullHeart')
emptyHeart.addEventListener('click', () => {
    fullHeart.style.display = 'block';
    fullHeart.style.color = '#c92027';
    emptyHeart.style.display = 'none';
})
fullHeart.addEventListener('click', () => {
    fullHeart.style.display = 'none';
    emptyHeart.style.display = 'block';
})