const countryCurrency = "тнг";
const countryNames = [
    ["Медина", "Асыл", "Раяна", "Айлин", "Айзере", "Айша", "Айым", "Аяла", "Томирис", "Айару", "Амина", "Каусар", "Сафия", "Айкоркем", "Адина"],
    ["Алихан", "Айсултан", "Нурислам", "Амир", "Алдияр", "Али", "Арсен", "Омар", "Санжар", "Ерасыл", "Ислам", "Ибрахим", "Расул", "Мансур"]
];
const allCitiesDataList = {
    "id": "40",
    "parent_id": null,
    "name": "Казахстан",
    "areas": [{"id": "6251", "parent_id": "40", "name": "Абай", "areas": []}, {
        "id": "2728",
        "parent_id": "40",
        "name": "Акколь",
        "areas": []
    }, {"id": "150", "parent_id": "40", "name": "Аксай (Казахстан)", "areas": []}, {
        "id": "6254",
        "parent_id": "40",
        "name": "Аксукент",
        "areas": []
    }, {"id": "151", "parent_id": "40", "name": "Аксу (Павлодар.обл)", "areas": []}, {
        "id": "152",
        "parent_id": "40",
        "name": "Актау",
        "areas": []
    }, {"id": "154", "parent_id": "40", "name": "Актобе", "areas": []}, {
        "id": "6365",
        "parent_id": "40",
        "name": "Актогай",
        "areas": []
    }, {"id": "156", "parent_id": "40", "name": "Алга (Актюбинская обл)", "areas": []}, {
        "id": "160",
        "parent_id": "40",
        "name": "Алматы",
        "areas": []
    }, {"id": "169", "parent_id": "40", "name": "Алтай (Зыряновск)", "areas": []}, {
        "id": "158",
        "parent_id": "40",
        "name": "Аральск",
        "areas": []
    }, {"id": "161", "parent_id": "40", "name": "Аркалык", "areas": []}, {
        "id": "6300",
        "parent_id": "40",
        "name": "Арысь (Туркестанская область)",
        "areas": []
    }, {"id": "155", "parent_id": "40", "name": "Арысь (ЮКО)", "areas": []}, {
        "id": "6351",
        "parent_id": "40",
        "name": "Атасу",
        "areas": []
    }, {"id": "3663", "parent_id": "40", "name": "Атбасар", "areas": []}, {
        "id": "153",
        "parent_id": "40",
        "name": "Атырау",
        "areas": []
    }, {"id": "5053", "parent_id": "40", "name": "Аулиеколь", "areas": []}, {
        "id": "157",
        "parent_id": "40",
        "name": "Аягоз (ВКО)",
        "areas": []
    }, {"id": "2226", "parent_id": "40", "name": "Байконур (Кызылорд. обл)", "areas": []}, {
        "id": "164",
        "parent_id": "40",
        "name": "Балхаш",
        "areas": []
    }, {"id": "5118", "parent_id": "40", "name": "Батпак", "areas": []}, {
        "id": "162",
        "parent_id": "40",
        "name": "Баутино",
        "areas": []
    }, {"id": "163", "parent_id": "40", "name": "Бейнеу (Мангистауская обл)", "areas": []}, {
        "id": "5055",
        "parent_id": "40",
        "name": "Бесколь",
        "areas": []
    }, {"id": "5129", "parent_id": "40", "name": "Бурабай", "areas": []}, {
        "id": "165",
        "parent_id": "40",
        "name": "Ерейментау (Акмол.обл)",
        "areas": []
    }, {"id": "6287", "parent_id": "40", "name": "Есик", "areas": []}, {
        "id": "6292",
        "parent_id": "40",
        "name": "Есиль",
        "areas": []
    }, {"id": "6343", "parent_id": "40", "name": "Жайрем", "areas": []}, {
        "id": "5124",
        "parent_id": "40",
        "name": "Жаксы",
        "areas": []
    }, {"id": "6347", "parent_id": "40", "name": "Жалагаш", "areas": []}, {
        "id": "2510",
        "parent_id": "40",
        "name": "Жанаозен",
        "areas": []
    }, {"id": "167", "parent_id": "40", "name": "Жанатас", "areas": []}, {
        "id": "6104",
        "parent_id": "40",
        "name": "Жаркент",
        "areas": []
    }, {"id": "166", "parent_id": "40", "name": "Жезказган", "areas": []}, {
        "id": "2952",
        "parent_id": "40",
        "name": "Жетысай",
        "areas": []
    }, {"id": "6322", "parent_id": "40", "name": "Житикара", "areas": []}, {
        "id": "6346",
        "parent_id": "40",
        "name": "Жосалы (Кызылординская область)",
        "areas": []
    }, {"id": "168", "parent_id": "40", "name": "Зайсан", "areas": []}, {
        "id": "170",
        "parent_id": "40",
        "name": "Иссык",
        "areas": []
    }, {"id": "175", "parent_id": "40", "name": "Казалы (Кызылорд. обл)", "areas": []}, {
        "id": "3074",
        "parent_id": "40",
        "name": "Кандыагаш",
        "areas": []
    }, {"id": "171", "parent_id": "40", "name": "Капчагай", "areas": []}, {
        "id": "5054",
        "parent_id": "40",
        "name": "Карабалык",
        "areas": []
    }, {"id": "6358", "parent_id": "40", "name": "Карабулак (Алматинская область)", "areas": []}, {
        "id": "177",
        "parent_id": "40",
        "name": "Караганда",
        "areas": []
    }, {"id": "178", "parent_id": "40", "name": "Каратау", "areas": []}, {
        "id": "6342",
        "parent_id": "40",
        "name": "Каркаралинск",
        "areas": []
    }, {"id": "2653", "parent_id": "40", "name": "Каскелен", "areas": []}, {
        "id": "5052",
        "parent_id": "40",
        "name": "Качар",
        "areas": []
    }, {"id": "173", "parent_id": "40", "name": "Кентау (ЮКО)", "areas": []}, {
        "id": "176",
        "parent_id": "40",
        "name": "Кокшетау",
        "areas": []
    }, {"id": "4491", "parent_id": "40", "name": "Кордай", "areas": []}, {
        "id": "172",
        "parent_id": "40",
        "name": "Костанай",
        "areas": []
    }, {"id": "3034", "parent_id": "40", "name": "Кульсары", "areas": []}, {
        "id": "5051",
        "parent_id": "40",
        "name": "Курчатов (Казахстан)",
        "areas": []
    }, {"id": "174", "parent_id": "40", "name": "Кызылорда", "areas": []}, {
        "id": "179",
        "parent_id": "40",
        "name": "Ленгер (ЮКО)",
        "areas": []
    }, {"id": "6366", "parent_id": "40", "name": "Торткудук", "areas": []}, {
        "id": "6297",
        "parent_id": "40",
        "name": "Лисаковск",
        "areas": []
    }, {"id": "2950", "parent_id": "40", "name": "Макинск", "areas": []}, {
        "id": "6244",
        "parent_id": "40",
        "name": "Мангистау",
        "areas": []
    }, {"id": "5056", "parent_id": "40", "name": "Новоишимское", "areas": []}, {
        "id": "159",
        "parent_id": "40",
        "name": "Нур-Султан",
        "areas": []
    }, {"id": "5117", "parent_id": "40", "name": "Осакаровка", "areas": []}, {
        "id": "6299",
        "parent_id": "40",
        "name": "Отеген-Батыр",
        "areas": []
    }, {"id": "181", "parent_id": "40", "name": "Павлодар", "areas": []}, {
        "id": "180",
        "parent_id": "40",
        "name": "Петропавловск",
        "areas": []
    }, {"id": "183", "parent_id": "40", "name": "Риддер (ВКО)", "areas": []}, {
        "id": "182",
        "parent_id": "40",
        "name": "Рудный",
        "areas": []
    }, {"id": "5126", "parent_id": "40", "name": "Саксаульский", "areas": []}, {
        "id": "6017",
        "parent_id": "40",
        "name": "Сарань",
        "areas": []
    }, {"id": "4304", "parent_id": "40", "name": "Сарканд", "areas": []}, {
        "id": "2951",
        "parent_id": "40",
        "name": "Сарыагаш",
        "areas": []
    }, {"id": "184", "parent_id": "40", "name": "Сатпаев", "areas": []}, {
        "id": "185",
        "parent_id": "40",
        "name": "Семей",
        "areas": []
    }, {
        "id": "6060",
        "parent_id": "40",
        "name": "Сергеевка (Северо-Казахстанская область)",
        "areas": []
    }, {"id": "2755", "parent_id": "40", "name": "Серебрянск", "areas": []}, {
        "id": "186",
        "parent_id": "40",
        "name": "Солнечный (ПГТ, Павлодарская обл)",
        "areas": []
    }, {"id": "6186", "parent_id": "40", "name": "Софиевка (Казахстан)", "areas": []}, {
        "id": "2437",
        "parent_id": "40",
        "name": "Степногорск",
        "areas": []
    }, {"id": "5164", "parent_id": "40", "name": "Степняк", "areas": []}, {
        "id": "5042",
        "parent_id": "40",
        "name": "Тайынша",
        "areas": []
    }, {"id": "3048", "parent_id": "40", "name": "Талгар", "areas": []}, {
        "id": "188",
        "parent_id": "40",
        "name": "Талдыкорган",
        "areas": []
    }, {"id": "6325", "parent_id": "40", "name": "Талшик", "areas": []}, {
        "id": "187",
        "parent_id": "40",
        "name": "Тараз",
        "areas": []
    }, {"id": "189", "parent_id": "40", "name": "Текели", "areas": []}, {
        "id": "190",
        "parent_id": "40",
        "name": "Темиртау",
        "areas": []
    }, {"id": "191", "parent_id": "40", "name": "Торгай", "areas": []}, {
        "id": "6344",
        "parent_id": "40",
        "name": "Торетам",
        "areas": []
    }, {"id": "192", "parent_id": "40", "name": "Туркестан", "areas": []}, {
        "id": "6248",
        "parent_id": "40",
        "name": "Узынагаш",
        "areas": []
    }, {"id": "193", "parent_id": "40", "name": "Уральск", "areas": []}, {
        "id": "194",
        "parent_id": "40",
        "name": "Усть-Каменогорск",
        "areas": []
    }, {"id": "6349", "parent_id": "40", "name": "Ушарал", "areas": []}, {
        "id": "6250",
        "parent_id": "40",
        "name": "Уштобе",
        "areas": []
    }, {"id": "195", "parent_id": "40", "name": "Хромтау", "areas": []}, {
        "id": "3704",
        "parent_id": "40",
        "name": "Чарск (Шар)",
        "areas": []
    }, {"id": "4637", "parent_id": "40", "name": "Чунджа", "areas": []}, {
        "id": "6348",
        "parent_id": "40",
        "name": "Шалкар",
        "areas": []
    }, {"id": "6290", "parent_id": "40", "name": "Шахтинск", "areas": []}, {
        "id": "6108",
        "parent_id": "40",
        "name": "Шелек",
        "areas": []
    }, {"id": "196", "parent_id": "40", "name": "Шемонаиха (ВКО)", "areas": []}, {
        "id": "6324",
        "parent_id": "40",
        "name": "Шиели",
        "areas": []
    }, {"id": "2729", "parent_id": "40", "name": "Шу", "areas": []}, {
        "id": "205",
        "parent_id": "40",
        "name": "Шымкент",
        "areas": []
    }, {"id": "197", "parent_id": "40", "name": "Щучинск", "areas": []}, {
        "id": "198",
        "parent_id": "40",
        "name": "Экибастуз",
        "areas": []
    }]
};