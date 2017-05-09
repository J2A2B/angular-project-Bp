myApp.controller('meteoController',['$scope', '$http', 'ApiFactory', '$routeParams', 'newsFactory', function($scope, $http, ApiFactory, $routeParams, newsFactory){


$scope.services = [

    {"service_id" : 0, "service_name" : "ARCHIVAGE"},
    { "service_id" : 1,"service_name" : "GCC"},
    { "service_id" : 2,"service_name" : "PIARD"},
    { "service_id" : 3,"service_name" : "INTERNATIONAL"},
    { "service_id" : 4,"service_name" : "MONÉTIQUE"},
    { "service_id" : 5,"service_name" : "CHÈQUES"},
    { "service_id" : 6,"service_name" : "TRANSFERT ÉLECTRONIQUE DE FONDS"},
    { "service_id" : 7,"service_name" : "DNF"},
    { "service_id" : 8,"service_name" : "ÉTUDES ET DÈCISIONS PART"},
    { "service_id" : 9,"service_name" : "ÉTUDES ET DÈCISIONS PRO"},
    { "service_id" : 10,"service_name" : "RÉALISATION PRO"},
    { "service_id" : 11,"service_name" : "ATOUT PRÊT"},
    { "service_id" : 12,"service_name" : "SOC"},
    { "service_id" : 13,"service_name" : "APPELS ET ASSISTANCE"},
    { "service_id" : 14,"service_name" : "INGÉNIERIE SOCIALE"},
    { "service_id" : 15,"service_name" : "QUALITÉ"},
    { "service_id" : 16,"service_name" : "CONTENTIEUX"}
  ];

$scope.activities = [

    {"activity_label" : "Traitement du courrier des agences", "comment" : "", "id_service" : 0, "meteo" : 1},
    {"activity_label" : "Injection dans ADEN", "comment" : "", "id_service" : 0, "meteo" : 1},

    {"activity_label" : "Client Groupe Arrivée/Départ", "comment" : "", "id_service": 1, "meteo":1},
    {"activity_label" : "Cartes en urgence : refabrication et réédition de code confidentiel", "comment" : "", "id_service": 1, "meteo":1},
    {"activity_label" : "Ouverture de comptes atypiques", "comment" : "", "id_service": 1, "meteo":1},
    {"activity_label" : "Vente à distance", "comment" : "", "id_service": 1, "meteo":1},
    {"activity_label" : "Désolidarisation", "comment" : "", "id_service": 1, "meteo":1},
    {"activity_label" : "Client Compte Convention", "comment" : "", "id_service": 1, "meteo":1},
    {"activity_label" : "Ecartés", "comment" : "", "id_service": 1, "meteo":1},
    {"activity_label" : "Traitement des NPAI", "comment" : "", "id_service": 1, "meteo":1},


    {"activity_label" : "Contrats et avenants IARD, dont aventants IARD Pro en risque simple", "comment" : "Traitement des dossiers", "id_service": 2, "meteo":1},
    {"activity_label" : "Contrats et avenants Prévoyance, dont envoi du faxe à CBP", "comment" : "Traitement à J", "id_service": 2, "meteo":1},
    {"activity_label" : "Simulation des contrats prévoyance Pro", "comment" : "Traitement à J", "id_service": 2, "meteo":1},
    {"activity_label" : "Assurance emprunteur", "comment" : "Traitement à J", "id_service": 2, "meteo":1},
    {"activity_label" : "Appui à la souscription des contrats IARD Pro en risque simple (remote contrôle)", "comment" : "Traitement à J", "id_service": 2, "meteo":1},
    // {"activity_label" : "Simulation contrats Prévoyance PRO", "comment" : "", "id_service": 2, "meteo":1},


    {"activity_label" : "Crédits Documentaires", "comment" : "", "id_service": 3, "meteo":1},
    {"activity_label" : "Remises Documentaires", "comment" : "", "id_service": 3, "meteo":1},
    {"activity_label" : "Garanties ", "comment" : "", "id_service": 3, "meteo":1},
    // {"activity_label" : "Recherches & Demandes d'informations ", "comment" : "", "id_service": 3, "meteo":1},
    // {"activity_label" : "Flux internationaux (hors SEPA) : (Virements, Rapatriements & Chèques)", "comment" : "", "id_service": 3, "meteo":1},
    // {"activity_label" : "Achat - vente devises", "comment" : "", "id_service": 3, "meteo":1},
    // {"activity_label" : "MCNE, Coface, FAP et Préfinancement", "comment" : "", "id_service": 3, "meteo":1},
    // {"activity_label" : "Atciflow", "comment" : "", "id_service": 3, "meteo":1},


    {"activity_label" : "Demande d'information monétique commerçant, matériel TPE, ELC, location", "comment" : "", "id_service": 4, "meteo":1},
    {"activity_label" : "Devis / Simulation de contrat commerçant", "comment" : "", "id_service": 4, "meteo":1},
    {"activity_label" : "Annulation contrats commerçants, réédition carte de domiciliation", "comment" : "", "id_service": 4, "meteo":1},
    {"activity_label" : "Consommables TPE, commande pour le compte du client", "comment" : "", "id_service": 4, "meteo":1},
    {"activity_label" : "Contrat commerçant - réclamations et impayés commerçant", "comment" : "", "id_service": 4, "meteo":1},
    {"activity_label" : "Sinistres / Réclamations paiements et retraits cartes ", "comment" : "", "id_service": 4, "meteo":1},
    {"activity_label" : "Monétique porteur - Déplafonnements hors délégations réseaux / agences / CA", "comment" : "", "id_service": 4, "meteo":1},
    {"activity_label" : "Fraudes cartes bancaires commerçant (surveillance et gestion des alertes)", "comment" : "", "id_service": 4, "meteo":1},


    {"activity_label" : "Encaissement non disponible", "comment" :"Délais maintenus", "id_service": 5, "meteo":1},
    {"activity_label" : "Support", "comment" : "", "id_service": 5, "meteo": 1},
    {"activity_label" : "Impayés et incidents", "comment" : "", "id_service": 5, "meteo":1},


    {"activity_label" : "Traitement d'une demande conforme de virement hors délégation de l'agence : Virement SEPA,  VIRT Tréso ou Fiscaux", "comment" : "", "id_service": 6, "meteo":1},
    {"activity_label" : "Réclamation Virement, demande de recherche sur ordre de moins de 6 mois", "comment" : "", "id_service": 6, "meteo":1},
    {"activity_label" : "Opposition sur prélèvement", "comment" : "", "id_service": 6, "meteo":1},
    {"activity_label" : "Réclamation Prélèvements", "comment" : "", "id_service": 6, "meteo":1},
    // {"activity_label" : "Obtention d'un Identifiant de Créancier SEPA (ICS)", "comment" : "", "id_service": 6},
    {"activity_label" : "Traitement d'une demande conforme de rejet d'un prélèvement après qu'il est passé sur le compte, Réclamation rejet tardif", "comment" : "", "id_service": 6, "meteo":1},
    {"activity_label" : "Traitement des mises à disposition, réclamation mise à disposition", "comment" : "", "id_service": 6, "meteo":1},
    // {"activity_label" : "Actiflow, Deposia Groupe", "comment" : "", "id_service": 6},
    // {"activity_label" : "Mise en force des contrats, mise à jour des contrats et résiliation des contrats", "comment" : "", "id_service": 6},
    // {"activity_label" : "Réclamation Turbofax / Moviplus", "comment" : "", "id_service": 6},
    // {"activity_label" : "Cyberplus, mise en place des prestations du contrat", "comment" : "", "id_service": 6},
    // {"activity_label" : "Réclamation Internet (Assistance de second niveau sur Cyberplus et/ou Turbo On Line)", "comment" : "", "id_service": 6},
    // {"activity_label" : "Etablissement du contrat de télétransmission et enregistrement des utilisateurs EBICS", "comment" : "", "id_service": 6},
    // {"activity_label" : "Validation des lettres de certificat EBICS", "comment" : "", "id_service": 6},
    // {"activity_label" : "Modification et/ou résilisation de prestations de télétransmission", "comment" : "", "id_service": 6},
    // {"activity_label" : "Réclamation et anomalie fichier télétransmis, confirmation de la réception des fichiers télétransmis", "comment" : "", "id_service": 6},
    {"activity_label" : "Réclamation effet, mode financement effet, prorogation effet, Réclamation complexes (ex : demandes d'effets archivés, renseignements, …)", "comment" : "", "id_service": 6, "meteo":1},


    {"activity_label" : "Contrôle DRC", "comment" : "", "id_service": 7, "meteo":1},
    {"activity_label" : "EAI", "comment" : "", "id_service": 7, "meteo":1},
    {"activity_label" : "Déblocage moyens de paiement (cartes, chéquiers)", "comment" : "", "id_service": 7, "meteo":1},
    {"activity_label" : "Entrée en relation PRO", "comment" : "", "id_service": 7, "meteo":1},
    {"activity_label" : "Fin de relation", "comment" : "", "id_service": 7, "meteo":1},


    {"activity_label" : "Etude et décision / Assistance", "comment" : "J+12", "id_service": 8, "meteo":2},
    {"activity_label" : "Dénonciation/ PAM", "comment" : "J+8", "id_service": 8, "meteo":2},
    // {"activity_label" : "Aide au grappage", "comment" : "", "id_service": 8},


    {"activity_label" : "Etude et décision / Assistance", "comment" : "J+8", "id_service": 9, "meteo":2},
    {"activity_label" : "Dénonciation/ PAM", "comment" : "", "id_service": 9, "meteo":1},
    //{"activity_label" : "Aide au grappage", "comment" : "", "id_service": 9, "meteo":1},
    //{"activity_label" : "Envoi des dossier à la BPI", "comment" : "", "id_service": 9, "meteo":1},


    {"activity_label" : "Contrôle et réalisation des prêts professionnels", "comment" : "14 jours ouvrés (107 en stock)", "id_service": 10, "meteo":4},
    {"activity_label" : "Décaissements des prêts professionnels", "comment" : "9 jours ouvrés (63 en stock)", "id_service": 10, "meteo":4},
    {"activity_label" : "SAV professionnels", "comment" : "30 avenants", "id_service": 10, "meteo":2},
    {"activity_label" : "EPS, cautions court terme (30) : Gestion des Engagements par signature et Gestion des cautions en garantie du court terme", "comment" : "", "id_service": 10, "meteo":2},


    {"activity_label" : "Editions des prêts immobiliers", "comment" : "20 jours ouvrés", "id_service": 11, "meteo":4},
    //{"activity_label" : "Dossiers VCI corrigés au siège", "comment" : "", "id_service": 11, "meteo":1},
    //{"activity_label" : "Accord SACCEF à recueillir", "comment" : "", "id_service": 11, "meteo":1},
    {"activity_label" : "Décaissements", "comment" : "7 jours ouvrés", "id_service": 11, "meteo":4},
    {"activity_label" : "SAV Particuliers", "comment" : "7 jours ouvrés pour les renégos", "id_service":11, "meteo":1},
    {"activity_label" : "Traitement des aménagements complexes", "comment" : "10 jours ouvrés", "id_service": 11, "meteo":1},


    {"activity_label" : "Suivi des dossiers risqués, PILOT, écartés, impayés chèques,", "comment" : "Répercution sur traitement 60min", "id_service": 12, "meteo":2},
    {"activity_label" : "Mises en demeure", "comment" : "Temps moyen par collaborateur 60min", "id_service": 12, "meteo":2},
    {"activity_label" : "Suivi des plans d'amortissement", "comment" : "RAS", "id_service": 12, "meteo":1},


    {"activity_label" : "Réception des appels LME, des appels PCA Agences, des lignes dédiées Partenariats (ACEF, Entreprises...)", "comment" : "", "id_service": 13, "meteo":1},
    {"activity_label" : "Réinitialisation de mots de passe Cyber", "comment" : "", "id_service": 13, "meteo":1},
    {"activity_label" : "Assistance téléphonique dédiée aux clients (et aux agences) concernant l'utilisation de Cyberplus , du 3DS et de la E-CB (questions fonctionnelles et aide à la navigation, réinitialisation de mots de passe C E-CB, information et assistance sur les dysfonctionnements, authentification forte)", "comment" : "", "id_service": 13, "meteo":1},
    {"activity_label" : "Traitement des mails reçus via la boîte «contact» (clients). Traitement des mails (clients) générés par l'utilisation de Cyberplus. Traitement des mails agences via Rives assistance Cyber", "comment" : "", "id_service": 13, "meteo":1},


    {"activity_label" : "Animation, formation et appui commercial pour les produits d'Ingénierie Sociale", "comment" : "", "id_service": 14, "meteo":1},


    {"activity_label" : "Traitement des réclamations", "comment" : "", "id_service": 15, "meteo":1},


    {"activity_label" : "Transfert d'un dossier au Contentieux", "comment" : "", "id_service": 16, "meteo":1},
    {"activity_label" : "Opposition sur le prix de vente d'un fonds de commerce", "comment" : "", "id_service": 16, "meteo":1},
    {"activity_label" : "Dénonciation créanciers inscrits", "comment" : "", "id_service": 16, "meteo":1}

];

$scope.images = [
  "assets/images/sun.png",
  "assets/images/cloudy.png",
  "assets/images/rainy.png",
  "assets/images/stormy.png"
];

}]);
