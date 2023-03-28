// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken.
// Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft.
// Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
console.log(getEmailDomain("n.eeken@novi-education.nl"))// geeft novi-education.nl
console.log(getEmailDomain("t.mellink@novi.nl"))// geeft novi.nl
console.log(getEmailDomain("a.wiersma@outlook.com"))// geeft outlook.com

function getEmailDomain(emailAddress) {
    return emailAddress.split("@")[1];
}


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein
// heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
console.log(typeOfEmail("n.eeken@novi-education.nl"))// geeft "Student"
console.log(typeOfEmail("t.mellink@novi.nl"))// geeft geeft "Medewerker"
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"))// geeft geeft "Extern" <-- deze moet het ook doen!
console.log(typeOfEmail("a.wiersma@outlook.com"))// geeft "Extern"

function typeOfEmail(emailAddress) {
    let domain = emailAddress.split("@")
    switch(domain[1]) {
        case "novi-education.nl":
            return "Student"
        case "novi.nl":
            return "Medewerker"
        default:
            return "Extern"
    }
}

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is.
// De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
console.log(checkEmailValidity("n.eeken@novi.nl"))// geeft true - want @ en punt op de juiste plek
console.log(checkEmailValidity("tessmellink@novi.nl"))// geeft true - want @ en punt op de juiste plek
console.log(checkEmailValidity("n.eekenanovi.nl"))// geeft false - want geen @
console.log(checkEmailValidity("n.eeken@novinl."))// geeft false - want de punt mag niet als laatst
console.log(checkEmailValidity("tessmellink@novi,nl"))// geeft false - want er staat een komma in

function checkEmailValidity(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
