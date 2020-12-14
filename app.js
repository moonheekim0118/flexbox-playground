const $flexBox=document.querySelector('.box-container');
const $flexDirection = document.querySelector('#flex-direction');
const $flexWrap = document.querySelector('#flex-wrap');
const $justifyContent= document.querySelector('#justify-content');
const $alignItems = document.querySelector('#align-items');
const $alignContent= document.querySelector('#align-content');
const $allReset = document.querySelector('#all-reset');

const $directionStatus=document.querySelector('#direction');
const $wrapStatus=document.querySelector('#wrap2');
const $justifyStatus=document.querySelector('#justify');
const $itemsStatus=document.querySelector('#items');
const $contentStatus=document.querySelector('#content');


// flex direction
$flexDirection.addEventListener('click',(e)=>{
    const target = e.target.id;
    if(target!=='flex-direction'){
        $flexBox.style.flexDirection=target;
        if(target==="column" ||target==="column-reverse"){
            $flexDirection.classList.add("column");
        } else{
            $flexDirection.classList.remove("column");
        }
        $directionStatus.innerText=`flex-direction: ${target}`;
    }
});

// flex wrap
$flexWrap.addEventListener('click',(e)=>{
    const target = e.target.id;
    if(target!=='flex-wrap'){
        if(target === "reset"){
            $flexBox.style.width="400px";
            $flexBox.style.height="270px";
            $flexBox.style.flexWrap="nowrap";
        } else{
            if( $flexDirection.classList.contains("column")){
                $flexBox.style.height="100px";
            } else{
                $flexBox.style.width="100px";
            }
            $flexBox.style.flexWrap=target;
        }
        $wrapStatus.innerText=`flex-wrap: ${target}`;
    }
});


// justify content
$justifyContent.addEventListener('click',(e)=>{
    const target = e.target.id;
    if(target!=='justify-content'){
        $flexBox.style.justifyContent=target;
        $justifyStatus.innerText=`justify-content: ${target}`;
    }
})


// align items
$alignItems.addEventListener('click',(e)=>{
    const target = e.target.id;
    if(target!=='align-items'){
        $flexBox.style.alignItems=target;
        $itemsStatus.innerText=`align-items: ${target}`;
    }
})

// align content
$alignContent.addEventListener('click',(e)=>{
    const target = e.target.id;
    if(target!=='align-content'){
        $flexBox.style.alignContent=target;
        $contentStatus.innerText=`align-content: ${target}`;
    }
});

// all reset
$allReset.addEventListener('click',()=>{
    $flexBox.style.flexDirection='row';
    $flexBox.style.flexWrap="nowrap";
    $flexBox.style.justifyContent='flex-start';
    $flexBox.style.alignItems='stretch';
    $flexBox.style.alignContent='normal';
    $flexBox.style.width="400px";
    $flexBox.style.height="270px";

    $directionStatus.innerText='flex-direction: row';
    $wrapStatus.innerText='flex-wrap: nowrap';
    $justifyStatus.innerText='justify-content: flex-start';
    $itemsStatus.innerText='align-items: stretch';
    $contentStatus.innerText='align-content: normal';
});