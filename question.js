//question
export const questions = [
    {
    questionText: '你行山之前會唔會規劃行程？',
    answers: [
        { text: '會啊，做足功課最放心！', score: 1 },
        { text: '唔會，即興行山最開心！', score: 2 },
        { text: '朋友就係我嘅指南針，我負責出現就得～', score: 3 }
    ]
    },
    {
        questionText: '你認為行山前最重要嘅事前準備係⋯',
        answers: [
            { text: '身體狀況良好，體力充沛', score: 2 },
            { text: '工欲善其事，必先利其器，梗係買齊最專業嘅行山套裝', score: 3 },
            { text: '要帶足夠食水同糧食，隨時補充能量', score: 1 }
        ]
    },
    {
        questionText: '你比較鍾意以下邊一個行山情景？',
        answers: [
            { text: '一個人行山，漫步欣賞自然美景', score: 1 },
            { text: '搵好友結伴同行，令旅程更歡暢', score: 3 },
            { text: '同另一半一齊行山，感情升溫', score: 2 }
        ]
    },
    {
        questionText: '行到好攰但仲有一半路程，你決定？',
        answers: [
            { text: '休息一陣再行過', score: 2 },
            { text: '睇下身邊嘅同行意願如何', score: 3 },
            { text: '原路折返，落山走人', score: 1 }
        ]
    },
    {
        questionText: '終於行到上山呀你決定？',
        answers: [
            { text: '影相po ig先', score: 3 },
            { text: '終於可以攞個靚靚便當嚟食啦', score: 2 },
            { text: '享受下風景 感受下大自然先', score: 1 }
        ]
    },
    {
        questionText: '喺山上面有個人問你可唔可以借個電話嚟打， 佢同朋友走失咗？',
        answers: [
            { text: '點知係咪呃人呀唔借', score: 1 },
            { text: '打電話啫借囉', score: 2 },
            { text: '幫人幫到底，陪佢搵到朋友先', score: 3 }
        ]
    },{
        questionText: '落山嘅時候發現有個手袋放咗喺路邊，你決定？',
        answers: [
            { text: '覺得自己好好彩，據為己有', score: 1 },
            { text: '當睇唔到就算', score: 2 },
            { text: '即刻影相出post睇下有冇人應', score: 3 }
        ]
    },{
        questionText: '落山之後發現比預定嘅時間早咗你會點',
        answers: [
            { text: '搵下friend食飯', score: 3 },
            { text: '返屋企打機煲劇', score: 1 },
            { text: '去飲下酒', score: 2 }
        ]
    },{
        questionText: '終於返到屋企你第一件事會做咩',
        answers: [
            { text: '即刻沖涼', score: 2 },
            { text: '好攰攤一陣先', score: 1 },
            { text: '即刻搵嘢食食下補充體力', score: 3 }
        ]
    },{
        questionText: '突然有朋友嘅訊息, 發現原來係約你聽日再行過山你會點',
        answers: [
            { text: '即刻推，好攰呀，唔去', score: 1 },
            { text: '睇下多唔多人去再決定', score: 2 },
            { text: '即刻應承，去咗先算啦', score: 3 }
        ]
    }
]


console.log(JSON.stringify(questions))
