//Change the color of legend on input focus.
function changeColor(legendName) {
    let legend = document.getElementById(legendName);
    legend.style.color = "#48A5EA";
}
function changeColorBack(legendName) {
    let legend = document.getElementById(legendName);
    legend.style.color = "#cccccc";
}

//Reset all changes made on page.
function resetAll(){
    let elements = document.getElementsByClassName("details-input");

    document.getElementById('nameInput').value = "First Name";
    document.getElementById('surnameInput').value = "Last Name";
    document.getElementById('idInput').value = "UserID";
    document.getElementById('mailInput').value = "sample@gmail.com";
    document.getElementById('numberInput').value = "0782433157";
    document.getElementById('codeInput').value = "ugudwvufveru";

    document.getElementById("nameInput").focus();

    for (let i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
    document.getElementById("country").selectedIndex = "0";
    document.getElementById('state').innerText = null;
    document.getElementById('city').innerText = null;

    document.getElementById('city').options[0] = new Option('Select City');
    document.getElementById('state').options[0] = new Option('Select State');
  
    let span = document.getElementsByClassName("required");

    for (let i = 0; i < span.length; i++) {
        span[i].style.visibility = "hidden";
    }
   
    let elementsCheck = document.getElementsByClassName("check");
    let elementsCross = document.getElementsByClassName("cross");

    for (let i = 0; i < elementsCheck.length; i++) {
        elementsCheck[i].style.visibility = "hidden";
        elementsCross[i].style.visibility = "hidden";
    }
    document.getElementById("lock").style.color = "#777777";
}

//Validation.











//Make sure that the state and city dropdowns have a default invalid option.
document.getElementById('city').options[0] = new Option('Select City');
document.getElementById('state').options[0] = new Option('Select State');

//Countries.
let country_arr = new Array("Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");

//States.
let cStates = new Array();
cStates[0]="";
cStates[1]="Badakhshan|Badghis|Baghlan|Balkh|Bamiyan|Farah|Faryab|Ghazni|Ghowr|Helmand|Herat|Jowzjan|Kabol|Kandahar|Kapisa|Konar|Kondoz|Laghman|Lowgar|Nangarhar|Nimruz|Oruzgan|Paktia|Paktika|Parvan|Samangan|Sar-e Pol|Takhar|Vardak|Zabol";
cStates[2]="Berat|Bulqize|Delvine|Devoll (Bilisht)|Diber (Peshkopi)|Durres|Elbasan|Fier|Gjirokaster|Gramsh|Has (Krume)|Kavaje|Kolonje (Erseke)|Korce|Kruje|Kucove|Kukes|Kurbin|Lezhe|Librazhd|Lushnje|Malesi e Madhe (Koplik)|Mallakaster (Ballsh)|Mat (Burrel)|Mirdite (Rreshen)|Peqin|Permet|Pogradec|Puke|Sarande|Shkoder|Skrapar (Corovode)|Tepelene|Tirane (Tirana)|Tirane (Tirana)|Tropoje (Bajram Curri)|Vlore";
cStates[3]="Adrar|Ain Defla|Ain Temouchent|Alger|Annaba|Batna|Bechar|Bejaia|Biskra|Blida|Bordj Bou Arreridj|Bouira|Boumerdes|Chlef|Constantine|Djelfa|El Bayadh|El Oued|El Tarf|Ghardaia|Guelma|Illizi|Jijel|Khenchela|Laghouat|M'Sila|Mascara|Medea|Mila|Mostaganem|Naama|Oran|Ouargla|Oum el Bouaghi|Relizane|Saida|Setif|Sidi Bel Abbes|Skikda|Souk Ahras|Tamanghasset|Tebessa|Tiaret|Tindouf|Tipaza|Tissemsilt|Tizi Ouzou|Tlemcen";
cStates[4]="Eastern|Manu'a|Rose Island|Swains Island|Western";
cStates[5]="Andorra la Vella|Bengo|Benguela|Bie|Cabinda|Canillo|Cuando Cubango|Cuanza Norte|Cuanza Sul|Cunene|Encamp|Escaldes-Engordany|Huambo|Huila|La Massana|Luanda|Lunda Norte|Lunda Sul|Malanje|Moxico|Namibe|Ordino|Sant Julia de Loria|Uige|Zaire";
cStates[6]="Anguilla";
cStates[7]="Antartica";
cStates[8]="Barbuda|Redonda|Saint George|Saint John|Saint Mary|Saint Paul|Saint Peter|Saint Philip";
cStates[9]="Antartica e Islas del Atlantico Sur|Buenos Aires|Buenos Aires Capital Federal|Catamarca|Chaco|Chubut|Cordoba|Corrientes|Entre Rios|Formosa|Jujuy|La Pampa|La Rioja|Mendoza|Misiones|Neuquen|Rio Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tierra del Fuego|Tucuman";
cStates[10]="Aragatsotn|Ararat|Armavir|Geghark'unik'|Kotayk'|Lorri|Shirak|Syunik'|Tavush|Vayots' Dzor|Yerevan";
cStates[11]="Aruba";
cStates[12]="Ashmore and Cartier Island";
cStates[13]="Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia";
cStates[14]="Burgenland|Kaernten|Niederoesterreich|Oberoesterreich|Salzburg|Steiermark|Tirol|Vorarlberg|Wien";
cStates[15]="Abseron Rayonu|Agcabadi Rayonu|Agdam Rayonu|Agdas Rayonu|Agstafa Rayonu|Agsu Rayonu|Ali Bayramli Sahari|Astara Rayonu|Baki Sahari|Balakan Rayonu|Barda Rayonu|Beylaqan Rayonu|Bilasuvar Rayonu|Cabrayil Rayonu|Calilabad Rayonu|Daskasan Rayonu|Davaci Rayonu|Fuzuli Rayonu|Gadabay Rayonu|Ganca Sahari|Goranboy Rayonu|Goycay Rayonu|Haciqabul Rayonu|Imisli Rayonu|Ismayilli Rayonu|Kalbacar Rayonu|Kurdamir Rayonu|Lacin Rayonu|Lankaran Rayonu|Lankaran Sahari|Lerik Rayonu|Masalli Rayonu|Mingacevir Sahari|Naftalan Sahari|Naxcivan Muxtar Respublikasi|Neftcala Rayonu|Oguz Rayonu|Qabala Rayonu|Qax Rayonu|Qazax Rayonu|Qobustan Rayonu|Quba Rayonu|Qubadli Rayonu|Qusar Rayonu|Saatli Rayonu|Sabirabad Rayonu|Saki Rayonu|Saki Sahari|Salyan Rayonu|Samaxi Rayonu|Samkir Rayonu|Samux Rayonu|Siyazan Rayonu|Sumqayit Sahari|Susa Rayonu|Susa Sahari|Tartar Rayonu|Tovuz Rayonu|Ucar Rayonu|Xacmaz Rayonu|Xankandi Sahari|Xanlar Rayonu|Xizi Rayonu|Xocali Rayonu|Xocavand Rayonu|Yardimli Rayonu|Yevlax Rayonu|Yevlax Sahari|Zangilan Rayonu|Zaqatala Rayonu|Zardab Rayonu";
cStates[16]="Acklins and Crooked Islands|Bimini|Cat Island|Exuma|Freeport|Fresh Creek|Governor's Harbour|Green Turtle Cay|Harbour Island|High Rock|Inagua|Kemps Bay|Long Island|Marsh Harbour|Mayaguana|New Providence|Nicholls Town and Berry Islands|Ragged Island|Rock Sound|San Salvador and Rum Cay|Sandy Point";
cStates[17]="Al Hadd|Al Manamah|Al Mintaqah al Gharbiyah|Al Mintaqah al Wusta|Al Mintaqah ash Shamaliyah|Al Muharraq|Ar Rifa' wa al Mintaqah al Janubiyah|Jidd Hafs|Juzur Hawar|Madinat 'Isa|Madinat Hamad|Sitrah";
cStates[18]="Barguna|Barisal|Bhola|Jhalokati|Patuakhali|Pirojpur|Bandarban|Brahmanbaria|Chandpur|Chittagong|Comilla|Cox's Bazar|Feni|Khagrachari|Lakshmipur|Noakhali|Rangamati|Dhaka|Faridpur|Gazipur|Gopalganj|Jamalpur|Kishoreganj|Madaripur|Manikganj|Munshiganj|Mymensingh|Narayanganj|Narsingdi|Netrokona|Rajbari|Shariatpur|Sherpur|Tangail|Bagerhat|Chuadanga|Jessore|Jhenaidah|Khulna|Kushtia|Magura|Meherpur|Narail|Satkhira|Bogra|Dinajpur|Gaibandha|Jaipurhat|Kurigram|Lalmonirhat|Naogaon|Natore|Nawabganj|Nilphamari|Pabna|Panchagarh|Rajshahi|Rangpur|Sirajganj|Thakurgaon|Habiganj|Maulvi bazar|Sunamganj|Sylhet";
cStates[19]="Bridgetown|Christ Church|Saint Andrew|Saint George|Saint James|Saint John|Saint Joseph|Saint Lucy|Saint Michael|Saint Peter|Saint Philip|Saint Thomas";
cStates[20]="Brestskaya (Brest)|Homyel'skaya (Homyel')|Horad Minsk|Hrodzyenskaya (Hrodna)|Mahilyowskaya (Mahilyow)|Minskaya|Vitsyebskaya (Vitsyebsk)";
cStates[21]="Antwerpen|Brabant Wallon|Brussels Capitol Region|Hainaut|Liege|Limburg|Luxembourg|Namur|Oost-Vlaanderen|Vlaams Brabant|West-Vlaanderen";
cStates[22]="Belize|Cayo|Corozal|Orange Walk|Stann Creek|Toledo";
cStates[23]="Alibori|Atakora|Atlantique|Borgou|Collines|Couffo|Donga|Littoral|Mono|Oueme|Plateau|Zou";
cStates[24]="Devonshire|Hamilton|Hamilton|Paget|Pembroke|Saint George|Saint Georges|Sandys|Smiths|Southampton|Warwick";
cStates[25]="Bumthang|Chhukha|Chirang|Daga|Geylegphug|Ha|Lhuntshi|Mongar|Paro|Pemagatsel|Punakha|Samchi|Samdrup Jongkhar|Shemgang|Tashigang|Thimphu|Tongsa|Wangdi Phodrang";
cStates[26]="Beni|Chuquisaca|Cochabamba|La Paz|Oruro|Pando|Potosi|Santa Cruz|Tarija";
cStates[27]="Federation of Bosnia and Herzegovina|Republika Srpska";
cStates[28]="Central|Chobe|Francistown|Gaborone|Ghanzi|Kgalagadi|Kgatleng|Kweneng|Lobatse|Ngamiland|North-East|Selebi-Pikwe|South-East|Southern";
cStates[29]="Acre|Alagoas|Amapa|Amazonas|Bahia|Ceara|Distrito Federal|Espirito Santo|Goias|Maranhao|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Para|Paraiba|Parana|Pernambuco|Piaui|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondonia|Roraima|Santa Catarina|Sao Paulo|Sergipe|Tocantins";
cStates[30]="Anegada|Jost Van Dyke|Tortola|Virgin Gorda";
cStates[31]="Belait|Brunei and Muara|Temburong|Tutong";
cStates[32]="Blagoevgrad|Burgas|Dobrich|Gabrovo|Khaskovo|Kurdzhali|Kyustendil|Lovech|Montana|Pazardzhik|Pernik|Pleven|Plovdiv|Razgrad|Ruse|Shumen|Silistra|Sliven|Smolyan|Sofiya|Sofiya-Grad|Stara Zagora|Turgovishte|Varna|Veliko Turnovo|Vidin|Vratsa|Yambol";
cStates[33]="Bale|Bam|Banwa|Bazega|Bougouriba|Boulgou|Boulkiemde|Comoe|Ganzourgou|Gnagna|Gourma|Houet|Ioba|Kadiogo|Kenedougou|Komandjari|Kompienga|Kossi|Koupelogo|Kouritenga|Kourweogo|Leraba|Loroum|Mouhoun|Nahouri|Namentenga|Naumbiel|Nayala|Oubritenga|Oudalan|Passore|Poni|Samentenga|Sanguie|Seno|Sissili|Soum|Sourou|Tapoa|Tuy|Yagha|Yatenga|Ziro|Zondomo|Zoundweogo";
cStates[34]="Ayeyarwady|Bago|Chin State|Kachin State|Kayah State|Kayin State|Magway|Mandalay|Mon State|Rakhine State|Sagaing|Shan State|Tanintharyi|Yangon";
cStates[35]="Bubanza|Bujumbura|Bururi|Cankuzo|Cibitoke|Gitega|Karuzi|Kayanza|Kirundo|Makamba|Muramvya|Muyinga|Mwaro|Ngozi|Rutana|Ruyigi";
cStates[36]="Banteay Mean Cheay|Batdambang|Kampong Cham|Kampong Chhnang|Kampong Spoe|Kampong Thum|Kampot|Kandal|Kaoh Kong|Keb|Kracheh|Mondol Kiri|Otdar Mean Cheay|Pailin|Phnum Penh|Pouthisat|Preah Seihanu (Sihanoukville)|Preah Vihear|Prey Veng|Rotanah Kiri|Siem Reab|Stoeng Treng|Svay Rieng|Takev";
cStates[37]="Adamaoua|Centre|Est|Extreme-Nord|Littoral|Nord|Nord-Ouest|Ouest|Sud|Sud-Ouest";
cStates[38]="Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory";
cStates[39]="Boa Vista|Brava|Maio|Mosteiros|Paul|Porto Novo|Praia|Ribeira Grande|Sal|Santa Catarina|Santa Cruz|Sao Domingos|Sao Filipe|Sao Nicolau|Sao Vicente|Tarrafal";
cStates[40]="Creek|Eastern|Midland|South Town|Spot Bay|Stake Bay|West End|Western";
cStates[41]="Bamingui-Bangoran|Bangui|Basse-Kotto|Gribingui|Haut-Mbomou|Haute-Kotto|Haute-Sangha|Kemo-Gribingui|Lobaye|Mbomou|Nana-Mambere|Ombella-Mpoko|Ouaka|Ouham|Ouham-Pende|Sangha|Vakaga";
cStates[42]="Batha|Biltine|Borkou-Ennedi-Tibesti|Chari-Baguirmi|Guera|Kanem|Lac|Logone Occidental|Logone Oriental|Mayo-Kebbi|Moyen-Chari|Ouaddai|Salamat|Tandjile";
cStates[43]="Aisen del General Carlos Ibanez del Campo|Antofagasta|Araucania|Atacama|Bio-Bio|Coquimbo|Libertador General Bernardo O'Higgins|Los Lagos|Magallanes y de la Antartica Chilena|Maule|Region Metropolitana (Santiago)|Tarapaca|Valparaiso";
cStates[44]="Anhui|Beijing|Chongqing|Fujian|Gansu|Guangdong|Guangxi|Guizhou|Hainan|Hebei|Heilongjiang|Henan|Hubei|Hunan|Jiangsu|Jiangxi|Jilin|Liaoning|Nei Mongol|Ningxia|Qinghai|Shaanxi|Shandong|Shanghai|Shanxi|Sichuan|Tianjin|Xinjiang|Xizang (Tibet)|Yunnan|Zhejiang";
cStates[45]="Christmas Island";
cStates[46]="Clipperton Island";
cStates[47]="Direction Island|Home Island|Horsburgh Island|North Keeling Island|South Island|West Island";
cStates[48]="Amazonas|Antioquia|Arauca|Atlantico|Bolivar|Boyaca|Caldas|Caqueta|Casanare|Cauca|Cesar|Choco|Cordoba|Cundinamarca|Distrito Capital de Santa Fe de Bogota|Guainia|Guaviare|Huila|La Guajira|Magdalena|Meta|Narino|Norte de Santander|Putumayo|Quindio|Risaralda|San Andres y Providencia|Santander|Sucre|Tolima|Valle del Cauca|Vaupes|Vichada";
cStates[49]="Anjouan (Nzwani)|Domoni|Fomboni|Grande Comore (Njazidja)|Moheli (Mwali)|Moroni|Moutsamoudou";
cStates[50]="Bandundu|Bas-Congo|Equateur|Kasai-Occidental|Kasai-Oriental|Katanga|Kinshasa|Maniema|Nord-Kivu|Orientale|Sud-Kivu";
cStates[51]="Bouenza|Brazzaville|Cuvette|Kouilou|Lekoumou|Likouala|Niari|Plateaux|Pool|Sangha";
cStates[52]="Aitutaki|Atiu|Avarua|Mangaia|Manihiki|Manuae|Mauke|Mitiaro|Nassau Island|Palmerston|Penrhyn|Pukapuka|Rakahanga|Rarotonga|Suwarrow|Takutea";
cStates[53]="Alajuela|Cartago|Guanacaste|Heredia|Limon|Puntarenas|San Jose";
cStates[54]="Abengourou|Abidjan|Aboisso|Adiake'|Adzope|Agboville|Agnibilekrou|Ale'pe'|Bangolo|Beoumi|Biankouma|Bocanda|Bondoukou|Bongouanou|Bouafle|Bouake|Bouna|Boundiali|Dabakala|Dabon|Daloa|Danane|Daoukro|Dimbokro|Divo|Duekoue|Ferkessedougou|Gagnoa|Grand Bassam|Grand-Lahou|Guiglo|Issia|Jacqueville|Katiola|Korhogo|Lakota|Man|Mankono|Mbahiakro|Odienne|Oume|Sakassou|San-Pedro|Sassandra|Seguela|Sinfra|Soubre|Tabou|Tanda|Tiassale|Tiebissou|Tingrela|Touba|Toulepleu|Toumodi|Vavoua|Yamoussoukro|Zuenoula";
cStates[55]="Bjelovarsko-Bilogorska Zupanija|Brodsko-Posavska Zupanija|Dubrovacko-Neretvanska Zupanija|Istarska Zupanija|Karlovacka Zupanija|Koprivnicko-Krizevacka Zupanija|Krapinsko-Zagorska Zupanija|Licko-Senjska Zupanija|Medimurska Zupanija|Osjecko-Baranjska Zupanija|Pozesko-Slavonska Zupanija|Primorsko-Goranska Zupanija|Sibensko-Kninska Zupanija|Sisacko-Moslavacka Zupanija|Splitsko-Dalmatinska Zupanija|Varazdinska Zupanija|Viroviticko-Podravska Zupanija|Vukovarsko-Srijemska Zupanija|Zadarska Zupanija|Zagreb|Zagrebacka Zupanija";
cStates[56]="Camaguey|Ciego de Avila|Cienfuegos|Ciudad de La Habana|Granma|Guantanamo|Holguin|Isla de la Juventud|La Habana|Las Tunas|Matanzas|Pinar del Rio|Sancti Spiritus|Santiago de Cuba|Villa Clara";
cStates[57]="Famagusta|Kyrenia|Larnaca|Limassol|Nicosia|Paphos";
cStates[58]="Brnensky|Budejovicky|Jihlavsky|Karlovarsky|Kralovehradecky|Liberecky|Olomoucky|Ostravsky|Pardubicky|Plzensky|Praha|Stredocesky|Ustecky|Zlinsky";
cStates[59]="Arhus|Bornholm|Fredericksberg|Frederiksborg|Fyn|Kobenhavn|Kobenhavns|Nordjylland|Ribe|Ringkobing|Roskilde|Sonderjylland|Storstrom|Vejle|Vestsjalland|Viborg";
cStates[60]="'Ali Sabih|Dikhil|Djibouti|Obock|Tadjoura";
cStates[61]="Saint Andrew|Saint David|Saint George|Saint John|Saint Joseph|Saint Luke|Saint Mark|Saint Patrick|Saint Paul|Saint Peter";
cStates[62]="Azua|Baoruco|Barahona|Dajabon|Distrito Nacional|Duarte|El Seibo|Elias Pina|Espaillat|Hato Mayor|Independencia|La Altagracia|La Romana|La Vega|Maria Trinidad Sanchez|Monsenor Nouel|Monte Cristi|Monte Plata|Pedernales|Peravia|Puerto Plata|Salcedo|Samana|San Cristobal|San Juan|San Pedro de Macoris|Sanchez Ramirez|Santiago|Santiago Rodriguez|Valverde";
cStates[63]="Azuay|Bolivar|Canar|Carchi|Chimborazo|Cotopaxi|El Oro|Esmeraldas|Galapagos|Guayas|Imbabura|Loja|Los Rios|Manabi|Morona-Santiago|Napo|Orellana|Pastaza|Pichincha|Sucumbios|Tungurahua|Zamora-Chinchipe";
cStates[64]="Ad Daqahliyah|Al Bahr al Ahmar|Al Buhayrah|Al Fayyum|Al Gharbiyah|Al Iskandariyah|Al Isma'iliyah|Al Jizah|Al Minufiyah|Al Minya|Al Qahirah|Al Qalyubiyah|Al Wadi al Jadid|As Suways|Ash Sharqiyah|Aswan|Asyut|Bani Suwayf|Bur Sa'id|Dumyat|Janub Sina'|Kafr ash Shaykh|Matruh|Qina|Shamal Sina'|Suhaj";
cStates[65]="Ahuachapan|Cabanas|Chalatenango|Cuscatlan|La Libertad|La Paz|La Union|Morazan|San Miguel|San Salvador|San Vicente|Santa Ana|Sonsonate|Usulutan";
cStates[66]="Annobon|Bioko Norte|Bioko Sur|Centro Sur|Kie-Ntem|Litoral|Wele-Nzas";
cStates[67]="Akale Guzay|Barka|Denkel|Hamasen|Sahil|Semhar|Senhit|Seraye";
cStates[68]="Harjumaa (Tallinn)|Hiiumaa (Kardla)|Ida-Virumaa (Johvi)|Jarvamaa (Paide)|Jogevamaa (Jogeva)|Laane-Virumaa (Rakvere)|Laanemaa (Haapsalu)|Parnumaa (Parnu)|Polvamaa (Polva)|Raplamaa (Rapla)|Saaremaa (Kuessaare)|Tartumaa (Tartu)|Valgamaa (Valga)|Viljandimaa (Viljandi)|Vorumaa (Voru)"
cStates[69]="Adis Abeba (Addis Ababa)|Afar|Amara|Dire Dawa|Gambela Hizboch|Hareri Hizb|Oromiya|Sumale|Tigray|YeDebub Biheroch Bihereseboch na Hizboch";
cStates[70]="Europa Island";
cStates[71]="Falkland Islands (Islas Malvinas)"
cStates[72]="Bordoy|Eysturoy|Mykines|Sandoy|Skuvoy|Streymoy|Suduroy|Tvoroyri|Vagar";
cStates[73]="Central|Eastern|Northern|Rotuma|Western";
cStates[74]="Aland|Etela-Suomen Laani|Ita-Suomen Laani|Lansi-Suomen Laani|Lappi|Oulun Laani";
cStates[75]="Alsace|Aquitaine|Auvergne|Basse-Normandie|Bourgogne|Bretagne|Centre|Champagne-Ardenne|Corse|Franche-Comte|Haute-Normandie|Ile-de-France|Languedoc-Roussillon|Limousin|Lorraine|Midi-Pyrenees|Nord-Pas-de-Calais|Pays de la Loire|Picardie|Poitou-Charentes|Provence-Alpes-Cote d'Azur|Rhone-Alpes";
cStates[76]="French Guiana";
cStates[77]="Archipel des Marquises|Archipel des Tuamotu|Archipel des Tubuai|Iles du Vent|Iles Sous-le-Vent";
cStates[78]="Adelie Land|Ile Crozet|Iles Kerguelen|Iles Saint-Paul et Amsterdam";
cStates[79]="Estuaire|Haut-Ogooue|Moyen-Ogooue|Ngounie|Nyanga|Ogooue-Ivindo|Ogooue-Lolo|Ogooue-Maritime|Woleu-Ntem";
cStates[80]="Banjul|Central River|Lower River|North Bank|Upper River|Western";
cStates[81]="Gaza Strip";
cStates[82]="Abashis|Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)|Adigenis|Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)|Akhalgoris|Akhalk'alak'is|Akhalts'ikhis|Akhmetis|Ambrolauris|Aspindzis|Baghdat'is|Bolnisis|Borjomis|Ch'khorotsqus|Ch'okhatauris|Chiat'ura|Dedop'listsqaros|Dmanisis|Dushet'is|Gardabanis|Gori|Goris|Gurjaanis|Javis|K'arelis|K'ut'aisi|Kaspis|Kharagaulis|Khashuris|Khobis|Khonis|Lagodekhis|Lanch'khut'is|Lentekhis|Marneulis|Martvilis|Mestiis|Mts'khet'is|Ninotsmindis|Onis|Ozurget'is|P'ot'i|Qazbegis|Qvarlis|Rust'avi|Sach'kheris|Sagarejos|Samtrediis|Senakis|Sighnaghis|T'bilisi|T'elavis|T'erjolis|T'et'ritsqaros|T'ianet'is|Tqibuli|Ts'ageris|Tsalenjikhis|Tsalkis|Tsqaltubo|Vanis|Zestap'onis|Zugdidi|Zugdidis";
cStates[83]="Baden-Wuerttemberg|Bayern|Berlin|Brandenburg|Bremen|Hamburg|Hessen|Mecklenburg-Vorpommern|Niedersachsen|Nordrhein-Westfalen|Rheinland-Pfalz|Saarland|Sachsen|Sachsen-Anhalt|Schleswig-Holstein|Thueringen";
cStates[84]="Ashanti|Brong-Ahafo|Central|Eastern|Greater Accra|Northern|Upper East|Upper West|Volta|Western";
cStates[85]="Gibraltar";
cStates[86]="Ile du Lys|Ile Glorieuse";
cStates[87]="Aitolia kai Akarnania|Akhaia|Argolis|Arkadhia|Arta|Attiki|Ayion Oros (Mt. Athos)|Dhodhekanisos|Drama|Evritania|Evros|Evvoia|Florina|Fokis|Fthiotis|Grevena|Ilia|Imathia|Ioannina|Irakleion|Kardhitsa|Kastoria|Kavala|Kefallinia|Kerkyra|Khalkidhiki|Khania|Khios|Kikladhes|Kilkis|Korinthia|Kozani|Lakonia|Larisa|Lasithi|Lesvos|Levkas|Magnisia|Messinia|Pella|Pieria|Preveza|Rethimni|Rodhopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakinthos";
cStates[88]="Avannaa (Nordgronland)|Kitaa (Vestgronland)|Tunu (Ostgronland)"
cStates[89]="Carriacou and Petit Martinique|Saint Andrew|Saint David|Saint George|Saint John|Saint Mark|Saint Patrick";
cStates[90]="Basse-Terre|Grande-Terre|Iles de la Petite Terre|Iles des Saintes|Marie-Galante";
cStates[91]="Guam";
cStates[92]="Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Peten|Quetzaltenango|Quiche|Retalhuleu|Sacatepequez|San Marcos|Santa Rosa|Solola|Suchitepequez|Totonicapan|Zacapa";
cStates[93]="Castel|Forest|St. Andrew|St. Martin|St. Peter Port|St. Pierre du Bois|St. Sampson|St. Saviour|Torteval|Vale";
cStates[94]="Beyla|Boffa|Boke|Conakry|Coyah|Dabola|Dalaba|Dinguiraye|Dubreka|Faranah|Forecariah|Fria|Gaoual|Gueckedou|Kankan|Kerouane|Kindia|Kissidougou|Koubia|Koundara|Kouroussa|Labe|Lelouma|Lola|Macenta|Mali|Mamou|Mandiana|Nzerekore|Pita|Siguiri|Telimele|Tougue|Yomou";
cStates[95]="Bafata|Biombo|Bissau|Bolama-Bijagos|Cacheu|Gabu|Oio|Quinara|Tombali";
cStates[96]="Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo";
cStates[97]="Artibonite|Centre|Grand'Anse|Nord|Nord-Est|Nord-Ouest|Ouest|Sud|Sud-Est";
cStates[98]="Heard Island and McDonald Islands";
cStates[99]="Holy See (Vatican City)"
cStates[100]="Atlantida|Choluteca|Colon|Comayagua|Copan|Cortes|El Paraiso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahia|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro";
cStates[101]="Hong Kong";
cStates[102]="Howland Island";
cStates[103]="Bacs-Kiskun|Baranya|Bekes|Bekescsaba|Borsod-Abauj-Zemplen|Budapest|Csongrad|Debrecen|Dunaujvaros|Eger|Fejer|Gyor|Gyor-Moson-Sopron|Hajdu-Bihar|Heves|Hodmezovasarhely|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemet|Komarom-Esztergom|Miskolc|Nagykanizsa|Nograd|Nyiregyhaza|Pecs|Pest|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szeged|Szekesfehervar|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprem|Veszprem|Zala|Zalaegerszeg";
cStates[104]="Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Reykjavik|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla";
cStates[105]="Andaman and Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra and Nagar Haveli|Daman and Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttar Pradesh|Uttaranchal|West Bengal";
cStates[106]="Aceh|Bali|Banten|Bengkulu|East Timor|Gorontalo|Irian Jaya|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta";
cStates[107]="Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohgiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Tehran|Yazd|Zanjan";
cStates[108]="Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta'mim|Babil|Baghdad|Dahuk|Dhi Qar|Diyala|Karbala'|Maysan|Ninawa|Salah ad Din|Wasit";
cStates[109]="Carlow|Cavan|Clare|Cork|Donegal|Dublin|Galway|Kerry|Kildare|Kilkenny|Laois|Leitrim|Limerick|Longford|Louth|Mayo|Meath|Monaghan|Offaly|Roscommon|Sligo|Tipperary|Waterford|Westmeath|Wexford|Wicklow";
cStates[110]="Antrim|Ards|Armagh|Ballymena|Ballymoney|Banbridge|Belfast|Carrickfergus|Castlereagh|Coleraine|Cookstown|Craigavon|Derry|Down|Dungannon|Fermanagh|Larne|Limavady|Lisburn|Magherafelt|Moyle|Newry and Mourne|Newtownabbey|North Down|Omagh|Strabane";
cStates[111]="Central|Haifa|Jerusalem|Northern|Southern|Tel Aviv";
cStates[112]="Abruzzo|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d'Aosta|Veneto";
cStates[113]="Clarendon|Hanover|Kingston|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland";
cStates[114]="Jan Mayen";
cStates[115]="Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi";
cStates[116]="Jarvis Island";
cStates[117]="Jersey";
cStates[118]="Johnston Atoll";
cStates[119]="'Amman|Ajlun|Al 'Aqabah|Al Balqa'|Al Karak|Al Mafraq|At Tafilah|Az Zarqa'|Irbid|Jarash|Ma'an|Madaba";
cStates[120]="Juan de Nova Island";
cStates[121]="Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|Pavlodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl";
cStates[122]="Central|Coast|Eastern|Nairobi Area|North Eastern|Nyanza|Rift Valley|Western";
cStates[123]="Abaiang|Abemama|Aranuka|Arorae|Banaba|Banaba|Beru|Butaritari|Central Gilberts|Gilbert Islands|Kanton|Kiritimati|Kuria|Line Islands|Line Islands|Maiana|Makin|Marakei|Nikunau|Nonouti|Northern Gilberts|Onotoa|Phoenix Islands|Southern Gilberts|Tabiteuea|Tabuaeran|Tamana|Tarawa|Tarawa|Teraina";
cStates[124]="Chagang-do (Chagang Province)|Hamgyong-bukto (North Hamgyong Province)|Hamgyong-namdo (South Hamgyong Province)|Hwanghae-bukto (North Hwanghae Province)|Hwanghae-namdo (South Hwanghae Province)|Kaesong-si (Kaesong City)|Kangwon-do (Kangwon Province)|Namp'o-si (Namp'o City)|P'yongan-bukto (North P'yongan Province)|P'yongan-namdo (South P'yongan Province)|P'yongyang-si (P'yongyang City)|Yanggang-do (Yanggang Province)"
cStates[125]="Ch'ungch'ong-bukto|Ch'ungch'ong-namdo|Cheju-do|Cholla-bukto|Cholla-namdo|Inch'on-gwangyoksi|Kangwon-do|Kwangju-gwangyoksi|Kyonggi-do|Kyongsang-bukto|Kyongsang-namdo|Pusan-gwangyoksi|Soul-t'ukpyolsi|Taegu-gwangyoksi|Taejon-gwangyoksi|Ulsan-gwangyoksi";
cStates[126]="Al 'Asimah|Al Ahmadi|Al Farwaniyah|Al Jahra'|Hawalli";
cStates[127]="Batken Oblasty|Bishkek Shaary|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)"
cStates[128]="Attapu|Bokeo|Bolikhamxai|Champasak|Houaphan|Khammouan|Louangnamtha|Louangphabang|Oudomxai|Phongsali|Salavan|Savannakhet|Viangchan|Viangchan|Xaignabouli|Xaisomboun|Xekong|Xiangkhoang";
cStates[129]="Aizkraukles Rajons|Aluksnes Rajons|Balvu Rajons|Bauskas Rajons|Cesu Rajons|Daugavpils|Daugavpils Rajons|Dobeles Rajons|Gulbenes Rajons|Jekabpils Rajons|Jelgava|Jelgavas Rajons|Jurmala|Kraslavas Rajons|Kuldigas Rajons|Leipaja|Liepajas Rajons|Limbazu Rajons|Ludzas Rajons|Madonas Rajons|Ogres Rajons|Preilu Rajons|Rezekne|Rezeknes Rajons|Riga|Rigas Rajons|Saldus Rajons|Talsu Rajons|Tukuma Rajons|Valkas Rajons|Valmieras Rajons|Ventspils|Ventspils Rajons";
cStates[130]="Beyrouth|Ech Chimal|Ej Jnoub|El Bekaa|Jabal Loubnane";
cStates[131]="Berea|Butha-Buthe|Leribe|Mafeteng|Maseru|Mohales Hoek|Mokhotlong|Qacha's Nek|Quthing|Thaba-Tseka";
cStates[132]="Bomi|Bong|Grand Bassa|Grand Cape Mount|Grand Gedeh|Grand Kru|Lofa|Margibi|Maryland|Montserrado|Nimba|River Cess|Sinoe";
cStates[133]="Ajdabiya|Al 'Aziziyah|Al Fatih|Al Jabal al Akhdar|Al Jufrah|Al Khums|Al Kufrah|An Nuqat al Khams|Ash Shati'|Awbari|Az Zawiyah|Banghazi|Darnah|Ghadamis|Gharyan|Misratah|Murzuq|Sabha|Sawfajjin|Surt|Tarabulus|Tarhunah|Tubruq|Yafran|Zlitan";
cStates[134]="Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg|Vaduz";
cStates[135]="Akmenes Rajonas|Alytaus Rajonas|Alytus|Anyksciu Rajonas|Birstonas|Birzu Rajonas|Druskininkai|Ignalinos Rajonas|Jonavos Rajonas|Joniskio Rajonas|Jurbarko Rajonas|Kaisiadoriu Rajonas|Kaunas|Kauno Rajonas|Kedainiu Rajonas|Kelmes Rajonas|Klaipeda|Klaipedos Rajonas|Kretingos Rajonas|Kupiskio Rajonas|Lazdiju Rajonas|Marijampole|Marijampoles Rajonas|Mazeikiu Rajonas|Moletu Rajonas|Neringa Pakruojo Rajonas|Palanga|Panevezio Rajonas|Panevezys|Pasvalio Rajonas|Plunges Rajonas|Prienu Rajonas|Radviliskio Rajonas|Raseiniu Rajonas|Rokiskio Rajonas|Sakiu Rajonas|Salcininku Rajonas|Siauliai|Siauliu Rajonas|Silales Rajonas|Silutes Rajonas|Sirvintu Rajonas|Skuodo Rajonas|Svencioniu Rajonas|Taurages Rajonas|Telsiu Rajonas|Traku Rajonas|Ukmerges Rajonas|Utenos Rajonas|Varenos Rajonas|Vilkaviskio Rajonas|Vilniaus Rajonas|Vilnius|Zarasu Rajonas";
cStates[136]="Diekirch|Grevenmacher|Luxembourg";
cStates[137]="Macau";
cStates[138]="Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair (Skopje)|Capari|Caska|Cegrane|Centar (Skopje)|Centar Zupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov (Skopje)|Drugovo|Dzepciste|Gazi Baba (Skopje)|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos (Skopje)|Kavadarci|Kicevo|Kisela Voda (Skopje)|Klecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva Palanka|Krivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi Anovi|Meseista|Miravci|Mogila|Murtino|Negotino|Negotino-Poloska|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnia|Podares|Prilep|Probistip|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnika|Srbinovo|Star Dojran|Staravina|Staro Nagoricane|Stip|Struga|Strumica|Studenicani|Suto Orizari (Skopje)|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Veles|Velesta|Vevcani|Vinica|Vitoliste|Vranestica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zileno|Zitose|Zletovo|Zrnovci";
cStates[139]="Antananarivo|Antsiranana|Fianarantsoa|Mahajanga|Toamasina|Toliara";
cStates[140]="Balaka|Blantyre|Chikwawa|Chiradzulu|Chitipa|Dedza|Dowa|Karonga|Kasungu|Likoma|Lilongwe|Machinga (Kasupe)|Mangochi|Mchinji|Mulanje|Mwanza|Mzimba|Nkhata Bay|Nkhotakota|Nsanje|Ntcheu|Ntchisi|Phalombe|Rumphi|Salima|Thyolo|Zomba";
cStates[141]="Johor|Kedah|Kelantan|Labuan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan";
cStates[142]="Alifu|Baa|Dhaalu|Faafu|Gaafu Alifu|Gaafu Dhaalu|Gnaviyani|Haa Alifu|Haa Dhaalu|Kaafu|Laamu|Lhaviyani|Maale|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu";
cStates[143]="Gao|Kayes|Kidal|Koulikoro|Mopti|Segou|Sikasso|Tombouctou";
cStates[144]="Valletta";
cStates[145]="Man, Isle of";
cStates[146]="Ailinginae|Ailinglaplap|Ailuk|Arno|Aur|Bikar|Bikini|Bokak|Ebon|Enewetak|Erikub|Jabat|Jaluit|Jemo|Kili|Kwajalein|Lae|Lib|Likiep|Majuro|Maloelap|Mejit|Mili|Namorik|Namu|Rongelap|Rongrik|Toke|Ujae|Ujelang|Utirik|Wotho|Wotje";
cStates[147]="Martinique";
cStates[148]="Adrar|Assaba|Brakna|Dakhlet Nouadhibou|Gorgol|Guidimaka|Hodh Ech Chargui|Hodh El Gharbi|Inchiri|Nouakchott|Tagant|Tiris Zemmour|Trarza";
cStates[149]="Agalega Islands|Black River|Cargados Carajos Shoals|Flacq|Grand Port|Moka|Pamplemousses|Plaines Wilhems|Port Louis|Riviere du Rempart|Rodrigues|Savanne";
cStates[150]="Mayotte";
cStates[151]="Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Distrito Federal|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Mexico|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San Luis Potosi|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas";
cStates[152]="Chuuk (Truk)|Kosrae|Pohnpei|Yap";
cStates[153]="Midway Islands";
cStates[154]="Balti|Cahul|Chisinau|Chisinau|Dubasari|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Tighina|Ungheni";
cStates[155]="Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo";
cStates[156]="Arhangay|Bayan-Olgiy|Bayanhongor|Bulgan|Darhan|Dornod|Dornogovi|Dundgovi|Dzavhan|Erdenet|Govi-Altay|Hentiy|Hovd|Hovsgol|Omnogovi|Ovorhangay|Selenge|Suhbaatar|Tov|Ulaanbaatar|Uvs";
cStates[157]="Saint Anthony|Saint Georges|Saint Peter's";
cStates[158]="Agadir|Al Hoceima|Azilal|Ben Slimane|Beni Mellal|Boulemane|Casablanca|Chaouen|El Jadida|El Kelaa des Srarhna|Er Rachidia|Essaouira|Fes|Figuig|Guelmim|Ifrane|Kenitra|Khemisset|Khenifra|Khouribga|Laayoune|Larache|Marrakech|Meknes|Nador|Ouarzazate|Oujda|Rabat-Sale|Safi|Settat|Sidi Kacem|Tan-Tan|Tanger|Taounate|Taroudannt|Tata|Taza|Tetouan|Tiznit";
cStates[159]="Cabo Delgado|Gaza|Inhambane|Manica|Maputo|Nampula|Niassa|Sofala|Tete|Zambezia";
cStates[160]="Caprivi|Erongo|Hardap|Karas|Khomas|Kunene|Ohangwena|Okavango|Omaheke|Omusati|Oshana|Oshikoto|Otjozondjupa";
cStates[161]="Aiwo|Anabar|Anetan|Anibare|Baiti|Boe|Buada|Denigomodu|Ewa|Ijuw|Meneng|Nibok|Uaboe|Yaren";
cStates[162]="Bagmati|Bheri|Dhawalagiri|Gandaki|Janakpur|Karnali|Kosi|Lumbini|Mahakali|Mechi|Narayani|Rapti|Sagarmatha|Seti";
cStates[163]="Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland";
cStates[164]="Netherlands Antilles";
cStates[165]="Iles Loyaute|Nord|Sud";
cStates[166]="Akaroa|Amuri|Ashburton|Bay of Islands|Bruce|Buller|Chatham Islands|Cheviot|Clifton|Clutha|Cook|Dannevirke|Egmont|Eketahuna|Ellesmere|Eltham|Eyre|Featherston|Franklin|Golden Bay|Great Barrier Island|Grey|Hauraki Plains|Hawera|Hawke's Bay|Heathcote|Hikurangi|Hobson|Hokianga|Horowhenua|Hurunui|Hutt|Inangahua|Inglewood|Kaikoura|Kairanga|Kiwitea|Lake|Mackenzie|Malvern|Manaia|Manawatu|Mangonui|Maniototo|Marlborough|Masterton|Matamata|Mount Herbert|Ohinemuri|Opotiki|Oroua|Otamatea|Otorohanga|Oxford|Pahiatua|Paparua|Patea|Piako|Pohangina|Raglan|Rangiora|Rangitikei|Rodney|Rotorua|Runanga|Saint Kilda|Silverpeaks|Southland|Stewart Island|Stratford|Strathallan|Taranaki|Taumarunui|Taupo|Tauranga|Thames-Coromandel|Tuapeka|Vincent|Waiapu|Waiheke|Waihemo|Waikato|Waikohu|Waimairi|Waimarino|Waimate|Waimate West|Waimea|Waipa|Waipawa|Waipukurau|Wairarapa South|Wairewa|Wairoa|Waitaki|Waitomo|Waitotara|Wallace|Wanganui|Waverley|Westland|Whakatane|Whangarei|Whangaroa|Woodville";
cStates[167]="Atlantico Norte|Atlantico Sur|Boaco|Carazo|Chinandega|Chontales|Esteli|Granada|Jinotega|Leon|Madriz|Managua|Masaya|Matagalpa|Nueva Segovia|Rio San Juan|Rivas";
cStates[168]="Agadez|Diffa|Dosso|Maradi|Niamey|Tahoua|Tillaberi|Zinder";
cStates[169]="Abia|Abuja Federal Capital Territory|Adamawa|Akwa Ibom|Anambra|Bauchi|Bayelsa|Benue|Borno|Cross River|Delta|Ebonyi|Edo|Ekiti|Enugu|Gombe|Imo|Jigawa|Kaduna|Kano|Katsina|Kebbi|Kogi|Kwara|Lagos|Nassarawa|Niger|Ogun|Ondo|Osun|Oyo|Plateau|Rivers|Sokoto|Taraba|Yobe|Zamfara";
cStates[170]="Niue";
cStates[171]="Norfolk Island";
cStates[172]="Northern Islands|Rota|Saipan|Tinian";
cStates[173]="Akershus|Aust-Agder|Buskerud|Finnmark|Hedmark|Hordaland|More og Romsdal|Nord-Trondelag|Nordland|Oppland|Oslo|Ostfold|Rogaland|Sogn og Fjordane|Sor-Trondelag|Telemark|Troms|Vest-Agder|Vestfold";
cStates[174]="Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Masqat|Musandam|Zufar";
cStates[175]="Balochistan|Federally Administered Tribal Areas|Islamabad Capital Territory|North-West Frontier Province|Punjab|Sindh";
cStates[176]="Aimeliik|Airai|Angaur|Hatobohei|Kayangel|Koror|Melekeok|Ngaraard|Ngarchelong|Ngardmau|Ngatpang|Ngchesar|Ngeremlengui|Ngiwal|Palau Island|Peleliu|Sonsoral|Tobi";
cStates[177]="Bocas del Toro|Chiriqui|Cocle|Colon|Darien|Herrera|Los Santos|Panama|San Blas|Veraguas";
cStates[178]="Bougainville|Central|Chimbu|East New Britain|East Sepik|Eastern Highlands|Enga|Gulf|Madang|Manus|Milne Bay|Morobe|National Capital|New Ireland|Northern|Sandaun|Southern Highlands|West New Britain|Western|Western Highlands";
cStates[179]="Alto Paraguay|Alto Parana|Amambay|Asuncion (city)|Boqueron|Caaguazu|Caazapa|Canindeyu|Central|Concepcion|Cordillera|Guaira|Itapua|Misiones|Neembucu|Paraguari|Presidente Hayes|San Pedro";
cStates[180]="Amazonas|Ancash|Apurimac|Arequipa|Ayacucho|Cajamarca|Callao|Cusco|Huancavelica|Huanuco|Ica|Junin|La Libertad|Lambayeque|Lima|Loreto|Madre de Dios|Moquegua|Pasco|Piura|Puno|San Martin|Tacna|Tumbes|Ucayali";
cStates[181]="Abra|Agusan del Norte|Agusan del Sur|Aklan|Albay|Angeles|Antique|Aurora|Bacolod|Bago|Baguio|Bais|Basilan|Basilan City|Bataan|Batanes|Batangas|Batangas City|Benguet|Bohol|Bukidnon|Bulacan|Butuan|Cabanatuan|Cadiz|Cagayan|Cagayan de Oro|Calbayog|Caloocan|Camarines Norte|Camarines Sur|Camiguin|Canlaon|Capiz|Catanduanes|Cavite|Cavite City|Cebu|Cebu City|Cotabato|Dagupan|Danao|Dapitan|Davao City Davao|Davao del Sur|Davao Oriental|Dipolog|Dumaguete|Eastern Samar|General Santos|Gingoog|Ifugao|Iligan|Ilocos Norte|Ilocos Sur|Iloilo|Iloilo City|Iriga|Isabela|Kalinga-Apayao|La Carlota|La Union|Laguna|Lanao del Norte|Lanao del Sur|Laoag|Lapu-Lapu|Legaspi|Leyte|Lipa|Lucena|Maguindanao|Mandaue|Manila|Marawi|Marinduque|Masbate|Mindoro Occidental|Mindoro Oriental|Misamis Occidental|Misamis Oriental|Mountain|Naga|Negros Occidental|Negros Oriental|North Cotabato|Northern Samar|Nueva Ecija|Nueva Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon City|Quirino|Rizal|Romblon|Roxas|Samar|San Carlos (in Negros Occidental)|San Carlos (in Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Cotabato|Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawitawi|Toledo|Trece Martires|Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur";
cStates[182]="Pitcaim Islands";
cStates[183]="Dolnoslaskie|Kujawsko-Pomorskie|Lodzkie|Lubelskie|Lubuskie|Malopolskie|Mazowieckie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Slaskie|Swietokrzyskie|Warminsko-Mazurskie|Wielkopolskie|Zachodniopomorskie";
cStates[184]="Acores (Azores)|Aveiro|Beja|Braga|Braganca|Castelo Branco|Coimbra|Evora|Faro|Guarda|Leiria|Lisboa|Madeira|Portalegre|Porto|Santarem|Setubal|Viana do Castelo|Vila Real|Viseu";
cStates[185]="Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Catano|Cayey|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabela|Jayuya|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las Piedras|Loiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana Grande|Salinas|San German|San Juan|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega Baja|Vieques|Villalba|Yabucoa|Yauco";
cStates[186]="Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal";
cStates[187]="Reunion";
cStates[188]="Alba|Arad|Arges|Bacau|Bihor|Bistrita-Nasaud|Botosani|Braila|Brasov|Bucuresti|Buzau|Calarasi|Caras-Severin|Cluj|Constanta|Covasna|Dimbovita|Dolj|Galati|Giurgiu|Gorj|Harghita|Hunedoara|Ialomita|Iasi|Maramures|Mehedinti|Mures|Neamt|Olt|Prahova|Salaj|Satu Mare|Sibiu|Suceava|Teleorman|Timis|Tulcea|Vaslui|Vilcea|Vrancea";
cStates[189]="Adygeya (Maykop)|Aginskiy Buryatskiy (Aginskoye)|Altay (Gorno-Altaysk)|Altayskiy (Barnaul)|Amurskaya (Blagoveshchensk)|Arkhangel'skaya|Astrakhanskaya|Bashkortostan (Ufa)|Belgorodskaya|Bryanskaya|Buryatiya (Ulan-Ude)|Chechnya (Groznyy)|Chelyabinskaya|Chitinskaya|Chukotskiy (Anadyr')|Chuvashiya (Cheboksary)|Dagestan (Makhachkala)|Evenkiyskiy (Tura)|Ingushetiya (Nazran')|Irkutskaya|Ivanovskaya|Kabardino-Balkariya (Nal'chik)|Kaliningradskaya|Kalmykiya (Elista)|Kaluzhskaya|Kamchatskaya (Petropavlovsk-Kamchatskiy)|Karachayevo-Cherkesiya (Cherkessk)|Kareliya (Petrozavodsk)|Kemerovskaya|Khabarovskiy|Khakasiya (Abakan)|Khanty-Mansiyskiy (Khanty-Mansiysk)|Kirovskaya|Komi (Syktyvkar)|Komi-Permyatskiy (Kudymkar)|Koryakskiy (Palana)|Kostromskaya|Krasnodarskiy|Krasnoyarskiy|Kurganskaya|Kurskaya|Leningradskaya|Lipetskaya|Magadanskaya|Mariy-El (Yoshkar-Ola)|Mordoviya (Saransk)|Moskovskaya|Moskva (Moscow)|Murmanskaya|Nenetskiy (Nar'yan-Mar)|Nizhegorodskaya|Novgorodskaya|Novosibirskaya|Omskaya|Orenburgskaya|Orlovskaya (Orel)|Penzenskaya|Permskaya|Primorskiy (Vladivostok)|Pskovskaya|Rostovskaya|Ryazanskaya|Sakha (Yakutsk)|Sakhalinskaya (Yuzhno-Sakhalinsk)|Samarskaya|Sankt-Peterburg (Saint Petersburg)|Saratovskaya|Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)|Smolenskaya|Stavropol'skiy|Sverdlovskaya (Yekaterinburg)|Tambovskaya|Tatarstan (Kazan')|Taymyrskiy (Dudinka)|Tomskaya|Tul'skaya|Tverskaya|Tyumenskaya|Tyva (Kyzyl)|Udmurtiya (Izhevsk)|Ul'yanovskaya|Ust'-Ordynskiy Buryatskiy (Ust'-Ordynskiy)|Vladimirskaya|Volgogradskaya|Vologodskaya|Voronezhskaya|Yamalo-Nenetskiy (Salekhard)|Yaroslavskaya|Yevreyskaya";
cStates[190]="Butare|Byumba|Cyangugu|Gikongoro|Gisenyi|Gitarama|Kibungo|Kibuye|Kigali Rurale|Kigali-ville|Ruhengeri|Umutara";
cStates[191]="Ascension|Saint Helena|Tristan da Cunha";
cStates[192]="Christ Church Nichola Town|Saint Anne Sandy Point|Saint George Basseterre|Saint George Gingerland|Saint James Windward|Saint John Capisterre|Saint John Figtree|Saint Mary Cayon|Saint Paul Capisterre|Saint Paul Charlestown|Saint Peter Basseterre|Saint Thomas Lowland|Saint Thomas Middle Island|Trinity Palmetto Point";
cStates[193]="Anse-la-Raye|Castries|Choiseul|Dauphin|Dennery|Gros Islet|Laborie|Micoud|Praslin|Soufriere|Vieux Fort";
cStates[194]="Miquelon|Saint Pierre";
cStates[195]="Charlotte|Grenadines|Saint Andrew|Saint David|Saint George|Saint Patrick";
cStates[196]="A'ana|Aiga-i-le-Tai|Atua|Fa'asaleleaga|Gaga'emauga|Gagaifomauga|Palauli|Satupa'itea|Tuamasaga|Va'a-o-Fonoti|Vaisigano";
cStates[197]="Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Monte Giardino|San Marino|Serravalle";
cStates[198]="Principe|Sao Tome";
cStates[199]="'Asir|Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|Ha'il|Jizan|Makkah|Najran|Tabuk";
cStates[200]="Aberdeen City|Aberdeenshire|Angus|Argyll and Bute|City of Edinburgh|Clackmannanshire|Dumfries and Galloway|Dundee City|East Ayrshire|East Dunbartonshire|East Lothian|East Renfrewshire|Eilean Siar (Western Isles)|Falkirk|Fife|Glasgow City|Highland|Inverclyde|Midlothian|Moray|North Ayrshire|North Lanarkshire|Orkney Islands|Perth and Kinross|Renfrewshire|Shetland Islands|South Ayrshire|South Lanarkshire|Stirling|The Scottish Borders|West Dunbartonshire|West Lothian";
cStates[201]="Dakar|Diourbel|Fatick|Kaolack|Kolda|Louga|Saint-Louis|Tambacounda|Thies|Ziguinchor";
cStates[202]="Anse aux Pins|Anse Boileau|Anse Etoile|Anse Louis|Anse Royale|Baie Lazare|Baie Sainte Anne|Beau Vallon|Bel Air|Bel Ombre|Cascade|Glacis|Grand' Anse (on Mahe)|Grand' Anse (on Praslin)|La Digue|La Riviere Anglaise|Mont Buxton|Mont Fleuri|Plaisance|Pointe La Rue|Port Glaud|Saint Louis|Takamaka";
cStates[203]="Eastern|Northern|Southern|Western";
cStates[204]="Singapore";
cStates[205]="Banskobystricky|Bratislavsky|Kosicky|Nitriansky|Presovsky|Trenciansky|Trnavsky|Zilinsky";
cStates[206]="Ajdovscina|Beltinci|Bled|Bohinj|Borovnica|Bovec|Brda|Brezice|Brezovica|Cankova-Tisina|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Crensovci|Crna na Koroskem|Crnomelj|Destrnik-Trnovska Vas|Divaca|Dobrepolje|Dobrova-Horjul-Polhov Gradec|Dol pri Ljubljani|Domzale|Dornava|Dravograd|Duplek|Gorenja Vas-Poljane|Gorisnica|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grosuplje|Hodos Salovci|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivancna Gorica|Izola|Jesenice|Jursinci|Kamnik|Kanal|Kidricevo|Kobarid|Kobilje|Kocevje|Komen|Koper|Kozje|Kranj|Kranjska Gora|Krsko|Kungota|Kuzma|Lasko|Lenart|Lendava|Litija|Ljubljana|Ljubno|Ljutomer|Logatec|Loska Dolina|Loski Potok|Luce|Lukovica|Majsperk|Maribor|Medvode|Menges|Metlika|Mezica|Miren-Kostanjevica|Mislinja|Moravce|Moravske Toplice|Mozirje|Murska Sobota|Muta|Naklo|Nazarje|Nova Gorica|Novo Mesto|Odranci|Ormoz|Osilnica|Pesnica|Piran|Pivka|Podcetrtek|Podvelka-Ribnica|Postojna|Preddvor|Ptuj|Puconci|Race-Fram|Radece|Radenci|Radlje ob Dravi|Radovljica|Ravne-Prevalje|Ribnica|Rogasevci|Rogaska Slatina|Rogatec|Ruse|Semic|Sencur|Sentilj|Sentjernej|Sentjur pri Celju|Sevnica|Sezana|Skocjan|Skofja Loka|Skofljica|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Smarje pri Jelsah|Smartno ob Paki|Sostanj|Starse|Store|Sveti Jurij|Tolmin|Trbovlje|Trebnje|Trzic|Turnisce|Velenje|Velike Lasce|Videm|Vipava|Vitanje|Vodice|Vojnik|Vrhnika|Vuzenica|Zagorje ob Savi|Zalec|Zavrc|Zelezniki|Ziri|Zrece";
cStates[207]="Bellona|Central|Choiseul (Lauru)|Guadalcanal|Honiara|Isabel|Makira|Malaita|Rennell|Temotu|Western";
cStates[208]="Awdal|Bakool|Banaadir|Bari|Bay|Galguduud|Gedo|Hiiraan|Jubbada Dhexe|Jubbada Hoose|Mudug|Nugaal|Sanaag|Shabeellaha Dhexe|Shabeellaha Hoose|Sool|Togdheer|Woqooyi Galbeed";
cStates[209]="Eastern Cape|Free State|Gauteng|KwaZulu-Natal|Mpumalanga|North-West|Northern Cape|Limpopo|Western Cape";
cStates[210]="Bird Island|Bristol Island|Clerke Rocks|Montagu Island|Saunders Island|South Georgia|Southern Thule|Traversay Islands";
cStates[211]="Andalucia|Aragon|Asturias|Baleares (Balearic Islands)|Canarias (Canary Islands)|Cantabria|Castilla y Leon|Castilla-La Mancha|Cataluna|Ceuta|Communidad Valencian|Extremadura|Galicia|Islas Chafarinas|La Rioja|Madrid|Melilla|Murcia|Navarra|Pais Vasco (Basque Country)|Penon de Alhucemas|Penon de Velez de la Gomera";
cStates[212]="Spratly Islands";
cStates[213]="Central|Eastern|North Central|North Eastern|North Western|Northern|Sabaragamuwa|Southern|Uva|Western";
cStates[214]="A'ali an Nil|Al Bahr al Ahmar|Al Buhayrat|Al Jazirah|Al Khartum|Al Qadarif|Al Wahdah|An Nil al Abyad|An Nil al Azraq|Ash Shamaliyah|Bahr al Jabal|Gharb al Istiwa'iyah|Gharb Bahr al Ghazal|Gharb Darfur|Gharb Kurdufan|Janub Darfur|Janub Kurdufan|Junqali|Kassala|Nahr an Nil|Shamal Bahr al Ghazal|Shamal Darfur|Shamal Kurdufan|Sharq al Istiwa'iyah|Sinnar|Warab";
cStates[215]="Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Paramaribo|Saramacca|Sipaliwini|Wanica";
cStates[216]="Barentsoya|Bjornoya|Edgeoya|Hopen|Kvitoya|Nordaustandet|Prins Karls Forland|Spitsbergen";
cStates[217]="Hhohho|Lubombo|Manzini|Shiselweni";
cStates[218]="Blekinge|Dalarnas|Gavleborgs|Gotlands|Hallands|Jamtlands|Jonkopings|Kalmar|Kronobergs|Norrbottens|Orebro|Ostergotlands|Skane|Sodermanlands|Stockholms|Uppsala|Varmlands|Vasterbottens|Vasternorrlands|Vastmanlands|Vastra Gotalands";
cStates[219]="Aargau|Ausser-Rhoden|Basel-Landschaft|Basel-Stadt|Bern|Fribourg|Geneve|Glarus|Graubunden|Inner-Rhoden|Jura|Luzern|Neuchatel|Nidwalden|Obwalden|Sankt Gallen|Schaffhausen|Schwyz|Solothurn|Thurgau|Ticino|Uri|Valais|Vaud|Zug|Zurich";
cStates[220]="Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda'|Dar'a|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus";
cStates[221]="Chang-hua|Chi-lung|Chia-i|Chia-i|Chung-hsing-hsin-ts'un|Hsin-chu|Hsin-chu|Hua-lien|I-lan|Kao-hsiung|Kao-hsiung|Miao-li|Nan-t'ou|P'eng-hu|P'ing-tung|T'ai-chung|T'ai-chung|T'ai-nan|T'ai-nan|T'ai-pei|T'ai-pei|T'ai-tung|T'ao-yuan|Yun-lin";
cStates[222]="Viloyati Khatlon|Viloyati Leninobod|Viloyati Mukhtori Kuhistoni Badakhshon";
cStates[223]="Arusha|Dar es Salaam|Dodoma|Iringa|Kagera|Kigoma|Kilimanjaro|Lindi|Mara|Mbeya|Morogoro|Mtwara|Mwanza|Pemba North|Pemba South|Pwani|Rukwa|Ruvuma|Shinyanga|Singida|Tabora|Tanga|Zanzibar Central/South|Zanzibar North|Zanzibar Urban/West";
cStates[224]="Amnat Charoen|Ang Thong|Buriram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng Phet|Kanchanaburi|Khon Kaen|Krabi|Krung Thep Mahanakhon (Bangkok)|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon Pathom|Nakhon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lamphu|Nong Khai|Nonthaburi|Pathum Thani|Pattani|Phangnga|Phatthalung|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri Khan|Ranong|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Sara Buri|Satun|Sing Buri|Sisaket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon";
cStates[225]="Tobago";
cStates[226]="De La Kara|Des Plateaux|Des Savanes|Du Centre|Maritime";
cStates[227]="Atafu|Fakaofo|Nukunonu";
cStates[228]="Ha'apai|Tongatapu|Vava'u";
cStates[229]="Arima|Caroni|Mayaro|Nariva|Port-of-Spain|Saint Andrew|Saint David|Saint George|Saint Patrick|San Fernando|Victoria";
cStates[230]="Ariana|Beja|Ben Arous|Bizerte|El Kef|Gabes|Gafsa|Jendouba|Kairouan|Kasserine|Kebili|Mahdia|Medenine|Monastir|Nabeul|Sfax|Sidi Bou Zid|Siliana|Sousse|Tataouine|Tozeur|Tunis|Zaghouan";
cStates[231]="Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Ankara|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Canakkale|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|Istanbul|Izmir|Kahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|Nevsehir|Nigde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak";
cStates[232]="Ahal Welayaty|Balkan Welayaty|Dashhowuz Welayaty|Lebap Welayaty|Mary Welayaty";
cStates[233]="Tuvalu";
cStates[234]="Adjumani|Apac|Arua|Bugiri|Bundibugyo|Bushenyi|Busia|Gulu|Hoima|Iganga|Jinja|Kabale|Kabarole|Kalangala|Kampala|Kamuli|Kapchorwa|Kasese|Katakwi|Kibale|Kiboga|Kisoro|Kitgum|Kotido|Kumi|Lira|Luwero|Masaka|Masindi|Mbale|Mbarara|Moroto|Moyo|Mpigi|Mubende|Mukono|Nakasongola|Nebbi|Ntungamo|Pallisa|Rakai|Rukungiri|Sembabule|Soroti|Tororo";
cStates[235]="Avtonomna Respublika Krym (Simferopol')|Cherkas'ka (Cherkasy)|Chernihivs'ka (Chernihiv)|Chernivets'ka (Chernivtsi)|Dnipropetrovs'ka (Dnipropetrovs'k)|Donets'ka (Donets'k)|Ivano-Frankivs'ka (Ivano-Frankivs'k)|Kharkivs'ka (Kharkiv)|Khersons'ka (Kherson)|Khmel'nyts'ka (Khmel'nyts'kyy)|Kirovohrads'ka (Kirovohrad)|Kyyiv|Kyyivs'ka (Kiev)|L'vivs'ka (L'viv)|Luhans'ka (Luhans'k)|Mykolayivs'ka (Mykolayiv)|Odes'ka (Odesa)|Poltavs'ka (Poltava)|Rivnens'ka (Rivne)|Sevastopol'|Sums'ka (Sumy)|Ternopil's'ka (Ternopil')|Vinnyts'ka (Vinnytsya)|Volyns'ka (Luts'k)|Zakarpats'ka (Uzhhorod)|Zaporiz'ka (Zaporizhzhya)|Zhytomyrs'ka (Zhytomyr)"
cStates[236]="'Ajman|Abu Zaby (Abu Dhabi)|Al Fujayrah|Ash Shariqah (Sharjah)|Dubayy (Dubai)|Ra's al Khaymah|Umm al Qaywayn";
cStates[237]="Barking and Dagenham|Barnet|Barnsley|Bath and North East Somerset|Bedfordshire|Bexley|Birmingham|Blackburn with Darwen|Blackpool|Bolton|Bournemouth|Bracknell Forest|Bradford|Brent|Brighton and Hove|Bromley|Buckinghamshire|Bury|Calderdale|Cambridgeshire|Camden|Cheshire|City of Bristol|City of Kingston upon Hull|City of London|Cornwall|Coventry|Croydon|Cumbria|Darlington|Derby|Derbyshire|Devon|Doncaster|Dorset|Dudley|Durham|Ealing|East Riding of Yorkshire|East Sussex|Enfield|Essex|Gateshead|Gloucestershire|Greenwich|Hackney|Halton|Hammersmith and Fulham|Hampshire|Haringey|Harrow|Hartlepool|Havering|Herefordshire|Hertfordshire|Hillingdon|Hounslow|Isle of Wight|Islington|Kensington and Chelsea|Kent|Kingston upon Thames|Kirklees|Knowsley|Lambeth|Lancashire|Leeds|Leicester|Leicestershire|Lewisham|Lincolnshire|Liverpool|Luton|Manchester|Medway|Merton|Middlesbrough|Milton Keynes|Newcastle upon Tyne|Newham|Norfolk|North East Lincolnshire|North Lincolnshire|North Somerset|North Tyneside|North Yorkshire|Northamptonshire|Northumberland|Nottingham|Nottinghamshire|Oldham|Oxfordshire|Peterborough|Plymouth|Poole|Portsmouth|Reading|Redbridge|Redcar and Cleveland|Richmond upon Thames|Rochdale|Rotherham|Rutland|Salford|Sandwell|Sefton|Sheffield|Shropshire|Slough|Solihull|Somerset|South Gloucestershire|South Tyneside|Southampton|Southend-on-Sea|Southwark|St. Helens|Staffordshire|Stockport|Stockton-on-Tees|Stoke-on-Trent|Suffolk|Sunderland|Surrey|Sutton|Swindon|Tameside|Telford and Wrekin|Thurrock|Torbay|Tower Hamlets|Trafford|Wakefield|Walsall|Waltham Forest|Wandsworth|Warrington|Warwickshire|West Berkshire|West Sussex|Westminster|Wigan|Wiltshire|Windsor and Maidenhead|Wirral|Wokingham|Wolverhampton|Worcestershire|York";
cStates[238]="Artigas|Canelones|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Maldonado|Montevideo|Paysandu|Rio Negro|Rivera|Rocha|Salto|San Jose|Soriano|Tacuarembo|Treinta y Tres";
cStates[239]="Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
cStates[240]="Andijon Wiloyati|Bukhoro Wiloyati|Farghona Wiloyati|Jizzakh Wiloyati|Khorazm Wiloyati (Urganch)|Namangan Wiloyati|Nawoiy Wiloyati|Qashqadaryo Wiloyati (Qarshi)|Qoraqalpoghiston (Nukus)|Samarqand Wiloyati|Sirdaryo Wiloyati (Guliston)|Surkhondaryo Wiloyati (Termiz)|Toshkent Shahri|Toshkent Wiloyati";
cStates[241]="Malampa|Penama|Sanma|Shefa|Tafea|Torba";
cStates[242]="Amazonas|Anzoategui|Apure|Aragua|Barinas|Bolivar|Carabobo|Cojedes|Delta Amacuro|Dependencias Federales|Distrito Federal|Falcon|Guarico|Lara|Merida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Tachira|Trujillo|Vargas|Yaracuy|Zulia";
cStates[243]="An Giang|Ba Ria-Vung Tau|Bac Giang|Bac Kan|Bac Lieu|Bac Ninh|Ben Tre|Binh Dinh|Binh Duong|Binh Phuoc|Binh Thuan|Ca Mau|Can Tho|Cao Bang|Da Nang|Dac Lak|Dong Nai|Dong Thap|Gia Lai|Ha Giang|Ha Nam|Ha Noi|Ha Tay|Ha Tinh|Hai Duong|Hai Phong|Ho Chi Minh|Hoa Binh|Hung Yen|Khanh Hoa|Kien Giang|Kon Tum|Lai Chau|Lam Dong|Lang Son|Lao Cai|Long An|Nam Dinh|Nghe An|Ninh Binh|Ninh Thuan|Phu Tho|Phu Yen|Quang Binh|Quang Nam|Quang Ngai|Quang Ninh|Quang Tri|Soc Trang|Son La|Tay Ninh|Thai Binh|Thai Nguyen|Thanh Hoa|Thua Thien-Hue|Tien Giang|Tra Vinh|Tuyen Quang|Vinh Long|Vinh Phuc|Yen Bai";
cStates[244]="Saint Croix|Saint John|Saint Thomas";
cStates[245]="Blaenau Gwent|Bridgend|Caerphilly|Cardiff|Carmarthenshire|Ceredigion|Conwy|Denbighshire|Flintshire|Gwynedd|Isle of Anglesey|Merthyr Tydfil|Monmouthshire|Neath Port Talbot|Newport|Pembrokeshire|Powys|Rhondda Cynon Taff|Swansea|The Vale of Glamorgan|Torfaen|Wrexham";
cStates[246]="Alo|Sigave|Wallis";
cStates[247]="West Bank";
cStates[248]="Western Sahara";
cStates[249]="'Adan|'Ataq|Abyan|Al Bayda'|Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadhramawt|Hajjah|Ibb|Lahij|Ma'rib|Sa'dah|San'a'|Ta'izz";
cStates[250]="Kosovo|Montenegro|Serbia|Vojvodina";
cStates[251]="Central|Copperbelt|Eastern|Luapula|Lusaka|North-Western|Northern|Southern|Western";
cStates[252]="Bulawayo|Harare|ManicalandMashonaland Central|Mashonaland East|Mashonaland West|Masvingo|Matabeleland North|Matabeleland South|Midlands";

//Cities
let cityState = [
	["Badakhshan","Arghanj Khwa|Argo|Baharak|Darayim|Fayzabad|Ishkashim|Jurm|Khash|Khwahan|Kishim|Kohistan|Kuf Ab|Keran wa Menjan|Maimay|Nusay|Raghistan|Shahri Buzurg|Sheghnan|Shekay|Shuhada|Tagab|Tishkan|Wakhan|Warduj|Yaftali Sufla|Yamgan|Yawan|Zebak"],
	["Badghis","Ab Kamari|Ghormach District|Jawand District|Muqur District|Bala Murghab District|Qadis District|Qala i Naw District"],
	["Baghlan:","Andarab|Baghlani Jadid|Burka|Dahana-I-Ghuri|Dih Salah|Dushi|Farang Wa Gharu|Guzargahi Nur|Khinjan|Khost Wa Fereng|Khwaja Hijran|Nahrin|Puli Hisar|Puli Khumri|Tala wa Barfak"],
	["Balkh","Balkh|Charbolak|Charkint|Chimtal|Dawlatabad|Dihdadi|Kaldar|Khulm|Kishindih|Marmul|Mazar-e Sharif|Nahri Shahi|Sholgara|Shortepa|Zari"],
	["Bamiyan:","Bamyan|Kahmard|Panjab|Sayghan|Shibar|Waras|Yakawlang"],
	["Farah","Anar Dara|Bakwa|Bala Buluk|Farah|Gulistan|Khaki Safed|Lash Wa Juwayn|Pur Chaman|Pusht Rod|Qala-I-Kah|Shib Koh"],
	["Faryab","Almar|Andkhoy|Bilchiragh|Dawlat Abad|Ghormach|Gurziwan|Khani Char Bagh|Khwaja Sabz Posh|Kohistan|Maymana|Pashtun Kot|Qaramqol|Qaysar|Qurghan|Shirin Tagab"],
	["Ghazni","Ghazni"],
	["Ghowr","Maymanah|Chaghcharan|Shahrak|Taywarah"],
	["Helmand","Baghran|Darwishan|Deh Shu|Gereshk|Lashkar Gah|Sangin"],
	["Herat","Awbeh|Eslam Qal'eh|Ghurian|Herat|Karukh|Kuhestan|Kushk|Qarabagh|Tawraghudi|Tir Pol|Zendejan"],
	["Jowzjan","Aqchah|Qarqin|Sang-e Charak|Shibarghan"],
	["Kabol","Baghrami|Kabul|Mir Bachchekut|Paghman|Qarabagh|Sarawbi"],
	["Kandahar","Baghrami|Kabul|Mir Bachchekut|Paghman|Qarabagh|Sarawbi"],
	["Kapisa","Mahmud-e Raqi|Taghab"],
	["Konar","Bar Kunar|Khawst|Nari|Nurgal|Sawkai"],
	["Kondoz","Asadabad|Asmar"],
	["Laghman","Mehtar Lam"],
	["Lowgar","Azraw|Baraki Barak|Pol-e Alam"],
	["Nangarhar","Achin|Batsawul|Hugyani|Jalalabad|Nader Shah Kawt"],
	["Nimruz","Chahar Burjak|Chakhansur|Khash|Mirabad|Rudbar|Zaranj"],
	["Oruzgan","Nuristan"],
	["Paktia","Orgun|Zareh Sharan|Zarghun Shahr|'Ali Khayl|Ghardez"],
	["Paktika","Charikar|Jabal-os-Saraj"],
	["Parvan","Dasht-e Archa|Emam Saheb|Hazart Imam|Khanabad|Qal'eh-ye Zal|Qunduz"],
	["Samangan","Aybak|Kholm"],
	["Sar-e Pol","Qandahar"],
	["Takhar","Chah Ab|Eshkamesh|Farkhar|Khwajeh Ghar|Rostaq|Taloqan|Yangi Qal'eh"],
	["Vardak","Deh Rawud|Gaz Ab|Tarin Kawt|Uruzgan|Gardan Diwal|Maydanshahr"],
	["Zabol","Qalat-e Ghilzay"],
	["Antartica","Antartica"],
	["Andaman and Nicobar Islands","Ferrargunj|Port Blair"],
 	["Andhra Pradesh","Visakhapatnam|Vijayawada|Guntur|Nellore|Kurnool|Kakinada|Rajamahendravaram|Kadapa|Tirupati|Anantapuram|Vizianagaram|Eluru|Nandyal|Ongole|Adoni|Madanapalle|Machilipatnam|Tenali|Proddatur|Chittoor|Hindupur|Srikakulam|Bhimavaram|Gudivada|Guntakal|Tadepalligudem|Dharmavaram|Narasaraopet|Tadipatri|Mangalagiri|Chilakaluripeta"],
 	["Arunachal Pradesh","Bordumsa|Bubang|Changlang '('North and South')'|Chopelling|Deban|Dharampur|Gandhigram|Jairampur|Kharsang|Khemiyong|Kherem Bisa|Kutum|Lallung|Manabhum|Manmao|Miao|Namchik|Namdang|Namphai|Nampong|Namtok|New Kamlao|New Mohang|Rajanagar|Rangfrah|Ranglom|Two-hat|Vijaynagar|Vijoypur|Yangkang|Alinye|Anelih|Anini|Etalin|Bameng|Bana|Chyangtajo|Khenewa|Lada|P.kessang|Palizi|Pipu-dipu|Seijosa|Seppa|Thrizino|Veo|Adipasi|Ayeng|Balek|Bilat|Boleng|Borguli|Dalbing|Damro|Debing|Gtc|Hill Top|Kebang|Korang|Koyu|Ledum|Mebo|Namsing|Nari|Ngopok|Oyan|Pangin|Pasighat|Rani|Renging|Riga|Ruksin|Sille|Silluk|Sirem|Yagrung|Mirem|Mikong|Debing|Miglung|Chambang|Damin|Hiya|Koloriang|Nyapin|Palin|Sangram|Sarli|Tali|Chakma|Changliang|Chowkham|Danglat|Gohaingaon|Innao|Jaipur|Kamlang Nagar|Kherem|Kumari Kachari|Kumsai|Lathao|Lohitpur|Loiliang|Mahadevpur|Manmao|Medo|Momong|Namsai|Nanam|Peyong|Podumani|Sunpura|Tafragram|Tezu|Tezu Covt.college|Tindolong|Udaipur|Wakro|Wingko|Yealing|Abango|Anupam|Bijari|Bolung|Bomjir|Dambuk|Desali|Elopa|Hunli|Iduli|Jia|Koranu|Kronli|Meka|Paglam|Parbuk|Roing|Santipur|Along|Bagra|Bame|Basar|Bene|Dali|Darak|Daring|Darka|Garu|Gensi|Kambang|Kaying|Kombo|Likabali|Liromoba|Logum Jining|Mechuka|Monigong|Nikte|Payum|Rumgong|Tato|Tirbin|Vivek Nagar|Yoji Yora|Yomcha|Balemu|Bhalukpong|Bomdila|Dahung|Dedza|Dirang|Dirang Basti|Kalaktang|Khellong|Lish|Munna Camp|Nafra|Rupa|Salari|Sangti|Senge|Shergaon|Singchung|Tenga Market|Tenzingaon|Tippi|Daporijo|Dumporijo|Giba|Lemiking|Lepajaring|Maro|Muri|Nacho|Sippi|Siyum|Tabarijo|Taksing|Taliha|Geku|Gelling|Karko|Mariyang|Migging|Shimong|Singa|Tuting|Yingkiong"],
 	["Assam","Guwahati|Silchar|Dibrugarh|Jorhat|Bongaigaon|Tinsukia|Tezpur"],
 	["Bihar","Patna|Gaya|Bhagalpur|Muzaffarpur|Purnia|Darbhanga|Bihar Sharif|Arrah|Begusarai|Katihar|Munger|Chhapra|Danapur|Bettiah|Saharsa|Sasaram|Hajipur|Dehri|Siwan|Motihari|Nawada|Bagaha|Buxar|Kishanganj|Sitamarhi|Jamalpur|Jehanabad|Aurangabad"],
 	["Chandigarh","Atawa|Badheri|Bahlana|Bahlolpur|Bajwāra|Bijwāri Bakhta|Burail|Burail|Buterla|Chandigarh|Czandigarh|Dariya|Dhanas|Dhanaurān|Dādu Mājra|Fatehgarh|Hala Mājra|Jhāmpur|Kaimbwāla|Kanthala|Kanthara|Khoda Jassu|Kursan|Kānjī Māira|Kānsil|Kūjheri|Madanpur|Mahla Majra|Malak|Mastgarh|Moloia|Mārīwālā Town|Palsaura|Phaldan|Raj Bhavan Haryana|Raj Bhavan Punjab|Rāipur|Sangāriwāla|Sarangpur|Shahpur|Shāhpur Choliān|Shāhzādpur|Sāinī Mājra|Togan|Čandigarchas|Čandígarh|Чандигар|Чандигарх|Чандігарх|צ'אנדיגאר|चंडीगढ़|चण्डीगढ़|চন্ডিগড়|চন্ডীগড়|ਚੰਡੀਗੜ੍ਹ|ચંડીગઢ|சண்டிகர்|చండీగఢ్|ఛండీగఢ్|ಚಂಡೀಗಡ|ചണ്ഢീഗഡ്|ჩანდიგარჰი|チャンディーガル"],
 	["Chhattisgarh","Raipur|Bhilai|Korba|Bilaspur|Rajnandgaon|Raigarh district|Jagdalpur|Ambikapur|Chirmiri|Dhamtari|Mahasamund"],
 	["Dadra and Nagar Haveli","Silvassa Municipal Council|Naroli Census Town|Dadra Census Town|Samarvarni Census Town|Masat Census Town|Rakholi Census Town"],
 	["Daman and Diu","Diu|Daman|Ghantwar|Gogola|Kotda|Dholar|Marwad |Sigsar|Bhimpur|Sarkharia"],
 	["Delhi","Delhi Municipal Corporation|New Delhi Municipal Council|Kirari Suleman Nagar|Sultan Pur Majra|Bhalswa Jahangir Pur|Burari|Karawal Nagar|Mustafabad|Gokal Pur|Mandoli|Dallo Pura|Hastsal|Nangloi Jat|Delhi Cantonment|Deoli"],
 	["Goa","Bicholim|Canacona|Cuncolim|Curchorem|Mapusa|Margao|Mormugao|Panaji|Pernem|Ponda|Quepem|Sanguem|Sanquelim|Valpoi"],
 	["Gujarat","Ahmedabad|Surat|Vadodara|Rajkot|Bhavnagar|Jamnagar|Junagadh|Gandhinagar|Gandhidham|Anand|Navsari|Morbi|Nadiad|Surendranagar|Bharuch|Mehsana|Bhuj|Porbandar|Palanpur|Valsad|Vapi|Gondal|Veraval|Godhara|Patan|Kalol, Gandhinagar|Dahod|Botad|Amreli|Deesa|Jetpur"],
 	["Haryana","Faridabad|Gurugram|Panipat|Ambala|Yamunanagar|Rohtak|Hisar|Karnal|Sonipat|Panchkula|Bhiwani|Sirsa|Bahadurgarh|Jind|Thanesar|Kaithal|Rewari|Mahendergarh|Pundri|Kosli"],
 	["Himachal Pradesh","Shimla|Dharamsala|Solan|Mandi|Palampur|Baddi|Nahan|Paonta Sahib|Sundarnagar|Chamba|Una|Kullu|Hamirpur|Bilaspur|Yol Cantonment|Nalagarh|Nurpur|Kangra|Santokhgarh|Mehatpur Basdehra|Shamshi|Parwanoo|Manali|Tira Sujanpur|Ghumarwin|Dalhousie|Rohru|Nagrota Bagwan|Rampur|Kumarsain|Jawalamukhi|Jogindernagar|Dera Gopipur|Sarkaghat|Jhakhri|Indora|Bhuntar|Nadaun|Theog|Kasauli Cantonment|Gagret|Chuari Khas|Daulatpur|Sabathu Cantonment|Dalhousie Cantonment|Rajgarh|Arki|Dagshai Cantonment|Seoni|Talai|Jutogh Cantonment|Chaupal|Rewalsar|Bakloh Cantonment|Jubbal|Bhota|Banjar|Naina Devi|Kotkhai|Narkanda"],
 	["Jammu and Kashmir","Anantnag|Srinagar|Jammu"],
 	["Jharkhand","Jamshedpur|Dhanbad|Ranchi|Bokaro Steel City|Deoghar|Phusro|Hazaribagh|Giridih|Ramgarh|Medininagar|Chirkunda"],
 	["Karnataka","Bangalore|Hubli-Dharwad|Mysore|Gulbarga|Mangalore|Belgaum|Davanagere|Bellary|Bijapur|Shimoga|Tumkur|Raichur|Bidar|Hospet|Gadag-Betageri|Robertsonpet|Hassan|Bhadravati|Chitradurga|Udupi|Kolar|Mandya|Chikmagalur|Gangavati|Bagalkot|Ranebennuru"],
 	["Kerala","Thiruvananthapuram|Kozhikode|Kochi|Kollam|Thrissur|Kannur|Alappuzha|Kottayam|Palakkad|Manjeri|Thalassery|Thrippunithura|Ponnani|Vatakara|Kanhangad|Payyanur|Koyilandy|Kodungallur|Parappanangadi|Kalamassery|Neyyattinkara|Guruvayur|Tanur|Kayamkulam|Malappuram|Thrikkakkara|Wadakkancherry|Irinjalakuda|Nedumangad|Kondotty|Panoor|Tirurangadi|Tirur|Changanassery|Feroke|Kunnamkulam|Kasaragod|Ottappalam|Tiruvalla|Thodupuzha|Ettumanoor|Perinthalmanna|Chalakudy|Payyoli|Koduvally|Kottakkal|Mananthavady|Karunagappalli|Mattanur|Punalur|Nilambur|Cherthala|Pandalam|Sultan Bathery|Maradu|Valanchery|Taliparamba|Shornur|Kattappana|Mukkam|Iritty|Varkala|Cherpulassery|Nileshwaram|Chavakkad|Kothamangalam|Pathanamthitta|Attingal|Paravur|Ramanattukara|Erattupetta|Sreekandapuram|Angamaly|Chittur-Thathamangalam|Kuthuparamba|Mannarkkad|Kalpetta|North Paravur|Haripad|Muvattupuzha|Kottarakara|Adoor|Piravom|Pattambi|Anthoor|Perumbavoor|Mavelikkara|Eloor|Chengannur|Vaikom|Aluva|Pala|Koothattukulam"],
 	["Lakshadweep","Amini|Andrott|Kadmat|Kalpeni|Kavaratti|Minicoy"],
 	["Madhya Pradesh","Indore|Bhopal|Jabalpur|Gwalior|Ujjain|Sagar|Dewas|Satna|Ratlam|Rewa|Murwara|Singrauli|Burhanpur|Khandwa|Bhind|Chhindwara|Guna|Shivpuri|Vidisha|Chhatarpur|Damoh|Mandsaur|Khargone|Neemuch|Pithampur|Narmadapuram|Itarsi|Sehore|Morena|Betul|Seoni|Datia|Nagda|Dindori"],
 	["Maharashtra","Mumbai|Nagpur|Thane|Pune|Nashik|Kalyan-Dombivli|Vasai-Virar City MC|Aurangabad|Navi Mumbai|Solapur|Mira-Bhayandar|Latur|Amravati|Nanded Waghala|Kolhapur|Akola|Panvel|Ulhasnagar|Sangli-Miraj-Kupwad|Malegaon|Jalgaon|Dule|Bhivandi-Nizampur|Ahmednagar|Chandrapur|Parbhani|Ichalkaranji|Jalna|Ambarnath|Bhusawal|Ratnagiri|Beed|Gondia|Satara|Barshi|Yavatmal|Achalpur|Osmanabad|Nandurbar|Wardha|Udgir|Hinganghat"],
 	["Manipur","Bishnupur|Thoubal|Imphal East|Imphal West|Senapati|Ukhrul|Chandel|Churachandpur|Tamenglong|Jiribam|Kangpokpi|Kakching|Tengnoupal|Kamjong|Noney|Pherzawl"],
 	["Meghalaya","Jaintia Hills Division|West Jaintia Hills|East Jaintia Hills|Jaintia Hills Division|East Khasi Hills|West Khasi Hills|South West Khasi Hills|Ri-Bhoi|Garo Hills Division|North Garo Hills|East Garo Hills|South Garo Hills|West Garo Hills|South West Garo Hills"],
 	["Mizoram","Aizawl|Kolasib|Lawngtlai|Lunglei|Mamit|Saiha|Serchhip|Champhai|Hnahthial|Khawzawl|Saitual"],
 	["Nagaland","Dimapur|Kiphire|Kohima|Longleng|Mokokchung|Mon|Peren|Phek|Tuensang|Wokha|Zunheboto|Noklak"],
 	["Orissa","Bhubaneswar|Cuttack|Rourkela|Berhampur|Sambalpur|Puri|Balasore|Bhadrak|Baripada"],
 	["Pondicherry","Pondicherry Municipality|Oulgaret Municipality|Villianur Census Town and Outgrowth|Ariyankuppam Town and Outgrowth"],
 	["Punjab","Amritsar|Ludhiana|Jalandhar|Patiala|Bathinda|Hoshiarpur|Mohali|Batala|Pathankot|Moga|Abohar|Malerkotla|Khanna|Phagwara|Muktsar|Barnala|Rajpura|Firozpur|Kapurthala|Faridkot|Sunam"],
 	["Rajasthan","Jaipur|Jodhpur|Kota|Bhiwadi|Bikaner|Udaipur|Ajmer|Bhilwara|Alwar|Sikar|Bharatpur|Pali|Sri Ganganagar|Kishangarh|Baran|Dhaulpur|Tonk|Beawar|Hanumangarh"],
 	["Sikkim","Gangtok|Pelling|Lachung"],
 	["Tamil Nadu","Chennai|Coimbatore|Madurai|Tiruchirappalli|Tiruppur|Salem|Erode|Tirunelveli|Vellore|Thoothukkudi|Dindigul|Thanjavur|Ranipet|Sivakasi|Karur|Udhagamandalam|Hosur|Nagercoil|Kanchipuram|Kumarapalayam|Karaikkudi|Neyveli|Cuddalore|Kumbakonam|Tiruvannamalai|Pollachi|Rajapalayam|Gudiyatham|Pudukkottai|Vaniyambadi|Ambur|Nagapattinam"],
 	["Tripura","Agartala|Dharmanagar|Udaipur|Kailasahar|Bishalgarh|Teliamura|Khowai|Belonia|Melaghar|Mohanpur|Ambassa|Ranirbazar|Santirbazar|Kumarghat|Sonamura|Panisagar|Amarpur|Jirania|Kamalpur|Sabroom"],
 	["Uttar Pradesh","Lucknow|Kanpur|Ghaziabad|Agra|Meerut|Varanasi|Prayagraj |Bareilly|Aligarh|Moradabad|Saharanpur|Gorakhpur|Faizabad|Firozabad|Jhansi|Muzaffarnagar|Mathura-Vrindavan|Budaun|Rampur|Shahjahanpur|Farrukhabad-cum-Fategarh|Ayodhya Cantt|Maunath Bhanjan|Hapur|Noida|Etawah|Mirzapur-cum-Vindhyachal|Bulandshahr|Sambhal|Amroha|Hardoi|Fatehpur|Raebareli|Orai|Sitapur|Bahraich|Modinagar|Unnao|Jaunpur|Lakhimpur|Hathras|Banda|Pilibhit|Mughalsarai|Barabanki|Khurja|Gonda|Mainpuri|Lalitpur|Etah|Deoria|Ujhani|Ghazipur|Sultanpur|Azamgarh|Bijnor|Sahaswan|Basti|Chandausi|Akbarpur|Ballia|Tanda|Greater Noida|Shikohabad|Shamli|Awagarh|Kasganj"],
 	["Uttaranchal","Dehradun|Haldwani-cum-Kathgodam|Haridwar|Roorkee|Rudrapur|Kashipur|Rishikesh"],
 	["West Bengal","Kolkata|Asansol|Siliguri|Durgapur|Bardhaman|Malda|Baharampur|Habra|Kharagpur|Shantipur|Dankuni|Dhulian|Ranaghat|Haldia|Raiganj|Krishnanagar|Nabadwip|Medinipur|Jalpaiguri|Balurghat|Basirhat|Bankura|Chakdaha|Darjeeling|Alipurduar|Purulia|Jangipur|Bangaon|Cooch Behar"],
	["Anguilla","White Hill|Crocus Hill|Cannifist|Bungalows|Bethel|Long Ground|Shoal Bay Village|The Valley|West End Village|Little Dix|Island Harbour|The Quarter|Long Bay Village|The Fountain|East End Village|Long Bay|Long Path|North Hill Village|Junks Hole|Betty Hill|Blowing Point|Mount Fortune"],
	["Singapore","Bishan East|Marymount|Upper Thomson|Alexandra Hill|Alexandra North|Bukit Ho Swee|Bukit Merah|City Terminals|Depot Road|Everton Park|Henderson Hill|Kampong Tiong Bahru|Maritime Square|Redhill|Singapore General Hospital|Telok Blangah Drive|Telok Blangah Rise|Telok Blangah Way|Tiong Bahru|Tiong Bahru Station|Anak Bukit|Coronation Road|Farrer Court|Hillcrest|Holland Road|Leedon Park|Swiss Club|Ulu Pandan|Anson|Bayfront Subzone|Bugis|Cecil|Central Subzone|City Hall|Clifford Pier|Marina Centre|Maxwell|Nicoll|Phillip|Raffles Place|Tanjong Pagar|Aljunied|Geylang East|Kallang Way|Kampong Ubi|MacPherson|Bendemeer|Boon Keng|Crawford|Geylang Bahru|Kallang Bahru|Kampong Bugis|Kampong Java|Lavender|Tanjong Rhu|Marina East|Marina South|East Coast|Katong|Marina East|Marine Parade|Mountbatten|Bras Basah|Dhoby Ghaut|Fort Canning|Cairnhill|Goodwood Park|Istana Negara|Monk's Hill|Newton Circus|Orange Grove|Balestier|Dunearn|Malcolm|Moulmein|Mount Pleasant|Boulevard|Somerset|Tanglin|China Square|Chinatown|Pearl's Hill|People's Park|Commonwealth|Dover|Ghim Moh|Holland Drive|Kent Ridge|Margaret Drive|Mei Chin|National University of Singapore|one-north|Pasir Panjang 1|Pasir Panjang 2|Port|Queensway|Singapore Polytechnic|Tanglin Halt|Institution Hill|Leonie Hill|One Tree Hill|Oxley|Paterson|Bencoolen|Farrer Park|Kampong Glam|Little India|Mackenzie|Mount Emily|Rochor Canal|Selegie|Sungei Road|Victoria|Boat Quay|Clarke Quay|Robertson Quay|Sentosa|Southern Group|Straits View|Chatsworth|Nassim|Ridout|Tyersall|Bidadari|Boon Teck|Braddell|Joo Seng|Kim Keat|Lorong 8 Toa Payoh|Pei Chun|Potong Pasir|Sennett|Toa Payoh Central|Toa Payoh West|Woodleigh"],
	["West Bank","Abasan al-Kabira|Abu Dis|Bani Na'im|Bani Suheila|Beit Hanoun|Beit Jala|Beit Lahia|Beit Sahour|Beit Ummar|Beitunia|Bethlehem (Beit Lahm)|al-Bireh|Deir al-Balah|ad-Dhahiriya|Dura|Gaza City (Ghazzah)|Halhul|Hebron (al-Khalil)|Idhna|Jabalia|Jenin|Jericho (Ariha)|Khan Yunis|Nablus|Qabatiya|Qalqilya|Rafah|Ramallah|Sa'ir|as-Samu|Surif|Tubas|Tulkarm|Ya'bad|al-Yamun|Yatta|az-Zawayda"],
	["Eastern Cape","Aberdeen|Addo|Alexandria|Bathurst|Bedford|Cookhouse|Cradock|Despatch|Enon|Gqeberha|Graaff Reinet|Grahamstown|Hankey|Humansdorp|Jeffreys Bay|Joubertina|Kareedouw|Kenton-on-Sea|Kirkwood|Krakeelrivier|Middelburg|Nieu-Bethesda|Patensie|Paterson|Port Alfred|Salem|Somerset East|St Francis Bay|Steynsburg|Steytlerville|Uitenhage|Willowmore|Tsolo|Bizana|Qumbu|Ngqeleni|Elliotdale|Seymour|Sterkspruit|Sterkstroom|Stutterheim|Tarkastad|Tsomo|Venterstad|Whittlesea|Zwelitsha|Cala|Cathcart|Cederville|Cofimvaba|Dohne|Dordrecht"],
	["Free State","Arlington|Bethlehem|Clarens|Clocolan|Cornelia|Excelsior|Ficksburg|Fouriesburg|Harrismith|Hobhouse|Kestell|Ladybrand|Lindley|Marquard|Memel|Paul Roux|Petrus Steyn|Phuthaditjhaba|Reitz|Rosendal|Senekal|Steynsrus|Swinburne|Tweespruit|Van Reenen|Vrede|Warden|Winburg|Harrismith"],
	["Gauteng","Alberton|Alrode|Akasia|Benmore|Benoni|Boksburg|Booysens|Brakpan|Bronkhorstspruit|Bryanston|Carltonville|Centurion|Cullinan|Dainfern|Edenvale|Ferndale|Fourways|Gardenview|Grant Park|Heidelberg|Isando|Johannesburg|Kelvin|Krugersdorp|Linmeyer|Maraisburg|Midrand|Nigel|Northmead|Petervale|Pinegowrie|Pretoria|Primrose|Randburg|Randfontein|Randvaal|Rivonia|Robertville|Soweto|Springs|Temba|Tembisa|Troyeville|Theresapark|Vanderbijlpark|Vereeniging|Verwoerdburg|Vorna Valley|Wadeville|Westonaria"],
	["KwaZulu-Natal","Bergville|Dannhauser|Hattingspruit|Madadeni|Newcastle|OsizweniekuPhakameni|Adams Mission|Amanzimtoti|Assagay|Botha's Hill|Cato Ridge|Chatsworth|Clermont|Durban|eMdloti|Gillitts|Hillcrest|Inanda|Inchanga|Isipingo|Kingsburgh|Kloof|KwaMakhutha|KwaMashu|La Mercy|Mpumalanga|New Germany|Ntuzuma|oThongathi|Pinetown|Phoenix|Prospecton|Queensburgh|Shallcross|Umbumbulu|Umgababa|uMhlanga|Umkomaas|Umlazi|Verulam|Westville|Ballito|KwaDukuza|Salt Rock|Mandeni|Maphumulo|Bulwer|Franklin|Himeville|Ixopo|Kokstad|Umzimkulu|Underberg|Anerley|Bazley Beach|Ezinqoleni|Dududu|Harding|Hibberdene|Ifafa Beach|Kelso|Margate|Mtwalume|Munster|Palm Beach|Park Rynie|Pennington|Port Edward|Port Shepstone|Ramsgate|Scottburgh|Sezela|Shelly Beach|Southbroom|Umtentweni|Umzinto|Umzumbe|Uvongo|Weza"],
	["Mpumalanga","Botleng|Ekangala|Embalenhle|Emjindini|Empuluzi|Emzinoni|Ermelo|Ethandakukhanja|Groblersdal|Komatipoort|Kriel|KwaZanele|Kwazamokuhle|Lebohang|Marblehall|Mashishing|Mhluzi|Nelspruit|Phola|Sakhile|Secunda|Siyabuswa|Siyathemba|Siyathuthuka|Vukuzakhe|Witbank|Witrivier|eLukwatini"],
	["North-West","Amalia|Bray|Ganyesa|Mareetsane|Morokweng|Motlhabeng|Reivilo|Schweizer-Reneke|Setlagole|Stella|Taung|Tosca|Vryburg|Setlopo|Babelegi|Beestekraal|Brits|Broederstroom|Derby|Ga-Rankuwa|Hartbeesfontein/Lethabong|Hartbeespoort|Hekpoort|Jericho|Kosmos|Koster|Kroondal|Maanhaarrand|Mabopane|Magaliesburg|Marikana|Mogwase|Mooinooi|Mathibestad|Ramokokastad|Rustenburg|Skeerpoort|Swartruggens|Tlhabane|Coligny|Delareyville|Ganyesa|Groot Marico|Lehurutshe|Lichtenburg|Mareetsane|Mahikeng|Mmabatho|Ottosdal|Ottoshoop|Sannieshof|Zeerust|Bloemhof|Christiana|Hartbeesfontein|Klerksdorp|Leeudoringstad|Makwassie|Orkney|Potchefstroom|Stilfontein|Ventersdorp|Wolmaransstad"],
	["Northern Cape","Barkly West|Campbell|Delportshoop|Douglas|Griquatown|Hartswater|Jan Kempdorp|Kimberley|Modder River|Ulco|Warrenton|Windsorton|Andriesvale|Askham|Augrabies|Danielskuil|Groblershoop|Kakamas|Kanoneiland|Keimoes|Kenhardt|Lime Acres|Louisvale|Mier|Olifantshoek|Onseepkans|Postmasburg|Putsonderwater|Riemvasmaak|Upington|Kathu|Aggeneys|Alexander Bay|Carolusberg|Concordia|Garies|Hondeklip|Kamieskroon|Kleinzee|Nababeep|Okiep|Pella|Pofadder|Port Nolloth|Soebatsfontein|Springbok|Steinkopf|Britstown|Colesberg|Copperton|De Aar|Hanover|Hopetown|Hutchinson|Loxton|Marydale|Norvalspont|Noupoort|Orania|Petrusville|Philipstown|Prieska|Richmond|Strydenburg|Vanderkloof|Victoria West|Vosburg"],
	["Limpopo","Bela-Bela|Dendron|Duiwelskloof|Ellisras|Giyani|Lebowakgomo|Louis Trichardt|Lulekani|Mankweng|Messina|Mogalakwena|Mutale|Nkowakowa|Nylstroom|Phalaborwa|Pietersburg|Polokwane|Soekmekaar|Southdale|Thabazimbi|Thohoyandou|Thulamahashe|Tzaneen"],
	["Western Cape","Atlantis|Bellville|Blue Downs|Brackenfell|Cape Town|Crossroads|Durbanville|Eerste River|Elsie's River|Fish Hoek|Goodwood|Gordon's Bay|Guguletu|Hout Bay|Khayelitsha|Kraaifontein|Kuils River|Langa|Macassar|Melkbosstrand|Mfuleni|Milnerton|Mitchell's Plain|Noordhoek|Nyanga|Observatory|Parow|Simon's Town|Somerset West|Strand|Aurora|Bitterfontein|Chatsworth|Citrusdal|Clanwilliam|Darling|Doringbaai|Dwarskersbos|Ebenhaeser|Eendekuil|Elands Bay|Goedverwacht|Graafwater|Grotto Bay|Hopefield|Jacobsbaai|Jakkalsfontein|Kalbaskraal|Klawer|Koekenaap|Koringberg|Lamberts Bay|Langebaan|Langebaanweg|Lutzville|Malmesbury|Moorreesburg|Paternoster|Piketberg|Porterville|Redelinghuys|Riebeek-Kasteel|Riebeek West|Saldanha|St Helena Bay|Strandfontein|Vanrhynsdorp|Velddrif|Vredenburg|Vredendal|Wupperthal|Yzerfontein|Ashton|Bonnievale|Ceres|De Doorns|Denneburg|Franschhoek|Gouda|Kayamandi|Klapmuts|Kylemore|Languedoc|McGregor|Montagu|Op-die-Berg|Paarl|Pniel|Prince Alfred Hamlet|Rawsonville|Robertson|Robertsvlei|Rozendal|Saron|Stellenbosch|Touws River|Tulbagh|Wellington|Wemmershoek|Wolseley|Worcester|Arniston|Baardskeerdersbos|Betty's Bay|Birkenhead|Botrivier|Bredasdorp|Caledon|Dennehof|De Kelders|Elgin|Elim|Fisherhaven|Franskraalstrand|Gansbaai|Genadendal|Grabouw|Greyton|Hawston|Hermanus|Hotagterklip|Infanta|Kleinbaai|Kleinmond|L'Agulhas|Napier|Onrusrivier|Pearly Beach|Pringle Bay|Riviersonderend|Rooi Els|Stanford|Struisbaai|Suiderstrand|Suurbraak|Swellendam|Van Dyksbaai|Vermont|Villiersdorp|Albertinia|Boggomsbaai|Brenton-on-Sea|Buffelsbaai|Dana Baai|De Rust|Dysselsdorp|Friemersheim|George|Glentana|Gouritsmond|Great Brak River|Groot-Jongensfontein|Haarlem|Hartenbos|Heidelberg|Herbertsdale|Herolds Bay|Keurboomsrivier|Keurboomstrand|Knysna|Kranshoek|Kurland Estate|Little Brak River|Mossel Bay|Nature's Valley|Noetzie|Pacaltsdorp|Plettenberg Bay|Port Beaufort|Rheenendal|Riversdale|Sedgefield|Slangrivier|Stilbaai|Uniondale|Volmoed|Victoria Bay|Wilderness|Wittedrift|Zoar|Montagu|Barrydale|Ladismith|Calitzdorp|Oudtshoorn|De Rust"]
];

//Load all countries in the world into its dropdown.
function populateCountries(countryElementId, stateElementId, cityElementId){
	
	let countryElement = document.getElementById(countryElementId);

	countryElement.length=0;
	countryElement.options[0] = new Option('Select Country','-1');
	countryElement.selectedIndex = 0;
	for (let i=0; i<country_arr.length; i++) {
		countryElement.options[countryElement.length] = new Option(country_arr[i]);
	}

	if( stateElementId )
	{
		countryElement.onchange = function(){
			populateStates( countryElementId, stateElementId, cityElementId);
		};
	}
}

//Load states into their dropdown according to their country.
function populateStates( countryElementId, stateElementId, cityElementId ){
	
	let selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;

	let stateElement = document.getElementById( stateElementId );
	
	stateElement.length=0;
	stateElement.options[0] = new Option('Select State','');
	stateElement.selectedIndex = 0;
	document.getElementById('city').innerText = null;
    document.getElementById('city').options[0] = new Option('Select City');
	let state_arr = cStates[selectedCountryIndex].split("|");
	
	for (let i=0; i<state_arr.length; i++) {
		stateElement.options[stateElement.length] = new Option(state_arr[i]);
	}
	
	if( cityElementId ){
		stateElement.onchange = function(){
			populateCities(stateElementId, cityElementId );
		};
	}
}

//Load cities into their dropdown according to their state. 
//Note: There are defualt cities that will be loaded if the state is not found.
function populateCities(stateElementId, cityElementId ) {

	let e = document.getElementById( stateElementId );
	let selectedStateIndex = e.options[e.selectedIndex].text;
	let find = false;
	let cityElement = document.getElementById( cityElementId );
	
	let city_arr = [];

	cityElement.length=0;
	cityElement.options[0] = new Option('Select City');
	cityElement.selectedIndex = 0;

	for (let i = 0; i < cityState.length; i++) {
		if (cityState[i][0] == selectedStateIndex) {
			city_arr = cityState[i][1].split("|");
			find = true;
			break;
		}
	}
	if (find == false && selectedStateIndex != "Select State") {
		city_arr = ["Aizawl","Kolasib","Benoni","Cromerth","Wingston","Garmsby","Kingcardine","Perthlochry","Frostford","Hillford","Hardersfield"];
	}

	city_arr.sort();

	for (let i=0; i < city_arr.length; i++) {
		cityElement.options[cityElement.length] = new Option(city_arr[i]);
	}
}
