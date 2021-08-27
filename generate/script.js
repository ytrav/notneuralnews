var type;
var varname;
var action;
var subject;
var object;
function copy() {
    var range = document.createRange();
    range.selectNode(document.getElementById("text"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function generate() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    };

    type = getRandomInt(60)
    if (type >= 0 && type <= 20) {
        varname = getRandomInt(6);
        if (varname === 0) {
            varname = 'Владимир Зеленский'
        }
        if (varname === 1) {
            varname = 'Зеленский'
        }
        if (varname === 2) {
            varname = 'Виталий Кличко'
        }
        if (varname === 3) {
            varname = 'Кличко'
        }
        if (varname === 4) {
            varname = 'Владимир Путин'
        }
        if (varname === 5) {
            varname = 'Путин'
        }
        action = getRandomInt(10);
        if (action === 0) {
            action = ' запретил '
        }
        if (action === 1) {
            action = ' обещает запретить '
        }
        if (action === 2) {
            action = ' разрешил '
        }
        if (action === 3) {
            action = ' внёс правки в конституцию, которые разрешили '
        }
        if (action === 4) {
            action = ' внёс правки в конституцию, которые запретили '
        }
        if (action === 5) {
            action = ' обещает разрешить '
        }
        if (action === 6) {
            action = ' похвалил украинцев, которые могут '
        }
        if (action === 7) {
            action = ' похвалил белорусов, которые могут '
        }
        if (action === 8) {
            action = ' начал '
        }
        if (action === 9) {
            action = ' приказал '
        }
        subject = getRandomInt(10);
        if (subject === 0) {
            subject = 'бить '
        }
        if (subject === 1) {
            subject = 'есть '
        }
        if (subject === 2) {
            subject = 'сжигать '
        }
        if (subject === 3) {
            subject = 'посмертно награждать  '
        }
        if (subject === 4) {
            subject = 'грабить '
        }
        if (subject === 5) {
            subject = 'покупать '
        }
        if (subject === 6) {
            subject = 'хоронить '
        }
        if (subject === 7) {
            subject = 'насиловать '
        }
        if (subject === 8) {
            subject = 'расстреливать '
        }
        if (subject === 9) {
            subject = 'взрывать '
        }
        object = getRandomInt(10);
        if (object === 0) {
            object = 'женщин.'
        }
        if (object === 1) {
            object = 'детей.'
        }
        if (object === 2) {
            object = 'младенцев.'
        }
        if (object === 3) {
            object = 'беременных мужчин.'
        }
        if (object === 4) {
            object = 'трупы.'
        }
        if (object === 5) {
            object = 'депутатов. Люди в восторге!'
        }
        if (object === 6) {
            object = 'президента Китайской Народной Республики.'
        }
        if (object === 7) {
            object = 'инвалидов.'
        }
        if (object === 8) {
            object = 'чернокожих.'
        }
        if (object === 9) {
            object = 'евреев.'
        }
        document.getElementById('text').innerText = varname + action + subject + object;

    };
    if (type >= 21 && type <= 46) {
        varname = getRandomInt(22);
        if (varname === 0) {
            varname = 'В Киеве '
        }
        if (varname === 1) {
            varname = 'Во Львове '
        }
        if (varname === 2) {
            varname = 'В 61-й школе города Киева '
        }
        if (varname === 3) {
            varname = 'В одесской области '
        }
        if (varname === 4) {
            varname = 'В киевской области '
        }
        if (varname === 5) {
            varname = 'В Москве '
        }
        if (varname === 6) {
            varname = 'В Санкт-Петербурге '
        }
        if (varname === 7) {
            varname = 'В Мариуполе '
        }
        if (varname === 8) {
            varname = 'В столичной поликлинике '
        }
        if (varname === 9) {
            varname = 'В мэрии города Киева '
        }
        if (varname === 10) {
            varname = 'В Амстердаме '
        }
        if (varname === 11) {
            varname = 'В Нью-Йорке '
        }
        if (varname === 12) {
            varname = 'В столице Таджикистана '
        }
        if (varname === 13) {
            varname = 'В Израиле '
        }
        if (varname === 14) {
            varname = 'В центре столицы '
        }
        if (varname === 15) {
            varname = 'В городе Днепре '
        }
        if (varname === 16) {
            varname = 'В столице Австралии '
        }
        if (varname === 17) {
            varname = 'Два года назад '
        }
        if (varname === 18) {
            varname = 'В прошлый четверг '
        }
        if (varname === 19) {
            varname = 'Вчера '
        }
        if (varname === 20) {
            varname = 'Сегодня '
        }
        if (varname === 21) {
            varname = 'В Апреле прошлого года '
        }


        action = getRandomInt(10);
        if (action === 0) {
            action = 'президент выступил с речью про '
        }
        if (action === 1) {
            action = 'самый большой в области спичечный завод заявил про '
        }
        if (action === 2) {
            action = 'губернатор рассказал пенсионерам, как происходит '
        }
        if (action === 3) {
            action = 'в один из дворов упал спутник Илона Маска. Очевидцы объяснили, что единственная причина падения это '
        }
        if (action === 4) {
            action = 'было второе марта - день, когда произошло первое в мире '
        }
        if (action === 5) {
            action = 'люди недоумевают, как могло произойти '
        }
        if (action === 6) {
            action = 'украинцы бунтуют, пока президент не произведёт '
        }
        if (action === 7) {
            action = 'россияне просят президента не совершать '
        }
        if (action === 8) {
            action = 'о своей смерти заявил Президент Китайской Народной Республики, обвиняет во всём '
        }
        if (action === 9) {
            action = 'Тарас Шевченко был аррестован за  '
        }
        subject = getRandomInt(10);
        if (subject === 0) {
            subject = 'самоубийство.'
        }
        if (subject === 1) {
            subject = 'убийство несовершеннолетнего.'
        }
        if (subject === 2) {
            subject = 'изнасилование вождя Корейской Народной Демократической Республики Ким Чен Ына.'
        }
        if (subject === 3) {
            subject = 'изнасилование двухлетнего ребёнка.'
        }
        if (subject === 4) {
            subject = 'пришествие Иисуса.'
        }
        if (subject === 5) {
            subject = 'пришествие Ленина.'
        }
        if (subject === 6) {
            subject = 'военное приступление в Германской Демократической Республике.'
        }
        if (subject === 7) {
            subject = 'передозирование героином.'
        }
        if (subject === 8) {
            subject = 'обрезание президента США.'
        }
        if (subject === 9) {
            subject = 'решение в пользу ядерной войны между Израилем и Северной Кореей.'
        }
        object = getRandomInt(10);
        if (object === 0) {
            object = ' Свидетели в ахуе.'
        }
        if (object === 1) {
            object = ''
        }
        if (object === 2) {
            object = ' Президент Китайской Народной Республики поддержал это решение.'
        }
        if (object === 3) {
            object = ' Ситуацию оспорили киевские феменистки.'
        }
        if (object === 4) {
            object = ' Погибло более миллиона человек.'
        }
        if (object === 5) {
            object = ''
        }
        if (object === 6) {
            object = ' Министр заграничных дел от комментариев отказался.'
        }
        if (object === 7) {
            object = ''
        }
        if (object === 8) {
            object = ''
        }
        if (object === 9) {
            object = ''
        }
        document.getElementById('text').innerText = varname + action + subject + object;


    };
    if (type >= 47 && type <= 56) {
        varname = getRandomInt(21);
        if (varname === 0) {
            varname = 'Майкл Джексон '
        }
        if (varname === 1) {
            varname = 'Порошенко '
        }
        if (varname === 2) {
            varname = 'Путин '
        }
        if (varname === 3) {
            varname = 'Заместитель Владимира Зеленского '
        }
        if (varname === 4) {
            varname = 'Лукашенко '
        }
        if (varname === 5) {
            varname = 'Ким Чен Ын '
        }
        if (varname === 6) {
            varname = 'Майкл Джексон '
        }
        if (varname === 7) {
            varname = 'Майкл Джексон '
        }
        if (varname === 8) {
            varname = 'Владимир Ленин '
        }
        if (varname === 9) {
            varname = 'Иосиф Сталин '
        }
        if (varname === 10) {
            varname = 'Барак Обама '
        }
        if (varname === 11) {
            varname = 'Джо Байден '
        }
        if (varname === 12) {
            varname = 'Дональд Трамп '
        }
        if (varname === 13) {
            varname = 'Президент Австралии '
        }
        if (varname === 14) {
            varname = 'Мэр Киева '
        }
        if (varname === 15) {
            varname = 'Кличко '
        }
        if (varname === 16) {
            varname = 'Журналист ТСН '
        }
        if (varname === 17) {
            varname = 'Журналист Россия 23 '
        }
        if (varname === 18) {
            varname = 'Виктор Киселёв '
        }
        if (varname === 19) {
            varname = 'Виктор Цой '
        }
        if (varname === 20) {
            varname = 'Цой '
        }
        action = getRandomInt(7);
        if (action === 0) {
            action = 'вернулся на пост президента'
        }
        if (action === 1) {
            action = 'умер'
        }
        if (action === 2) {
            action = 'вернулся к жизни'
        }
        if (action === 3) {
            action = 'умрёт завтра'
        }
        if (action === 4) {
            action = 'заболел коронавирусом'
        }
        if (action === 5) {
            action = 'уволился с поста мэра Львова'
        }
        if (action === 6) {
            action = 'умер от коронавируса'
        }

        subject = getRandomInt(5);
        if (subject === 0) {
            subject = ' вчера.'
        }
        if (subject === 1) {
            subject = ' на прошлой неделе.'
        }
        if (subject === 2) {
            subject = '.'
        }
        if (subject === 3) {
            subject = '.'
        }
        if (subject === 4) {
            subject = '.'
        }
        document.getElementById('text').innerText = varname + action + subject;

    };
    if (type >= 57 && type <= 59) {
        varname = getRandomInt(5);
        if (varname === 0) {
            varname = 'Обернись.'
            document.getElementById('text').innerText = varname;
        }
        if (varname === 1) {
            varname = 'Я слежу за тобой.'
            document.getElementById('text').innerText = varname;
        }
        if (varname === 2) {
            var today = new Date();
            var day = today.getDate() + 1;
            var month = today.getMonth() + 1; //January is 0!
            var rusmonth;
            switch (month) {
                case 1:
                    rusmonth = 'января';
                    break;
                case 2:
                    rusmonth = 'февраля';
                    break;
                case 3:
                    rusmonth = 'марта';
                    break;
                case 4:
                    rusmonth = 'апреля';
                    break;
                case 5:
                    rusmonth = 'мая';
                    break;
                case 6:
                    rusmonth = 'июня';
                    break;
                case 7:
                    rusmonth = 'июля';
                    break;
                case 8:
                    rusmonth = 'августа';
                    break;
                case 9:
                    rusmonth = 'сентября';
                    break;
                case 10:
                    rusmonth = 'октября';
                    break;
                case 11:
                    rusmonth = 'ноября';
                    break;
                case 12:
                    rusmonth = 'декабря';
                    break;
            }
            var year = today.getFullYear();

            varname = 'Ты умрёшь ' + day + '-го ' + rusmonth + ' ' + year + ' года.';
            document.getElementById('text').innerText = varname;

        }
        if (varname === 3) {
            var today = new Date();
            var day = today.getDate() + 1;
            var month = today.getMonth() + 1; //January is 0!
            var rusmonth;
            switch (month) {
                case 1:
                    rusmonth = 'января';
                    break;
                case 2:
                    rusmonth = 'февраля';
                    break;
                case 3:
                    rusmonth = 'марта';
                    break;
                case 4:
                    rusmonth = 'апреля';
                    break;
                case 5:
                    rusmonth = 'мая';
                    break;
                case 6:
                    rusmonth = 'июня';
                    break;
                case 7:
                    rusmonth = 'июля';
                    break;
                case 8:
                    rusmonth = 'августа';
                    break;
                case 9:
                    rusmonth = 'сентября';
                    break;
                case 10:
                    rusmonth = 'октября';
                    break;
                case 11:
                    rusmonth = 'ноября';
                    break;
                case 12:
                    rusmonth = 'декабря';
                    break;
            }
            var year = today.getFullYear();

            varname = 'Ты умрёшь ' + day + '-го ' + rusmonth + ' ' + year + ' года.';
            document.getElementById('text').innerText = varname;
        }
        if (varname === 4) {
            varname = 'Покончи с собой.'
            document.getElementById('text').innerText = varname;
        }

    };

}
