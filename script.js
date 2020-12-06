const logFileText = async file => {
    const response = await fetch(file)
    let result = [], firstLetter = "", noFirst = "", uniqueNames = [];
    response.text().then((zul)=>{
        for (let i = 0; i < zul.split("\n").length; ++i) {
            firstLetter = zul.split("\n")[i].charAt(0).toUpperCase();
            noFirst = zul.split("\n")[i].substring(1);
            result.push((firstLetter + noFirst).trim());
        }

        $.each(result, function (i, el) {
            if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
        });

        let xd = uniqueNames.sort((a, b) => a.localeCompare(b))
        let skript = document.getElementById('script').innerHTML;
        for(let i = 0; i<xd.length; ++i) {
            skript += xd[i] + ", ";
        }
        document.getElementById('script').innerHTML = skript.substring(0, skript.length - 2);
        document.getElementById('counter').innerHTML = "Names in total: " + xd.length;
    });
}
