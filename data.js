const guestsData = {
    "unknown": {fullName: "Дорогой гость"},

    "myxomopx": {fullName: "Вахтёров Александр Радикович"},
    "varparents": {fullName: "Вахтёров\xa0Радик\xa0Назилович и Вахтёрова\xa0Ольга\xa0Алексеевна", multiple: true},
    "maksparents": {fullName: "Максимова\xa0Виктория\xa0Владимировна и Максимов\xa0Владимир\xa0Фёдорович", multiple: true},
    "nutik": {fullName: "Анюта и Олег", multiple: true},
    "sosnin": {fullName: "Дима, Даша и Леночка", multiple: true},
    "dpohvar": {fullName: "Вахтёров\xa0Андрей\xa0Радикович"},
    "zhanna": {fullName: "Вахтёрова\xa0Жанна\xa0Дмитриевна"},
    "raya": {fullName: "Раечка"},
    "olya": {fullName: "Олечка"},
    "kotyanka": {fullName: "Асёна"},
    "mari": {fullName: "Мари"},
    "nik": {fullName: "Ник-Ник"},
    "sladenkyi": {fullName: "Тёмочка"},
    "katbag": {fullName: "Катюша и Богдан", multiple: true},
    "italianoruskij": {fullName: "Ильясов Лев Романович"},
    "robmarshall": {fullName: "Шарафутдинов Роберт Рамилевич"},
    "doctorvex": {fullName: "Ахметшин\xa0Аскар\xa0Аскарович и Набиева\xa0Алина\xa0Ильшатовна", multiple: true},
    "ibragimovi": {fullName: "Ибрагимов\xa0Ринат\xa0Радикович и Ибрагимова\xa0Анна\xa0Сергеевна", multiple: true},
    "lisiy": {fullName: "Малышев Александр Владиславович"},
    "edvard1991": {fullName: "Жиляк Эдвард Анджеевич"},
    "mazitovi": {fullName: "Мазитов\xa0Артур\xa0Рустемович и Тихомирова\xa0Анжелика\xa0Борисовна"},
}

for (let key of Object.keys(guestsData)) {
    guestsData[key].appealR = (guestsData[key].multiple) ? "вас" : "тебя"
    guestsData[key].appealD = (guestsData[key].multiple) ? "вам" : "тебе"
}