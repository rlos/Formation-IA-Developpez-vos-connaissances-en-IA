
import { Framework } from './types';

export const FRAMEWORKS: Framework[] = [
  {
    id: 'costar',
    name: 'COSTAR',
    shortDescription: 'La référence pour la précision',
    fullDescription: 'Le cadre COSTAR décompose la demande en six dimensions critiques. C\'est la méthode la plus complète pour garantir que l\'IA a absolument toutes les cartes en main.',
    whyUse: 'Utilisez COSTAR pour des tâches complexes où la nuance est cruciale. C\'est le cadre "Professionnel" par excellence.',
    concreteExample: 'Gestion de crise : Rédiger un communiqué de presse suite à une panne de service.',
    icon: 'Target',
    fields: [
      { 
        id: 'context', 
        label: 'C - Context (Contexte)', 
        description: 'Situer le décor.', 
        detailedWhy: 'L\'IA ne connait pas votre entreprise ou votre situation. Sans contexte, elle répondra avec des généralités. Le contexte donne les contraintes invisibles.',
        examples: [
          "Je suis responsable marketing dans une start-up de la Fintech qui lance une app pour les ados.",
          "Nous sommes une boulangerie artisanale qui subit une hausse du prix du blé et doit augmenter ses prix.",
          "Je suis développeur Junior Python et je dois optimiser un script de scraping qui est trop lent."
        ]
      },
      { 
        id: 'objective', 
        label: 'O - Objective (Objectif)', 
        description: 'Définir le but ultime.', 
        detailedWhy: 'Que voulez-vous que l\'IA accomplisse exactement ? Soyez verbeux sur l\'action attendue.',
        examples: [
          "Rédiger une séquence de 3 emails de prospection pour obtenir des rendez-vous.",
          "Expliquer ce concept complexe à un enfant de 10 ans pour le vulgariser.",
          "Analyser ce jeu de données CSV pour trouver les anomalies de stock."
        ]
      },
      { 
        id: 'style', 
        label: 'S - Style', 
        description: 'Imposer un style d\'écriture.', 
        detailedWhy: 'Définit la "personnalité" de l\'écriture. Imiter un auteur ou une profession change radicalement le vocabulaire utilisé.',
        examples: [
          "Comme Steve Jobs (minimaliste, impactant, visionnaire).",
          "Style académique, rigoureux, sourcé, sans fioritures.",
          "Journalistique, accrocheur, style 'Clickbait' mais informatif."
        ]
      },
      { 
        id: 'tone', 
        label: 'T - Tone (Ton)', 
        description: 'La couleur émotionnelle.', 
        detailedWhy: 'Le ton dicte l\'émotion ressentie par le lecteur. C\'est la différence entre une lettre de mise en demeure et une carte postale.',
        examples: [
          "Empathique, rassurant, calme (pour une gestion de crise).",
          "Urgent, dynamique, motivant (pour une promo de vente).",
          "Froid, objectif, distant (pour un rapport d'audit)."
        ]
      },
      { 
        id: 'audience', 
        label: 'A - Audience', 
        description: 'Identifier le destinataire.', 
        detailedWhy: 'À qui parlez-vous ? L\'IA adaptera la complexité des mots et les références culturelles selon la cible.',
        examples: [
          "Des experts comptables seniors (utiliser le jargon technique).",
          "Des étudiants de première année (être pédagogique).",
          "Des investisseurs pressés (aller droit au but, parler ROI)."
        ]
      },
      { 
        id: 'response', 
        label: 'R - Response (Réponse)', 
        description: 'Le format de sortie.', 
        detailedWhy: 'Forcez la structure visuelle. Si vous ne demandez pas de liste à puces ou de tableau, vous aurez des pavés de texte.',
        examples: [
          "Un tableau Markdown avec 3 colonnes : Problème, Cause, Solution.",
          "Format JSON valide prêt à être copié dans le code.",
          "Un texte court de moins de 280 caractères (format Tweet)."
        ]
      },
    ],
    template: (values) => "",
    finalCompletePrompt: {
      scenario: "Vous devez annoncer une augmentation de prix de 15% à vos clients fidèles sans les perdre.",
      text: `# CONTEXT
Je suis gérant d'une entreprise de maintenance informatique pour PME. Nos coûts d'énergie et de matériel ont augmenté de 20% cette année. Je dois annoncer une hausse de nos tarifs de 15% à nos clients sous contrat annuel.

# OBJECTIVE
Rédige un email pour annoncer cette augmentation tarifaire. L'objectif est de faire passer la pilule en justifiant la hausse par une amélioration de la qualité de service (support 24/7 désormais inclus).

# STYLE
Professionnel, transparent et direct. Pas de "langue de bois" corporate.

# TONE
Empathique mais ferme. On ne s'excuse pas d'augmenter les prix (c'est nécessaire pour la survie), mais on remercie pour la fidélité.

# AUDIENCE
Des dirigeants de PME (DG, DAF) qui sont très attentifs à leurs dépenses.

# RESPONSE FORMAT
Structure de l'email : Objet accrocheur, Introduction (remerciement), Annonce (la hausse), Justification (le nouveau service inclus), Call to Action (réserver un point pour en discuter).`
    }
  },
  {
    id: 'rtf',
    name: 'RTF',
    shortDescription: 'L\'efficacité au quotidien',
    fullDescription: 'Rôle, Tâche, Format. C\'est le cadre "Je suis pressé mais je veux de la qualité".',
    whyUse: 'Idéal pour les requêtes utilitaires du quotidien où vous avez besoin d\'une réponse rapide et structurée sans passer 10 minutes à rédiger le prompt.',
    concreteExample: 'Explication technique : Comparer VLOOKUP et XLOOKUP.',
    icon: 'Zap',
    fields: [
      { 
        id: 'role', 
        label: 'R - Role (Rôle)', 
        description: 'Le persona.', 
        detailedWhy: 'L\'amorçage de rôle ("Act as...") active les clusters de connaissances spécifiques dans le modèle.',
        examples: [
          "Agis comme un Expert Excel certifié Microsoft MVP.",
          "Tu es un Guide Touristique local à Tokyo depuis 20 ans.",
          "Agis comme un Consultant en Sommeil pour bébés."
        ]
      },
      { 
        id: 'task', 
        label: 'T - Task (Tâche)', 
        description: 'L\'action à faire.', 
        detailedWhy: 'L\'instruction directe. C\'est le cœur de votre demande.',
        examples: [
          "Explique-moi la différence entre VLOOKUP et XLOOKUP.",
          "Crée un itinéraire de 3 jours pour un couple végétarien.",
          "Donne-moi une routine de sieste pour un bébé de 6 mois."
        ]
      },
      { 
        id: 'format', 
        label: 'F - Format', 
        description: 'La forme visuelle.', 
        detailedWhy: 'Comment voulez-vous consommer l\'information ?',
        examples: [
          "Utilise un tableau comparatif avec avantages/inconvénients.",
          "Une liste à puces chronologique (matin, midi, soir).",
          "Un guide étape par étape numéroté."
        ]
      },
    ],
    template: (values) => "",
    finalCompletePrompt: {
      scenario: "Vous devez expliquer à un collègue pourquoi il faut passer de VLOOKUP à XLOOKUP sur Excel.",
      text: `Agis comme un Expert Excel certifié Microsoft MVP (Rôle).

Explique-moi les différences fondamentales entre la fonction classique VLOOKUP (RechercheV) et la nouvelle XLOOKUP, en mettant en avant pourquoi XLOOKUP est plus robuste pour les gros fichiers (Tâche).

Présente la réponse sous forme d'un tableau comparatif avec 3 colonnes : Critère, VLOOKUP, XLOOKUP. Ajoute une conclusion d'une phrase en gras (Format).`
    }
  },
  {
    id: 'bab',
    name: 'BAB',
    shortDescription: 'Storytelling de transformation',
    fullDescription: 'Before - After - Bridge. Le cadre roi du copywriting et de la vente.',
    whyUse: 'Indispensable pour vendre une idée ou un produit. Il joue sur la psychologie : on part de la douleur pour aller vers le rêve.',
    concreteExample: 'Marketing : Vendre un logiciel d\'automatisation.',
    icon: 'TrendingUp',
    fields: [
      { 
        id: 'before', 
        label: 'B - Before (Avant)', 
        description: 'La douleur actuelle.', 
        detailedWhy: 'Décrivez le monde actuel avec ses problèmes. Plus vous appuyez sur la douleur, plus la solution sera désirable.',
        examples: [
          "Nos clients perdent 2h par jour sur la saisie manuelle et font des erreurs.",
          "Vous vous sentez fatigué au réveil et vous avez mal au dos.",
          "Vos plantes meurent car vous oubliez de les arroser ou vous les noyez."
        ]
      },
      { 
        id: 'after', 
        label: 'A - After (Après)', 
        description: 'Le nirvana futur.', 
        detailedWhy: 'Décrivez le monde idéal une fois le problème résolu. Vendez le résultat, pas l\'outil.',
        examples: [
          "Imaginez une équipe qui se consacre à 100% à la stratégie sans aucune saisie de données.",
          "Réveillez-vous en pleine forme, bondissant du lit sans aucune douleur.",
          "Ayez une jungle luxuriante chez vous sans jamais y penser."
        ]
      },
      { 
        id: 'bridge', 
        label: 'B - Bridge (Pont)', 
        description: 'Votre solution.', 
        detailedWhy: 'Comment passe-t-on de l\'Enfer (Before) au Paradis (After) ? C\'est là que vous introduisez votre produit/service.',
        examples: [
          "Notre logiciel 'AutoFlow' automatise 99% des saisies grâce à l'IA.",
          "Découvrez le matelas 'CloudNine' à mémoire de forme adaptative.",
          "Le pot intelligent 'SmartGrow' qui arrose vos plantes automatiquement."
        ]
      },
    ],
    template: (values) => "",
    finalCompletePrompt: {
      scenario: "Vous lancez une formation sur la gestion du temps pour les freelances débordés.",
      text: `Rédige un post LinkedIn pour vendre ma formation en gestion du temps en utilisant le cadre BAB :

BEFORE (Douleur) : Parle du freelance qui travaille 60h/semaine, qui ne voit plus ses enfants, qui répond aux clients le dimanche et qui a l'impression de subir sa vie.

AFTER (Rêve) : Décris la vie où il travaille 4 jours par semaine, choisit ses clients, et part en week-end l'esprit léger sans ouvrir son ordinateur.

BRIDGE (Solution) : Introduis ma méthode "FreedomFlow", une formation de 3 semaines pour automatiser et déléguer, qui fait le lien entre ces deux mondes.`
    }
  },
  {
    id: 'kernel',
    name: 'KERNEL',
    shortDescription: 'L\'approche déterministe',
    fullDescription: 'Pour le code et la logique. Vise à éliminer toute "créativité" ou hallucination.',
    whyUse: 'À utiliser pour le développement informatique, les maths, ou les processus stricts où l\'erreur n\'est pas permise.',
    concreteExample: 'Développement : Générer une fonction Python critique.',
    icon: 'Cpu',
    fields: [
      { 
        id: 'keep', 
        label: 'K - Keep it simple', 
        description: 'L\'instruction atomique.', 
        detailedWhy: 'Une seule tâche à la fois pour éviter la confusion.',
        examples: [
          "Génère une fonction Python pour trier une liste.",
          "Écris une requête SQL pour extraire les utilisateurs inactifs.",
          "Convertis cette date UTC en heure locale Paris."
        ]
      },
      { 
        id: 'easy', 
        label: 'E - Easy to verify', 
        description: 'Critères de succès.', 
        detailedWhy: 'Comment saura-t-on si le code fonctionne ?',
        examples: [
          "La fonction doit passer ces 3 tests unitaires (fournis).",
          "Le résultat doit être strictement un entier.",
          "Le code ne doit générer aucune erreur de syntaxe."
        ]
      },
      { 
        id: 'reproducible', 
        label: 'R - Reproducible', 
        description: 'L\'environnement.', 
        detailedWhy: 'Le contexte technique pour que la solution tourne chez vous.',
        examples: [
          "Python 3.9, Pandas 1.3.0.",
          "PostgreSQL 14.",
          "Navigateur Chrome version 100+."
        ]
      },
      { 
        id: 'narrow', 
        label: 'N - Narrow scope', 
        description: 'Les limites.', 
        detailedWhy: 'Réduire le périmètre pour éviter les cas limites non gérés.',
        examples: [
          "Ne gère que les entiers positifs, renvoie erreur sinon.",
          "Uniquement pour les utilisateurs basés en France.",
          "Ignore les fichiers de plus de 50MB."
        ]
      },
      { 
        id: 'explicit', 
        label: 'E - Explicit constraints', 
        description: 'Interdictions.', 
        detailedWhy: 'Ce qu\'il ne faut SURTOUT PAS faire (Negative Prompting).',
        examples: [
          "N'utilise aucune librairie externe (seulement standard lib).",
          "Pas de boucles 'for', utilise la vectorisation.",
          "Ne commente pas le code, donne juste la fonction."
        ]
      },
      { 
        id: 'logical', 
        label: 'L - Logical structure', 
        description: 'L\'ordre.', 
        detailedWhy: 'L\'ordre d\'exécution ou de présentation.',
        examples: [
          "1. Imports, 2. Constantes, 3. Fonction.",
          "D'abord la requête, ensuite l'explication.",
          "Déclare les variables avant de les utiliser."
        ]
      },
    ],
    template: (values) => "",
    finalCompletePrompt: {
      scenario: "Générer une fonction Python pour nettoyer des numéros de téléphone.",
      text: `Génère une fonction Python 'clean_phone_number' (K - Keep it simple).

Elle doit prendre une chaîne en entrée et retourner une chaîne (E - Easy to verify).

Environnement : Python 3.9, pas de librairies externes (R - Reproducible).

Périmètre (N - Narrow) : Elle doit gérer uniquement les numéros français. Elle doit supprimer les espaces, tirets et points. Elle doit remplacer le '+33' par '0'.

Interdictions (E - Explicit) : N'utilise pas de Regex (expressions régulières). N'utilise pas la librairie 'phonenumbers'.

Structure (L - Logical) : 
1. Docstring de la fonction.
2. Vérification du type d'entrée.
3. Nettoyage.
4. Retour.`
    }
  },
  {
    id: 'crefo',
    name: 'C.R.E.F.O',
    shortDescription: 'La grille de réussite',
    fullDescription: 'Pour ne jamais rater un prompt, ne vous fiez pas à l\'improvisation. Utilisez la structure mémotechnique C.R.E.F.O. Avant de valider votre message, vérifiez que ces 5 éléments sont présents.',
    whyUse: 'Idéal comme "Checklist" rapide avant d\'envoyer un message. C\'est un excellent compromis entre la simplicité de RTF et la précision de COSTAR.',
    concreteExample: 'Gestion de projet : Annoncer un retard délicat dans le BTP.',
    icon: 'CheckCircle',
    fields: [
      {
        id: 'context',
        label: 'C - Contexte',
        description: 'La situation et les contraintes.',
        detailedWhy: 'Dans quelle situation sommes-nous ? Quelles sont les contraintes ? Sans ça, l\'IA devine au hasard.',
        examples: [
          "Je suis chef de projet dans le BTP. Nous avons 3 semaines de retard à cause de la pluie.",
          "Je prépare un mariage avec un budget de 10k€ et 100 invités.",
          "Je suis étudiant en droit et je révise mes partiels de constitutionnel."
        ]
      },
      {
        id: 'role',
        label: 'R - Rôle',
        description: 'L\'incarnation de l\'IA.',
        detailedWhy: 'Qui l\'IA doit-elle incarner ? (Expert, Critique, Créatif...) Cela définit son angle d\'attaque.',
        examples: [
          "Agis comme un expert en communication de crise et diplomatie.",
          "Tu es un Wedding Planner organisé et créatif.",
          "Agis comme un professeur de droit constitutionnel pédagogue."
        ]
      },
      {
        id: 'explicit',
        label: 'E - Explicite',
        description: 'L\'action précise.',
        detailedWhy: 'Quelle est la tâche précise ? Utilisez des verbes d\'action pour éviter toute ambiguïté.',
        examples: [
          "Rédige un email pour annoncer ce retard au client sans qu'il rompe le contrat.",
          "Crée un tableau de répartition budgétaire estimatif.",
          "Fais-moi un quiz de 10 questions sur la Ve République."
        ]
      },
      {
        id: 'format',
        label: 'F - Format',
        description: 'La forme de la réponse.',
        detailedWhy: 'Quelle forme doit prendre la réponse ? (Tableau, liste, code...) Pour une lecture immédiate.',
        examples: [
          "Structure la réponse avec une liste à puces pour les arguments et le corps de l'email en dessous.",
          "Un tableau Excel avec formules suggérées.",
          "Format QCM avec réponses détaillées à la fin."
        ]
      },
      {
        id: 'objective',
        label: 'O - Objectif',
        description: 'Le but final et le ton.',
        detailedWhy: 'Quel est le but final ? Quelle tonalité adopter ? C\'est la direction artistique du prompt.',
        examples: [
          "Le but est de rassurer le client et de lui proposer une nouvelle date de livraison ferme. Ton professionnel et empathique.",
          "Optimiser le budget pour ne pas dépasser. Ton rassurant.",
          "Mémoriser les concepts clés rapidement. Ton encourageant."
        ]
      }
    ],
    template: (values) => "",
    finalCompletePrompt: {
      scenario: "Annoncer un retard de chantier dû à la pluie.",
      text: `CONTEXTE : Je suis chef de projet dans le BTP. Nous avons 3 semaines de retard à cause de la pluie sur le chantier "Alpha".

RÔLE : Agis comme un expert en communication de crise et diplomatie.

EXPLICITE : Rédige un email pour annoncer ce retard au client sans qu'il rompe le contrat.

FORMAT : Structure la réponse avec une liste à puces pour les arguments factuels (intempéries, sécurité) et le corps de l'email en dessous.

OBJECTIF : Le but est de rassurer le client et de lui proposer une nouvelle date de livraison ferme. Ton professionnel et empathique.`
    }
  },
  {
    id: 'ideation',
    name: 'Générateur d\'Idées',
    shortDescription: 'Trouver des cas d\'usage',
    fullDescription: 'Comment utiliser l\'IA dans VOTRE métier ?',
    whyUse: 'Pour ceux qui savent que l\'IA est puissante mais manquent d\'inspiration concrète.',
    concreteExample: 'RH : Automatisation du tri de CV.',
    icon: 'Lightbulb',
    fields: [
      { 
        id: 'role', 
        label: 'Métier / Rôle', 
        description: 'Qui êtes-vous ?', 
        detailedWhy: 'L\'IA a besoin de savoir quel chapeau porter pour vous aider.',
        examples: [
          "Assistant Administratif dans une PME.",
          "Infirmière libérale.",
          "Professeur d'histoire au lycée."
        ]
      },
      { 
        id: 'task', 
        label: 'Domaine de travail', 
        description: 'Le sujet général.', 
        detailedWhy: 'Oriente l\'IA vers une catégorie de tâches.',
        examples: [
          "La gestion des emails et du planning.",
          "Le suivi des patients et la facturation.",
          "La préparation des cours et la correction des copies."
        ]
      },
      { 
        id: 'pain', 
        label: 'Problème / Besoin', 
        description: 'Le caillou dans la chaussure.', 
        detailedWhy: 'C\'est le déclencheur. L\'IA cherchera une solution à cette douleur.',
        examples: [
          "Je perds trop de temps à répondre aux mêmes questions.",
          "J'ai peur de faire des erreurs dans les calculs de doses.",
          "Je veux rendre mes cours plus interactifs pour les élèves."
        ]
      },
    ],
    template: (values) => "",
    finalCompletePrompt: {
      scenario: "Une infirmière libérale qui veut gagner du temps sur sa gestion.",
      text: `Je suis infirmière libérale (Rôle).

Mes tâches incluent les soins aux patients, mais aussi beaucoup de gestion administrative, de facturation et de coordination avec les médecins (Domaine).

Mon problème est que je passe 2h chaque soir à faire de la paperasse et je suis épuisée. J'ai peur d'oublier de facturer certains actes (Douleur).

Agis comme un expert en productivité et intelligence artificielle. Propose-moi 5 cas d'usage concrets où ChatGPT pourrait m'aider à gagner du temps ou à réduire ma charge mentale dans mon quotidien d'infirmière.`
    }
  }
];
