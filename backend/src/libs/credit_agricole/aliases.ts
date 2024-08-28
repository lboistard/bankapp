const aliases = `{
    "10": {
      "nom": "Aube",
      "caisse": "Champagne-Bourgogne",
      "alias": "ca-cb"
    },
    "11": {
      "nom": "Aude",
      "caisse": "Languedoc",
      "alias": "ca-languedoc"
    },
    "12": {
      "nom": "Aveyron",
      "caisse": "Nord Midi Pyrénées",
      "alias": "ca-nmp"
    },
    "13": {
      "nom": "Bouches-du-Rhône",
      "caisse": "Alpes Provence",
      "alias": "ca-alpesprovence"
    },
    "14": {
      "nom": "Calvados",
      "caisse": "Normandie",
      "alias": "ca-normandie"
    },
    "15": {
      "nom": "Cantal",
      "caisse": "Centre France",
      "alias": "ca-centrefrance"
    },
    "16": {
      "nom": "Charente",
      "caisse": "Charente-Périgord",
      "alias": "ca-charente-perigord"
    },
    "17": {
      "nom": "Charente-Maritime",
      "caisse": "Charente-Maritime Deux-Sèvres",
      "alias": "ca-cmds"
    },
    "18": {
      "nom": "Cher",
      "caisse": "Centre Loire",
      "alias": "ca-centreloire"
    },
    "19": {
      "nom": "Corrèze",
      "caisse": "Centre France",
      "alias": "ca-centrefrance"
    },
    "21": {
      "nom": "Côte-d'Or",
      "caisse": "Champagne-Bourgogne",
      "alias": "ca-cb"
    },
    "22": {
      "nom": "Côtes-d'Armor",
      "caisse": "Côtes d'Armor",
      "alias": "ca-cotesdarmor"
    },
    "23": {
      "nom": "Creuse",
      "caisse": "Centre France",
      "alias": "ca-centrefrance"
    },
    "24": {
      "nom": "Dordogne",
      "caisse": "Charente-Périgord",
      "alias": "ca-charente-perigord"
    },
    "25": {
      "nom": "Doubs",
      "caisse": "Franche-Comté",
      "alias": "ca-franchecomte"
    },
    "26": {
      "nom": "Drôme",
      "caisse": "Sud Rhône Alpes",
      "alias": "ca-sudrhonealpes"
    },
    "27": {
      "nom": "Eure",
      "caisse": "Normandie-Seine",
      "alias": "ca-normandie-seine"
    },
    "28": {
      "nom": "Eure-et-Loir",
      "caisse": "Val de France",
      "alias": "ca-valdefrance"
    },
    "29": {
      "nom": "Finistère",
      "caisse": "Finistère",
      "alias": "ca-finistere"
    },
    "30": {
      "nom": "Gard",
      "caisse": "Languedoc",
      "alias": "ca-languedoc"
    },
    "31": {
      "nom": "Haute-Garonne",
      "caisse": "Toulouse 31",
      "alias": "ca-toulouse31"
    },
    "32": {
      "nom": "Gers",
      "caisse": "Pyrénées Gascogne",
      "alias": "ca-pyrenees-gascogne"
    },
    "33": {
      "nom": "Gironde",
      "caisse": "Aquitaine",
      "alias": "ca-aquitaine"
    },
    "34": {
      "nom": "Hérault",
      "caisse": "Languedoc",
      "alias": "ca-languedoc"
    },
    "35": {
      "nom": "Ille-et-Vilaine",
      "caisse": "Ille-et-Vilaine",
      "alias": "ca-illeetvilaine"
    },
    "36": {
      "nom": "Indre",
      "caisse": "Centre Ouest",
      "alias": "ca-centreouest"
    },
    "37": {
      "nom": "Indre-et-Loire",
      "caisse": "Touraine et Poitou",
      "alias": "ca-tourainepoitou"
    },
    "38": {
      "nom": "Isère",
      "caisse": "Sud Rhône Alpes",
      "alias": "ca-sudrhonealpes"
    },
    "39": {
      "nom": "Jura",
      "caisse": "Franche-Comté",
      "alias": "ca-franchecomte"
    },
    "40": {
      "nom": "Landes",
      "caisse": "Aquitaine",
      "alias": "ca-aquitaine"
    },
    "41": {
      "nom": "Loir-et-Cher",
      "caisse": "Val de France",
      "alias": "ca-valdefrance"
    },
    "42": {
      "nom": "Loire",
      "caisse": "Loire Haute-Loire",
      "alias": "ca-loirehauteloire"
    },
    "43": {
      "nom": "Haute-Loire",
      "caisse": "Loire Haute-Loire",
      "alias": "ca-loirehauteloire"
    },
    "44": {
      "nom": "Loire-Atlantique",
      "caisse": "Atlantique Vendée",
      "alias": "ca-atlantique-vendee"
    },
    "45": {
      "nom": "Loiret",
      "caisse": "Centre Loire",
      "alias": "ca-centreloire"
    },
    "46": {
      "nom": "Lot",
      "caisse": "Nord Midi Pyrénées",
      "alias": "ca-nmp"
    },
    "47": {
      "nom": "Lot-et-Garonne",
      "caisse": "Aquitaine",
      "alias": "ca-aquitaine"
    },
    "48": {
      "nom": "Lozère",
      "caisse": "Languedoc",
      "alias": "ca-languedoc"
    },
    "49": {
      "nom": "Maine-et-Loire",
      "caisse": "Anjou et Maine",
      "alias": "ca-anjou-maine"
    },
    "50": {
      "nom": "Manche",
      "caisse": "Normandie",
      "alias": "ca-normandie"
    },
    "51": {
      "nom": "Marne",
      "caisse": "Nord Est",
      "alias": "ca-nord-est"
    },
    "52": {
      "nom": "Haute-Marne",
      "caisse": "Champagne-Bourgogne",
      "alias": "ca-cb"
    },
    "53": {
      "nom": "Mayenne",
      "caisse": "Anjou et Maine",
      "alias": "ca-anjou-maine"
    },
    "54": {
      "nom": "Meurthe-et-Moselle",
      "caisse": "Lorraine",
      "alias": "ca-lorraine"
    },
    "55": {
      "nom": "Meuse",
      "caisse": "Lorraine",
      "alias": "ca-lorraine"
    },
    "56": {
      "nom": "Morbihan",
      "caisse": "Morbihan",
      "alias": "ca-morbihan"
    },
    "57": {
      "nom": "Moselle",
      "caisse": "Lorraine",
      "alias": "ca-lorraine"
    },
    "58": {
      "nom": "Nièvre",
      "caisse": "Centre Loire",
      "alias": "ca-centreloire"
    },
    "59": {
      "nom": "Nord",
      "caisse": "Nord de France",
      "alias": "ca-norddefrance"
    },
    "60": {
      "nom": "Oise",
      "caisse": "Brie Picardie",
      "alias": "ca-briepicardie"
    },
    "61": {
      "nom": "Orne",
      "caisse": "Normandie",
      "alias": "ca-normandie"
    },
    "62": {
      "nom": "Pas-de-Calais",
      "caisse": "Nord de France",
      "alias": "ca-norddefrance"
    },
    "63": {
      "nom": "Puy-de-Dôme",
      "caisse": "Centre France",
      "alias": "ca-centrefrance"
    },
    "64": {
      "nom": "Pyrénées-Atlantiques",
      "caisse": "Pyrénées Gascogne",
      "alias": "ca-pyrenees-gascogne"
    },
    "65": {
      "nom": "Hautes-Pyrénées",
      "caisse": "Pyrénées Gascogne",
      "alias": "ca-pyrenees-gascogne"
    },
    "66": {
      "nom": "Pyrénées-Orientales",
      "caisse": "Sud Méditerranée",
      "alias": "ca-sudmed"
    },
    "67": {
      "nom": "Bas-Rhin",
      "caisse": "Alsace Vosges",
      "alias": "ca-alsace-vosges"
    },
    "68": {
      "nom": "Haut-Rhin",
      "caisse": "Alsace Vosges",
      "alias": "ca-alsace-vosges"
    },
    "69": {
      "nom": "Rhône et métropole de Lyon",
      "caisse": "Centre-est",
      "alias": "ca-centrest"
    },
    "70": {
      "nom": "Haute-Saône",
      "caisse": "Franche-Comté",
      "alias": "ca-franchecomte"
    },
    "71": {
      "nom": "Saône-et-Loire",
      "caisse": "Centre-est",
      "alias": "ca-centrest"
    },
    "72": {
      "nom": "Sarthe",
      "caisse": "Anjou et Maine",
      "alias": "ca-anjou-maine"
    },
    "73": {
      "nom": "Savoie",
      "caisse": "Savoie",
      "alias": "ca-des-savoie"
    },
    "74": {
      "nom": "Haute-Savoie",
      "caisse": "Savoie",
      "alias": "ca-des-savoie"
    },
    "75": {
      "nom": "Paris",
      "caisse": "Île-de-France",
      "alias": "ca-paris"
    },
    "76": {
      "nom": "Seine-Maritime",
      "caisse": "Normandie-Seine",
      "alias": "ca-normandie-seine"
    },
    "77": {
      "nom": "Seine-et-Marne",
      "caisse": "Brie Picardie",
      "alias": "ca-briepicardie"
    },
    "78": {
      "nom": "Yvelines",
      "caisse": "Île-de-France",
      "alias": "ca-paris"
    },
    "79": {
      "nom": "Deux-Sèvres",
      "caisse": "Charente-Maritime Deux-Sèvres",
      "alias": "ca-cmds"
    },
    "80": {
      "nom": "Somme",
      "caisse": "Brie Picardie",
      "alias": "ca-briepicardie"
    },
    "81": {
      "nom": "Tarn",
      "caisse": "Nord Midi Pyrénées",
      "alias": "ca-nmp"
    },
    "82": {
      "nom": "Tarn-et-Garonne",
      "caisse": "Nord Midi Pyrénées",
      "alias": "ca-nmp"
    },
    "83": {
      "nom": "Var",
      "caisse": "Provence Côte d'Azur",
      "alias": "ca-pca"
    },
    "84": {
      "nom": "Vaucluse",
      "caisse": "Alpes Provence",
      "alias": "ca-alpesprovence"
    },
    "85": {
      "nom": "Vendée",
      "caisse": "Atlantique Vendée",
      "alias": "ca-atlantique-vendee"
    },
    "86": {
      "nom": "Vienne",
      "caisse": "Touraine et Poitou",
      "alias": "ca-tourainepoitou"
    },
    "87": {
      "nom": "Haute-Vienne",
      "caisse": "Centre Ouest",
      "alias": "ca-centreouest"
    },
    "88": {
      "nom": "Vosges",
      "caisse": "Alsace Vosges",
      "alias": "ca-alsace-vosges"
    },
    "89": {
      "nom": "Yonne",
      "caisse": "Champagne-Bourgogne",
      "alias": "ca-cb"
    },
    "90": {
      "nom": "Territoire de Belfort",
      "caisse": "Franche-Comté",
      "alias": "ca-franchecomte"
    },
    "91": {
      "nom": "Essonne",
      "caisse": "Île-de-France",
      "alias": "ca-paris"
    },
    "92": {
      "nom": "Hauts-de-Seine",
      "caisse": "Île-de-France",
      "alias": "ca-paris"
    },
    "93": {
      "nom": "Seine-Saint-Denis",
      "caisse": "Île-de-France",
      "alias": "ca-paris"
    },
    "94": {
      "nom": "Val-de-Marne",
      "caisse": "Île-de-France",
      "alias": "ca-paris"
    },
    "95": {
      "nom": "Val-d'Oise",
      "caisse": "Île-de-France",
      "alias": "ca-paris"
    },
    "971": {
      "nom": "Guadeloupe",
      "caisse": "Guadeloupe",
      "alias": "ca-guadeloupe"
    },
    "972": {
      "nom": "Martinique",
      "caisse": "Martinique et Guyane",
      "alias": "ca-martinique"
    },
    "973": {
      "nom": "Guyane",
      "caisse": "Martinique et Guyane",
      "alias": "ca-martinique"
    },
    "974": {
      "nom": "La Réunion",
      "caisse": "La Réunion",
      "alias": "ca-reunion"
    },
    "976": {
      "nom": "Mayotte",
      "caisse": "La Réunion",
      "alias": "ca-reunion"
    },
    "01": {
      "nom": "Ain",
      "caisse": "Centre-est",
      "alias": "ca-centrest"
    },
    "02": {
      "nom": "Aisne",
      "caisse": "Nord Est",
      "alias": "ca-nord-est"
    },
    "03": {
      "nom": "Allier",
      "caisse": "Centre France",
      "alias": "ca-centrefrance"
    },
    "04": {
      "nom": "Alpes-de-Haute-Provence",
      "caisse": "Provence Côte d'Azur",
      "alias": "ca-pca"
    },
    "05": {
      "nom": "Hautes-Alpes",
      "caisse": "Alpes Provence",
      "alias": "ca-alpesprovence"
    },
    "06": {
      "nom": "Alpes-Maritimes",
      "caisse": "Provence Côte d'Azur",
      "alias": "ca-pca"
    },
    "07": {
      "nom": "Ardèche",
      "caisse": "Sud Rhône Alpes",
      "alias": "ca-sudrhonealpes"
    },
    "08": {
      "nom": "Ardennes",
      "caisse": "Nord Est",
      "alias": "ca-nord-est"
    },
    "09": {
      "nom": "Ariège",
      "caisse": "Sud Méditerranée",
      "alias": "ca-sudmed"
    },
    "2A": {
      "nom": "Corse-du-Sud",
      "caisse": "Corse",
      "alias": "ca-corse"
    },
    "2B": {
      "nom": "Haute-Corse",
      "caisse": "Corse",
      "alias": "ca-corse"
    }
  }`;

export { aliases };
