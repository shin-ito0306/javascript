var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');

while((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー') && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
}

var js_hand = getJShand();
var judge = WinLose(user_hand, js_hand);

if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavascriptが選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else{
  alert('また挑戦してね')
}



function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー"
  }
  return hand_name
}

function WinLose(user, js){
  var WinLoseStr;

  if(user == 'グー'){
    if(js == 'グー'){
      WinLoseStr = 'あいこ';
    } else if(js == 'チョキ'){
      WinLoseStr = '勝ち';
    } else if(js == 'パー'){
      WinLoseStr = '負け';
    }
  } else if(user == 'チョキ'){
    if(js == 'グー'){
      WinLoseStr = '負け';
    } else if(js == 'チョキ'){
      WinLoseStr = 'あいこ';
    } else if(js == 'パー'){
      WinLoseStr = '勝ち';
    }
  } else if(user == 'パー'){
    if(js == 'グー'){
      WinLoseStr = '勝ち';
    } else if(js == 'チョキ'){
      WinLoseStr = '負け';
    } else if(js == 'パー'){
      WinLoseStr = 'あいこ';
    }
  }
  return WinLoseStr;
}

