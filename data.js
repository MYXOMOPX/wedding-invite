const guestsData = {
    "unknown": {fullName: "Дорогой гость"},

    "kirokoshi": {fullName: "Ириша", secondDay: true},
    "myxomopx": {fullName: "Вахтёров Александр Радикович", secondDay: true},
    "varparents": {fullName: "Вахтёров\xa0Радик\xa0Назилович и Вахтёрова\xa0Ольга\xa0Алексеевна", multiple: true, secondDay: true},
    "maksparents": {fullName: "Максимова\xa0Виктория\xa0Владимировна и Максимов\xa0Владимир\xa0Фёдорович", multiple: true},
    "nutik": {fullName: "Анюта и Олег", multiple: true, secondDay: true},
    "sosnin": {fullName: "Дима, Даша и Леночка", multiple: true},
    "dpohvar": {fullName: "Вахтёров\xa0Андрей\xa0Радикович", secondDay: true},
    "zhanna": {fullName: "Вахтёрова\xa0Жанна\xa0Дмитриевна", secondDay: true},
    "raya": {fullName: "Раечка"},
    "olya": {fullName: "Олечка"},
    "kotyanka": {fullName: "Асёна", secondDay: true, asyaMode: true},
    "mari": {fullName: "Мари", secondDay: true},
    "nik": {fullName: "Ник-Ник", secondDay: true},
    "sladenkyi": {fullName: "Тёмочка", secondDay: true},
    "katbag": {fullName: "Катюша и Богдан", multiple: true, secondDay: true},
    "italianoruskij": {fullName: "Ильясов Лев Романович", secondDay: true},
    "robmarshall": {fullName: "Шарафутдинов Роберт Рамилевич", secondDay: true},
    "doctorvex": {fullName: "Ахметшин\xa0Аскар\xa0Аскарович и Набиева\xa0Алина\xa0Ильшатовна", multiple: true, secondDay: true},
    "ibragimovi": {fullName: "Ибрагимов\xa0Ринат\xa0Радикович и Ибрагимова\xa0Анна\xa0Сергеевна", multiple: true, secondDay: true},
    "lisiy": {fullName: "Малышев Александр Владиславович", secondDay: true},
    "edvard1991": {fullName: "Жиляк Эдвард Анджеевич", secondDay: true},
    "mazitovi": {fullName: "Мазитов\xa0Артур\xa0Рустемович и Тихомирова\xa0Анжелика\xa0Борисовна", secondDay: true},
    "shini": {fullName: "Дорогая Шинь", secondDay: true},
    "pluplu": {fullName: "Платон", secondDay: true},
}

for (let key of Object.keys(guestsData)) {
    guestsData[key].appealR = (guestsData[key].multiple) ? "вас" : "тебя"
    guestsData[key].appealD = (guestsData[key].multiple) ? "вам" : "тебе"
}