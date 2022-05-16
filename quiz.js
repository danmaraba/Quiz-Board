
    function result()
    {
        var score=0;
        var quiz1= document.quiz.quiz1.value
        var quiz2= document.quiz.quiz2.value
        var quiz3= document.quiz.quiz3.value
        var quiz4= document.quiz.quiz4.value
        var quiz5= document.quiz.quiz5.value
        var total=document.getElementById("total")
        if(quiz1=="variable")
        {
            score+=20;
        }
        if(quiz2=="Letters")
        {
            score+=20;
        }
        if(quiz3=="None")
        {
            score+=20;
        }
        if(quiz4=="Cross loop")
        {
            score+=20;
        }
        if(quiz5=="Line")
        {
            score+=20;
        }
        total.textContent=score
        if (score<50) {
            comment.textContent=("performed poorly");
            
        }
        if (score>=50 && score<=80) {
            comment.textContent=("performed fairly");
            
        }
        if (score>80) {
            comment.textContent=("performed excellently");
            
        }
    }