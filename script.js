    let re=""; let cm=""; let um="";
   
    function computermove(){

        
        let y=Math.random();
        if(y>0&&y<=1/3)
            cm="rock"
        else if(y>1/3&&y<=2/3)
            cm="paper";
        else if(y>2/3&&y<1)
            cm="scissors";
    return cm;


    }
    const rock=document.querySelector('.r');
    const paper=document.querySelector('.p');
    const scissors=document.querySelector('.s');

    function resultforr(){
        um="Rock";
        computermove();
        if(cm==="rock")
            re="tie";
        else if(cm==="paper")
            re="loss"
        else if(cm==="scissors")
            re="win";
        calcres();
        updateui();

    }
    function resultforp(){
        um="Paper";
        computermove();
        if(cm==="rock")
            re="win";
        else if(cm==="paper")
            re="tie"
        else if(cm==="scissors")
            re="loss";
        calcres();
        updateui();

        
    }
    function resultfors(){
        um="Scissors";
        computermove();
        if(cm==="rock")
            re="loss";
        else if(cm==="paper")
            re="win"
        else if(cm==="scissors")
            re="tie";
        

    calcres();
    updateui();
    }

    let scores=JSON.parse(localStorage.getItem("scores"))||{
        win:0,
        loss:0,
        tie:0
    };

    function calcres(){
        if (re==="win")
        scores.win++;
        else if(re==="loss")
            scores.loss++;
        else if(re==="tie")
            scores.tie++;
        localStorage.setItem("scores",JSON.stringify(scores));
    }

    function updateui(){
        let f=document.querySelector('.fr');
        let m=document.querySelector('.rrr');
        m.innerHTML=`Its a ${re}`
      f.innerHTML = `You : ${um} &nbsp;&nbsp;&nbsp; Computer : ${cm}`;
        let sc=document.querySelector('.sco');
        sc.innerHTML=`Win&nbsp;:&nbsp;${scores.win}&nbsp;&nbsp; Lost&nbsp;:&nbsp;${scores.loss}&nbsp;&nbsp; Tie&nbsp;:&nbsp;${scores.tie}`

    }
    function resetsc()
    {
        scores.win=0;
        scores.loss=0;
        scores.tie=0;
        localStorage.setItem("scores",JSON.stringify(scores));
        let sc=document.querySelector('.sco');
        sc.innerHTML=`Win&nbsp;:&nbsp; ${scores.win} &nbsp;&nbsp; Lost&nbsp;:&nbsp;${scores.loss} &nbsp;&nbsp; Tie&nbsp;:&nbsp;${scores.tie}`
        let m=document.querySelector('.rrr');
        m.innerHTML=``
        let f=document.querySelector('.fr');
        
        f.innerHTML=``


    }