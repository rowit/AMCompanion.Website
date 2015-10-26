/*
 amCompanion.constant("urls", {
 login: "http://localhost:1337/login",
 employes: "http://localhost:1337/api/employees"
 }
 );
 */
angular.module('amCompanion')
    .constant("urls", {
        login: "http://amcserver.cloudapp.net/login",
        employes: "http://amcserver.cloudapp.net/api/employees"
    })
    .constant("linkTypes", [
        "Restaurant",
        "Appel",
        "Mail",
        "Café",
        "Entretien"
    ])
    .constant("linkTypesIcons", [
        {label: "Restaurant", icon: "glyphicon-cutlery"},
        {label: "Appel", icon: "glyphicon-earphone"},
        {label: "Mail", icon: "glyphicon-envelope"},
        {label: "Café", icon: ""},
        {label: "Entretien", icon: ""}
    ])
    .constant("moods", [
        {label: "Satisfait", status: 0},
        {label: "Passable", status: 1},
        {label: "Moyen", status: 2},
        {label: "Insatisfait", status: 3},
        {label: "Alerte", status: 4}
    ]);
//types : ['Restaurant', 'Appel', 'Mail', 'Café', 'Entretien']
