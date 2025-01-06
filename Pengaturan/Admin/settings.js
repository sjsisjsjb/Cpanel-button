global.chalk = require("chalk")
global.fs = require("fs")

//.                [ SETTING OWNER ]
//=================================================//
global.mongoURL = "mongodb+srv://kiicodehosting:LK2VdVCY6u4zdilJ@cluster0.5qngav6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.owner = ['6287745690302']
global.botNumber = '6288294533698'
global.botName = 'нєятα вσт'
global.ownerName = 'RafiDev'
global.gambar = 'https://telegra.ph/file/afe107ad0388645ea0a52.jpg'
global.author = 'ᴄʀᴇᴀᴛᴇ ʙʏ: ʀᴀғɪᴍᴀᴋᴇʀ'
//=================================================//
// Set Cpanel Menu
global.domain = '-' // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '-' // id eggs yang dipakai
global.location = '-' // id location
//Global Web
global.sig = 'https://instagram.com/bangr_xd_shop'
//Global Api
global.skizoapi = 'rafi'
global.api = {
ehz: 'rafi', //skizo.tech | kalo mau pake api gua izin dulu
angel: 'zenzkey_8bb60993ae', // Apikey Zahwazein
Lol: 'wsUxEYD5',
Botcahx: 'Admin',
ApikeyAi: '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',
ApiNobg: 'r1DRrnqgdPT4ceHLUo9m4hTa',
FilestackApi: '',
}
//=================================================//
global.mess = {
    wait: 'Loading...',
    succes: 'Done',
    admin: 'Gagal, Khusus Admin Group',
    botAdmin: 'Gagal, Bot Bukan Admin',
    owner: 'Gagal, Khusus Developer',
    group: 'Gagal, Fitur Untuk Grup',
    private: 'Gagal, Fitur Untuk Chat Pribadi',
    bot: 'Gagal, Bot Number User Special Features!!!',
    error: 'Eror...',    
    text: 'Gagal, Text Nya Mana?',
}

//=================================================//
//=================================================//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})