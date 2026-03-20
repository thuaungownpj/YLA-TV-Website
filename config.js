// config.js

function siteConfig() {
    return {
        // ၁။ General Settings (အထွေထွေ)
        telegramUrl: "https://t.me/ylatv",
        showPopup: true,
        popupNotice: "Appထဲတွင် ပြသထားသော Football Live နှင့် Highlight များသည် Free Server များကို သာ အသုံးပြုထားပါသဖြင့် အဆင်ပြေမှ အသုံးပြုပေးပါ",
        
        // ၂။ Hero Section Settings (အပေါ်ဆုံးမျက်နှာပြင်)
        heroText: "နောက်ဆုံးထွက် မြန်မာစာတန်းထိုး <span class='kp kp-neon kp-movie'>ဇာတ်ကားများ</span>, <span class='kp kp-neon kp-series'>ဇာတ်လမ်းတွဲများ</span>, <span class='kp kp-neon kp-football'>ဘောလုံးပွဲ Live</span>, <span class='kp kp-neon kp-highlight'>Highlight များ</span> နှင့် <span class='kp kp-neon kp-tv'>နိုင်ငံတကာ TV Channels</span> များကို YLA TV ဆော့ဝဲလ်တွင် ကြည့်ရှုနိုင်ပါသည်",

        // ၃။ Platforms Availability (App ရ/မရ အဖွင့်အပိတ်လုပ်ရန်) 
        platforms: {
            android: { isAvailable: true },
            tv: { isAvailable: true },
            windows: { isAvailable: false },
            ios: { isAvailable: false }
        },

        // ၄။ Texts, Images & Links (App တစ်ခုချင်းစီအတွက် အချက်အလက်များ)
        content: {
            android: {
                title: "Android Phone",
                desc: "Android ဖုန်းနှင့် Tablet များအတွက် သီးသန့် ထုတ်ပေးထားသော Version ဖြစ်ပါတယ်၊ အောက်က လင့်များထဲမှ အဆင်ပြေရာ လင့်တစ်ခုခုမှ Download ရယူပါ။",
                imgUrl: "assets/ss1.png",
                links: [
                    { name: "Download Link 1", url: "https://cdn.ylatvapp.store/file/download-apk/android/YLA-TV(v2.1).apk", icon: "fab fa-android" },
                    { name: "Download Link 2", url: "https://cdn.ylatv.com/file/download-apk/android/YLA-TV(v2.1).apk", icon: "fas fa-download" },
                    { name: "Download Link 3", url: "https://cdn.balthumamathonebuu.store/file/download-apk/android/YLA-TV(v2.1).apk", icon: "fas fa-cloud-download-alt" }
                ],
                comingSoonTitle: "Android App",
                comingSoonDesc: "Android အတွက် ပြုပြင်မွမ်းမံနေဆဲဖြစ်ပါသည်။ ထွက်ရှိလာပါက ချက်ချင်းသိနိုင်ရန် Telegram Channel ကို Join ထားပေးပါ။"
            },
            tv: {
                title: "Android TV & Box",
                desc: "Android TV နှင့် Box များအတွက် သီးသန့် ထုတ်ပေးထားသော Version ဖြစ်ပါတယ်၊ အောက်က လင့်မှ Download ရယူနိုင်သလို၊ AFTV Code ဖြင့် လည်း Download ရယူနိုင်ပါသည်။",
                imgUrl: "assets/tv-main.png",

                // 🔴 Download Button (၁) ခုအတွက် Link
                mainDownload: { 
                    name: "Download Android TV APK", 
                    url: "https://cdn.ylatv.com/file/download-apk/tv/YLA-TV(v2.0).apk", 
                    version: "v2.0" 
                },

                // 🔴 Downloader Codes (၃) ခုအတွက် Data
                downloaderCodes: [
                    { name: "AFTV Code 1", code: "4215311" },
                    { name: "AFTV Code 2", code: "4389136" },
                    { name: "AFTV Code 3", code: "4985395" }
                ],

                comingSoonTitle: "TV Box App",
                comingSoonDesc: "TV များအတွက် ပြုပြင်မွမ်းမံနေဆဲဖြစ်ပါသည်။ ထွက်ရှိလာပါက ချက်ချင်းသိနိုင်ရန် Telegram Channel ကို Join ထားပေးပါ။"
            },
            windows: {
                title: "Windows PC & Laptop",
                desc: "Windows Computer နှင့် Laptop များအတွက် သီးသန့် ထုတ်ပေးထားသော Version ဖြစ်ပါတယ်၊ အောက်က လင့်များထဲမှ အဆင်ပြေရာ လင့်တစ်ခုခုမှ Download ရယူပါ။",
                imgUrl: "assets/windows-pc.png", // 🔴 ကွန်ပျူတာ/Laptop ပုံထည့်ရန် (assets folder ထဲ ထည့်ထားပါ)
                
                // 🔴 Windows အတွက် Download Link ၃ ခု
                links: [
                    { name: "Download Link 1", url: "#", icon: "fab fa-windows", note: "Version 1.0" },
                    { name: "Download Link 2", url: "#", icon: "fas fa-desktop", note: "Version 1.0" },
                    { name: "Download Link 3", url: "#", icon: "fas fa-file-archive", note: "Version 1.0" }
                ],
                
                comingSoonTitle: "Windows Software",
                comingSoonDesc: "PC အတွက် ပြုပြင်မွမ်းမံနေဆဲဖြစ်ပါသည်။ ထွက်ရှိလာပါက ချက်ချင်းသိနိုင်ရန် Telegram Channel ကို Join ထားပေးပါ။"
            },
            ios: {
                title: "iOS (iPhone & iPad)",
                desc: "iPhone နှင့် iPad များအတွက် သီးသန့် ထုတ်ပေးထားသော Version ဖြစ်ပါတယ်၊ အောက်ကပေးထားသော TestFlight လင့်များထဲမှ အဆင်ပြေရာ လင့်တစ်ခုခုမှ Download ရယူပါ။",
                imgUrl: "assets/ss1.png", 
                
                // 🔴 iOS အတွက် Download Link ၃ ခု (App Store & TestFlight)
                links: [
                    { name: "Download Link 1", url: "#", icon: "fab fa-apple", note: "From TestFlight" },
                    { name: "Download Link 2", url: "#", icon: "fas fa-paper-plane", note: "From TestFlight" },
                    { name: "Download Link 3", url: "#", icon: "fas fa-download", note: "From TestFlight" }
                ],
                
                comingSoonTitle: "iOS App",
                comingSoonDesc: "iPhone နှင့် iPad များအတွက် ပြုပြင်မွမ်းမံနေဆဲဖြစ်ပါသည်။ ထွက်ရှိလာပါက ချက်ချင်းသိနိုင်ရန် Telegram Channel ကို Join ထားပေးပါ။"
            }
        },

        // ၅။ FAQ (အမေးများသော မေးခွန်းနှင့် အဖြေများ)
        faq: [
                
                {
                    q: "YLA TV ဆော့ဝဲလ်ကို ဘယ်ကနေ ဒေါင်းရမလဲ၊ Playstore မှာရောရှိလား?",
                    a: "YLA TV ဆော့ဝဲလ်ကို ယခု Website တစ်ခုတည်းကနေပဲ ဒေါင်းလွတ် ရယူနိုင်မှာ ဖြစ်ပါတယ်ခင်ဗျာ၊ \n PlayStore ကနေ ဖျက်ချခံထားရတဲ့အတွက် PlayStore ကနေ ဒေါင်းလွတ် ရယူနိုင်မှာ မဟုတ်ပါဘူးခင်ဗျာ။"
                },
                {
                    q: "YLA TV ဆော့ဝဲလ်ကို ဘယ်လို ထည့်သွင်းရမလဲ?",
                    a: "YLA TV ဆော့ဝဲလ်ကို အပေါ်က ပေးထားတဲ့ သက်ဆိုင်ရာ Download Link တွေကနေ Download ရယူပြီး \n မိမိရဲ့ သက်ဆိုင်ရာ Device အသီးသီးမှာ အလွယ်တကူ Install လုပ်ပြီး အသုံးပြုနိုင်ပါတယ်ခင်ဗျာ။"
                },
                {
                    q: "YLA TV ဆော့ဝဲလ် မှာ အကောင့် ဘယ်လို ဖွင့်ရမလဲ?",
                    a: "YLA TV ဆော့ဝဲလ်ကို မိမိရဲ့ သက်ဆိုင်ရာ Device ထဲမှာ ထည့်သွင်းပြီးသည် နှင့် အလွယ်တကူ ဆော့ဝဲလ်ထဲ ဝင်ပြီး Name, Gmail, Password ရိုက်ထည့်ပြီး ကိုယ်တိုင် အလွယ်တကူ ဖွင့်နိုင်ပါတယ်ခင်ဗျာ။"
                },
                {
                    q: "YLA TV ဆော့ဝဲလ်က လစဉ်ကြေး ပေးစရာလိုလား၊ Freeသုံးလို့ရလား?",
                    a: "YLA TV ဆော့ဝဲလ်ကို အရင်က User အားလုံးအတွက် ၂နှစ်ကျော် အထိ အခမဲ့ ပေးသုံးခဲ့တာ ဖြစ်ပါတယ်ခင်ဗျာ၊ \n ဒါပေမယ့် ခုအချိန်မှာတော့ ကျွန်တော်တို့ Teams အနေနဲ့ အခမဲ့ ပေးသုံးဖို့ ဆက်လက် မရပ်တည်နိုင်တော့တဲ့ အတွက်ကြောင့် တစ်ရက်ကို မြန်မာငွေ ၅၀ကျပ် ဝန်းကျင်ပဲ ရှိတဲ့ မများတဲ့ ပမာဏ ဖြင့် လစဉ်ကြေးသတ်မှတ်ထားပါတယ်။"
                },
                {
                    q: "YLA TV ဆော့ဝဲလ် မှာ Premium Member ဘယ်လို ဝယ်ရမလဲ?",
                    a: "YLA TV ဆော့ဝဲလ်ထဲကို ဝင်ပြီး မိမိစိတ်တိုင်းကျ Planများကို ရွေးချယ်ပြီး၊ ကိုယ်တိုင် Premium Member ဝယ်ယူနိုင်ပါတယ်ခင်ဗျာ၊ \n ဝယ်ရတာ အရမ်းလွယ်ကူပေမယ့် ကိုယ်တိုင် မဝယ်တတ်ဘူးဆိုရင်လည်း Adminကို Telegram ကနေ ဆက်သွယ်ပြီး ငွေလွှဲ ScreenShot ပုံနှင့် အကောင့်ဖွင့်ထားတဲ့ Gmail ပို့ပြီး ဝယ်လို့ရပါတယ်ခင်ဗျာ။"
                },
                {
                    q: "YLA TV ဆော့ဝဲလ် မှာ Premium Member ဝယ်ထားပြီးတာကို ဘာကြောင့် ကြည့်လို့မရသေးတာလဲ?",
                    a: "YLA TV ဆော့ဝဲလ်မှာ Premium Member ဝယ်လိုက်တာနဲ့ ချက်ချင်း Premium Member တန်းဖြစ်သွားတာ မဟုတ်ပါဘူးခင်ဗျာ၊ \n ငွေလွှဲအတုတွေနဲ့ ဝယ်တဲ့ Fakeအကောင့်တွေအများကြီးရှိတာကြောင့်၊ Admin Teams ကနေ ငွေလွှဲ ScreenShot များဖြင့် စစ်ဆေးပြီးမှ Premium Member လက်ခံပေးတာဖြစ်ပါတယ်၊ \n မိနစ်ပိုင်းအတွင်း၊ နာရီပိုင်းအတွင်း Premium Member လက်ခံပေးနေပေမယ့်၊ ၂၄နာရီ ကျော်လို့မှ Premium Memberမဖြစ်သေးရင် Admin ကို Telegram ကနေ အကောင့်ဖွင့်ထားတဲ့ Gmailပို့ပြီး စစ်ဆေးခိုင်းလို့ရပါတယ်ခင်ဗျာ။"
                },
                {
                    q: "YLA TV ဆော့ဝဲလ်ကို အသုံးပြုလို့ မရတော့လို့၊ ဘယ်လိုလုပ်ရမလဲ?",
                    a: "အရင်ထုတ်ပေးထားတဲ့ YLA TV ဆော့ဝဲလ် Version အားလုံးက အသုံးပြုလို့ မရတော့ပါဘူးခင်ဗျာ၊\n ဒါကြောင့်မို့ ယခု Websiteမှာ နောက်ဆုံးထွက် Version အသစ်များ Onlyကိုပဲ Download Link ချပေးထားတာဖြစ်ပါတယ်။\n အပေါ်က ပေးထားတဲ့ လင့်များထဲမှ အဆင်ပြေရာ လင့်တစ်ခုခုကနေ Download ဆွဲပြီး Install ပြန်လုပ်ပြီး အသုံးပြုပေးပါ။"
                },
                {
                    q: "YLA TV ဆော့ဝဲလ်မှာ အကောင့်တစ်ခုကို Devices ဘယ်နှခု သုံးလို့ရလဲ?",
                    a: "YLA TV ဆော့ဝဲလ်မှာ 1 Devices, 2 Devices အစရှိသဖြင့် မိမိစိတ်တိုင်းကျ Plan ကို ရွေးချယ် ဝယ်ယူ အသုံးပြုနိုင်ပါတယ်ခင်ဗျာ။ "
                },
                {
                    q: "YLA TV ဆော့ဝဲလ်မှာ 2 Devices ဆိုတာ ဘာကို ပြောတာလဲ?",
                    a: "YLA TV ဆော့ဝဲလ်မှာ 1 Devices, 2 Devices အစရှိသဖြင့် မိမိစိတ်တိုင်းကျ Plan ကို ရွေးချယ် ဝယ်ယူ အသုံးပြုနိုင်ပါတယ်ခင်ဗျာ။ \n 2 Devices ဝယ်ယူထားသူများ အနေဖြင့် မိမိစိတ်တိုင်းကျ ဖုန်း၊ ကွန်ပျူတာ၊ တီဗွီ ဘယ်Devices ကိုမဆို ၂လုံး တစ်ပြိုင်တည်း အသုံးပြုနိုင်မှာ ဖြစ်ပါတယ်ခင်ဗျာ။ "
                },
            ],

        initApp() { }
    }
}

