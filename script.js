let arr = ["Heroina","Świątynia","Pan Owczarek","Rzymek","Andrzejek","Stolarski","ś.p. Grzechu","Ziutek","Daniel","ś.p. Baton","ś.p. Heniek","ś.p. Marchewa","ś.p. Stachu Urban","Goha v2","Trans Kolażysta","Głowa","łysy","maniek","śpiewak","popek","zbychu","molester","zduńskowolski żul","mucha","romeo","aladyn","paryżanka","cukiereczek","krowa","dempsi z Bytomia","Supermenel z Lublina","mrówa","globus","mejdej","klucha","kołtun","żul z inpostu","Cipek","Kodżak","Lumpago","Koci łeb","Suchy","Dżony Degustator","Dupa","Frendzel","Pawarotti","Ermaks","bambucha","landryn","smalec","oczko","dżery","marcepan","generał","dzidzia","guliwer(pieszczotliwie guli)","komisarzmenel marek","kaczor i pułkownik","piciu hantek","gandi","iwan","steve murano","dragon","achim","dupcok","repciok","czempion","maklowicz","seba","bej mati","tygrys","żullermilch","ija ija","podsluchiwaczka","diabeł","leon napoleon/kameleon","ryba","dżasmina","romanisko pizdzisko","żwirek","skrzypek","buła","egon","fredek","opalony","heko","piorun (Ciechanowski poeta)","rywanol","felek","ramzes","max","essa","ostry","edek","smigol","guseppe","mamrot","uczeń diabła","bocian","serwus","alek","szpilka","darek kloz wampir","simel i bobek","kajfek i dziadu","rambo","lutek","krzywy","kalafior","pedo","szczuras","petrygo","mojzesz","parkingowy","szteo","dżenkins","zygor","snajper","arturek","cichy","klocek","szczerbik","globus","pan andrzej","prastary obserwator","major i kononowicz","rambo","langier","dziad","mirek i pani anastazja","voldemort","pająk","łupa","szeheryzada","Żulu big buch","Miauczący Januszek","Makłowicz z Radomia","Seba","pan szpagat","flinston","boguś","Antonio banderas","kwasniak","Grunwald","Pilsner","Katapulta","Józef Grankla","Junek","Bermundo","ziemowit","faja","bochen","cebula","garnek i garnkowa","Piston i puntol","boromir","Kaktus","orzeł","oczy kobry","perełka","osiem osiem","mytnik","grunwald","kajtek","kropek","szybcior","krokodyl","ziutek","snajper","robercik","kamrat","zul bez nogi","dzidzia i pique","henio scyzoryk","ninja","pan jenkins","heniek","avatar","cheetos","Jezus","bibek","romeo","śliwa","Czerwony","Kulawy","Lachor","buła i pogoń","brutus","mario","bazyl","gargamel","kapsel","zyga","chechła","bocian","wiechu","walencja","Pająk","ucho","szyja","cezek","Wasyl","bad Jerry Creditagricole","maklowicz","legenda","Romulus","Bin laden","sałata","goryl","Krzysztof Krawczyk","Paragoniarz","Grzybiarz","Szczena","zelazny joe","Eric Clapton","kleju","piston","Chuck Norris","gargulec","snajper","pan heniek","borek","benek","gnat","tyson","elektryczny rycerz","pingpong","moneta","makarena","lotek","CJ","mietek fikołek","bojka bojka","witek","borsuk","biskupek","prawiczek","ramzes","krótki stefan","wampir z ameryki","Bania","Butla","Bobik","Bosman","Wąski","Zębol","Sokrates","Pomarańczko","Njułens","mietek miernik","ciuwol","fufu","karpiu","prepon","niewolnik","czapla","orzech","maciek","Józek Wójcik kombatant wojenny ostatni potomek z rodu Batorego","Marchewka","Szeryf","Dżodżak","Kuchenka","Skuter","Szufla","Medyk","Lewe Jojko","roberto","roman","wujek krzysiek","Bax gutek i piotrek","Buła","dziecko wojny","hot wheels","jackson","kufel","klemens","żaba","Mudry","Łyp","Warmuz","Antek p-word","Cierpioł","Mamut","Arczi McGyver","Piston","Pluto","Edek","Wampir","Klakier","Bolek","Siasio","Memas","Pająk","Kiju","miro fajafo","dziadzia","Bolesław krzywousty","majami","Kapela","blacha","perełka","Grzela","Kobra","King Kong","Strupek","Mamut","stary piskulak","Egon i Robercik streamer","leloch","Nurek i śmieciarz ryba z Jaworzna","Troku","Andrzej Pojara","Szaha","Winko Wiesław i puł litra","Kargul","Andrzejek","Przemas","Juzek","Kebob z gmojna","Tony z piotrkowa","Makumba","Lombard lobez"];
let result = [], firstLetter = "", noFirst = "", uniqueNames = [];

for (let i = 0; i < arr.length; ++i) {
    firstLetter = arr[i].charAt(0).toUpperCase();
    noFirst = arr[i].substring(1);
    result.push(firstLetter + noFirst);
}

$.each(result, function (i, el) {
    if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
});

let xd = uniqueNames.sort(function (a, b) {
    if (a < b)
        return -1;
    if (b > a)
        return 1;
    return 0;
});
for(let i = 0; i<xd.length; ++i){
    document.write(xd[i] + (i != xd.length - 1 ? ", " : ""));
}
