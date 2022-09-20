const https = require('https');

const unplashApi = 'https://source.unsplash.com/1600x900?dream';
const quotes = [
"J'écris des textes tirés par les ch'veux, comme ta meuf en levrette",
"J'distribuais des CD dans l'hexagone, pendant qu'tu distribuais tes CV dans les Mac Do J'comprends qu'tu voudrais faire un feat, mais moi j'voudrais un Big Mac et une grande frite",
"J'ai un truc énorme entre les jambes, comme un contrebassiste, Aussi vrai qu't'es pas français si t'as pas un oncle raciste",
"J’suis les Beatles pour les jeunes ados. J’pourrais passer sur Sky même si mon single s’appelait Fun Radio",
"Ma gueule de bois ferait passer Pinocchio pour un vrai p’tit garçon",
"J'sais qu'ta p'tite copine aime pas mes textes, mais si j'écoutais toutes les juments j'ferais du rap équestre Ça m'énerve pas, j'respecte. J'fais comme Rocky dans la réserve, j'm'en bats les steaks",
"Personne trouve de travail même avec un Bac+8. Mon livreur de pizza sait réparer des satellites",
"La mort c’est la finale, le sommeil c’est l’entrainement.",
"Nos scoots étaient débridés maint'nant c'est leur sexualité. Ça m'choquerait pas si Marc Dorcel rach'tait Walt Disney",
"Habiter dans la chambre chez tes parents quand t'as dépassé la barre de tes 24 ans donne vite le sentiment que la vie s'répète. Les vieux posters sur les murs crient : Défaite !",
"J'suis parti frais comme un gardon. J'suis rentré fumé comme un saumon",
"Comme ta pouf au camping on vient mouiller l'maillot",
"Tu peux courir à l’infini à la poursuite du bonheur, la terre est ronde autant l’attendre ici",
"Choisis ta voie entre Kurt Cobain ou Bouddha : 2 façons d'atteindre le nirvana",
"Tu joues les mecs cotés, les rois de la night qui écument les boîtes, mais la seule chose qui te rapproche d'Ibiza c'est une Seat",
"Abattu par la fatigue d'avoir rien branlé, le projet c'était d'rien foutre et j'ai aucun plan B",
"Comme un pucelle dans un gang-bang, j'en branle pas une",
"T'aimes ta meuf parce que c'est pas une traînée. Tu trompes ta meuf parce que c'est pas une traînée",
"J'descends plus de jaunes que les Marines au Vietnâm",
"Censé dev'nir un jeune cadre dynamique, j'ai toujours été qu'un jeune stressé qui panique C'est marqué sur nos actes de naissance en italique, on a tous un pied dans l'hôpital psychiatrique",
"Je suis dans le premier Mario, à chaque fois je crois que j’ai fini le jeu, ça repart à zéro, en plus rapide, en plus dur",
"San, ça veut dire trois, San ça veut dire monsieur, San j’ai mis la moitié de ma vie pour savoir ce que je veux",
"Un jour, tu t'rends compte que personne n'écoute tes histoires, t'étais un jeune cool, maintenant t'es plus qu'un oncle bizarre",
"Les gens les plus intelligents sont pas toujours ceux qui parlent le mieux",
"Si t'es souvent seul avec tes problèmes, c'est parce que, souvent, l'problème, c'est toi",
"Si les Hommes se tirent dessus, c’est qu’y’a des vaccins dans les balles, et si les bâtiments explosent, c’est pour fabriquer des étoiles",
"Si vous n’avez pas peur du vide, regardez Murielle dans les yeux",
"Si Caro m’écoute plus, c’est qu’elle met au point son prochain ragot, pardonnez-la, elle s’rait pas comme ça si son mari la trompait pas, ou p’t-être qu’il la trompe parce qu’elle est comme ça, mmh… j’sais pas",
"Sauf qu’entre-temps, j’ai trouvé la bonne meuf, donc j’m’en bats les couilles des bonnes meufs, adieu les bonnes meufs, en fait, j’mens, j’aime toujours les bonnes meufs, alors j’évite de m’approcher des bonnes meufs",
"Pas besoin d’nouveaux potes, j’vois d’jà pas les miens, dans mon répertoire, y’a trente-quatre « Julien »",
"Un jour, j’ai ramené deux meufs, c’était nul, ça m’a rappelé qu’j’ai du mal avec une",
"Marion Maréchal me suit sur Twitter, j’aimerais la baiser, briser son p’tit cœur, j’ai envoyé ma bite et un emoji fleur, bonjour au papy, j’suis pressé qu’il meure",
"J’baise ta meuf et j’me fais des pâtes, pour partir plus vite, j’respecte même pas l’temps d’cuisson",
"Ta vie, c’est d’la merde, à qui la faute ? T’es figurant dans l’film de la vie d’un autre",
"C’est pas qu’on est lent, c’est qu’on prend notre temps pour réfléchir, j’viens d’la classe moyenne, moyennement classe où tout l’monde cherche une place, Julien Clerc dans l’monospace",
"On dit qu’le temps détruit mais l’temps n’est pas notre ennemi, parce que plus j’te connais et plus j’me sens béni, assez béni pour t’emmener à l’église dire au prêtre : « Oublie l’truc où la mort nous sépare, on va rester dans cette vie »,
"T’es plus intelligent qu’avant mais t’es toujours très con, t’es trop sensible, tu vis tout comme une agression",
"Ne crois pas les insultes, y’a pas d’race pour être un bâtard, pour être un fils de pute, pas besoin d’avoir une daronne sur un trottoir",
"On t’dira d’être premier, jamais d’être heureux, premier, c’est pour ceux qu’ont besoin d’une note, qu’ont pas confiance en eux",
"Les meilleures blagues sont les plus méchantes ou les plus bêtes, mais les pires êtres humains sont des loosers cruels. T’en prends jamais aux plus faibles, garde les vannes dans un coin d’ta tête, ça rentrera dans un texte, dans un film ou dans un sketch",
"Certaines relations sont néfastes. Parfois les chemins se séparent. Mais les erreurs se réparent. Et la ligne d'arrivée est souvent la ligne de départ",
"Si ton pote chie sur tout l'monde, c'est qu'il fait pareil sur toi",
"Laisse moi t'explique, le problème c'est l'alcool. Ca commence par un verre et tous mes principes s'envolent",
"La réponse à toutes mes questions s’endort à mes côtés",
"On était censé changer les choses, depuis quand les choses nous ont changés ?"
];

async function getImage() {
  return new Promise((resolve, reject) => {
    https.get(unplashApi, (response) => {
      // API returns a HTTP 302 code, we only want the final image URL
      resolve(response.headers.location);
    }).on('error', (error) => {
      reject(error.message);
    });
  });
}

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const image = await getImage();
  const text = quotes[Math.floor(Math.random() * quotes.length)];

  context.res = {
    body: {
      image,
      text
    }
  };
};
