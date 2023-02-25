document.getElementById("name").innerHTML = "Radosław";
document.getElementById("lastname").innerHTML = "Bała";
document.getElementById("art").innerHTML = "";
const data = [
    {
        id: 1,
        title: 'Ukraińcy wysadzili tamę w Bachmucie. Tak chcą zatrzymać Rosjan [RELACJA NA ŻYWO]',
        article: 'Trwa 367. dzień rosyjskiej inwazji na Ukrainę. O dużych stratach przeciwnika podczas szturmu pod Kreminną powiadomił w sobotę rano szef władz obwodu ługańskiego Serhij Hajdaj. W całej Ukrainie w sobotę rano słychać syreny alarmów przeciwlotniczych. By powstrzymać dezercję rezerwistów, rosyjska armia skierowała na front pod Bachmutem 300 kadyrowców z pułku Achmat jako oddziały zaporowe. Joe Biden powiedział, że Wołodymyr Zełenski nie potrzebuje teraz myśliwców F-16. — Na razie to wykluczam — powiedział w wywiadzie dla ABC News, przeprowadzonym przez Davida Muira w pierwszą rocznicę inwazji Rosji na Ukrainę. Zapraszamy do śledzenia relacji na żywo.',
        time: "14:52",

    }
]
console.log(data);
document.getElementById("data").innerHTML = data.map((item) => {
    return `<div>
    <h6>${item.time}</h6>
    <h5>${item.title}</h5>
    <p>${item.article}</p>
    
    
    </div>`
});