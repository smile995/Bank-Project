
document.getElementById('diposite-btn').addEventListener('click', function(){
    // console.log('got it');
    const dipositeElement=document.getElementById('dipositeField');
    const dipositeAmount=dipositeElement.value;
    console.log(dipositeAmount);
    const dipositeTotal=document.getElementById('dipositeTotal');
    const total=dipositeTotal.innerText;
    console.log(total);
    // const change=dipositeAmount=total;
    // console.log(change);
    dipositeTotal.innerText=dipositeAmount;
    
})