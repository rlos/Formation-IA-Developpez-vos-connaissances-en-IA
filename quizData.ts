
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0, 1, or 2
  explanation: string;
}

export const QUIZ_DATA: Record<string, Question[]> = {
  prompter: [
    {
      id: 1,
      question: "Dans le cadre COSTAR, à quoi sert le 'C' (Contexte) ?",
      options: [
        "À définir la couleur du texte",
        "À donner les contraintes invisibles et le décor à l'IA",
        "À corriger les fautes d'orthographe"
      ],
      correctAnswer: 1,
      explanation: "Sans contexte, l'IA répond par des généralités. Le contexte permet de situer l'entreprise, le niveau technique ou la situation spécifique."
    },
    {
      id: 2,
      question: "Quelle est la force principale du cadre BAB (Before-After-Bridge) ?",
      options: [
        "Écrire du code Python",
        "Faire de la vente et du storytelling émotionnel",
        "Résumer des documents PDF"
      ],
      correctAnswer: 1,
      explanation: "BAB joue sur la psychologie : on part de la douleur (Before) pour vendre le rêve (After), la solution (Bridge) faisant le lien."
    },
    {
      id: 3,
      question: "Pourquoi utiliser un 'Role' (R) dans le cadre RTF ?",
      options: [
        "Pour activer des clusters de connaissances spécifiques (ex: Expert Excel)",
        "Pour que l'IA soit plus polie",
        "C'est inutile, c'est juste pour faire joli"
      ],
      correctAnswer: 0,
      explanation: "L'amorçage de rôle ('Act as...') permet à l'IA d'adopter le vocabulaire, le ton et l'expertise d'une profession spécifique."
    },
    {
      id: 4,
      question: "Dans la méthode C.R.E.F.O, que signifie le 'E' ?",
      options: [
        "Élégant (Style soutenu)",
        "Explicite (Tâche précise avec verbe d'action)",
        "Extraordinaire (Surprendre le lecteur)"
      ],
      correctAnswer: 1,
      explanation: "Le E de Explicite rappelle qu'il faut donner une instruction claire et non ambiguë (verbes d'action) pour que l'IA sache quoi faire."
    },
    {
      id: 5,
      question: "Dans un prompt, si je ne précise pas le Format (Output), que risque-t-il d'arriver ?",
      options: [
        "L'IA va planter",
        "L'IA va refuser de répondre",
        "L'IA va générer un pavé de texte dense et difficile à lire"
      ],
      correctAnswer: 2,
      explanation: "Sans contrainte de format (tableau, liste à puces, JSON), l'IA tend naturellement vers des paragraphes de texte standard."
    }
  ],
  models: [
    {
      id: 1,
      question: "Quelle est la particularité principale de Google Gemini ?",
      options: [
        "Il ne fonctionne que sur Android",
        "Il est multimodal natif (texte, image, vidéo, audio)",
        "Il est payant pour tout le monde"
      ],
      correctAnswer: 1,
      explanation: "Gemini a été entraîné dès le départ sur différents médias, ce qui lui permet de 'voir' et 'entendre' mieux que les autres modèles."
    },
    {
      id: 2,
      question: "Quel modèle est réputé pour son style d'écriture 'Humain' et moins robotique ?",
      options: [
        "Claude 3.5 (Anthropic)",
        "GPT-3",
        "Mistral Small"
      ],
      correctAnswer: 0,
      explanation: "Claude est souvent plébiscité pour sa 'plume' plus naturelle, empathique et moins chargée en clichés d'IA."
    },
    {
      id: 3,
      question: "Quel est l'avantage du modèle Mistral ?",
      options: [
        "C'est un modèle français très performant et open-weights",
        "Il peut faire le café",
        "Il est le seul à comprendre l'anglais"
      ],
      correctAnswer: 0,
      explanation: "Mistral est une fierté technologique européenne, offrant des performances rivalisant avec GPT-4 tout en étant plus transparent."
    },
    {
      id: 4,
      question: "Si je veux analyser 50 PDF en une seule fois, quel modèle a la plus grande fenêtre contextuelle ?",
      options: [
        "GPT-4",
        "Gemini 1.5 Pro",
        "Mistral Large"
      ],
      correctAnswer: 1,
      explanation: "Gemini 1.5 Pro possède une fenêtre contextuelle massive (jusqu'à 2 millions de tokens), idéale pour les très gros volumes de données."
    },
    {
      id: 5,
      question: "GPT-4 est souvent considéré comme :",
      options: [
        "Obsolète",
        "Le standard de référence pour la polyvalence",
        "Uniquement bon pour le code"
      ],
      correctAnswer: 1,
      explanation: "GPT-4 reste le point de comparaison standard du marché pour sa capacité à tout faire à un niveau très élevé."
    }
  ],
  security: [
    {
      id: 1,
      question: "Que se passe-t-il avec les données envoyées aux versions publiques des IA ?",
      options: [
        "Elles sont détruites immédiatement",
        "Elles peuvent être utilisées pour entraîner le modèle",
        "Elles sont cryptées et inaccessibles à jamais"
      ],
      correctAnswer: 1,
      explanation: "Sur les versions gratuites/publiques, vos conversations nourrissent l'IA. Ne donnez jamais de secrets industriels."
    },
    {
      id: 2,
      question: "Qu'est-ce qu'une 'Hallucination' en IA ?",
      options: [
        "Quand l'IA voit des fantômes",
        "Quand l'IA invente une information fausse avec une totale assurance",
        "Quand l'IA refuse de répondre"
      ],
      correctAnswer: 1,
      explanation: "L'IA est une machine à probabilités. Si elle ne sait pas, elle peut inventer des faits, des dates ou des sources très convaincantes mais fausses."
    },
    {
      id: 3,
      question: "Quelle est la règle d'or pour utiliser l'IA professionnellement ?",
      options: [
        "Faire confiance aveuglément",
        "Human in the Loop (Toujours vérifier)",
        "Copier-coller sans relire"
      ],
      correctAnswer: 1,
      explanation: "L'IA est un copilote. Le commandant de bord (vous) doit toujours vérifier le travail avant diffusion."
    },
    {
      id: 4,
      question: "L'affaire 'Samsung' concerne quel type de risque ?",
      options: [
        "Fuite de code source confidentiel",
        "Piratage de webcam",
        "Vol de téléphones"
      ],
      correctAnswer: 0,
      explanation: "Des ingénieurs ont collé du code propriétaire dans ChatGPT, le rendant potentiellement accessible via l'entraînement du modèle."
    },
    {
      id: 5,
      question: "Comment éviter les fausses citations juridiques ou scientifiques ?",
      options: [
        "Demander à l'IA de promettre de ne pas mentir",
        "Vérifier manuellement chaque source, URL ou DOI",
        "Utiliser uniquement GPT-3"
      ],
      correctAnswer: 1,
      explanation: "La vérification manuelle est la seule parade fiable contre les hallucinations bibliographiques."
    }
  ],
  productivity: [
    {
      id: 1,
      question: "Quelle est l'approche 'Email Gilet Pare-balles' ?",
      options: [
        "Ne jamais répondre aux emails",
        "Donner le fond (le refus) et laisser l'IA gérer la forme (l'empathie)",
        "Écrire en majuscules pour faire peur"
      ],
      correctAnswer: 1,
      explanation: "Cela permet de gagner du temps émotionnel : vous décidez du message dur, l'IA met les formes sociales."
    },
    {
      id: 2,
      question: "Pour synthétiser un rapport, que vaut-il mieux demander ?",
      options: [
        "Fais-moi un résumé",
        "Extrais les 3 chiffres clés et propose 2 actions correctives",
        "Réécris le texte"
      ],
      correctAnswer: 1,
      explanation: "Une demande spécifique orientée vers l'action donne des résultats bien plus exploitables qu'un simple résumé générique."
    },
    {
      id: 3,
      question: "En brainstorming (Idéation), l'IA est meilleure pour :",
      options: [
        "La qualité immédiate d'une seule idée",
        "La quantité et la divergence (donner 50 idées)",
        "Juger ce qui est drôle"
      ],
      correctAnswer: 1,
      explanation: "La force de l'IA est le volume. Demandez beaucoup d'idées pour ensuite faire le tri vous-même."
    },
    {
      id: 4,
      question: "Comment utiliser l'IA pour préparer une négociation ?",
      options: [
        "Lui demander de prier pour nous",
        "Lui demander d'agir comme l'opposant sceptique (Avocat du Diable)",
        "Lui faire écrire notre lettre de démission"
      ],
      correctAnswer: 1,
      explanation: "Simuler l'opposition permet d'identifier les failles de votre argumentation avant le jour J."
    },
    {
      id: 5,
      question: "Pour transformer des notes en vrac en plan d'action, quel format demander ?",
      options: [
        "Un poème",
        "Un tableau avec colonnes : Qui, Quoi, Quand",
        "Un long paragraphe"
      ],
      correctAnswer: 1,
      explanation: "Le format tableau force la structuration et la clarté des responsabilités."
    }
  ],
  routine: [
    {
      id: 1,
      question: "Qu'est-ce que la règle des 5 minutes ?",
      options: [
        "On fait une pause café toutes les 5 minutes",
        "Si une tâche numérique prend > 5 min, on demande si l'IA peut aider",
        "On ne travaille que 5 minutes par jour"
      ],
      correctAnswer: 1,
      explanation: "C'est le déclencheur réflexe pour sortir du mode 'pilote automatique' et déléguer la structure à l'IA."
    },
    {
      id: 2,
      question: "Pourquoi 80% des gens abandonnent l'usage de l'IA après une formation ?",
      options: [
        "C'est trop cher",
        "Le retour aux vieilles habitudes dès qu'on est sous pression",
        "L'IA ne marche plus"
      ],
      correctAnswer: 1,
      explanation: "Le 'Piège des 48h' : sans ancrage immédiat d'une habitude, le cerveau reprend le chemin de moindre résistance (faire soi-même)."
    },
    {
      id: 3,
      question: "Quelle est la première étape facile pour ancrer l'habitude ?",
      options: [
        "Apprendre à coder en Python",
        "Mettre l'IA en favoris dans le navigateur",
        "Acheter un nouvel ordinateur"
      ],
      correctAnswer: 1,
      explanation: "Réduire la friction est clé. Si l'IA est à un clic, vous l'utiliserez. Si elle est à trois clics, vous l'oublierez."
    },
    {
      id: 4,
      question: "À quoi sert le 'Morning Prompt' ?",
      options: [
        "À dire bonjour à l'IA",
        "À prioriser sa To-Do List brute selon la loi de Pareto (80/20)",
        "À générer de la musique pour le réveil"
      ],
      correctAnswer: 1,
      explanation: "C'est un excellent rituel pour commencer la journée avec clarté en déléguant l'organisation des tâches."
    },
    {
      id: 5,
      question: "La nouvelle méthode de travail avec l'IA consiste à :",
      options: [
        "Tout faire faire par l'IA et dormir",
        "Prompter (cadrer) + Relire/Vérifier, au lieu de rédiger de zéro",
        "Travailler deux fois plus"
      ],
      correctAnswer: 1,
      explanation: "On passe du rôle de 'Rédacteur' (faire) au rôle de 'Rédacteur en Chef' (commander et valider)."
    }
  ]
};
