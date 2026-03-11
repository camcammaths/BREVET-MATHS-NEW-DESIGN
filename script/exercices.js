
const BANK={
  probabilites:[
    {title:"Probabilités — Urne boules noires et rouges",notion:"Probabilités",pts:22,
     source:"DNB Centres étrangers, 14 juin 2023",
     intro:"Une urne contient 3 boules noires (numérotées 1 à 3) et 4 boules rouges (numérotées 1 à 4), toutes indiscernables au toucher.",
     questions:[
       {pts:6,text:"On pioche une boule. Quelle est la probabilité de tirer une boule rouge ?",ans:"P(rouge) = 4/7"},
       {pts:6,text:"Quelle est la probabilité de tirer une boule portant un nombre pair ?",ans:"Pairs : noire 2, rouges 2 et 4 → 3 boules paires sur 7. P = 3/7"},
       {pts:10,text:"On pioche une boule, on la remet, puis on pioche une seconde. On gagne en tirant la boule rouge n°1 ET une boule noire. Quelle est la probabilité de gagner ?",ans:"P(rouge1 puis noire) = 1/7 × 3/7 = 3/49. P(noire puis rouge1) = 3/7 × 1/7 = 3/49. P(gagner) = 6/49"}
     ]},
    {title:"Probabilités — Sac de boules et roue numérotée",notion:"Probabilités",pts:18,
     source:"DNB Polynésie, 23 juin 2023",
     intro:"Jeu 1 : sac de 5 boules (1 Noire, 2 Grises, 2 Pourpres). Jeu 2 : roue à 6 secteurs égaux numérotés 1 à 6.",
     questions:[
       {pts:5,text:"Jeu 1 : montrer que la probabilité de tirer une boule grise est 2/5.",ans:"2 boules G sur 5 au total → P(G) = 2/5 ✓"},
       {pts:5,text:"Jeu 2 : quelle est la probabilité de s'arrêter sur un nombre premier ?",ans:"Nombres premiers de 1 à 6 : 2, 3, 5 → 3 secteurs sur 6. P = 3/6 = 1/2"},
       {pts:8,text:"Jeu combiné : on tire une boule ET on tourne la roue. On gagne si boule grise ET nombre premier. Probabilité de gagner ?",ans:"Événements indépendants. P = 2/5 × 1/2 = 1/5"}
     ]},
    {title:"Probabilités — Roue et urne, nombres à deux chiffres",notion:"Probabilités",pts:20,
     source:"DNB Amérique du Sud, nov. 2023",
     intro:"Une roue à 4 secteurs égaux (1,2,3,4) donne le chiffre des dizaines. Une urne avec 3 boules (2,3,4) donne le chiffre des unités.",
     questions:[
       {pts:5,text:"Écrire la liste des 12 issues possibles.",ans:"12, 13, 14, 22, 23, 24, 32, 33, 34, 42, 43, 44"},
       {pts:5,text:"Quelle est la probabilité d'obtenir un nombre impair ?",ans:"Unités impaires = 3 → issues : 13, 23, 33, 43 → 4 issues. P = 4/12 = 1/3"},
       {pts:5,text:"Probabilité que le nombre formé soit un nombre premier inférieur à 30 ?",ans:"Nombres premiers parmi les issues : 13, 23 → 2 issues. P = 2/12 = 1/6"},
       {pts:5,text:"Montrer que la probabilité d'obtenir un multiple de 11 est 0,25.",ans:"Multiples de 11 parmi les issues : 22, 33, 44 → 3 issues. P = 3/12 = 1/4 = 0,25 ✓"}
     ]},
    {title:"Probabilités — Urne 15 boules numérotées",notion:"Probabilités",pts:20,
     source:"DNB Amérique du Nord, 29 mai 2024",
     intro:"Une urne contient 15 boules indiscernables numérotées de 1 à 15.",
     questions:[
       {pts:8,text:"L'affirmation 'la probabilité de tirer un nombre premier est 7/15' est-elle vraie ? Justifier.",ans:"Nombres premiers de 1 à 15 : 2,3,5,7,11,13 → 6 nombres (1 n'est pas premier). P = 6/15 = 2/5. L'affirmation est FAUSSE."},
       {pts:6,text:"Calculer la probabilité de tirer un multiple de 3.",ans:"Multiples de 3 de 1 à 15 : 3,6,9,12,15 → 5 boules. P = 5/15 = 1/3"},
       {pts:6,text:"Calculer la probabilité de tirer un multiple de 5.",ans:"Multiples de 5 de 1 à 15 : 5, 10, 15 → 3 boules. P = 3/15 = 1/5"}
     ]}
  ,
    {title:"Probabilités & Algorithmique — Digicode de la grand-mère de Léna",notion:"Probabilités",pts:19,
     source:"DNB Centres Étrangers, 16 juin 2025",
     intro:"Un digicode est composé d'une lettre A, B ou C suivie d'un chiffre entre 0 et 9.",
     questions:[
       {pts:2,text:"Proposer deux codes différents que Léna peut tester.",
        ans:"Exemples : A3 et B7 (tout code formé d'une lettre parmi A,B,C et d'un chiffre de 0 à 9 est valide)."},
       {pts:3,text:"Quelle est la probabilité que la grand-mère de Léna ait choisi la lettre C dans son code ?",
        ans:"Il y a 3 lettres possibles (A, B, C) et 10 chiffres possibles (0 à 9) → 3 × 10 = 30 codes possibles. Les codes avec la lettre C : C0, C1, …, C9 → 10 codes. P(lettre C) = 10/30 = 1/3."},
       {pts:3,text:"Montrer que la probabilité que la grand-mère ait choisi le chiffre 7 dans son code est 1/10.",
        ans:"Les codes avec le chiffre 7 : A7, B7, C7 → 3 codes sur 30. P(chiffre 7) = 3/30 = 1/10 ✓"},
       {pts:4,text:"La grand-mère aime les nombres premiers. Quelle est la probabilité que le code comporte un nombre premier ?",
        ans:"Nombres premiers entre 0 et 9 : 2, 3, 5, 7 → 4 chiffres. Codes avec un chiffre premier : 3 lettres × 4 chiffres = 12 codes. P(chiffre premier) = 12/30 = 2/5."},
       {pts:3,text:"Léna teste tous les codes (5 secondes par code). Réussira-t-elle en moins de 3 minutes ?",
        ans:"30 codes × 5 secondes = 150 secondes = 2 minutes 30 secondes. 2 min 30 s < 3 min → Oui, Léna réussira en moins de 3 minutes ✓"},
       {pts:2,text:"Le format de ce code garantit-il la sécurité ? Comment améliorer ce système ?",
        ans:"Non, 30 combinaisons seulement est très peu sécurisé (testable en 2min30). Pour améliorer : augmenter le nombre de caractères (ex: 4 caractères), élargir l'alphabet (lettres majuscules + chiffres), ou ajouter un délai entre les tentatives."},
       {pts:1,text:`<div>
  <div style="margin-bottom:10px">Voici le programme Scratch qui vérifie le code :</div>
  <div class="scratch-code" style="margin-bottom:12px">
    <div class="scratch-block" style="background:#FFAB19;color:#fff;padding:6px 12px;border-radius:12px 12px 0 0;font-size:13px">quand 🏁 est cliqué</div>
    <div class="scratch-block" style="background:#4C97FF;color:#fff;padding:5px 12px;font-size:12px">demander <span style="background:#fff;color:#333;border-radius:4px;padding:1px 6px">Saisir une lettre parmi A, B et C</span> et attendre</div>
    <div class="scratch-block" style="background:#FF8C1A;color:#fff;padding:5px 12px;font-size:12px">mettre <strong>lettre saisie</strong> à <span style="background:#EE7D16;border-radius:8px;padding:1px 6px">réponse</span></div>
    <div class="scratch-block" style="background:#4C97FF;color:#fff;padding:5px 12px;font-size:12px">demander <span style="background:#fff;color:#333;border-radius:4px;padding:1px 6px">Saisir un nombre entre 0 et 9</span> et attendre</div>
    <div class="scratch-block" style="background:#FF8C1A;color:#fff;padding:5px 12px;font-size:12px">mettre <strong>chiffre saisi</strong> à <span style="background:#EE7D16;border-radius:8px;padding:1px 6px">réponse</span></div>
    <div class="scratch-block" style="background:#FFAB19;color:#fff;padding:5px 12px;font-size:12px">si <span style="background:#5CB1D6;border-radius:4px;padding:2px 8px;font-size:11px"><strong>lettre saisie = B</strong> et <strong>chiffre saisi = 7</strong></span> alors</div>
    <div class="scratch-block" style="background:#9966FF;color:#fff;padding:5px 12px;margin-left:20px;font-size:12px">dire <span style="background:#fff;color:#333;border-radius:4px;padding:1px 6px">Code correct</span> pendant <span style="background:#5CB1D6;border-radius:8px;padding:1px 6px">2</span> secondes</div>
    <div class="scratch-block" style="background:#FFAB19;color:#fff;padding:5px 12px;font-size:12px">sinon</div>
    <div class="scratch-block" style="background:#9966FF;color:#fff;padding:5px 12px;margin-left:20px;font-size:12px">dire <span style="background:#fff;color:#333;border-radius:4px;padding:1px 6px">Code faux</span> pendant <span style="background:#5CB1D6;border-radius:8px;padding:1px 6px">2</span> secondes</div>
  </div>
  <div style="margin-top:10px"><strong>a.</strong> Léna saisit le code B5. Qu'affiche le programme ?</div>
</div>`,
        ans:"B5 : lettre=B ✓ mais chiffre=5 ≠ 7 → la condition n'est pas remplie → le programme affiche « Code faux »."},
       {pts:1,text:"<strong>b.</strong> D'après ce programme, quel est le code qui permet d'entrer dans la maison ?",
        ans:"La condition est (lettre=B ET chiffre=7) → le seul code correct est B7."}
     ]},
    {title:"Probabilités — Deux urnes A et B, nombres pairs, premiers et multiples",notion:"Probabilités",pts:20,
     source:"DNB Métropole, Juin 2025",
     intro:"On dispose d'une urne A contenant 6 boules numérotées : 7 ; 10 ; 12 ; 15 ; 24 ; 30 et d'une urne B contenant 9 boules numérotées : 2 ; 5 ; 6 ; 8 ; 17 ; 18 ; 21 ; 22 ; 25. Les boules sont indiscernables au toucher.",
     questions:[
       {pts:3,text:"On tire une boule dans l'urne A. Quelle est la probabilité d'obtenir un nombre pair ?",
        ans:"Nombres pairs dans A : 10, 12, 24, 30 → 4 boules paires sur 6. P(pair) = 4/6 = 2/3."},
       {pts:4,text:"On tire une boule dans l'urne B. Justifier que la probabilité d'obtenir un nombre premier est 1/3.",
        ans:"Nombres premiers dans B : 2 (premier), 5 (premier), 17 (premier). Les autres (6, 8, 18, 21, 22, 25) ne sont pas premiers. Il y a donc 3 nombres premiers sur 9 boules. P(premier) = 3/9 = 1/3 ✓"},
       {pts:4,text:"Quelle urne contient le plus grand nombre de boules dont le numéro est un multiple de 6 ?",
        ans:"Multiples de 6 dans A : 12, 24, 30 → 3 boules. Multiples de 6 dans B : 6, 18 → 2 boules. L'urne A contient le plus grand nombre de multiples de 6 (3 contre 2)."},
       {pts:5,text:"On tire une boule au hasard dans l'une des urnes. Démontrer que la probabilité d'obtenir un nombre supérieur ou égal à 20 est la même quelle que soit l'urne choisie.",
        ans:"Urne A : nombres ≥ 20 : 24, 30 → 2 boules sur 6. P_A(≥20) = 2/6 = 1/3.\nUrne B : nombres ≥ 20 : 21, 22, 25 → 3 boules sur 9. P_B(≥20) = 3/9 = 1/3.\nP_A = P_B = 1/3. La probabilité est la même quelle que soit l'urne ✓"},
       {pts:4,text:"On repart avec la composition initiale et on ajoute une boule numérotée 50 dans chacune des urnes. La probabilité d'obtenir un résultat ≥ 20 est-elle toujours égale quelle que soit l'urne ?",
        ans:"Urne A + 50 : nombres ≥ 20 : 24, 30, 50 → 3 sur 7. P_A(≥20) = 3/7.\nUrne B + 50 : nombres ≥ 20 : 21, 22, 25, 50 → 4 sur 10. P_B(≥20) = 4/10 = 2/5.\n3/7 ≠ 2/5 (car 15 ≠ 14). Non, les probabilités ne sont plus égales."}
     ]}],
  statistiques:[
    {title:"Statistiques — Prix des hôtels, moyenne et médiane",notion:"Statistiques",pts:20,
     source:"DNB Amérique du Nord, 31 mai 2023",
     intro:"Prix facturés pour une nuit dans les hôtels d'une ville :",
     tableData:{headers:["Prix/nuit (€)","60","80","85","90","110","120","350","500"],rows:[["Effectif","1200","1350","1000","1100","1200","1300","900","300"]]},
     questions:[
       {pts:5,text:"Déterminer l'étendue des prix facturés.",ans:"Étendue = 500 − 60 = 440 €"},
       {pts:8,text:"Calculer la moyenne des prix facturés pour une nuit (arrondir à l'euro près).",ans:"Somme pondérée = 972 000. Effectif total = 8350. Moyenne ≈ 116 €"},
       {pts:7,text:"L'association affirme : 'au moins la moitié des nuits est facturée à moins de 100 €'. Est-ce vrai ?",ans:"Effectifs ≤ 90 € : 1200+1350+1000+1100 = 4650 sur 8350 ≈ 55,7 % > 50 %. VRAI ✓"}
     ]},
    {title:"Statistiques — Ventes de pots de glace",notion:"Statistiques",pts:24,
     source:"DNB Asie, 19 juin 2023",
     intro:"Pots de glace vendus en juillet–août 2022 :",
     tableData:{headers:["","Sem. 1","Sem. 2","Sem. 3","Sem. 4"],rows:[["Juillet","453","649","786","854"],["Août","860","1003","957","838"]]},
     questions:[
       {pts:8,text:"Calculer le nombre moyen de pots vendus par semaine sur les 8 semaines.",ans:"Total = 453+649+786+854+860+1003+957+838 = 6400. Moyenne = 6400/8 = 800 pots/semaine"},
       {pts:8,text:"67 % des pots sont à 1 boule (2,80 €), les autres à 2 boules (3,50 €). Calculer la somme rapportée par la vente.",ans:"Pots 1 boule : 0,67×6400=4288 → 4288×2,80=12 006,40 €. Pots 2 boules : 2112 → 2112×3,50=7 392 €. Total = 19 398,40 €"},
       {pts:8,text:"Montrer que le volume d'une boule de glace de diamètre 4,2 cm est d'environ 39 cm³. (V = 4/3 × π × r³)",ans:"r = 2,1 cm. V = 4/3 × π × 2,1³ = 4/3 × π × 9,261 ≈ 38,79 cm³ ≈ 39 cm³ ✓"}
     ]},
    {title:"Statistiques — Lunettes de soleil et prix moyen",notion:"Statistiques",pts:20,
     source:"DNB Métropole Antilles-Guyane, 26 juin 2023",
     intro:"5 modèles de lunettes vendus en 2022 :",
     tableData:{headers:["Modèle","1","2","3","4","5"],rows:[["Paires vendues","1200","950","875","250","300"],["Prix unit. (€)","75","100","110","140","160"]]},
     questions:[
       {pts:5,text:"Montrer que l'étendue des prix est de 85 €.",ans:"Étendue = 160 − 75 = 85 € ✓"},
       {pts:7,text:"Calculer le nombre total de paires vendues en 2022.",ans:"Total = 1200+950+875+250+300 = 3 575 paires"},
       {pts:8,text:"Calculer le montant total des ventes et le prix moyen par paire (arrondi au centime).",ans:"Ventes = 1200×75+950×100+875×110+250×140+300×160 = 364 250 €. Prix moyen = 364 250/3575 ≈ 101,89 €"}
     ]},
    {title:"Statistiques — Prix vêtements, moyenne et médiane",notion:"Statistiques",pts:20,
     source:"DNB Amérique du Nord, 29 mai 2024",
     intro:"Prix d'un vêtement dans différents magasins (€) : 12 ; 15 ; 10 ; 7 ; 13",
     questions:[
       {pts:7,text:"La moyenne est-elle 11,40 € ? Justifier.",ans:"Moyenne = (7+10+12+13+15)/5 = 57/5 = 11,40 €. VRAIE ✓"},
       {pts:7,text:"La médiane est-elle 10 € ? Justifier.",ans:"Valeurs triées : 7, 10, 12, 13, 15. 3e valeur = 12 €. L'affirmation 'médiane = 10' est FAUSSE."},
       {pts:6,text:"Quelle est l'étendue des prix ?",ans:"Étendue = 15 − 7 = 8 €"}
     ]}
  ,
    {title:"Statistiques & Volumes — Colis de l'entreprise Transport Rapide",notion:"Statistiques",pts:19,
     source:"DNB Centres Étrangers, 16 juin 2025",
     intro:"L'entreprise « Transport Rapide » doit livrer cinq colis A, B, C, D et E ayant des masses différentes. Les colis ont la forme d'un pavé droit (longueur L, largeur l, hauteur h).",
     figure:`<div style="margin:14px 0;display:flex;flex-direction:column;gap:10px">
  <!-- Tableau masses -->
  <table style="font-size:13px;text-align:center">
    <tr><th>Nom du colis</th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr>
    <tr><td><strong>Masse en kg</strong></td><td>4</td><td>9</td><td>2</td><td>7</td><td>11</td></tr>
  </table>
  <!-- Figure pavé droit SVG -->
  <div style="display:flex;justify-content:center;padding:10px 0">
    <svg viewBox="0 0 280 160" width="280" height="160" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif">
      <!-- Pavé droit en perspective cavalière -->
      <!-- Face avant (rectangle) -->
      <polygon points="60,40 220,40 220,130 60,130" fill="#f5f5f0" stroke="#111" stroke-width="2"/>
      <!-- Face dessus -->
      <polygon points="60,40 100,10 260,10 220,40" fill="#ebebde" stroke="#111" stroke-width="2"/>
      <!-- Face droite -->
      <polygon points="220,40 260,10 260,100 220,130" fill="#e0e0d0" stroke="#111" stroke-width="2"/>
      <!-- Arêtes cachées en pointillés -->
      <line x1="60" y1="130" x2="100" y2="100" stroke="#555" stroke-width="1.2" stroke-dasharray="5,3"/>
      <line x1="100" y1="100" x2="260" y2="100" stroke="#555" stroke-width="1.2" stroke-dasharray="5,3"/>
      <line x1="100" y1="100" x2="100" y2="10"  stroke="#555" stroke-width="1.2" stroke-dasharray="5,3"/>
      <!-- Labels dimensions -->
      <!-- h : hauteur à gauche -->
      <line x1="44" y1="40"  x2="44" y2="130" stroke="#333" stroke-width="1" marker-start="url(#ah)" marker-end="url(#ah)"/>
      <text x="30" y="90" font-size="13" fill="#111" font-style="italic">h</text>
      <!-- l : largeur en bas à gauche (profondeur) -->
      <text x="54" y="152" font-size="13" fill="#111" font-style="italic">l</text>
      <!-- L : longueur en bas -->
      <line x1="60" y1="148" x2="220" y2="148" stroke="#333" stroke-width="1"/>
      <line x1="60" y1="143" x2="60"  y2="153" stroke="#333" stroke-width="1"/>
      <line x1="220" y1="143" x2="220" y2="153" stroke="#333" stroke-width="1"/>
      <text x="133" y="158" font-size="13" fill="#111" font-style="italic" text-anchor="middle">L</text>
    </svg>
  </div>
  <!-- Tableau dimensions -->
  <table style="font-size:13px;text-align:center">
    <tr><th>Colis</th><th>Longueur L (m)</th><th>Largeur l (m)</th><th>Hauteur h (m)</th></tr>
    <tr><td><strong>A</strong></td><td>0,4</td><td>0,3</td><td>0,5</td></tr>
    <tr><td><strong>B</strong></td><td>0,5</td><td>0,4</td><td>0,8</td></tr>
    <tr><td><strong>C</strong></td><td>0,3</td><td>0,1</td><td>0,5</td></tr>
    <tr><td><strong>D</strong></td><td>0,4</td><td>0,3</td><td>0,7</td></tr>
    <tr><td><strong>E</strong></td><td>0,5</td><td>0,4</td><td>0,6</td></tr>
  </table>
</div>`,
     questions:[
       {pts:3,text:"Calculer la moyenne des masses des colis en kg.",
        ans:"Moyenne = (4 + 9 + 2 + 7 + 11) / 5 = 33 / 5 = 6,6 kg"},
       {pts:4,text:"Déterminer la médiane des masses des colis en kg. Interpréter ce résultat.",
        ans:"Valeurs triées : 2 ; 4 ; 7 ; 9 ; 11. La valeur centrale (3ème sur 5) est 7. Médiane = 7 kg. Interprétation : la moitié des colis pèse moins de 7 kg et l'autre moitié plus de 7 kg."},
       {pts:4,text:"Le transporteur choisit au hasard un colis parmi les cinq. Calculer la probabilité qu'il sélectionne un colis dont la masse est inférieure à 8 kg.",
        ans:"Colis de masse < 8 kg : A (4 kg), C (2 kg), D (7 kg) → 3 colis sur 5. P = 3/5 = 0,6"},
       {pts:3,text:"Vérifier que le volume du colis E est de 0,12 m³.",
        ans:"V(E) = L × l × h = 0,5 × 0,4 × 0,6 = 0,12 m³ ✓"},
       {pts:3,text:`<div>
  <strong></strong>L'entreprise souhaite calculer la masse volumique d'un colis dont la formule est rappelée ci-dessous. Montrer que la masse volumique du colis E arrondie au dixième est 91,7 kg/m³.
  <div style="margin:10px 0;padding:10px 16px;font-size:13.5px">
    On rappelle que la formule qui permet de calculer la masse volumique d'un objet en kg/m³ est :<br><br>
    <div style="text-align:center;font-size:15px">
      <span style="display:inline-block;text-align:center">
        <span style="display:block;border-bottom:1.5px solid var(--ink);padding-bottom:3px">masse (en kg)</span>
        <span style="display:block;padding-top:3px">volume (en m³)</span>
      </span>
    </div>
  </div>
</div>`,
        ans:"Masse volumique de E = 11 / 0,12 = 91,666… ≈ 91,7 kg/m³ ✓"},
       {pts:2,text:"Le transporteur affirme : « Le colis E est plus lourd que le colis C, donc la masse volumique du colis E est plus grande que celle du colis C ». A-t-il raison ?",
        ans:"Non, il a tort. Masse volumique de C = 2 / (0,3×0,1×0,5) = 2 / 0,015 = 133,3 kg/m³. Or 133,3 > 91,7, donc la masse volumique de C est plus grande que celle de E, malgré que E soit plus lourd. La masse seule ne détermine pas la masse volumique."}
     ]}],
  geometrie:[
    {title:"Géométrie — Triangle LNA et triangles semblables",notion:"Géométrie",pts:22,
     source:"DNB Amérique du Nord, 31 mai 2023",
     intro:"AN = 13 cm, LN = 5 cm, AL = 12 cm, ON = 3 cm. O ∈ [LN], H ∈ [NA]. Triangles LNA et ONH semblables.",
     questions:[
       {pts:5,text:"Montrer que le triangle LNA est rectangle en L.",ans:"LN² + AL² = 25 + 144 = 169 = 13² = AN². Par réciproque de Pythagore, LNA est rectangle en L ✓"},
       {pts:7,text:"Montrer que OH = 7,2 cm.",ans:"Triangles semblables LNA et ONH : ON/LN = OH/AL → 3/5 = OH/12 → OH = 7,2 cm ✓"},
       {pts:10,text:"Calculer l'angle LNA (à l'unité). Calculer l'aire du quadrilatère LOHA et sa proportion par rapport à l'aire du triangle LNA.",ans:"sin(LNA) = AL/AN = 12/13 → angle LNA ≈ 67°. Aire LNA = (5×12)/2 = 30 cm². Aire ONH = (3×7,2)/2 = 10,8 cm². Aire LOHA = 30 − 10,8 = 19,2 cm². Proportion = 19,2/30 = 64 %"}
     ]},
    {title:"Géométrie — Piste d'hippodrome",notion:"Géométrie",pts:18,
     source:"DNB Amérique du Nord, 31 mai 2023",
     intro:"La piste est composée de 2 segments droits de 850 m et 2 demi-cercles de rayon 40 m.",
     questions:[
       {pts:5,text:"Montrer que la longueur d'un tour de piste est d'environ 1 951 m.",ans:"Droites = 2×850 = 1700 m. Cercle complet = 2π×40 ≈ 251,3 m. Total ≈ 1 951 m ✓"},
       {pts:7,text:"Un cheval parcourt un tour en 2 min 9 s. Calculer sa vitesse en m/s puis en km/h.",ans:"Durée = 129 s. v = 1951/129 ≈ 15 m/s. En km/h : 15 × 3,6 = 54 km/h"},
       {pts:6,text:"Aire de la piste ≈ 73 027 m². Marque B : 400 m²/sac à 87,90 €. Marque C : 300 m²/sac à 66,50 €. Quelle marque choisir pour un coût minimum ?",ans:"Sacs B : ⌈73027/400⌉=183 → 183×87,90≈16 086 €. Sacs C : ⌈73027/300⌉=244 → 244×66,50≈16 226 €. Choisir la marque B."}
     ]},
    {title:"Géométrie — Escalier et trigonométrie",notion:"Géométrie",pts:20,
     source:"DNB Métropole Antilles-Guyane, 26 juin 2023",
     intro:"Escalier de hauteur totale 272 cm. Hauteur d'une marche = 17 cm. Profondeur d'une marche = 27 cm.",
     questions:[
       {pts:5,text:"Montrer qu'il faut prévoir 16 marches.",ans:"272 ÷ 17 = 16 marches exactement ✓"},
       {pts:5,text:"Montrer que la longueur de la base AB est 432 cm.",ans:"16 × 27 = 432 cm ✓"},
       {pts:10,text:"Calculer l'angle BAC (au degré près). L'escalier permet-il une montée agréable (entre 25° et 40°) ?",ans:"tan(BAC) = BC/AB = 272/432 ≈ 0,630 → angle BAC ≈ 32°. 25° < 32° < 40° → montée agréable ✓"}
     ]},
    {title:"Géométrie — Triangles rectangles et parallélisme",notion:"Géométrie",pts:20,
     source:"DNB Amérique du Nord, 2025",
     intro:"La figure ci-dessous n'est pas en vraie grandeur. Les points A, B, E et M sont alignés. Les points A, C et D sont alignés. ADE est un triangle rectangle en E. ABC est un triangle rectangle en B. AD = 70 m, BC = 30 m, AC = 50 m, angle DME = 60°.",
     figure:`<div class="ex-figure" style="background:#fafaf8;padding:24px 16px"><svg viewBox="0 0 480 410" width="460" height="390" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif">
  <!-- Coordonnées calculées proportionnellement aux vraies mesures (scale=3.5)
       DE=42, AE=56, EM=24.25, AB=40, BC=30
       E=(80,260) D=(80,113) M=(164.9,260) A=(276,260) B=(416,260) C=(416,365) -->
  <!-- Segments principaux -->
  <line x1="80" y1="260" x2="80" y2="113" stroke="#111" stroke-width="2"/>
  <line x1="80" y1="113" x2="276" y2="260" stroke="#111" stroke-width="2"/>
  <line x1="80" y1="260" x2="416" y2="260" stroke="#111" stroke-width="2"/>
  <line x1="416" y1="260" x2="416" y2="365" stroke="#111" stroke-width="2"/>
  <line x1="276" y1="260" x2="416" y2="365" stroke="#111" stroke-width="2"/>
  <!-- DM pointille -->
  <line x1="164.9" y1="260" x2="80" y2="113" stroke="#111" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Angle droit en E -->
  <polyline points="80,247 93,247 93,260" fill="none" stroke="#111" stroke-width="1.5"/>
  <!-- Angle droit en B -->
  <polyline points="403,260 403,273 416,273" fill="none" stroke="#111" stroke-width="1.5"/>
  <!-- Arc 60 degres en M -->
  <path d="M 136.9,260 A 28,28 0 0,1 152.5,236" fill="none" stroke="#111" stroke-width="1.5"/>
  <text x="130" y="249" fill="#222" font-size="11.5" font-style="italic">60&#xB0;</text>
  <!-- Labels mesures -->
  <text font-size="12" fill="#333" text-anchor="middle" transform="translate(188,178) rotate(-37)">70 m</text>
  <text font-size="12" fill="#333" text-anchor="middle" transform="translate(353,320) rotate(37)">50 m</text>
  <text x="424" y="318" fill="#333" font-size="12">30 m</text>
  <!-- Points -->
  <circle cx="80"    cy="113" r="2.5" fill="#111"/>
  <circle cx="80"    cy="260" r="2.5" fill="#111"/>
  <circle cx="164.9" cy="260" r="2.5" fill="#111"/>
  <circle cx="276"   cy="260" r="2.5" fill="#111"/>
  <circle cx="416"   cy="260" r="2.5" fill="#111"/>
  <circle cx="416"   cy="365" r="2.5" fill="#111"/>
  <!-- Labels points -->
  <text x="70"  y="104" fill="#0a0a0a" font-weight="700" font-size="14">D</text>
  <text x="58"  y="278" fill="#0a0a0a" font-weight="700" font-size="14">E</text>
  <text x="156" y="278" fill="#0a0a0a" font-weight="700" font-size="14">M</text>
  <text x="272" y="250" fill="#0a0a0a" font-weight="700" font-size="14">A</text>
  <text x="421" y="256" fill="#0a0a0a" font-weight="700" font-size="14">B</text>
  <text x="421" y="382" fill="#0a0a0a" font-weight="700" font-size="14">C</text>
</svg></div>`,
     questions:[
       {pts:4,text:"Calculer la longueur AB.",ans:"Triangle ABC rectangle en B : AB² = AC² − BC² = 50² − 30² = 2500 − 900 = 1600. AB = 40 m"},
       {pts:4,text:"Montrer que les droites (DE) et (BC) sont parallèles.",ans:"ADE rectangle en E → angle AED = 90°. ABC rectangle en B → angle ABC = 90°. Les droites (DE) et (BC) sont toutes deux perpendiculaires à la droite (AB). Deux droites perpendiculaires à une même droite sont parallèles entre elles. Donc (DE) ∥ (BC)."},
       {pts:4,text:"Montrer que la longueur DE est égale à 42 m.",ans:"(DE) ∥ (BC) et A, B, E, M alignés et A, C, D alignés → triangles ADE et ABC semblables. DE/BC = AD/AC → DE = BC × AD/AC = 30 × 70/50 = 42 m ✓"},
       {pts:4,text:"Montrer que la longueur EM est environ égale à 24,2 m.",ans:"Triangle DME rectangle en E (angle DEA = 90° et E sur (AB)), angle DME = 60°. tan(60°) = DE/EM → EM = DE/tan(60°) = 42/√3 ≈ 24,2 m ✓"},
       {pts:4,text:"En déduire l'aire du triangle AMD.",ans:"AM = AE − EM. AE² = AD² − DE² = 70² − 42² = 4900 − 1764 = 3136 → AE = 56 m. AM = AE − EM = 56 − 24,2 = 31,8 m. Aire AMD = (1/2) × AM × DE = (1/2) × 31,8 × 42 ≈ 667,8 m²"}
     ]},
    {title:"Géométrie — Terrasse en béton",notion:"Géométrie",pts:21,
     source:"DNB Amérique du Nord, 29 mai 2024",
     intro:"Terrasse en L : EFGH rectangle (HG = 10 m, EH = 6 m). Un coin de 4 m × 3 m est découpé. Épaisseur de la dalle : 15 cm = 0,15 m.",
     questions:[
       {pts:5,text:"Montrer que FJ = 4 m.",ans:"EF = HG = 10 m. La partie restante mesure EH − 3 = 6 m de largeur. FJ = 10 − 6 = 4 m ✓"},
       {pts:8,text:"Calculer la longueur minimale de planches à acheter (périmètre de la terrasse en L).",ans:"Périmètre = 10 + 6 + 4 + 3 + 6 + 3 = 32 m"},
       {pts:8,text:"Calculer le volume de béton nécessaire. Les 4 m³ commandés suffisent-ils ?",ans:"Aire = 10×6 − 4×3 = 60 − 12 = 48 m². V = 48 × 0,15 = 7,2 m³. Non, 4 m³ ne suffisent pas."}
     ]}
  ,
    {title:"Géométrie — Triangles CDE et GF parallèles",notion:"Géométrie",pts:24,
     source:"DNB Asie, 2025",
     intro:"Dans la figure ci-contre qui n'est pas représentée en vraie grandeur : les points G, C et E sont alignés ; les points F, C et D sont alignés ; les droites (GF) et (DE) sont parallèles ; le triangle CDE est rectangle en D. CD = 21,6 cm, CE = 29,1 cm, FC = 17,2 cm.",
     figure:`<div class="ex-figure" style="background:#fafaf8;padding:20px"><svg viewBox="0 0 314 368" width="314" height="368" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif">
  <!--
    Coordonnées proportionnelles (scale=5 px/cm) :
    FC=17.2→86px, CD=21.6→108px, GF=15.5→78px, DE=19.5→98px
    G=(70,152), F=(70,230), C=(156,230), D=(264,230), E=(264,328)
    G,C,E parfaitement alignés ✓  —  GF∥DE (tous deux verticaux) ✓
  -->

  <!-- Segments -->
  <line x1="70"  y1="230" x2="264" y2="230" stroke="#111" stroke-width="2"/><!-- F-C-D horizontal -->
  <line x1="264" y1="230" x2="264" y2="328" stroke="#111" stroke-width="2"/><!-- D-E vertical -->
  <line x1="70"  y1="152" x2="264" y2="328" stroke="#111" stroke-width="2"/><!-- G-C-E diagonale -->
  <line x1="70"  y1="152" x2="70"  y2="230" stroke="#111" stroke-width="2"/><!-- G-F vertical -->

  <!-- Angles droits -->
  <polyline points="70,217 83,217 83,230"   fill="none" stroke="#111" stroke-width="1.5"/><!-- en F -->
  <polyline points="251,230 251,243 264,243" fill="none" stroke="#111" stroke-width="1.5"/><!-- en D -->

  <!-- Labels mesures -->
  <text x="113" y="222" fill="#333" font-size="11" text-anchor="middle">17,2 cm</text><!-- FC -->
  <text x="210" y="222" fill="#333" font-size="11" text-anchor="middle">21,6 cm</text><!-- CD -->
  <text x="278" y="279" fill="#333" font-size="11">19,5 cm</text><!-- DE -->
  <text font-size="11" fill="#333" text-anchor="middle" transform="translate(224,272) rotate(42)">29,1 cm</text><!-- CE -->

  <!-- Points -->
  <circle cx="70"  cy="152" r="2.5" fill="#111"/><!-- G -->
  <circle cx="70"  cy="230" r="2.5" fill="#111"/><!-- F -->
  <circle cx="156" cy="230" r="2.5" fill="#111"/><!-- C -->
  <circle cx="264" cy="230" r="2.5" fill="#111"/><!-- D -->
  <circle cx="264" cy="328" r="2.5" fill="#111"/><!-- E -->

  <!-- Labels points -->
  <text x="56"  y="148" fill="#0a0a0a" font-weight="700" font-size="14">G</text>
  <text x="52"  y="246" fill="#0a0a0a" font-weight="700" font-size="14">F</text>
  <text x="152" y="246" fill="#0a0a0a" font-weight="700" font-size="14">C</text>
  <text x="268" y="226" fill="#0a0a0a" font-weight="700" font-size="14">D</text>
  <text x="268" y="343" fill="#0a0a0a" font-weight="700" font-size="14">E</text>
</svg></div>`,
     questions:[
       {pts:5,text:"Montrer que la longueur DE est égale à 19,5 cm.",
        ans:"Triangle CDE rectangle en D. Théorème de Pythagore : DE² = CE² − CD² = 29,1² − 21,6² = 846,81 − 466,56 = 380,25. DE = √380,25 = 19,5 cm ✓"},
       {pts:5,text:"Calculer l'aire du triangle CDE.",
        ans:"Triangle rectangle en D : Aire = (CD × DE)/2 = (21,6 × 19,5)/2 = 421,2/2 = 210,6 cm²"},
       {pts:6,text:"Calculer la longueur GF arrondie au millimètre près.",
        ans:"(GF) ∥ (DE), G, C, E alignés et F, C, D alignés → triangles GFC et EDC semblables (Thalès). GF/DE = FC/CD → GF = DE × FC/CD = 19,5 × 17,2/21,6 ≈ 15,513 cm ≈ 15,5 cm"},
       {pts:4,text:`<div>
  <div style="font-size:14px;line-height:1.68;margin-bottom:10px">On trace une droite (d) perpendiculaire à (FC) avec un logiciel de géométrie dynamique. La droite (d) coupe le segment [GC] en A et le segment [FC] en B. En affichant l'aire du triangle ABC à l'aide du logiciel, on obtient 23,4 cm².</div>
  <div class="ex-figure" style="background:#fafaf8;padding:16px;margin-bottom:10px"><svg viewBox="0 0 400 300" width="380" height="285" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif">
    <!--
      G=(60,20), F=(60,124), C=(184,124), D=(340,124), E=(340,255)
      A=(140,86) sur [GC], B=(140,124) sur [FC]
      G,C,E collinéaires ✓  —  GF∥DE ✓  —  C à l'intersection de GE et FD ✓
    -->
    <!-- Triangle ABC ombré -->
    <polygon points="140,86 184,124 140,124" fill="rgba(0,47,167,0.08)" stroke="none"/>

    <!-- Segments principaux -->
    <line x1="60"  y1="124" x2="340" y2="124" stroke="#111" stroke-width="2"/><!-- F-C-D horizontal -->
    <line x1="340" y1="124" x2="340" y2="255" stroke="#111" stroke-width="2"/><!-- D-E vertical -->
    <line x1="60"  y1="20"  x2="340" y2="255" stroke="#111" stroke-width="2"/><!-- G-C-E diagonale -->
    <line x1="60"  y1="20"  x2="60"  y2="124" stroke="#111" stroke-width="2"/><!-- G-F vertical -->
    <!-- Droite (d) verticale par B -->
    <line x1="140" y1="8"   x2="140" y2="270" stroke="#555" stroke-width="1.5" stroke-dasharray="5,4"/>
    <!-- Triangle ABC en bleu -->
    <line x1="140" y1="86"  x2="140" y2="124" stroke="#002FA7" stroke-width="2.5"/><!-- AB -->
    <line x1="140" y1="86"  x2="184" y2="124" stroke="#002FA7" stroke-width="2.5"/><!-- AC -->
    <line x1="140" y1="124" x2="184" y2="124" stroke="#002FA7" stroke-width="2.5"/><!-- BC -->

    <!-- Angles droits -->
    <polyline points="60,111 73,111 73,124"   fill="none" stroke="#111" stroke-width="1.5"/><!-- en F -->
    <polyline points="327,124 327,137 340,137" fill="none" stroke="#111" stroke-width="1.5"/><!-- en D -->
    <polyline points="140,111 153,111 153,124" fill="none" stroke="#555" stroke-width="1.5"/><!-- en B (d⊥FC) -->

    <!-- Label Aire ABC -->
    <text x="175" y="72" fill="#002FA7" font-size="11" font-weight="600">Aire<tspan font-size="8.5" dy="2.5">ABC</tspan><tspan dy="-2.5"> = 23,4 cm²</tspan></text>
    <!-- Label droite d -->
    <text x="144" y="16" fill="#555" font-size="12" font-style="italic">d</text>

    <!-- Points -->
    <circle cx="60"  cy="20"  r="2.5" fill="#111"/>
    <circle cx="60"  cy="124" r="2.5" fill="#111"/>
    <circle cx="140" cy="86"  r="2.5" fill="#002FA7"/>
    <circle cx="140" cy="124" r="2.5" fill="#002FA7"/>
    <circle cx="184" cy="124" r="2.5" fill="#002FA7"/>
    <circle cx="340" cy="124" r="2.5" fill="#111"/>
    <circle cx="340" cy="255" r="2.5" fill="#111"/>

    <!-- Labels points -->
    <text x="48"  y="15"  fill="#0a0a0a" font-weight="700" font-size="13">G</text>
    <text x="42"  y="140" fill="#0a0a0a" font-weight="700" font-size="13">F</text>
    <text x="126" y="80"  fill="#002FA7" font-weight="700" font-size="13">A</text>
    <text x="126" y="140" fill="#002FA7" font-weight="700" font-size="13">B</text>
    <text x="182" y="140" fill="#002FA7" font-weight="700" font-size="13">C</text>
    <text x="344" y="120" fill="#0a0a0a" font-weight="700" font-size="13">D</text>
    <text x="344" y="270" fill="#0a0a0a" font-weight="700" font-size="13">E</text>
  </svg></div>
  <strong>Montrer que l'aire du triangle ABC est égale à 1/9 de l'aire du triangle CDE.</strong>
</div>`,
        ans:"Aire CDE = 210,6 cm². Aire ABC = 23,4 cm². Rapport = 23,4/210,6 = 1/9 ✓"},
       {pts:4,text:"On admet que les triangles ABC et EDC sont semblables. Déterminer la longueur AB.",
        ans:"Aire ABC/Aire EDC = 1/9 = (AB/DE)² → AB/DE = 1/3 → AB = 19,5/3 = 6,5 cm"}
     ]},
    {title:"Géométrie & Proportionnalité — Champ triangulaire et graines",notion:"Géométrie",pts:21,
     source:"DNB Centres Étrangers, 16 juin 2025",
     intro:"Un agriculteur cultive un champ représenté par le triangle ABC rectangle en B. Les points C, E et A sont alignés ; les points C, D et B sont alignés. AB = 600 m ; BC = 450 m ; CD = 270 m. Les parties A et B sont indépendantes.",
     figure:`<div style="margin:14px 0;display:flex;justify-content:center">
  <svg viewBox="0 0 340 320" width="320" height="300" xmlns="http://www.w3.org/2000/svg" font-family="Montserrat,sans-serif">
    <!--
      A=(30,260), B=(270,260), C=(270,20)
      D=(270,164) car CD=270m → D à 270*0.4=108px sous C → y=20+108=128... 
      Scale: BC=450m=240px → 1m=240/450=0.5333px
      CD=270m → 270*0.5333=144px → D à y=20+144=164 ✓
      BD=180m → 180*0.5333=96px → D à y=260-96=164 ✓
      E=(126,164) sur AC, CE/CA=3/5
    -->

    <!-- Triangle ABC principal -->
    <line x1="30"  y1="260" x2="270" y2="260" stroke="#111" stroke-width="2"/><!-- AB -->
    <line x1="270" y1="260" x2="270" y2="20"  stroke="#111" stroke-width="2"/><!-- BC -->
    <line x1="270" y1="20"  x2="30"  y2="260" stroke="#111" stroke-width="2"/><!-- CA -->

    <!-- Segment DE en pointillés -->
    <line x1="126" y1="164" x2="270" y2="164" stroke="#111" stroke-width="1.8" stroke-dasharray="6,3"/>

    <!-- Angle droit en B -->
    <polyline points="258,260 258,248 270,248" fill="none" stroke="#111" stroke-width="1.5"/>
    <!-- Angle droit en D -->
    <polyline points="258,164 258,176 270,176" fill="none" stroke="#111" stroke-width="1.5"/>

    <!-- Cote CD = 270 m : de C(270,20) à D(270,164), trait à gauche du segment BC -->
    <line x1="284" y1="20"  x2="284" y2="164" stroke="#555" stroke-width="1"/>
    <line x1="280" y1="20"  x2="288" y2="20"  stroke="#555" stroke-width="1"/>
    <line x1="280" y1="164" x2="288" y2="164" stroke="#555" stroke-width="1"/>
    <text x="298" y="97" font-size="10" fill="#444" text-anchor="middle" transform="rotate(90,298,97)">270 m</text>

    <!-- Cote CB = 450 m : de C(270,20) à B(270,260), trait plus à droite -->
    <line x1="308" y1="20"  x2="308" y2="260" stroke="#555" stroke-width="1"/>
    <line x1="304" y1="20"  x2="312" y2="20"  stroke="#555" stroke-width="1"/>
    <line x1="304" y1="260" x2="312" y2="260" stroke="#555" stroke-width="1"/>
    <text x="322" y="140" font-size="10" fill="#444" text-anchor="middle" transform="rotate(90,322,140)">450 m</text>

    <!-- AB = 600 m (en bas) -->
    <text x="150" y="278" font-size="10" fill="#444" text-anchor="middle">600 m</text>

    <!-- Points -->
    <circle cx="30"  cy="260" r="2.5" fill="#111"/>
    <circle cx="270" cy="260" r="2.5" fill="#111"/>
    <circle cx="270" cy="20"  r="2.5" fill="#111"/>
    <circle cx="270" cy="164" r="2.5" fill="#111"/>
    <circle cx="126" cy="164" r="2.5" fill="#111"/>

    <!-- Labels points -->
    <text x="16"  y="276" font-weight="700" font-size="13" fill="#111">A</text>
    <text x="274" y="276" font-weight="700" font-size="13" fill="#111">B</text>
    <text x="274" y="17"  font-weight="700" font-size="13" fill="#111">C</text>
    <text x="274" y="162" font-weight="700" font-size="13" fill="#111">D</text>
    <text x="108" y="160" font-weight="700" font-size="13" fill="#111">E</text>
  </svg>
</div>`,
     questions:[
       {pts:3,text:"Montrer que le segment [AC] mesure 750 mètres.",
        ans:"Triangle ABC rectangle en B. Théorème de Pythagore : AC² = AB² + BC² = 600² + 450² = 360 000 + 202 500 = 562 500. AC = √562 500 = 750 m ✓"},
       {pts:4,text:"<strong>Partie A — Q2a.</strong> Montrer que les droites (ED) et (AB) sont parallèles.",
        ans:"Les points C, D, B sont alignés et les points C, E, A sont alignés. CD/CB = 270/450 = 3/5. CE/CA = 450/750 = 3/5. Les rapports CD/CB et CE/CA sont égaux, donc par la réciproque du théorème de Thalès, (ED) // (AB) ✓"},
       {pts:3,text:"<strong>Partie A — Q2b.</strong> Montrer que le segment [DE] mesure 360 mètres.",
        ans:"(ED) // (AB), points C,D,B alignés, C,E,A alignés → Thalès : DE/AB = CD/CB = 270/450 = 3/5. DE = AB × 3/5 = 600 × 3/5 = 360 m ✓"},
       {pts:4,text:"<strong>Partie A — Q3.</strong> Montrer que l'aire du triangle CDE est 48 600 m².",
        ans:"Triangle CDE rectangle en D (car ED // AB et angle B = 90°). CD = 270 m, DE = 360 m. Aire = (CD × DE)/2 = (270 × 360)/2 = 97 200/2 = 48 600 m² ✓"},
       {pts:3,text:`<strong>Partie B — Q1.</strong> Un vendeur propose un mélange blé/seigle/pois selon le ratio 16:12:8. Montrer que ce mélange ne respecte pas l'indication 2.<br><br>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 0;font-size:13px">
  <div style="border:1px solid var(--rule);padding:8px"><strong>Indication 1 — Prix/kg</strong><br>Blé : 1,40 €/kg<br>Seigle : 1,30 €/kg<br>Pois : 2,10 €/kg</div>
  <div style="border:1px solid var(--rule);padding:8px"><strong>Indication 2 — Pour 10 000 m²</strong><br>Blé : 80 kg<br>Seigle : 60 kg<br>Pois : 50 kg</div>
</div>`,
        ans:"Indication 2 : Blé/Seigle/Pois = 80:60:50. Simplifions : divisons par 10 → 8:6:5. Le ratio du sac est 16:12:8 → divisons par 4 → 4:3:2. Or 8:6:5 ≠ 4:3:2 (le pois diffère : 5 ≠ 2×1). Le mélange ne respecte pas l'indication 2 ✓"},
       {pts:2,text:"<strong>Partie B — Q2.</strong> L'agriculteur sème sur le triangle CDE (48 600 m²). Il doit prévoir 388,80 kg de blé. Justifier ce calcul.",
        ans:"Pour 10 000 m² → 80 kg de blé. Pour 48 600 m² → 80 × (48 600/10 000) = 80 × 4,86 = 388,80 kg de blé ✓"},
       {pts:2,text:"<strong>Partie B — Q3.</strong> Budget : 1 500 €. Quantités : 388,80 kg blé, 291,6 kg seigle, 243 kg pois. L'agriculteur dispose-t-il d'un budget suffisant ?",
        ans:"Coût = 388,80×1,40 + 291,6×1,30 + 243×2,10 = 544,32 + 379,08 + 510,30 = 1 433,70 €. 1 433,70 € < 1 500 € → Oui, le budget est suffisant ✓"}
     ]},
    {title:"Géométrie & Statistiques — Aquathlon : course à pied et natation",notion:"Géométrie",pts:23,
     source:"DNB Métropole, Juin 2025",
     intro:`<div style="line-height:1.7">
  <div style="margin-bottom:8px">Cette année, les professeurs d'EPS proposent aux élèves un aquathlon (course à pied et natation).</div>
  <div style="font-weight:700;margin-bottom:4px">Partie A : La course à pied</div>
  <div>Le parcours est représenté par ACDEB avec le départ au point A et l'arrivée au point B. Les points A, C, B sont alignés. Les points A, D, E sont alignés. ADC est un triangle rectangle en A.<br>AC = 480 m &nbsp;·&nbsp; CB = 120 m &nbsp;·&nbsp; AE = 250 m &nbsp;·&nbsp; DE = 50 m</div>
</div>`,
     figure:`<div style="margin:14px 0;display:flex;justify-content:center">
  <svg viewBox="0 0 420 280" width="400" height="265" xmlns="http://www.w3.org/2000/svg" font-family="Montserrat,sans-serif">
    <!--
      Échelle : 1m = 0.5px
      A=(100,80) — angle droit en A
      C=(340,80) — AC=480m → 240px à droite de A
      B=(400,80) — CB=120m → 60px à droite de C
      D=(100,180) — AD=200m → 100px sous A (vertical)
      E=(100,205) — DE=50m → 25px sous D (vertical, AE=250)
    -->

    <!-- Cote 480m sur AC -->
    <line x1="100" y1="65" x2="340" y2="65" stroke="#555" stroke-width="0.8"/>
    <line x1="100" y1="61" x2="100" y2="69" stroke="#555" stroke-width="0.8"/>
    <line x1="340" y1="61" x2="340" y2="69" stroke="#555" stroke-width="0.8"/>
    <text x="220" y="60" font-size="11" fill="#444" text-anchor="middle">480 m</text>

    <!-- Cote 120m sur CB -->
    <line x1="340" y1="65" x2="400" y2="65" stroke="#555" stroke-width="0.8"/>
    <line x1="400" y1="61" x2="400" y2="69" stroke="#555" stroke-width="0.8"/>
    <text x="370" y="60" font-size="11" fill="#444" text-anchor="middle">120 m</text>

    <!-- Cote 250m sur AE (gauche) -->
    <line x1="80" y1="80" x2="80" y2="205" stroke="#555" stroke-width="0.8"/>
    <line x1="76" y1="80"  x2="84" y2="80"  stroke="#555" stroke-width="0.8"/>
    <line x1="76" y1="205" x2="84" y2="205" stroke="#555" stroke-width="0.8"/>
    <text x="60" y="148" font-size="11" fill="#444" text-anchor="middle">250 m</text>

    <!-- Cote 50m sur DE -->
    <line x1="88" y1="180" x2="88" y2="205" stroke="#555" stroke-width="0.8"/>
    <line x1="84" y1="180" x2="92" y2="180" stroke="#555" stroke-width="0.8"/>
    <line x1="84" y1="205" x2="92" y2="205" stroke="#555" stroke-width="0.8"/>
    <text x="70" y="197" font-size="11" fill="#444" text-anchor="middle">50 m</text>

    <!-- Segments principaux -->
    <!-- A-C-B (horizontal) -->
    <line x1="100" y1="80" x2="400" y2="80" stroke="#111" stroke-width="2"/>
    <!-- A-D-E (vertical) -->
    <line x1="100" y1="80" x2="100" y2="210" stroke="#111" stroke-width="2"/>
    <!-- CD (hypoténuse du triangle ADC) -->
    <line x1="340" y1="80" x2="100" y2="180" stroke="#111" stroke-width="2"/>
    <!-- BE (diagonale) -->
    <line x1="400" y1="80" x2="100" y2="205" stroke="#111" stroke-width="1.8" stroke-dasharray="6,3"/>
    <!-- CB en rouge léger pour le parcours -->
    <line x1="340" y1="80" x2="400" y2="80" stroke="#002FA7" stroke-width="2"/>

    <!-- Angle droit en A -->
    <polyline points="100,92 112,92 112,80" fill="none" stroke="#c00" stroke-width="1.5"/>

    <!-- Points -->
    <circle cx="100" cy="80"  r="2.5" fill="#111"/>
    <circle cx="340" cy="80"  r="2.5" fill="#111"/>
    <circle cx="400" cy="80"  r="2.5" fill="#111"/>
    <circle cx="100" cy="180" r="2.5" fill="#111"/>
    <circle cx="100" cy="205" r="2.5" fill="#111"/>

    <!-- Labels -->
    <text x="86"  y="78"  font-weight="700" font-size="13" fill="#111">A</text>
    <text x="338" y="74"  font-weight="700" font-size="13" fill="#111">C</text>
    <text x="404" y="78"  font-weight="700" font-size="13" fill="#111">B</text>
    <text x="104" y="186" font-weight="700" font-size="13" fill="#111">D</text>
    <text x="104" y="218" font-weight="700" font-size="13" fill="#111">E</text>
  </svg>
</div>`,
     questions:[
       {pts:3,text:"Justifier que AD = 200 m.",
        ans:"Les points A, D, E sont alignés donc AE = AD + DE → AD = AE − DE = 250 − 50 = 200 m."},
       {pts:4,text:"Calculer la longueur CD.",
        ans:"Le triangle ADC est rectangle en A. Théorème de Pythagore : CD² = AC² + AD² = 480² + 200² = 230 400 + 40 000 = 270 400. CD = √270 400 = 520 m."},
       {pts:5,text:"Les droites (CD) et (BE) sont-elles parallèles ?",
        ans:"Les points A, C, B sont alignés et A, D, E sont alignés. AC/AB = 480/600 = 4/5. AD/AE = 200/250 = 4/5. Les rapports AC/AB et AD/AE sont égaux → par la réciproque du théorème de Thalès, (CD) // (BE) ✓"},
       {pts:4,text:"La mesure de l'angle ACD est-elle supérieure à 20° ?",
        ans:"Dans le triangle ADC rectangle en A : tan(AĈD) = AD/AC = 200/480. AĈD = arctan(200/480) ≈ 22,6°. 22,6° > 20° ✓"},
       {pts:2,text:"Le parcours est-il validé ?",
        ans:"Le parcours est validé si : (1) (CD)//(BE) ✓ et (2) angle ACD > 20° ✓. Les deux conditions sont remplies → le parcours est validé ✓"},
       {pts:3,text:`<div>
  <div style="font-weight:700;margin-bottom:8px">Partie B : La natation</div>
  <div style="margin-bottom:8px">Concernant l'épreuve de natation, il s'agit de nager une distance de 200 m.<br>
  Voici les temps de 9 élèves : 5 min 30 s ; 5 min 45 s ; 5 min 49 s ; 5 min 50 s ; 6 min ; 6 min 11 s ; 6 min 12 s ; 6 min 20 s ; 6 min 40 s.</div>
  <strong>Quel est le temps médian de cette série ?</strong>
</div>`,
        ans:"La série est déjà ordonnée. Il y a 9 valeurs → la médiane est la 5ᵉ valeur : 6 min 00 s. La moitié des élèves a nagé en moins de 6 min et l'autre moitié en plus de 6 min."},
       {pts:2,text:"Un poisson rouge nage à 5 km/h. Nage-t-il plus vite que l'élève le plus rapide ?",
        ans:"Élève le plus rapide : 200 m en 5 min 30 s = 330 s. Vitesse = 200/330 ≈ 0,606 m/s = 0,606 × 3,6 ≈ 2,18 km/h. Vitesse poisson rouge = 5 km/h > 2,18 km/h → Oui, le poisson rouge nage plus vite que l'élève le plus rapide."}
     ]}],
  algebre:[
    {title:"Algèbre — Deux programmes de calcul (Amir & Sonia)",notion:"Algèbre",pts:15,
     source:"DNB Amérique du Nord, 31 mai 2023",
     intro:"Programme Amir : x → (x − 5) × 2. Programme Sonia : x → (x + 3) × x − 16.",
     figure:`<div style="margin:14px 0"><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px"><div><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--k);margin-bottom:6px">Programme Amir</div><div class="scratch-code"><div class="scratch-block sb-sensor">Demander <span class="scratch-val">x =</span> et attendre</div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">réponse − 5</span></div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">n × 2</span></div><div class="scratch-block sb-looks">Dire <span class="scratch-oval">n</span></div></div></div><div><div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#0d7a3e;margin-bottom:6px">Programme Sonia</div><div class="scratch-code"><div class="scratch-block sb-sensor">Demander <span class="scratch-val">x =</span> et attendre</div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">réponse + 3</span></div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">n × réponse</span></div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">n − 16</span></div><div class="scratch-block sb-looks">Dire <span class="scratch-oval">n</span></div></div></div></div></div>`,
     questions:[
       {pts:5,text:"Montrer que pour x = 6, Amir donne 2 et Sonia donne 38.",ans:"Amir : (6−5)×2 = 2 ✓. Sonia : (6+3)×6 − 16 = 54−16 = 38 ✓"},
       {pts:5,text:"Pour quel nombre les deux programmes donnent-ils le même résultat ?",ans:"Pour x = 2 : Amir = −6 et Sonia = −6. Les deux programmes sont égaux pour x = 2 (et x = −3)."},
       {pts:5,text:"Montrer que le résultat de Sonia s'écrit x² + 3x − 16. Résoudre (x − 2)(x + 3) = 0.",ans:"Sonia : (x+3)×x − 16 = x²+3x−16 ✓. (x−2)(x+3)=0 → x=2 ou x=−3"}
     ]},
    {title:"Algèbre — Fonctions affines et tarifs cinéma",notion:"Algèbre",pts:20,
     source:"DNB Amérique du Nord, 29 mai 2024",
     intro:"Tarif Classique : h(x) = 11x. Tarif Essentiel : f(x) = 50 + 5x. Tarif Liberté : g(x) = 240.",
     questions:[
       {pts:5,text:"Avec le tarif Classique, quel est le prix pour 3 entrées ?",ans:"h(3) = 11×3 = 33 €"},
       {pts:5,text:"Montrer qu'avec le tarif Essentiel, aller 8 fois au cinéma coûte 90 €.",ans:"f(8) = 50+5×8 = 90 € ✓"},
       {pts:5,text:"Quel tarif donne un prix proportionnel au nombre d'entrées ? Justifier.",ans:"Tarif Classique : h(x)=11x est une fonction linéaire → prix proportionnel au nombre d'entrées."},
       {pts:5,text:"À partir de combien d'entrées le tarif Liberté est-il le plus intéressant par rapport au tarif Essentiel ?",ans:"240 < 50+5x → 5x > 190 → x > 38. Le tarif Liberté est plus intéressant à partir de 39 entrées."}
     ]},
    {title:"Algèbre — Tarifs piscine et équation",notion:"Algèbre",pts:22,
     source:"DNB Métropole, 18 septembre 2023",
     intro:"Tarif A : 5,90 €/entrée. Tarif B : 30 € d'abonnement + 4,40 €/entrée.",
     questions:[
       {pts:6,text:"Calculer le prix pour 10 entrées avec chaque tarif.",ans:"Tarif A : 5,90×10 = 59 €. Tarif B : 4,40×10+30 = 74 €"},
       {pts:8,text:"Résoudre 5,90x = 4,40x + 30. Quel est le nombre d'entrées pour lequel les tarifs sont égaux ?",ans:"1,50x = 30 → x = 20 entrées"},
       {pts:8,text:"Pour x < 20, quel tarif est le moins cher ? Pour x > 20 ?",ans:"x < 20 : A=59€ < B=74€ → tarif A. x > 20 (ex. 30 entrées) : A=177€ > B=162€ → tarif B."}
     ]},
    {title:"Algèbre — Programme de calcul 10x²",notion:"Algèbre",pts:20,
     source:"DNB Amérique du Sud, nov. 2023",
     intro:"Programme Scratch : x → x² → ×5 → +4 → ×2 → −8",
     figure:`<div style="margin:14px 0"><div class="scratch-code"><div class="scratch-hat sb-event">🏁 Quand ⚑ est cliqué</div><div class="scratch-block sb-sensor">Demander <span class="scratch-val">Entrer x</span> et attendre</div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">réponse × réponse</span></div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">n × 5</span></div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">n + 4</span></div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">n × 2</span></div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">n</span> à <span class="scratch-oval">n − 8</span></div><div class="scratch-block sb-looks">Dire <span class="scratch-oval">n</span></div></div></div>`,
     questions:[
       {pts:5,text:"Montrer que pour x = 3, le résultat est 90.",ans:"3²=9 → ×5=45 → +4=49 → ×2=98 → −8=90 ✓"},
       {pts:5,text:"Montrer que pour x = 2 et x = −2, on obtient le même résultat.",ans:"(−2)²=4 = 2² → mêmes calculs ensuite → même résultat 40 ✓"},
       {pts:5,text:"Montrer que le résultat du programme s'écrit 10x².",ans:"x → x² → 5x² → 5x²+4 → 10x²+8 → 10x²+8−8 = 10x² ✓"},
       {pts:5,text:"Trouver la valeur exacte de l'antécédent positif de 30 par f(x) = 10x².",ans:"10x²=30 → x²=3 → x=√3 (valeur exacte)"}
     ]}
    ,{title:"Algèbre — Deux programmes de calcul A et B",notion:"Algèbre",pts:20,
     source:"DNB Amérique du Nord, 2025",
     intro:"On considère les deux programmes de calcul suivants :",
     figure:`<div style="margin:14px 0;display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start">
  <!-- Programme A -->
  <div style="border:1.5px solid var(--ink);overflow:hidden">
    <div style="background:var(--ink);padding:7px 14px;font-family:'Montserrat',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff">Programme A</div>
    <div style="padding:12px 16px;background:var(--bg2);display:flex;flex-direction:column;gap:0">
      <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--rule2)"><span style="width:18px;height:18px;background:var(--k);color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:800;flex-shrink:0">1</span><span style="font-size:13px">Choisir un nombre</span></div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--rule2)"><span style="width:18px;height:18px;background:var(--k);color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:800;flex-shrink:0">2</span><span style="font-size:13px">Multiplier par 3</span></div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--rule2)"><span style="width:18px;height:18px;background:var(--k);color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:800;flex-shrink:0">3</span><span style="font-size:13px">Ajouter 15</span></div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid var(--rule2)"><span style="width:18px;height:18px;background:var(--k);color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:800;flex-shrink:0">4</span><span style="font-size:13px">Diviser par 3</span></div>
      <div style="display:flex;align-items:center;gap:8px;padding:6px 0"><span style="width:18px;height:18px;background:var(--k);color:#fff;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:800;flex-shrink:0">5</span><span style="font-size:13px">Soustraire le nombre de départ</span></div>
    </div>
  </div>
  <!-- Programme B : diagramme en boîtes -->
  <div style="border:1.5px solid var(--ink);overflow:hidden">
    <div style="background:var(--ink);padding:7px 14px;font-family:'Montserrat',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff">Programme B</div>
    <div style="padding:16px 12px;background:var(--bg2);display:flex;flex-direction:column;align-items:center;gap:0;font-size:12px">
      <!-- Choisir un nombre -->
      <div style="border:1.5px solid var(--ink);background:#fff;padding:6px 18px;font-size:12px;font-weight:600;white-space:nowrap">Choisir un nombre</div>
      <!-- Flèches bifurcation -->
      <svg width="180" height="36" viewBox="0 0 180 36" style="display:block;overflow:visible">
        <line x1="90" y1="0" x2="90" y2="18" stroke="#111" stroke-width="1.5"/>
        <line x1="90" y1="18" x2="30" y2="18" stroke="#111" stroke-width="1.5"/>
        <line x1="90" y1="18" x2="150" y2="18" stroke="#111" stroke-width="1.5"/>
        <line x1="30" y1="18" x2="30" y2="36" stroke="#111" stroke-width="1.5"/>
        <line x1="150" y1="18" x2="150" y2="36" stroke="#111" stroke-width="1.5"/>
        <polygon points="26,32 34,32 30,36" fill="#111"/>
        <polygon points="146,32 154,32 150,36" fill="#111"/>
      </svg>
      <!-- Deux boîtes côte à côte -->
      <div style="display:flex;gap:16px;width:100%;justify-content:center">
        <div style="border:1.5px solid var(--ink);background:#fff;padding:6px 12px;font-size:12px;font-weight:600;white-space:nowrap">Soustraire 1</div>
        <div style="border:1.5px solid var(--ink);background:#fff;padding:6px 12px;font-size:12px;font-weight:600;white-space:nowrap">Soustraire 6</div>
      </div>
      <!-- Flèches convergence -->
      <svg width="180" height="36" viewBox="0 0 180 36" style="display:block;overflow:visible">
        <line x1="30" y1="0" x2="30" y2="18" stroke="#111" stroke-width="1.5"/>
        <line x1="150" y1="0" x2="150" y2="18" stroke="#111" stroke-width="1.5"/>
        <line x1="30" y1="18" x2="90" y2="18" stroke="#111" stroke-width="1.5"/>
        <line x1="150" y1="18" x2="90" y2="18" stroke="#111" stroke-width="1.5"/>
        <line x1="90" y1="18" x2="90" y2="36" stroke="#111" stroke-width="1.5"/>
        <polygon points="86,32 94,32 90,36" fill="#111"/>
      </svg>
      <!-- Multiplier -->
      <div style="border:1.5px solid var(--ink);background:#fff;padding:6px 8px;font-size:12px;font-weight:600;text-align:center">Multiplier les deux résultats obtenus</div>
      <!-- Flèche -->
      <svg width="20" height="24" viewBox="0 0 20 24" style="display:block">
        <line x1="10" y1="0" x2="10" y2="20" stroke="#111" stroke-width="1.5"/>
        <polygon points="6,16 14,16 10,24" fill="#111"/>
      </svg>
      <!-- Ajouter 5 -->
      <div style="border:1.5px solid var(--ink);background:#fff;padding:6px 18px;font-size:12px;font-weight:600">Ajouter 5</div>
    </div>
  </div>
</div>`,
     questions:[
       {pts:3,text:"Montrer que, lorsque le nombre choisi est 4, le résultat obtenu avec le programme A est 5.",ans:"4×3=12 → 12+15=27 → 27÷3=9 → 9−4=5 ✓"},
       {pts:3,text:"Montrer que, lorsque le nombre choisi est −2, le résultat obtenu avec le programme A est 5.",ans:"−2×3=−6 → −6+15=9 → 9÷3=3 → 3−(−2)=5 ✓"},
       {pts:5,text:"Justifier que l'affirmation suivante est vraie : « Le programme A donne toujours le même résultat. »",ans:"On prend x quelconque : x×3=3x → 3x+15 → (3x+15)÷3 = x+5 → x+5−x = 5. Le résultat est toujours 5, quel que soit x ✓"},
       {pts:4,text:"Lorsque le nombre choisi est 10, quel résultat obtient-on avec le programme B ?",ans:"10−1=9 et 10−6=4. Puis 9×4=36. Enfin 36+5=41"},
       {pts:5,text:"Il existe exactement deux nombres pour lesquels les programmes A et B fournissent des résultats identiques. Quels sont ces deux nombres ?",ans:"Programme A = 5. Programme B : (x−1)(x−6)+5 = 5 → (x−1)(x−6)=0 → x=1 ou x=6"}
     ]},
    {title:"Algèbre — Rectangle ABCD et carré EFGH",notion:"Algèbre",pts:20,
     source:"DNB Asie, 2025",
     intro:"Toutes les longueurs sont en centimètres. Rectangle ABCD : AD = x et AB = 16 − 2x. Carré EFGH : EF = 2x.",
     figure:`<div style="margin:14px 0;display:flex;gap:24px;align-items:flex-start;justify-content:center;flex-wrap:wrap">
  <!-- Rectangle ABCD -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
    <svg viewBox="0 0 220 100" width="220" height="100" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif">
      <!-- Rectangle -->
      <rect x="30" y="10" width="170" height="60" fill="none" stroke="#111" stroke-width="2"/>
      <!-- Angles droits -->
      <polyline points="30,22 42,22 42,10" fill="none" stroke="#111" stroke-width="1.2"/>
      <polyline points="188,22 188,10 200,10" fill="none" stroke="#111" stroke-width="1.2"/>
      <polyline points="30,58 42,58 42,70" fill="none" stroke="#111" stroke-width="1.2"/>
      <polyline points="188,58 188,70 200,70" fill="none" stroke="#111" stroke-width="1.2"/>
      <!-- Marques côtés égaux - AB (double trait) -->
      <line x1="108" y1="6"  x2="112" y2="14" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="113" y1="6"  x2="117" y2="14" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="108" y1="66" x2="112" y2="74" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="113" y1="66" x2="117" y2="74" stroke="#002FA7" stroke-width="1.5"/>
      <!-- Marques côtés AD (simple trait oblique) -->
      <line x1="24" y1="37" x2="36" y2="43" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="194" y1="37" x2="206" y2="43" stroke="#002FA7" stroke-width="1.5"/>
      <!-- Flèche x sur côté gauche -->
      <line x1="12" y1="10" x2="12" y2="70" stroke="#555" stroke-width="1" marker-start="url(#arr)" marker-end="url(#arr)"/>
      <text x="4" y="44" fill="#222" font-size="12" font-style="italic">x</text>
      <!-- Labels points -->
      <text x="16" y="9"  fill="#111" font-weight="700" font-size="12">D</text>
      <text x="202" y="9" fill="#111" font-weight="700" font-size="12">C</text>
      <text x="16" y="84" fill="#111" font-weight="700" font-size="12">A</text>
      <text x="202" y="84" fill="#111" font-weight="700" font-size="12">B</text>
    </svg>
    <!-- Label 16-2x en dessous -->
    <div style="display:flex;align-items:center;gap:4px;font-size:13px">
      <span style="display:inline-block;width:170px;border-bottom:1px solid #555;position:relative;text-align:center">
        <span style="position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);white-space:nowrap;font-style:italic">16 − 2<em>x</em></span>
      </span>
    </div>
    <div style="height:16px"></div>
  </div>
  <!-- Carré EFGH -->
  <div style="display:flex;flex-direction:column;align-items:center;gap:6px">
    <svg viewBox="0 0 120 120" width="120" height="120" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif">
      <!-- Carré -->
      <rect x="20" y="10" width="80" height="80" fill="none" stroke="#111" stroke-width="2"/>
      <!-- Angles droits -->
      <polyline points="20,22 32,22 32,10" fill="none" stroke="#111" stroke-width="1.2"/>
      <polyline points="88,22 88,10 100,10" fill="none" stroke="#111" stroke-width="1.2"/>
      <polyline points="20,78 32,78 32,90" fill="none" stroke="#111" stroke-width="1.2"/>
      <polyline points="88,78 88,90 100,90" fill="none" stroke="#111" stroke-width="1.2"/>
      <!-- Marques double oblique sur les 4 côtés -->
      <line x1="57" y1="5"  x2="61" y2="15" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="62" y1="5"  x2="66" y2="15" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="57" y1="85" x2="61" y2="95" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="62" y1="85" x2="66" y2="95" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="14" y1="47" x2="26" y2="53" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="14" y1="52" x2="26" y2="58" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="94" y1="47" x2="106" y2="53" stroke="#002FA7" stroke-width="1.5"/>
      <line x1="94" y1="52" x2="106" y2="58" stroke="#002FA7" stroke-width="1.5"/>
      <!-- Labels points -->
      <text x="6"  y="9"   fill="#111" font-weight="700" font-size="12">H</text>
      <text x="102" y="9"  fill="#111" font-weight="700" font-size="12">G</text>
      <text x="6"  y="104" fill="#111" font-weight="700" font-size="12">E</text>
      <text x="102" y="104" fill="#111" font-weight="700" font-size="12">F</text>
    </svg>
    <div style="font-size:13px;font-style:italic;text-align:center">2<em>x</em></div>
  </div>
</div>`,
     questions:[
       {pts:2,text:"<strong>Partie A — x = 1,5 cm.</strong><br>Calculer le périmètre du carré EFGH.",
        ans:"EF = 2×1,5 = 3 cm. Périmètre = 4×3 = 12 cm"},
       {pts:2,text:"Partie A — Calculer AB.",
        ans:"AB = 16 − 2×1,5 = 16 − 3 = 13 cm"},
       {pts:3,text:"Partie A — Les périmètres de ABCD et EFGH sont-ils égaux ?",
        ans:"Périmètre ABCD = 2×(AB+AD) = 2×(13+1,5) = 2×14,5 = 29 cm. Périmètre EFGH = 12 cm. Non, ils ne sont pas égaux."},
       {pts:4,text:`<strong>Partie B — Q1a.</strong> Quel formule a-t-on pu saisir dans la cellule B2 avant de l'étirer jusqu'à G2 ?<br><br>
<table style="font-size:12px;text-align:center;margin:8px 0"><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th></tr><tr><td><strong>1</strong></td><td style="text-align:left">Valeur de x</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><td><strong>2</strong></td><td style="text-align:left">Périmètre du carré</td><td>8</td><td>16</td><td>24</td><td>32</td><td>40</td><td>48</td></tr><tr><td><strong>3</strong></td><td style="text-align:left">Périmètre du rectangle</td><td>30</td><td>28</td><td>26</td><td>24</td><td>22</td><td>20</td></tr></table>`,
        ans:"Formule B2 : =4*2*B1 ou =8*B1. En effet, périmètre carré = 4×EF = 4×2x = 8x."},
       {pts:2,text:"Partie B — Q1b. Ce tableau permet-il de trouver une valeur de x pour laquelle les deux périmètres sont égaux ?",
        ans:"Oui : pour x = 4, périmètre carré = 32 cm et périmètre rectangle = 24 cm… Non, les valeurs ne se croisent pas exactement dans le tableau. On observe que pour x=4 : carré=32 et rectangle=24. Entre x=3 et x=4 les valeurs se rapprochent. Le tableau ne donne pas de valeur exacte."},
       {pts:3,text:"Partie B — Q2a. Montrer que le périmètre du rectangle peut s'écrire −2x + 32.",
        ans:"Périmètre ABCD = 2×(AB + AD) = 2×(16−2x + x) = 2×(16−x) = 32 − 2x = −2x + 32 ✓"},
       {pts:4,text:"Partie B — Q2b. Déterminer la solution au problème par la résolution d'une équation.",
        ans:"Périmètre carré = périmètre rectangle : 8x = −2x + 32 → 10x = 32 → x = 3,2 cm. Vérification : périmètre carré = 8×3,2 = 25,6 cm ; périmètre rectangle = −2×3,2+32 = 25,6 cm ✓"}
     ]},
    {title:"Algèbre — Programme de calcul et fonction f(x) = −8x + 16",notion:"Algèbre",pts:21,
     source:"DNB Centres Étrangers, 2025",
     intro:"On considère le programme de calcul suivant : Choisir un nombre → Multiplier par −2 → Ajouter 4 → Multiplier par 4.",
     figure:`<div style="margin:14px 0">
  <!-- Programme de calcul -->
  <div style="display:inline-block;border:1.5px solid var(--ink);padding:12px 20px;margin-bottom:16px;font-size:13.5px;line-height:2">
    <div>• Choisir un nombre</div>
    <div>• Multiplier le nombre choisi par −2</div>
    <div>• Ajouter 4 au résultat</div>
    <div>• Multiplier le résultat obtenu par 4</div>
  </div>
</div>`,
     questions:[
       {pts:3,text:"Montrer que si l'on choisit 1 comme nombre de départ, le résultat obtenu est 8.",
        ans:"x=1 : 1 × (−2) = −2 → −2 + 4 = 2 → 2 × 4 = 8 ✓"},
       {pts:3,text:"Quel est le résultat si le nombre de départ est −2 ?",
        ans:"x=−2 : (−2) × (−2) = 4 → 4 + 4 = 8 → 8 × 4 = 32"},
       {pts:4,text:"Si l'on note x le nombre de départ, montrer que le résultat peut s'écrire −8x + 16.",
        ans:"Étape 1 : x × (−2) = −2x. Étape 2 : −2x + 4. Étape 3 : (−2x + 4) × 4 = −8x + 16 ✓"},
       {pts:4,text:"Résoudre l'équation −8x + 16 = 4, puis en déduire le nombre de départ qu'il faut choisir pour obtenir 4 comme résultat.",
        ans:"−8x + 16 = 4 → −8x = 4 − 16 → −8x = −12 → x = −12/(−8) = 3/2 = 1,5. Il faut choisir 1,5 comme nombre de départ pour obtenir 4."},
       {pts:7,text:`<div>
  <div style="margin-bottom:12px">Parmi les trois représentations graphiques ci-dessous, quelle est celle qui représente la fonction <em>f</em> définie par <em>f</em>(x) = −8x + 16 ? Expliquer la démarche.</div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:8px">
    <div style="text-align:center">
      <div style="font-size:11px;font-weight:700;margin-bottom:6px">Représentation graphique 1</div>
      <svg viewBox="0 0 140 215" width="140" height="215" xmlns="http://www.w3.org/2000/svg" style="border:1px solid #ccc;background:#fff">
        <line x1="0.0" y1="170" x2="120.0" y2="170" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="150" x2="120.0" y2="150" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="130" x2="120.0" y2="130" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="110" x2="120.0" y2="110" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="90" x2="120.0" y2="90" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="70" x2="120.0" y2="70" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="50" x2="120.0" y2="50" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="30" x2="120.0" y2="30" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="10" x2="120.0" y2="10" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="-10" x2="120.0" y2="-10" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="10" x2="0.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="20.0" y1="10" x2="20.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="40.0" y1="10" x2="40.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="60.0" y1="10" x2="60.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="80.0" y1="10" x2="80.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="100.0" y1="10" x2="100.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="120.0" y1="10" x2="120.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="-3.0" y1="190" x2="128.0" y2="190" stroke="#111" stroke-width="1.3"/>
        <line x1="100" y1="194" x2="100" y2="7" stroke="#111" stroke-width="1.3"/>
        <polygon points="128.0,190 122.0,187.5 122.0,192.5" fill="#111"/>
        <polygon points="100,6 97.5,13 102.5,13" fill="#111"/>
        <line x1="0.0" y1="188" x2="0.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="20.0" y1="188" x2="20.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="40.0" y1="188" x2="40.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="60.0" y1="188" x2="60.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="80.0" y1="188" x2="80.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="120.0" y1="188" x2="120.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="170" x2="102" y2="170" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="150" x2="102" y2="150" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="130" x2="102" y2="130" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="110" x2="102" y2="110" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="90" x2="102" y2="90" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="70" x2="102" y2="70" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="50" x2="102" y2="50" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="30" x2="102" y2="30" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="10" x2="102" y2="10" stroke="#111" stroke-width="0.8"/>
        <line x1="98" y1="-10" x2="102" y2="-10" stroke="#111" stroke-width="0.8"/>
        <text x="0.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−2.5</text>
        <text x="20.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−2</text>
        <text x="40.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−1.5</text>
        <text x="60.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−1</text>
        <text x="80.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−0.5</text>
        <text x="120.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">0.5</text>
        <text x="96" y="172.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">2</text>
        <text x="96" y="152.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">4</text>
        <text x="96" y="132.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">6</text>
        <text x="96" y="112.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">8</text>
        <text x="96" y="92.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">10</text>
        <text x="96" y="72.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">12</text>
        <text x="96" y="52.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">14</text>
        <text x="96" y="32.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">16</text>
        <text x="96" y="12.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">18</text>
        <line x1="20.0" y1="190.0" x2="120.0" y2="-10.0" stroke="#002FA7" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div style="text-align:center">
      <div style="font-size:11px;font-weight:700;margin-bottom:6px">Représentation graphique 2</div>
      <svg viewBox="0 0 140 215" width="140" height="215" xmlns="http://www.w3.org/2000/svg" style="border:1px solid #ccc;background:#fff">
        <line x1="0.0" y1="170" x2="120.0" y2="170" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="150" x2="120.0" y2="150" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="130" x2="120.0" y2="130" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="110" x2="120.0" y2="110" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="90" x2="120.0" y2="90" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="70" x2="120.0" y2="70" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="50" x2="120.0" y2="50" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="30" x2="120.0" y2="30" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="10" x2="120.0" y2="10" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="-10" x2="120.0" y2="-10" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="10" x2="0.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="20.0" y1="10" x2="20.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="40.0" y1="10" x2="40.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="60.0" y1="10" x2="60.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="80.0" y1="10" x2="80.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="100.0" y1="10" x2="100.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="120.0" y1="10" x2="120.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="-3.0" y1="190" x2="128.0" y2="190" stroke="#111" stroke-width="1.3"/>
        <line x1="60" y1="194" x2="60" y2="7" stroke="#111" stroke-width="1.3"/>
        <polygon points="128.0,190 122.0,187.5 122.0,192.5" fill="#111"/>
        <polygon points="60,6 57.5,13 62.5,13" fill="#111"/>
        <line x1="0.0" y1="188" x2="0.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="20.0" y1="188" x2="20.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="40.0" y1="188" x2="40.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="80.0" y1="188" x2="80.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="100.0" y1="188" x2="100.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="120.0" y1="188" x2="120.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="170" x2="62" y2="170" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="150" x2="62" y2="150" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="130" x2="62" y2="130" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="110" x2="62" y2="110" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="90" x2="62" y2="90" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="70" x2="62" y2="70" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="50" x2="62" y2="50" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="30" x2="62" y2="30" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="10" x2="62" y2="10" stroke="#111" stroke-width="0.8"/>
        <line x1="58" y1="-10" x2="62" y2="-10" stroke="#111" stroke-width="0.8"/>
        <text x="0.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−1.5</text>
        <text x="20.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−1</text>
        <text x="40.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−0.5</text>
        <text x="80.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">0.5</text>
        <text x="100.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">1</text>
        <text x="120.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">1.5</text>
        <text x="56" y="172.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">2</text>
        <text x="56" y="152.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">4</text>
        <text x="56" y="132.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">6</text>
        <text x="56" y="112.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">8</text>
        <text x="56" y="92.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">10</text>
        <text x="56" y="72.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">12</text>
        <text x="56" y="52.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">14</text>
        <text x="56" y="32.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">16</text>
        <text x="56" y="12.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">18</text>
        <line x1="20.0" y1="30.0" x2="100.0" y2="190.0" stroke="#002FA7" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div style="text-align:center">
      <div style="font-size:11px;font-weight:700;margin-bottom:6px">Représentation graphique 3</div>
      <svg viewBox="0 0 140 215" width="140" height="215" xmlns="http://www.w3.org/2000/svg" style="border:1px solid #ccc;background:#fff">
        <line x1="0.0" y1="170" x2="120.0" y2="170" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="150" x2="120.0" y2="150" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="130" x2="120.0" y2="130" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="110" x2="120.0" y2="110" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="90" x2="120.0" y2="90" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="70" x2="120.0" y2="70" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="50" x2="120.0" y2="50" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="30" x2="120.0" y2="30" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="10" x2="120.0" y2="10" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="-10" x2="120.0" y2="-10" stroke="#ddd" stroke-width="0.6"/>
        <line x1="0.0" y1="10" x2="0.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="20.0" y1="10" x2="20.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="40.0" y1="10" x2="40.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="60.0" y1="10" x2="60.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="80.0" y1="10" x2="80.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="100.0" y1="10" x2="100.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="120.0" y1="10" x2="120.0" y2="190" stroke="#ddd" stroke-width="0.6"/>
        <line x1="-3.0" y1="190" x2="128.0" y2="190" stroke="#111" stroke-width="1.3"/>
        <line x1="20" y1="194" x2="20" y2="7" stroke="#111" stroke-width="1.3"/>
        <polygon points="128.0,190 122.0,187.5 122.0,192.5" fill="#111"/>
        <polygon points="20,6 17.5,13 22.5,13" fill="#111"/>
        <line x1="0.0" y1="188" x2="0.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="40.0" y1="188" x2="40.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="60.0" y1="188" x2="60.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="80.0" y1="188" x2="80.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="100.0" y1="188" x2="100.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="120.0" y1="188" x2="120.0" y2="192" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="170" x2="22" y2="170" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="150" x2="22" y2="150" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="130" x2="22" y2="130" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="110" x2="22" y2="110" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="90" x2="22" y2="90" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="70" x2="22" y2="70" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="50" x2="22" y2="50" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="30" x2="22" y2="30" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="10" x2="22" y2="10" stroke="#111" stroke-width="0.8"/>
        <line x1="18" y1="-10" x2="22" y2="-10" stroke="#111" stroke-width="0.8"/>
        <text x="0.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">−0.5</text>
        <text x="40.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">0.5</text>
        <text x="60.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">1</text>
        <text x="80.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">1.5</text>
        <text x="100.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">2</text>
        <text x="120.0" y="203" font-size="7.5" fill="#444" text-anchor="middle" font-family="sans-serif">2.5</text>
        <text x="16" y="172.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">2</text>
        <text x="16" y="152.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">4</text>
        <text x="16" y="132.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">6</text>
        <text x="16" y="112.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">8</text>
        <text x="16" y="92.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">10</text>
        <text x="16" y="72.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">12</text>
        <text x="16" y="52.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">14</text>
        <text x="16" y="32.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">16</text>
        <text x="16" y="12.5" font-size="7.5" fill="#444" text-anchor="end" font-family="sans-serif">18</text>
        <line x1="20.0" y1="30.0" x2="100.0" y2="190.0" stroke="#002FA7" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</div>`,
        ans:"C'est la représentation graphique 3. Justification : f(x) = −8x + 16 a une ordonnée à l'origine de 16 (la droite coupe l'axe des y en 16) et une pente de −8 (décroissante). Graphique 1 : pente positive → non. Graphique 2 : coupe l'axe en y=8, pas 16 → non. Graphique 3 : coupe l'axe en y=16, pente négative, f(2)=0 ✓"}
     ]}],
    arithmetique:[
    {title:"Arithmétique — PGCD paniers de légumes",notion:"Arithmétique",pts:18,
     source:"DNB Nouvelle-Calédonie, déc. 2023",
     intro:"José dispose de 39 salades, 78 carottes et 51 aubergines. Il veut des paniers identiques utilisant tous les légumes.",
     questions:[
       {pts:6,text:"Décomposer 78 et 51 en produit de facteurs premiers.",ans:"78 = 2×3×13. 51 = 3×17"},
       {pts:6,text:"Calculer le PGCD(39, 78, 51) et en déduire le nombre maximal de paniers.",ans:"PGCD(39,78)=39. PGCD(39,51)=3. PGCD(39,78,51)=3. Maximum 3 paniers."},
       {pts:6,text:"José fait 13 paniers. Combien d'aubergines par panier ? Combien restera-t-il d'aubergines non utilisées ?",ans:"51÷13=3 reste 12. Chaque panier : 3 aubergines. 12 aubergines non utilisées."}
     ]},
    {title:"Arithmétique — PGCD lots figurines et autocollants",notion:"Arithmétique",pts:22,
     source:"DNB Centres étrangers, 14 juin 2023",
     intro:"195 figurines et 234 autocollants (234 = 2 × 3² × 13). Lots identiques, tout doit être utilisé.",
     questions:[
       {pts:6,text:"Peut-on faire 3 lots identiques ? Justifier.",ans:"195÷3=65 ✓. 234÷3=78 ✓. Oui, 3 est un diviseur commun."},
       {pts:8,text:"Décomposer 195 en facteurs premiers. Calculer PGCD(195, 234).",ans:"195 = 3×5×13. PGCD(195,234) = 3×13 = 39"},
       {pts:8,text:"Nombre maximal de lots ? Composition de chaque lot ?",ans:"Nombre max = 39 lots. Figurines/lot = 195/39 = 5. Autocollants/lot = 234/39 = 6."}
     ]},
    {title:"Arithmétique — PPCM course de karting",notion:"Arithmétique",pts:22,
     source:"DNB Polynésie, 23 juin 2023",
     intro:"Un pilote professionnel fait un tour en 60 s, un amateur en 72 s. Ils partent ensemble au même moment.",
     questions:[
       {pts:7,text:"Décomposer 60 et 72 en produit de facteurs premiers.",ans:"60 = 2²×3×5. 72 = 2³×3²"},
       {pts:8,text:"Au bout de combien de secondes se retrouveront-ils ensemble au départ pour la première fois ?",ans:"PPCM(60,72) = 2³×3²×5 = 360 s = 6 minutes"},
       {pts:7,text:"Combien de tours chacun aura-t-il effectués à ce moment ?",ans:"Professionnel : 360/60 = 6 tours. Amateur : 360/72 = 5 tours"}
     ]}
  ,
    {title:"Arithmétique & Volumes — Poissons, PGCD et aquariums",notion:"Arithmétique",pts:23,
     source:"DNB Asie, 9 juin 2025",
     intro:"Un magasin reçoit 650 poissons : 350 de type A et 300 de type B. La responsable veut les vendre par lots identiques (même nombre de chaque type, tous répartis).",
     figure:`<div style="margin:14px 0;display:flex;flex-direction:column;gap:10px">
  <div style="border:1.5px solid var(--ink);overflow:hidden">
    <div style="background:var(--k);padding:5px 14px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff">Partie A — Poissons A et B</div>
    <div style="padding:10px 14px;font-size:13.5px;line-height:1.65">350 poissons de type A · 300 poissons de type B<br>Lots identiques : même nombre de chaque type, tous répartis.</div>
  </div>
  <div style="border:1.5px solid var(--ink);overflow:hidden">
    <div style="background:var(--k);padding:5px 14px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff">Partie B — Poissons combattants &amp; Aquariums</div>
    <div style="padding:10px 14px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;font-size:13px">
      <div style="border:1px solid var(--rule);padding:8px;border-radius:2px"><strong>Aquarium 1</strong><br>Cylindre<br>Diamètre base = 30 cm<br>Hauteur = 25 cm</div>
      <div style="border:1px solid var(--rule);padding:8px;border-radius:2px"><strong>Aquarium 2</strong><br>Pavé droit<br>L = 28 cm · l = 28 cm<br>H = 30 cm</div>
      <div style="border:1px solid var(--rule);padding:8px;border-radius:2px;background:var(--bg2)"><strong>Rappels</strong><br>V pavé = L×l×H<br>V cylindre = π×r²×H<br>1 dm³ = 1 L</div>
    </div>
  </div>
</div>`,
     questions:[
       {pts:3,qcm:true,correct:"B",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Partie A — Question 1 (QCM)</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:10px">Laquelle de ces propositions correspond à la décomposition en produits de facteurs premiers du nombre 300 ?</div>
  <table style="margin:0;font-size:13px;text-align:center">
    <tr><th>Proposition 1</th><th>Proposition 2</th><th>Proposition 3</th></tr>
    <tr><td>2² × 5 × 15</td><td>2² × 3 × 5²</td><td>22 × 3 × 5²</td></tr>
  </table>
</div>`,
        choices:[
          {letter:"A",text:"2² × 5 × 15"},
          {letter:"B",text:"2² × 3 × 5²"},
          {letter:"C",text:"22 × 3 × 5²"}
        ],
        ans:"Réponse B : 300 = 2² × 3 × 5² = 4 × 3 × 25 = 300 ✓. (Prop. 1 : 15 n'est pas premier. Prop. 3 : 22 n'est pas premier.)"},
       {pts:4,text:"Partie A — Q2. Donner la décomposition en produit de facteurs premiers du nombre 350.",
        ans:"350 = 2 × 175 = 2 × 5 × 35 = 2 × 5 × 5 × 7 = 2 × 5² × 7"},
       {pts:4,text:"Partie A — Q3. Quel est le nombre maximal de lots ? (Utiliser le PGCD)",
        ans:"300 = 2² × 3 × 5². 350 = 2 × 5² × 7. PGCD(300, 350) = 2 × 5² = 50. Nombre maximal de lots = 50."},
       {pts:3,text:"Partie A — Q4. Dans ce cas, combien y aura-t-il de poissons de chaque type dans chaque lot ?",
        ans:"Poissons A par lot = 350 ÷ 50 = 7. Poissons B par lot = 300 ÷ 50 = 6. Chaque lot contient 7 poissons de type A et 6 de type B."},
       {pts:6,text:"Partie B — Q1. Un aquarium doit contenir au moins 15 litres d'eau par poisson combattant. L'aquarium est rempli aux 4/5 de sa hauteur. Quel aquarium choisir ?",
        ans:"Aquarium 1 (cylindre) : r = 15 cm. V total = π × 15² × 25 ≈ 17 671 cm³ = 17,671 L. V eau = 4/5 × 17,671 ≈ 14,14 L < 15 L. ✗ Insuffisant.\nAquarium 2 (pavé) : V total = 28 × 28 × 30 = 23 520 cm³ = 23,52 L. V eau = 4/5 × 23,52 = 18,816 L ≥ 15 L. ✓ Choisir l'Aquarium 2."},
       {pts:3,text:"Partie B — Q2. Le poisson combattant coûte 15 € et l'aquarium 40 €. Le vendeur propose une remise de 15 % sur le prix total. Combien va payer la famille ?",
        ans:"Prix total = 15 + 40 = 55 €. Remise 15 % : 55 × 0,85 = 46,75 €. La famille paiera 46,75 €."}
     ]}],
  volumes:[
    {title:"Volumes — Bac à sable sous cabane",notion:"Volumes",pts:24,
     source:"DNB Centres étrangers, 14 juin 2023",
     intro:"Bac à sable (pavé droit) : 200 cm × 180 cm × 20 cm. Mélange sable maçonner / sable fin dans un ratio 3:2.",
     questions:[
       {pts:6,text:"Calculer le volume du bac à sable en cm³.",ans:"V = 200×180×20 = 720 000 cm³"},
       {pts:8,text:"Vérifier que le volume de sable maçonner est 0,432 m³ et de sable fin 0,288 m³.",ans:"Ratio 3:2 → 5 parts. Maçonner = 3/5×0,72 = 0,432 m³ ✓. Fin = 2/5×0,72 = 0,288 m³ ✓"},
       {pts:10,text:"Sacs maçonner : 35 kg / 0,022 m³ / 2,95 €. Sacs fin : 25 kg / 0,016 m³ / 5,95 €. Calculer le coût total (sacs entiers).",ans:"Sacs maçonner : ⌈0,432/0,022⌉=20 → 20×2,95=59 €. Sacs fin : ⌈0,288/0,016⌉=18 → 18×5,95=107,10 €. Total = 166,10 €"}
     ]},
    {title:"Volumes — Béton et ratio de mélange",notion:"Volumes",pts:21,
     source:"DNB Amérique du Nord, 29 mai 2024",
     intro:"4 m³ de béton à réaliser. Ratio ciment : gravier : sable = 2 : 7 : 5. 1 m³ de béton nécessite 250 kg de ciment.",
     questions:[
       {pts:7,text:"Calculer la masse de ciment nécessaire pour 4 m³ de béton.",ans:"4×250 = 1 000 kg de ciment"},
       {pts:7,text:"Calculer la masse de gravier et de sable pour 4 m³.",ans:"1 part ciment = 1000/2 = 500 kg. Gravier = 7×500 = 3 500 kg. Sable = 5×500 = 2 500 kg"},
       {pts:7,text:"On peint 48 m² en 2 couches (1 L pour 5 m²/couche). Pots B = 10 L à 129,90 €, offre : −50% sur le 2e identique. Quel est le choix le moins cher ?",ans:"Volume = 2×48/5 = 19,2 L. 2 pots B : 129,90+64,95=194,85 € pour 20 L. C'est suffisant et le moins cher."}
     ]},
    {title:"Volumes — Rampe d'accès prisme triangulaire",notion:"Volumes",pts:20,
     source:"DNB Polynésie, septembre 2023",
     intro:"Rampe en forme de prisme triangulaire : AC = 30 cm (hauteur), angle ACB = 90°, AB = 124 cm, longueur BE = 9 m.",
     questions:[
       {pts:6,text:"Montrer que BC ≈ 120 cm.",ans:"BC = √(AB²−AC²) = √(15376−900) = √14476 ≈ 120,3 cm ≈ 120 cm ✓"},
       {pts:6,text:"Calculer l'angle ABC (au degré près).",ans:"tan(ABC) = AC/BC = 30/120 = 0,25 → angle ABC ≈ 14°"},
       {pts:8,text:"Les propriétaires prévoient 2 m³ de béton. Ce volume suffit-il pour la rampe ?",ans:"Aire base = (1/2)×120×30 = 1800 cm² = 0,18 m². V rampe = 0,18×9 = 1,62 m³ < 2 m³. Oui, suffisant ✓"}
     ]},
    {title:"Volumes — Bougies cylindriques",notion:"Volumes",pts:16,
     source:"DNB Amérique du Sud, nov. 2023",
     intro:"Bougie cylindrique : rayon 3 cm, hauteur 12 cm. Volume de cire = 9/10 du volume total. Densité de la cire = 0,7 g/cm³.",
     questions:[
       {pts:6,text:"Montrer que le volume d'une bougie est d'environ 339 cm³.",ans:"V = π×3²×12 = 108π ≈ 339,3 cm³ ≈ 339 cm³ ✓"},
       {pts:5,text:"Calculer la masse de cire nécessaire pour une bougie (au gramme près).",ans:"V cire = 9/10×339 = 305,1 cm³. Masse = 305,1×0,7 ≈ 214 g"},
       {pts:5,text:"Objectif production : moyenne de 7 900 bougies/mois sur 3 mois. Janvier : 6 500. Février : 8 000. Combien faut-il en produire en mars ?",ans:"Total objectif = 7900×3 = 23 700. Déjà produit = 6500+8000 = 14500. Mars = 9 200 bougies"}
     ]}
  ],
  algorithmique:[
    {title:"Algorithmique — Motif Fleur (Scratch)",notion:"Algorithmique",pts:20,
     source:"DNB Amérique du Nord, 31 mai 2023",
     intro:"Le programme Scratch ci-dessous trace une fleur composée de 5 pétales en forme de parallélogramme (35 pas × 20 pas, angles 60° et 120°).",
     figure:`<div class="scratch-wrap"><div class="scratch-code"><div class="scratch-hat sb-event">🏁 Quand ⚑ est cliqué</div><div class="scratch-hat sb-looks">Définir <b>Pétale</b></div><div class="scratch-block sb-motion">Avancer de <span class="scratch-val">35</span> pas</div><div class="scratch-block sb-motion">Tourner ↺ de <span class="scratch-val">60</span> °</div><div class="scratch-block sb-motion">Avancer de <span class="scratch-val">20</span> pas</div><div class="scratch-block sb-motion">Tourner ↺ de <span class="scratch-val">120</span> °</div><div class="scratch-block sb-motion">… (répéter × 2)</div><div style="height:6px"></div><div class="scratch-hat sb-looks">Définir <b>Fleur</b></div><div class="scratch-repeat">Répéter <span class="scratch-val">5</span> fois<div class="scratch-repeat-body"><div class="scratch-block sb-looks">Pétale</div><div class="scratch-block sb-motion">Tourner ↻ de <span class="scratch-val">72</span> °</div></div></div><div class="scratch-block sb-looks">Fleur</div></div><div class="scratch-result"><div class="scratch-result-label">Résultat affiché</div><svg viewBox="-120 -120 240 240" width="160" height="160" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="0" rx="35" ry="18" fill="#ff6680" opacity=".85" stroke="#cc3355" stroke-width="1" transform="rotate(0)"/><ellipse cx="40" cy="0" rx="35" ry="18" fill="#ff6680" opacity=".85" stroke="#cc3355" stroke-width="1" transform="rotate(72)"/><ellipse cx="40" cy="0" rx="35" ry="18" fill="#ff6680" opacity=".85" stroke="#cc3355" stroke-width="1" transform="rotate(144)"/><ellipse cx="40" cy="0" rx="35" ry="18" fill="#ff6680" opacity=".85" stroke="#cc3355" stroke-width="1" transform="rotate(216)"/><ellipse cx="40" cy="0" rx="35" ry="18" fill="#ff6680" opacity=".85" stroke="#cc3355" stroke-width="1" transform="rotate(288)"/><circle cx="0" cy="0" r="6" fill="#ffcc00" stroke="#cc9900" stroke-width="1"/></svg></div></div>`,
     questions:[
       {pts:6,text:"Expliquer pourquoi le bloc Fleur utilise 72° entre chaque pétale.",ans:"360° ÷ 5 pétales = 72°. Cela garantit un placement régulier sur tout le tour."},
       {pts:7,text:"Combien de fois le bloc Pétale est-il exécuté pour dessiner une fleur complète ?",ans:"5 fois (5 rotations de 72° = 360° → retour à la position initiale)."},
       {pts:7,text:"On modifie le programme pour une fleur à 6 pétales. Quelles modifications apporter ?",ans:"Nombre de répétitions : 6. Angle de rotation : 360°/6 = 60°."}
     ]},
    {title:"Algorithmique — Carrés imbriqués avec Scratch",notion:"Algorithmique",pts:19,
     source:"DNB Polynésie, septembre 2023",
     intro:"Le programme Scratch ci-dessous trace 10 carrés emboîtés. Le côté du premier carré mesure 300 pixels. À chaque itération, le côté est multiplié par 0,8.",
     figure:`<div class="scratch-wrap"><div class="scratch-code"><div class="scratch-hat sb-event">🏁 Quand ⚑ est cliqué</div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">Côté</span> à <span class="scratch-val">300</span></div><div class="scratch-repeat">Répéter <span class="scratch-val">10</span> fois<div class="scratch-repeat-body"><div class="scratch-repeat">Répéter <span class="scratch-val">4</span> fois<div class="scratch-repeat-body"><div class="scratch-block sb-motion">Avancer de <span class="scratch-oval">Côté</span> pas</div><div class="scratch-block sb-motion">Tourner ↻ de <span class="scratch-val">90</span> °</div></div></div><div class="scratch-block sb-motion">Tourner ↻ de <span class="scratch-val">10</span> °</div><div class="scratch-block sb-variable">Mettre <span class="scratch-oval">Côté</span> à <span class="scratch-oval">Côté × 0.8</span></div></div></div></div><div class="scratch-result"><div class="scratch-result-label">10 carrés imbriqués</div><svg viewBox="-160 -160 320 320" width="160" height="160" xmlns="http://www.w3.org/2000/svg"><rect x="-150" y="-150" width="300" height="300" fill="none" stroke="#002FA7" stroke-width="2"/><rect x="-120" y="-120" width="240" height="240" fill="none" stroke="#1a4fc4" stroke-width="2"/><rect x="-96" y="-96" width="192" height="192" fill="none" stroke="#3366cc" stroke-width="2"/><rect x="-76.8" y="-76.8" width="153.6" height="153.6" fill="none" stroke="#4d80d9" stroke-width="2"/><rect x="-61.4" y="-61.4" width="122.9" height="122.9" fill="none" stroke="#6699e6" stroke-width="2"/><rect x="-49.2" y="-49.2" width="98.3" height="98.3" fill="none" stroke="#80b3f0" stroke-width="2"/><rect x="-39.3" y="-39.3" width="78.6" height="78.6" fill="none" stroke="#99c6f5" stroke-width="2"/><rect x="-31.5" y="-31.5" width="62.9" height="62.9" fill="none" stroke="#b3d9f8" stroke-width="2"/><rect x="-25.2" y="-25.2" width="50.3" height="50.3" fill="none" stroke="#ccebfc" stroke-width="2"/><rect x="-20.1" y="-20.1" width="40.3" height="40.3" fill="none" stroke="#e6f5ff" stroke-width="2"/></svg></div></div>`,
     questions:[
       {pts:5,text:"Montrer que le côté du 2e carré mesure 240 pixels.",ans:"300 × 0,8 = 240 pixels ✓"},
       {pts:7,text:"Quelle est la longueur du côté du 10e carré (dernier) ? Arrondir au pixel.",ans:"300 × 0,8⁹ = 300 × 0,1342… ≈ 40 pixels"},
       {pts:7,text:"Quelle est la valeur de la variable Côté après 3 itérations de la boucle ?",ans:"300 → 240 → 192 → 153,6 ≈ 154 pixels"}
     ]}
  ,
    {title:"Algorithmique — Hexagone et triangles équilatéraux (Scratch)",notion:"Algorithmique",pts:17,
     source:"DNB Asie, 2025",
     intro:"Dans cet exercice, aucune justification n'est attendue. L'instruction « s'orienter à 90 » signifie que le lutin se dirige vers la droite.",
     figure:`<div style="margin:14px 0;display:flex;flex-direction:column;gap:16px">

  <!-- PARTIE A -->
  <div style="border:1.5px solid var(--ink);overflow:hidden">
    <div style="background:var(--ink);padding:5px 14px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff">Partie A — Motif triangle équilatéral</div>
    <div style="padding:12px 16px;display:grid;grid-template-columns:1fr auto;gap:16px;align-items:start">
      <div>
        <p style="font-size:13.5px;line-height:1.65;margin-bottom:10px">Un élève souhaite tracer un hexagone à partir de 6 triangles équilatéraux. Il commence par écrire le script du motif « triangle équilatéral » :</p>
        <div class="scratch-code">
          <div class="scratch-hat sb-looks">Définir <b>triangle équilatéral</b></div>
          <div class="scratch-block sb-control" style="background:#FFAB19">Répéter <span class="scratch-oval">?</span> fois</div>
          <div class="scratch-repeat-body" style="margin-left:16px">
            <div class="scratch-block sb-motion">Avancer de <span class="scratch-val">?</span> pas</div>
            <div class="scratch-block sb-motion">Tourner ↺ de <span class="scratch-val">?</span> degrés</div>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:12px">
        <div style="border:1px solid var(--rule);padding:8px;background:#fff">
          <svg viewBox="0 0 120 110" width="110" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="60,10 110,97 10,97" fill="none" stroke="#002FA7" stroke-width="2" stroke-linejoin="round"/>
          </svg>
        </div>
        <div style="border:1px solid var(--rule);padding:8px;background:#fff">
          <svg viewBox="-5 -5 130 120" width="110" height="105" xmlns="http://www.w3.org/2000/svg">
            <!-- Hexagone composé de 6 triangles équilatéraux -->
            <g transform="translate(60,55)">
              <line x1="0" y1="0" x2="50" y2="0" stroke="#002FA7" stroke-width="1.5"/>
              <line x1="0" y1="0" x2="25" y2="-43.3" stroke="#002FA7" stroke-width="1.5"/>
              <line x1="0" y1="0" x2="-25" y2="-43.3" stroke="#002FA7" stroke-width="1.5"/>
              <line x1="0" y1="0" x2="-50" y2="0" stroke="#002FA7" stroke-width="1.5"/>
              <line x1="0" y1="0" x2="-25" y2="43.3" stroke="#002FA7" stroke-width="1.5"/>
              <line x1="0" y1="0" x2="25" y2="43.3" stroke="#002FA7" stroke-width="1.5"/>
              <polygon points="50,0 25,-43.3 -25,-43.3 -50,0 -25,43.3 25,43.3" fill="none" stroke="#002FA7" stroke-width="1.5"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <!-- PARTIE B -->
  <div style="border:1.5px solid var(--ink);overflow:hidden">
    <div style="background:var(--ink);padding:5px 14px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff">Partie B — Hexagone régulier</div>
    <div style="padding:12px 16px">
      <p style="font-size:13.5px;line-height:1.65;margin-bottom:10px">Un autre élève souhaite tracer un hexagone régulier de 50 pas de côté. Il a écrit un programme avec un bloc « répéter A fois » à compléter avec 2 instructions parmi les 6 proposées :</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">
        <div class="scratch-block sb-motion" style="font-size:12px">Avancer de <span class="scratch-val">50</span> pas</div>
        <div class="scratch-block sb-motion" style="font-size:12px">Tourner ↙ de <span class="scratch-val">120</span> degrés</div>
        <div class="scratch-block sb-motion" style="font-size:12px">Tourner ↺ de <span class="scratch-val">60</span> degrés</div>
        <div class="scratch-block sb-motion" style="font-size:12px">Avancer de <span class="scratch-val">5</span> pas</div>
        <div class="scratch-block sb-motion" style="font-size:12px">Tourner ↙ de <span class="scratch-val">120</span> degrés</div>
        <div class="scratch-block sb-motion" style="font-size:12px">Tourner ↙ de <span class="scratch-val">60</span> degrés</div>
      </div>
      <div style="background:var(--bg2);padding:8px 12px;border-left:3px solid var(--k);font-size:12.5px;line-height:1.6">
        <strong>Rappel :</strong> Un hexagone régulier a des angles intérieurs de 120°. L'angle extérieur est donc 60°.
      </div>
    </div>
  </div>
</div>`,
     questions:[
       {pts:6,text:"Compléter les lignes 2, 3 et 4 du script pour que le lutin dessine un triangle équilatéral de côté 50 pas.",
        ans:"Ligne 2 : répéter <strong>3</strong> fois (un triangle a 3 côtés). Ligne 3 : avancer de <strong>50</strong> pas. Ligne 4 : tourner ↺ de <strong>120</strong> degrés (angle extérieur d'un triangle équilatéral = 360°/3 = 120°)."},
       {pts:5,text:"Les programmes A (tourne de 60°) et B (tourne de 120°) sont testés. Quel programme permet de tracer l'hexagone souhaité (composé de 6 triangles équilatéraux) ?",
        ans:"Le <strong>Programme A</strong> (tourner de 60°). En tournant de 60° entre chaque triangle, on obtient 6 triangles formant l'hexagone complet : 6 × 60° = 360°. Le programme B (120°) donne 3 triangles espacés."},
       {pts:6,text:"<strong>Partie B.</strong> Recopier le bloc « répéter » en remplaçant A par sa valeur et en le complétant avec 2 instructions pour tracer l'hexagone régulier de 50 pas de côté.",
        ans:"Répéter <strong>6</strong> fois (hexagone = 6 côtés). Instructions : avancer de <strong>50</strong> pas + tourner ↙ de <strong>60</strong> degrés (angle extérieur = 360°/6 = 60°, vers la droite = sens horaire ↙)."}
     ]}],
  situations:[
    {title:"Cinq situations indépendantes",notion:"Situations",pts:20,
     source:"DNB Amérique du Nord, 2025",
     intro:"Dans cet exercice, les cinq situations sont indépendantes. Chaque réponse doit être justifiée sauf indication contraire.",
     questions:[
       {pts:4,
        text:`<div style="margin-bottom:8px">
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Situation 1 — Probabilités</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:10px">Dans une urne de 40 boules indiscernables au toucher, 5 sont rouges, 20 sont vertes et 15 sont blanches. On tire au hasard une boule de l'urne.</div>
  <div style="font-weight:600">Calculer la probabilité d'obtenir une boule verte.</div>
</div>`,
        ans:"P(verte) = 20/40 = 1/2 = 0,5"},
       {pts:4,
        text:`<div style="margin-bottom:8px">
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Situation 2 — Arithmétique</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:10px">Décomposer en produit de facteurs premiers le nombre 1 050. <em style="color:var(--ink4);font-size:12px">(Aucune justification n'est attendue.)</em></div>
  <div style="font-weight:600">Donner la décomposition de 1 050.</div>
</div>`,
        ans:"1050 = 2 × 3 × 5² × 7"},
       {pts:4,
        text:`<div style="margin-bottom:8px">
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Situation 3 — Proportionnalité</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:10px">Un article coûte 25 €.</div>
  <div style="font-weight:600">Calculer son prix après une augmentation de 14 %.</div>
</div>`,
        ans:"25 × 1,14 = 28,50 €"},
       {pts:4,
        text:`<div style="margin-bottom:8px">
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Situation 4 — Géométrie &amp; Agrandissement</div>
  <div style="display:grid;grid-template-columns:1fr auto;gap:16px;align-items:center;margin-bottom:10px">
    <div style="font-size:14px;line-height:1.65">Le polygone 2 est un agrandissement du polygone 1. Le coefficient d'agrandissement est 2,5. L'aire du polygone 1 est égale à 7,5 cm².</div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex-shrink:0">
      <div style="display:flex;align-items:flex-end;gap:12px">
        <div style="text-align:center">
          <svg viewBox="0 0 80 80" width="72" height="72" xmlns="http://www.w3.org/2000/svg"><polygon points="10,70 70,70 70,35 40,10 10,35" fill="none" stroke="#111" stroke-width="2" stroke-linejoin="round"/></svg>
          <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:600;color:var(--ink4);letter-spacing:.5px">Polygone 2</div>
        </div>
        <div style="text-align:center">
          <svg viewBox="0 0 48 48" width="44" height="44" xmlns="http://www.w3.org/2000/svg"><polygon points="6,42 42,42 42,21 24,6 6,21" fill="none" stroke="#111" stroke-width="2" stroke-linejoin="round"/></svg>
          <div style="font-family:'Montserrat',sans-serif;font-size:10px;font-weight:600;color:var(--ink4);letter-spacing:.5px">Polygone 1</div>
        </div>
      </div>
    </div>
  </div>
  <div style="font-weight:600">Calculer l'aire du polygone 2.</div>
</div>`,
        ans:"Aire agrandie = aire initiale × k² = 7,5 × 2,5² = 7,5 × 6,25 = 46,875 cm²"},
       {pts:4,
        text:`<div style="margin-bottom:8px">
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Situation 5 — Statistiques</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:8px">Dans une classe de 3e, on note la répartition des tailles des élèves :</div>
  <table style="margin:0 0 10px;font-size:13px"><tr><th>Taille (cm)</th><th>152</th><th>157</th><th>160</th><th>162</th><th>165</th><th>170</th><th>174</th><th>180</th></tr><tr><td><strong>Effectif</strong></td><td>2</td><td>4</td><td>2</td><td>5</td><td>2</td><td>4</td><td>6</td><td>5</td></tr></table>
  <div style="font-weight:600">1. Quelle est la moyenne des tailles ? &nbsp;&nbsp; 2. Quelle est la médiane des tailles ?</div>
</div>`,
        ans:"Somme = 152×2+157×4+160×2+162×5+165×2+170×4+174×6+180×5 = 5016. Effectif total = 30. Moyenne = 5016/30 = 167,2 cm. Médiane : 15e et 16e valeurs → position 15 = 170 cm, position 16 = 170 cm. Médiane = 170 cm."}
     ]},
    {title:"QCM — Quatre questions indépendantes",notion:"Situations",pts:16,
     source:"DNB Asie, 2025",
     intro:"Cet exercice est un QCM. Aucune justification n'est demandée. Pour chaque question, cliquer sur la bonne réponse parmi les quatre propositions.",
     questions:[
       {pts:4,qcm:true,correct:"C",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 1 — Probabilités</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:4px">Dans une urne, on dispose de 4 boules bleues, 6 boules violettes, 7 boules rouges et 3 boules jaunes, toutes indiscernables au toucher. On tire une boule au hasard.<br><strong>Quelle est la probabilité d'obtenir une boule violette ?</strong></div>
</div>`,
        choices:[
          {letter:"A",text:"6/14"},
          {letter:"B",text:"1/4"},
          {letter:"C",text:"3/10"},
          {letter:"D",text:"14/20"}
        ],
        ans:"Réponse C. Total = 4+6+7+3 = 20 boules. P(violette) = 6/20 = 3/10 ✓"},
       {pts:4,qcm:true,correct:"B",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 2 — Proportionnalité</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:4px">Calculer 70 % d'une quantité revient à multiplier cette quantité par :</div>
</div>`,
        choices:[
          {letter:"A",text:"0,30"},
          {letter:"B",text:"0,70"},
          {letter:"C",text:"1,70"},
          {letter:"D",text:"1,30"}
        ],
        ans:"Réponse B. 70% = 70/100 = 0,70 ✓"},
       {pts:4,qcm:true,correct:"D",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 3 — Statistiques</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:4px">On considère la série suivante composée des 5 valeurs : 7 ; 18 ; 12 ; 13 ; 15.</div>
</div>`,
        choices:[
          {letter:"A",text:"L'étendue de cette série est 8"},
          {letter:"B",text:"La médiane de cette série est 12"},
          {letter:"C",text:"La moyenne de cette série est 53"},
          {letter:"D",text:"La moyenne de cette série est 13"}
        ],
        ans:"Réponse D. Valeurs triées : 7,12,13,15,18. Moyenne = 65/5 = 13 ✓. (Étendue = 11, médiane = 13, pas 12)"},
       {pts:4,qcm:true,correct:"C",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 4 — Algèbre &amp; Fonctions affines</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:8px;display:grid;grid-template-columns:1fr auto;gap:16px;align-items:center">
    <div>Une fonction affine <em>f</em> a pour représentation graphique la courbe 𝒞<sub>f</sub> ci-contre.<br><br><strong>L'expression de la fonction <em>f</em> est :</strong></div>
    <svg viewBox="-0.5 -0.5 4 5" width="150" height="188" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;border:1px solid var(--rule);background:#fff">
      <line x1="0" y1="0" x2="0" y2="4.5" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="1" y1="0" x2="1" y2="4.5" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="2" y1="0" x2="2" y2="4.5" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="3" y1="0" x2="3" y2="4.5" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="-0.5" y1="1" x2="3.5" y2="1" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="-0.5" y1="2" x2="3.5" y2="2" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="-0.5" y1="3" x2="3.5" y2="3" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="-0.5" y1="4" x2="3.5" y2="4" stroke="#e0e0e0" stroke-width="0.04"/>
      <line x1="-0.5" y1="0" x2="3.5" y2="0" stroke="#111" stroke-width="0.07"/>
      <line x1="0" y1="-0.3" x2="0" y2="4.5" stroke="#111" stroke-width="0.07"/>
      <polygon points="3.5,0 3.3,-0.07 3.3,0.07" fill="#111"/>
      <polygon points="0,-0.3 -0.07,-0.1 0.07,-0.1" fill="#111"/>
      <text x="0.88" y="0.22" font-size="0.2" fill="#888">1</text>
      <text x="1.88" y="0.22" font-size="0.2" fill="#888">2</text>
      <text x="2.88" y="0.22" font-size="0.2" fill="#888">3</text>
      <text x="-0.3" y="1.06" font-size="0.2" fill="#888">1</text>
      <text x="-0.3" y="2.06" font-size="0.2" fill="#888">2</text>
      <text x="-0.3" y="3.06" font-size="0.2" fill="#888">3</text>
      <line x1="0" y1="4" x2="2.3" y2="-0.6" stroke="#002FA7" stroke-width="0.12"/>
      <text x="1.55" y="1.9" font-size="0.24" fill="#002FA7" font-style="italic">𝒞f</text>
    </svg>
  </div>
</div>`,
        choices:[
          {letter:"A",text:"f(x) = 2x + 4"},
          {letter:"B",text:"f(x) = 4x − 2"},
          {letter:"C",text:"f(x) = −2x + 4"},
          {letter:"D",text:"f(x) = −4x + 2"}
        ],
        ans:"Réponse C : f(x) = −2x + 4. Ordonnée à l'origine = 4, la courbe coupe l'axe des x en 2. Pente = (0−4)/(2−0) = −2 ✓"}
     ]},
    {title:"QCM — Cinq questions (Arithmétique, Algo, Géométrie, Algèbre, Trigo)",notion:"Situations",pts:20,
     source:"DNB Centres Étrangers, 2025",
     intro:"Cet exercice est un QCM. Pour chaque question, une seule réponse est exacte. Aucune justification n'est demandée.",
     questions:[
       {pts:4,qcm:true,correct:"C",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 1 — Arithmétique</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:8px">La décomposition en produit de facteurs premiers de 120 est :</div>
</div>`,
        choices:[
          {letter:"A",text:"2 × 3 × 4 × 5"},
          {letter:"B",text:"15 × 2 × 2 × 2"},
          {letter:"C",text:"2³ × 3 × 5"},
          {letter:"D",text:"53 + 67"}
        ],
        ans:"Réponse C : 120 = 8×15 = 2³ × 3 × 5 ✓. (A : 4 n'est pas premier. B : 15 n'est pas premier. D : addition, pas une décomposition.)"},
       {pts:4,qcm:true,correct:"A",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 2 — Algorithmique & Tableur</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:8px">Dans la cellule A2, la formule <code style="background:var(--bg2);padding:1px 5px;border-radius:2px">= −4 * A1 − 12</code> a été saisie, puis étirée jusqu'à B2.</div>
  <table style="font-size:13px;text-align:center;margin-bottom:8px">
    <tr><th></th><th>A</th><th>B</th></tr>
    <tr><td><strong>1</strong></td><td>2</td><td>5</td></tr>
    <tr><td><strong>2</strong></td><td>−20</td><td>?</td></tr>
  </table>
  <div style="font-size:14px;font-weight:600">La valeur obtenue dans la cellule B2 est :</div>
</div>`,
        choices:[
          {letter:"A",text:"−32"},
          {letter:"B",text:"−20"},
          {letter:"C",text:"8"},
          {letter:"D",text:"68"}
        ],
        ans:"Réponse A : −32. La formule étirée vers la droite donne B2 = −4×B1−12 = −4×5−12 = −20−12 = −32 ✓"},
       {pts:4,qcm:true,correct:"D",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 3 — Géométrie & Homothétie</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:8px;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center">
    <div>Sur la figure ci-contre, le rapport de l'homothétie de centre O qui transforme le carré A en le carré B est :</div>
    <svg viewBox="0 0 160 80" width="160" height="80" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif" style="flex-shrink:0;border:1px solid var(--rule);background:#fff">
      <line x1="0" y1="0" x2="160" y2="0" stroke="#ddd" stroke-width="0.5"/>
      <line x1="0" y1="20" x2="160" y2="20" stroke="#ddd" stroke-width="0.5"/>
      <line x1="0" y1="40" x2="160" y2="40" stroke="#ddd" stroke-width="0.5"/>
      <line x1="0" y1="60" x2="160" y2="60" stroke="#ddd" stroke-width="0.5"/>
      <line x1="0" y1="80" x2="160" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="0" y1="0" x2="0" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="20" y1="0" x2="20" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="40" y1="0" x2="40" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="60" y1="0" x2="60" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="80" y1="0" x2="80" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="100" y1="0" x2="100" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="120" y1="0" x2="120" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="140" y1="0" x2="140" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <line x1="160" y1="0" x2="160" y2="80" stroke="#ddd" stroke-width="0.5"/>
      <!-- O en bas à gauche -->
      <circle cx="20" cy="60" r="2.5" fill="#111"/>
      <text x="14" y="75" font-size="10" fill="#111" font-weight="700">O</text>
      <!-- Carré A (côté 20px, centré en 70,40) tourné 45° -->
      <polygon points="70,26 84,40 70,54 56,40" fill="none" stroke="#111" stroke-width="1.5"/>
      <text x="66" y="44" font-size="10" fill="#111" font-weight="700">A</text>
      <!-- Carré B (côté 40px, centré en 110,40) tourné 45° -->
      <polygon points="110,12 138,40 110,68 82,40" fill="none" stroke="#111" stroke-width="1.5"/>
      <text x="106" y="44" font-size="10" fill="#111" font-weight="700">B</text>
    </svg>
  </div>
</div>`,
        choices:[
          {letter:"A",text:"−2"},
          {letter:"B",text:"−0,5"},
          {letter:"C",text:"0,5"},
          {letter:"D",text:"2"}
        ],
        ans:"Réponse D : 2. Le carré B est deux fois plus grand que le carré A, et O, A, B sont dans le même sens → rapport = 2 ✓"},
       {pts:4,qcm:true,correct:"A",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 4 — Algèbre & Factorisation</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:8px">Une écriture factorisée de 4x² − 1 est :</div>
</div>`,
        choices:[
          {letter:"A",text:"(2x − 1)(2x + 1)"},
          {letter:"B",text:"(4x − 1)(4x + 1)"},
          {letter:"C",text:"4(x − 1)(x + 1)"},
          {letter:"D",text:"(2x − 1)²"}
        ],
        ans:"Réponse A : (2x−1)(2x+1). Identité remarquable a²−b² = (a−b)(a+b) avec a=2x et b=1 → (2x−1)(2x+1) = 4x²−1 ✓"},
       {pts:4,qcm:true,correct:"B",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 5 — Trigonométrie</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:8px;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center">
    <div>Dans le triangle TER ci-contre, la mesure de la longueur RE arrondie au centième de cm est :</div>
    <svg viewBox="0 0 140 100" width="140" height="100" xmlns="http://www.w3.org/2000/svg" font-family="Barlow,sans-serif" style="flex-shrink:0">
      <!-- T=(15,15), E=(115,15), R=(55,64) — angle droit en R, angle 39° en E -->
      <line x1="15"  y1="15" x2="115" y2="15" stroke="#111" stroke-width="2"/>
      <line x1="115" y1="15" x2="55"  y2="64" stroke="#111" stroke-width="2"/>
      <line x1="55"  y1="64" x2="15"  y2="15" stroke="#111" stroke-width="2"/>
      <!-- Angle droit en R -->
      <polyline points="48,57 55,50 62,57" fill="none" stroke="#111" stroke-width="1.4"/>
      <!-- Arc 39° en E : de la direction ER vers ET -->
      <path d="M 101.1,26.4 A 18,18 0 0,0 97.0,15.0" fill="none" stroke="#555" stroke-width="1.3"/>
      <text x="84" y="28" font-size="9.5" fill="#333">39°</text>
      <!-- Label TE = 7,4 cm (texte seul, sans trait) -->
      <text x="65" y="11" font-size="10" fill="#333" text-anchor="middle">7,4 cm</text>
      <!-- Points -->
      <text x="4"   y="19" font-size="11" fill="#111" font-weight="700">T</text>
      <text x="118" y="19" font-size="11" fill="#111" font-weight="700">E</text>
      <text x="52"  y="82" font-size="11" fill="#111" font-weight="700">R</text>
    </svg>
  </div>
</div>`,
        choices:[
          {letter:"A",text:"4,66 cm"},
          {letter:"B",text:"5,75 cm"},
          {letter:"C",text:"9,28 cm"},
          {letter:"D",text:"6,12 cm"}
        ],
        ans:"Réponse B : 5,75 cm. Triangle TER rectangle en R, angle en E = 39°. cos(39°) = RE/TE → RE = TE × cos(39°) = 7,4 × cos(39°) ≈ 7,4 × 0,7771 ≈ 5,75 cm ✓"}
     ]},
    {title:"QCM — Cinq questions (Proportionnalité, Transformation, Pourcentage, Aire, Algèbre)",notion:"Situations",pts:18,
     source:"DNB Métropole, 26 juin 2025",
     intro:"Cet exercice est un QCM. Pour chaque question, une seule réponse est exacte. Aucune justification n'est demandée.",
     questions:[
       {pts:3,qcm:true,correct:"C",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 1 — Proportionnalité</div>
  <div style="font-size:14px;line-height:1.65">Le prix de 3 melons est 8,40 €. Combien coûtent 5 melons ?</div>
</div>`,
        choices:[
          {letter:"A",text:"16,40 €"},
          {letter:"B",text:"42 €"},
          {letter:"C",text:"14 €"},
          {letter:"D",text:"10,40 €"}
        ],
        ans:"Réponse C : 14 €. Prix d'un melon = 8,40 ÷ 3 = 2,80 €. Prix de 5 melons = 2,80 × 5 = 14 €."},
       {pts:3,qcm:true,correct:"C",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 2 — Transformations</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:10px">Quelle transformation permet de passer de la figure 1 à la figure 2 ?</div>
  <div style="display:flex;justify-content:center;margin-bottom:8px">
    <svg viewBox="0 0 260 160" width="260" height="160" xmlns="http://www.w3.org/2000/svg" font-family="Montserrat,sans-serif" style="border:1px solid var(--rule);background:#fff">
      <!-- Grille -->
      <defs><pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ddd" stroke-width="0.5"/></pattern></defs>
      <rect width="260" height="160" fill="url(#grid2)"/>
      <!-- Figure 1 : forme en L inversé, haut-gauche -->
      <polygon points="40,20 80,20 80,40 60,40 60,80 40,80" fill="#002FA7" fill-opacity="0.15" stroke="#002FA7" stroke-width="1.5"/>
      <text x="48" y="100" font-size="10" fill="#555">Figure 1</text>
      <!-- Figure 2 : même forme translatée bas-droite (~+120px +40px) -->
      <polygon points="160,60 200,60 200,80 180,80 180,120 160,120" fill="#002FA7" fill-opacity="0.15" stroke="#002FA7" stroke-width="1.5"/>
      <text x="168" y="140" font-size="10" fill="#555">Figure 2</text>
      <!-- Flèche de translation -->
      <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#888"/></marker></defs>
      <line x1="60" y1="50" x2="178" y2="88" stroke="#888" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#arr2)"/>
    </svg>
  </div>
</div>`,
        choices:[
          {letter:"A",text:"Une symétrie centrale"},
          {letter:"B",text:"Une rotation"},
          {letter:"C",text:"Une translation"},
          {letter:"D",text:"Une symétrie axiale"}
        ],
        ans:"Réponse C : Une translation. La figure 2 est l'image de la figure 1 par un déplacement sans rotation ni symétrie — c'est une translation."},
       {pts:3,qcm:true,correct:"A",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 3 — Pourcentage</div>
  <div style="font-size:14px;line-height:1.65">Un article coûte 350 €. Son prix augmente de 20 %. Quel est son nouveau prix ?</div>
</div>`,
        choices:[
          {letter:"A",text:"420 €"},
          {letter:"B",text:"330 €"},
          {letter:"C",text:"370 €"},
          {letter:"D",text:"280 €"}
        ],
        ans:"Réponse A : 420 €. Augmentation de 20 % → × 1,20. Nouveau prix = 350 × 1,20 = 420 €."},
       {pts:3,qcm:true,correct:"B",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 4 — Aire</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:10px;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center">
    <div>Quelle est l'aire du triangle rectangle ABC ?</div>
    <svg viewBox="0 0 195 115" width="185" height="108" xmlns="http://www.w3.org/2000/svg" font-family="Montserrat,sans-serif" style="flex-shrink:0">
      <!-- A=(53,20), B=(140,20), C=(140,85) — angle droit en B -->
      <line x1="53"  y1="20" x2="140" y2="20"  stroke="#111" stroke-width="2"/><!-- AB -->
      <line x1="140" y1="20" x2="140" y2="85"  stroke="#111" stroke-width="2"/><!-- BC -->
      <line x1="53"  y1="20" x2="140" y2="85"  stroke="#111" stroke-width="2"/><!-- AC -->
      <!-- Angle droit en B -->
      <polyline points="128,20 128,32 140,32" fill="none" stroke="#c00" stroke-width="1.4"/>
      <!-- Labels côtés -->
      <text x="93"  y="14"  font-size="11" fill="#333" text-anchor="middle">6 cm</text>
      <text x="156" y="57"  font-size="11" fill="#333">4,5 cm</text>
      <text x="84"  y="66"  font-size="11" fill="#333" text-anchor="middle" transform="rotate(37,84,66)">7,5 cm</text>
      <!-- Points -->
      <text x="38"  y="24"  font-weight="700" font-size="12" fill="#111">A</text>
      <text x="144" y="18"  font-weight="700" font-size="12" fill="#111">B</text>
      <text x="144" y="98"  font-weight="700" font-size="12" fill="#111">C</text>
    </svg>
  </div>
</div>`,
        choices:[
          {letter:"A",text:"27 cm²"},
          {letter:"B",text:"13,5 cm²"},
          {letter:"C",text:"18 cm²"},
          {letter:"D",text:"9 cm²"}
        ],
        ans:"Réponse B : 13,5 cm². Triangle rectangle en B → les côtés de l'angle droit sont AB=6 cm et BC=4,5 cm. Aire = (AB × BC)/2 = (6 × 4,5)/2 = 27/2 = 13,5 cm²."},
       {pts:3,qcm:true,correct:"A",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 5 — Algèbre & Développement</div>
  <div style="font-size:14px;line-height:1.65">Quelle est la forme développée et réduite de l'expression (2x + 3)(x − 4) ?</div>
</div>`,
        choices:[
          {letter:"A",text:"2x² − 5x − 12"},
          {letter:"B",text:"2x² − 11x − 12"},
          {letter:"C",text:"2x² − 12"},
          {letter:"D",text:"3x − 1"}
        ],
        ans:"Réponse A : 2x² − 5x − 12. (2x+3)(x−4) = 2x×x + 2x×(−4) + 3×x + 3×(−4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12 ✓"},
       {pts:3,qcm:true,correct:"B",
        text:`<div>
  <div style="background:var(--k);display:inline-block;padding:3px 12px;font-family:'Montserrat',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;margin-bottom:8px">Question 6 — Volume</div>
  <div style="font-size:14px;line-height:1.65;margin-bottom:10px;display:grid;grid-template-columns:1fr auto;gap:12px;align-items:center">
    <div>Quel est le volume de cette pyramide à base rectangulaire ?</div>
    <svg viewBox="0 0 185 200" width="170" height="185" xmlns="http://www.w3.org/2000/svg" font-family="Montserrat,sans-serif" style="flex-shrink:0">
      <!-- S=(90,12), A=(20,155), B=(145,155), C=(160,128), D=(35,128) -->

      <!-- Arêtes cachées en pointillés -->
      <line x1="90" y1="12" x2="35"  y2="128" stroke="#555" stroke-width="1.2" stroke-dasharray="5,3"/>
      <!-- Hauteur en pointillés -->
      <line x1="90" y1="12" x2="90"  y2="142" stroke="#555" stroke-width="1" stroke-dasharray="4,3"/>

      <!-- Arêtes visibles -->
      <line x1="90" y1="12" x2="20"  y2="155" stroke="#111" stroke-width="1.8"/>
      <line x1="90" y1="12" x2="145" y2="155" stroke="#111" stroke-width="1.8"/>
      <line x1="90" y1="12" x2="160" y2="128" stroke="#111" stroke-width="1.8"/>
      <line x1="20"  y1="155" x2="145" y2="155" stroke="#111" stroke-width="1.8"/>
      <line x1="145" y1="155" x2="160" y2="128" stroke="#111" stroke-width="1.8"/>
      <line x1="20"  y1="155" x2="35"  y2="128" stroke="#111" stroke-width="1.8"/>
      <line x1="35"  y1="128" x2="160" y2="128" stroke="#111" stroke-width="1.8"/>

      <!-- Angle droit au pied de la hauteur H=(90,142) -->
      <!-- SH va vers le haut (0,-1), direction base vers droite (+1,0) -->
      <polyline points="90,142 98,142 98,134 90,134" fill="none" stroke="#c00" stroke-width="1.4"/>

      <!-- 12 cm : label flottant loin des arêtes, fond blanc pour lisibilité -->
      <rect x="56" y="68" width="42" height="16" fill="white" rx="2"/>
      <text x="77" y="80" font-size="11" fill="#222" font-weight="600" text-anchor="middle">12 cm</text>

      <!-- 4 cm sur arête BC droite -->
      <text x="155" y="148" font-size="11" fill="#222" font-weight="600">4 cm</text>

      <!-- 7 cm sous la base -->
      <text x="76" y="172" font-size="11" fill="#222" font-weight="600">7 cm</text>
    </svg>
  </div>
</div>`,
        choices:[
          {letter:"A",text:"23 cm³"},
          {letter:"B",text:"112 cm³"},
          {letter:"C",text:"336 cm³"},
          {letter:"D",text:"168 cm³"}
        ],
        ans:"Réponse B : 112 cm³. V = (1/3) × Aire base × hauteur = (1/3) × (7 × 4) × 12 = (1/3) × 28 × 12 = 112 cm³ ✓"}
     ]}
  ]
};
