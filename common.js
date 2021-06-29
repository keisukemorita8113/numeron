let $color = document.getElementById("color");

let random;

let colorList = ["red","green","blue","purple","white","yellow"];

//現在の場所を示す
let count = 0; 

//現在のブロック
let nowBlock = 1;

//eatの数
let eat_count = 0;

//biteの数
let bite_count = 0;

//1つ目のbiteを加算しないようにする変数
let bite_skip1 = 0;

//2つ目のbiteをスキップしないようにする
let bite_skip2 = 0;

//3つ目のbiteをスキップしないようにする
let bite_skip3 = 0;

//4つ目のbiteをスキップしないようにする
let bite_skip4 = 0;

let eat_skip1 = 0;

let eat_skip2 = 0;

let eat_skip3 = 0;


//ページが読み込まれる前に答えに色を入れる
window.addEventListener('DOMContentLoaded', function(){
    for (let i = 0; i< 4; i++){

        random = Math.floor(Math.random()*(6));
    
        document.getElementById(`circleAnswer-${i+1}`).innerHTML = `<div id="${colorList[random]}"</div>`;
    
    }

})

document.getElementById('home').addEventListener('click',() =>{
    window.location.href = './index.html';
})

document.getElementById('reload').addEventListener('click',() =>{
    window.location.reload();
})

//色をクリックすると箱に色を代入する動作
function getId(ele){
    if(count >= 4){
        count = 0;
    }
    count++;
    let id_color = ele.id;

    document.getElementById(`circle${nowBlock}-${count}`).innerHTML = `<div id="${id_color}"</div>`;  
    
}
//リセット処理
function reset(ele){
    let reset_id = ele.id;
    for(let i = 0;i <4 ;i++){
        document.getElementById(`circle${nowBlock}-${i+1}`).innerHTML = "●";

    }
    count = 0
}


//goのボタンが押された時の処理
function go(){
  
    // console.log(document.getElementById(`circle${nowBlock}-${4}`));
    // console.log(`<span id="circle${nowBlock}-${4}">●</span>`)
    
    count = 0;

    //eatの判定処理
    for(let i =1 ;i<5; i++){
        if(document.getElementById(`circle${nowBlock}-${i}`).children[0].isEqualNode(document.getElementById(`circleAnswer-${i}`).children[0])){
            
            eat_count++;
            
            //bite_skip2に値が入っていたら3つ目のスキップの値を代入する
            if(eat_skip2 != 0){
                eat_skip3 = i;
                //console.log("eatskip3 :" +eat_skip3);
            }

            //bite_skipに値が入っていたら2つ目のスキップの値を代入する
            if(eat_skip1 != 0 && eat_skip3 === 0){
                eat_skip2 = i;
                //console.log("eatskip2 :" +eat_skip2);
            }

            if(eat_skip1 === 0){
                eat_skip1 = i
                //console.log("eatskip1 :" +eat_skip1);
            }
        }
    }

    eat_skip = 10 - eat_skip1 - eat_skip2 - eat_skip3;
    
    //console.log(eat_skip)

    //bite判定
    for(let i =1 ;i<5; i++){
        for(let j =1 ;j<5; j++){
            //現在のブロックに対して上から1つずつ答えと照合していく
            if(document.getElementById(`circle${nowBlock}-${i}`).children[0].isEqualNode(document.getElementById(`circleAnswer-${j}`).children[0])){
                //eatの処理はスキップする
                if(i === j){
                    continue;
                }

                if(document.getElementById(`circle${nowBlock}-${i}`).children[0].isEqualNode(document.getElementById(`circleAnswer-${i}`).children[0])){
                    continue;
                }

                //2回目のbite判定時はスキップする
                if(bite_skip1 === j){
                    continue;
                }
                if(bite_skip2 === j){
                    continue;
                }
                if(bite_skip3 === j){
                    continue;
                }

                if(bite_skip4 === j){
                    continue;
                }

                if(eat_skip1 === j){
                    continue;
                }

                if(eat_skip2 === j){
                    continue;
                }

                if(eat_skip3 === j){
                    continue;
                }

                if(eat_skip1!=0 && eat_skip2!=0 &&eat_skip3!=0 && document.getElementById(`circle${nowBlock}-${i}`).children[0].isEqualNode(document.getElementById(`circleAnswer-${eat_skip}`).children[0])){
                    continue;

                }

                if(document.getElementById(`circle${nowBlock}-${i}`).children[0].isEqualNode(document.getElementById(`circleAnswer-${j}`).children[0]) && document.getElementById(`circle${nowBlock}-${j}`).children[0].isEqualNode(document.getElementById(`circleAnswer-${j}`).children[0])){
                    continue;
                }

                 //bite_skip2に値が入っていたら3つ目のスキップの値を代入する
                 if(bite_skip3 != 0 && bite_skip4 === 0){
                    bite_skip4 = j;
                }

                //bite_skip2に値が入っていたら3つ目のスキップの値を代入する
                if(bite_skip2 != 0 && bite_skip3 === 0){
                    bite_skip3 = j;
                }

                //bite_skipに値が入っていたら2つ目のスキップの値を代入する
                if(bite_skip1 != 0 && bite_skip2 === 0){
                    bite_skip2 = j;
                }

                if(bite_skip1 === 0){
                    bite_skip1 = j;
                }
                
                
                console.log("biteの判定は :"+i+"と"+j);

                //biteの値を1つプラスする
                bite_count++;

                //biteを見つけたら処理は抜ける
                break;
                
            }
        }
    }

    document.getElementById(`eatBite${nowBlock}`).innerHTML = `${eat_count}eat<br>${bite_count}bite`;
    console.log("nowBlock:"+nowBlock);
    nowBlock++;


    if(eat_count === 4){

        $('#wrapAnswer').unwrap();
        
        window.alert("clear!!");

    }

    if(nowBlock === 9){
        window.alert("終了。。。");

        $('#wrapAnswer').unwrap();
    }
    eat_count = 0;
    bite_count = 0;
    eat_skip1 = 0;
    eat_skip2 = 0;
    eat_skip2 = 0;
    eat_skip = 0;
    bite_skip1 = 0;
    bite_skip2 = 0;
    bite_skip3 = 0;
    bite_skip4 = 0;

}






















