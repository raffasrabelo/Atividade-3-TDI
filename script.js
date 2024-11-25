function carregar() {
    var msg = document.getElementById('mensagem');
    var img = document.getElementById('imagem-dia');
    var btn_contar = document.getElementById('btn-contar');
    var btn_tab = document.getElementById('btn-tabuada');
    var btn_fin = document.getElementById('btn-finalizar');
    var btn_add = document.getElementById('btn-adicionar');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora <= 12) {
        // Dia
        img.src = 'images/manha.png';
        document.body.style.background = '#fed33a';
        btn_contar.style.background = 'linear-gradient(90deg, #fed33a, #f98e42)';
        btn_tab.style.background = 'linear-gradient(90deg, #fed33a, #f98e42)';
        btn_add.style.background = 'linear-gradient(90deg, #fed33a, #f98e42)';
        btn_fin.style.background = 'linear-gradient(90deg, #fed33a, #f98e42)';
    } else if (hora >= 12 && hora <= 18) {
        // Tarde
        img.src = 'images/tarde.png';
        document.body.style.background = '#367d54';
        btn_contar.style.background = 'linear-gradient(90deg, #367d54, #4d9a7d)';
        btn_tab.style.background = 'linear-gradient(90deg, #367d54, #4d9a7d)';
        btn_add.style.background = 'linear-gradient(90deg, #367d54, #4d9a7d)';
        btn_fin.style.background = 'linear-gradient(90deg, #367d54, #4d9a7d)';
    } else {
        // Noite
        img.src = 'images/noite.png';
        document.body.style.background = '#172e34';
        btn_tab.style.background = 'linear-gradient(90deg, #172e34, #1c4e5e)';
        btn_contar.style.background = 'linear-gradient(90deg, #172e34, #1c4e5e)';
        btn_add.style.background = 'linear-gradient(90deg, #172e34, #1c4e5e)';
        btn_fin.style.background = 'linear-gradient(90deg, #172e34, #1c4e5e)';
    }
}

function contar() {
    let inicio = document.getElementById('txt-inicio');
    let fim = document.getElementById('txt-fim');
    let passo = document.getElementById('txt-passo');
    let res = document.getElementById('res-contador');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! Há dados faltando';
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: ';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO = 1');
            p = 1;
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1f3c1}`;
    }
}

function tabuada() {
    let num = document.getElementById('txt-numero');
    let tab = document.getElementById('selecao-tabuada');

    if (num.value.length == 0) {
        window.alert('Por favor, Digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}
