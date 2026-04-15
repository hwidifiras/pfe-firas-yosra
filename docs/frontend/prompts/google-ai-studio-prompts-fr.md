# Prompts Structures - Google AI Studio (Frontend)

Usage: copier/coller ces prompts dans Google AI Studio pour produire maquettes, composants, et variantes UX. Toujours joindre le contexte de page + contraintes API.

## Prompt 0 - System Prompt Frontend Designer

```text
Tu es un Senior Product Designer + Frontend Architect.
Contexte: application SaaS B2B pour PME e-commerce, nom SmartSocial PME.
Objectif: proposer des interfaces React dashboard modernes, lisibles, orientees productivite.
Contraintes:
- UI en francais
- Design professionnel, pas surcharge visuelle
- etats loading/empty/error/success obligatoires
- compatible implementation React + Tailwind
- fournir structure composants, hierarchie visuelle, interactions clefs
- proposer uniquement des patterns realistes et implementables en 45 jours
- layout global obligatoire: le contenu principal doit exploiter toute la largeur disponible a droite de la sidebar (ouverte ou fermee), sans grand vide lateral inutile
- reference layout: prendre la page Calendrier comme standard de densite et d'utilisation de l'espace, puis appliquer cette logique a toutes les autres pages
- interdit: contenu etroit centre avec grand espace vide a gauche/droite, scrollbar horizontale liee au layout, wrappers qui reduisent artificiellement la largeur utile
- si sidebar se replie, le contenu principal doit se reflow automatiquement pour recuperer l'espace
Sortie attendue:
1) wireframe textuel
2) liste composants
3) schema etats UI
4) checklist acceptance
```

## Prompt Fix 1 - Correction layout sidebar/contenu (global)

```text
Tu corriges un probleme global de layout sur SmartSocial PME.
Probleme observe:
- sur plusieurs pages (hors Calendrier), un grand espace vide apparait entre la sidebar et le contenu principal
- cette perte d'espace reduit la largeur utile du contenu
- cela provoque parfois un wrapping prematuré et/ou une scrollbar horizontale
- la page Calendrier est la seule page ou le layout est correct

Objectif de correction:
- appliquer la logique de layout de la page Calendrier a TOUTES les pages (Dashboard, Publications/Composeur, Inbox, Analytics, IA Workspace, Configuration IA, Parametres)
- garder le design SmartSocial existant (sans copier Hootsuite)
- ne pas ajouter de nouvelles fonctionnalites

Contraintes layout obligatoires:
- le conteneur principal doit commencer juste a droite de la sidebar (ouverte/fermee) avec un gap maitrise
- le contenu doit utiliser la largeur disponible (full width utile) avec padding coherent
- aucun wrapper ne doit imposer une largeur trop petite qui etouffe le contenu
- pas de scrollbar horizontale sur desktop en resolution standard
- sidebar toggle: reflow immediat du contenu, sans zone vide persistante
- conserver un seul scroll principal vertical; eviter les scrollbars imbriques inutiles

Donne:
1) diagnostic cause probable (classes/layout responsables)
2) regles CSS/layout cibles (container, width, max-width, margin, overflow, grid/flex)
3) wireframe textuel avant/apres (court)
4) checklist de verification explicite:
   - sidebar ouverte: pas d'espace perdu
   - sidebar fermee: contenu elargi correctement
   - aucune scrollbar horizontale
   - densite similaire a Calendrier
5) regles de non-regression: ne pas impacter RBAC, interactions des pages, ni les composants metier
```

## Prompt 1 - Dashboard

```text
Concois la page Dashboard de SmartSocial PME.
Contexte fonctionnel:
- KPI officiels MVP: impressions, engagement rate, temps reponse moyen, sentiment commentaires
- top 5 posts (avec canal Facebook/LinkedIn)
- conversations escaladees
- boutons action rapide (nouveau post, ouvrir inbox)
- filtre de periode: 7j / 30j / personnalise
Contraintes:
- respecter exactement la navigation officielle: Tableau de bord, Publications, Calendrier, Inbox, Analytics, IA, Parametres
- labels 100% FR
- Facebook + LinkedIn uniquement (Instagram affiche "coming soon" si mentionne)
- role-based UI: actions policy/config avancee visibles seulement pour Owner/Manager
- etats UI obligatoires: loading, empty, error, success
- vue desktop + adaptation tablette/mobile
- prioriser information utile pour Owner/Manager
Donne:
- layout detaille
- composants requis
- micro-interactions minimales
- structure de donnees attendue par composant
- checklist de conformite explicite (point par point) avec les contraintes ci-dessus
```

## Prompt 2 - Composeur de post

```text
Concois une page Composeur de publication multi-canaux.
Fonctions:
- saisie texte
- upload image avec preview
- selection des destinations par pages connectees (nom de page)
- publication immediate ou planifiee
- validations formulaire
Contraintes:
- labels 100% FR
- canaux strictement MVP: Facebook + LinkedIn (Instagram uniquement badge "coming soon", non selectionnable)
- apres OAuth, l'utilisateur peut selectionner plusieurs pages par canal (multi-pages)
- la selection doit se faire par nom de page (ex: "SoloSoft"), pas uniquement par icone du canal
- role-based UI: AGENT peut creer/soumettre, OWNER/MANAGER peuvent publier immediatement et planifier
- etats UI obligatoires: loading, empty, error, success
- actions obligatoires visibles: "Publier maintenant", "Planifier", "Sauvegarder brouillon"
- gestion limitee des medias MVP: image unique (jpg/png/webp), taille max configurable (ex: 5MB)
- toolbar composeur en bas a gauche de la zone texte: "Ajouter image", "Emoji", "Hashtag", "Ameliorer avec IA"
- "Ajouter image" doit ouvrir le selecteur fichier depuis l'icone (pas un bloc upload principal)
- "Ameliorer avec IA" doit proposer: corriger, reformuler, suggerer hashtags (sans changer l'architecture)
- prevention erreurs: date passee interdite, aucun canal interdit, texte vide interdit
- respecter les APIs MVP:
  - POST /orgs/:orgId/posts
  - POST /orgs/:orgId/posts/:postId/publish-now
  - POST /orgs/:orgId/ai/generate-post
Donne:
- wireframe textuel
- cas d'erreur UX (image invalide, aucun canal, date passee)
- composants reutilisables
- labels FR exacts pour boutons/champs
- schema des donnees formulaire (payload attendu)
- checklist de conformite explicite (point par point) avec toutes les contraintes ci-dessus
- regles de non-regression: ne pas impacter inbox, calendrier, analytics, RBAC
```

## Prompt 2ter - Publications (V2 legere de la page existante)

```text
Concois une V2 legere de la page existante "Creer une publication" de SmartSocial PME.
Objectif:
- le lien sidebar "Publications" doit ouvrir cette meme page (pas de placeholder)
- le bouton "Nouveau Post" doit ouvrir la meme page
- ameliorer uniquement layout/UX sans ajouter de nouvelles fonctionnalites
Contraintes strictes:
- labels 100% FR
- canaux MVP uniquement: Facebook + LinkedIn (Instagram = "coming soon", non selectionnable)
- pas de copie visuelle Hootsuite; conserver le style SmartSocial existant
- layout desktop obligatoire en 2 colonnes et 1 seule rangee visuelle:
  - colonne gauche: editeur publication
  - colonne droite: apercu post + infos contextuelles
  - interdit d'ajouter une 3eme rangee principale sous ces 2 colonnes
- wrapping interne obligatoire dans la colonne gauche (pas de gros blocs monolithiques):
  - section Destinations compacte en grille 2 colonnes de cartes
  - section Contenu + amelioration IA compacte
  - sections regroupees dans le meme panneau editeur
- taille/placement des cartes Destinations obligatoires:
  - cartes petites a moyennes (densite elevee), alignement regulier, hauteur uniforme
  - ne pas afficher des cartes geantes pleine largeur
- pas de double scrollbar:
  - aucun scroll interne dans les cartes/panneaux principaux
  - aucun scroll interne dans la colonne Apercu
  - sur desktop, la page doit tenir dans le viewport utile avec barre d'actions basse
  - si fallback necessaire, un seul scroll global (jamais des scrollbars imbriques)
- barre d'actions basse obligatoire avec positionnement exact:
  - gauche: bouton "Programmer plus tard"
  - droite: boutons "Sauvegarder brouillon" puis "Publier maintenant"
  - remplacer le texte statut "IA prete pour l'optimisation" par le bouton "Programmer plus tard"
- interaction obligatoire sur "Programmer plus tard":
  - ouvrir une fenetre modale/popup de planification (sans changer de page)
  - champs minimum: date, heure, minute, periode (AM/PM ou format 24h), fuseau horaire de l'organisation
  - afficher un resume lisible de la date/heure selectionnee avant confirmation
  - boutons modal: "Annuler" et "Terminer" (ou "Confirmer la planification")
  - validations: date/heure passee interdite, destination obligatoire, message vide interdit
  - fermeture propre de la modal avec conservation des donnees du formulaire principal
- conserver les sections existantes: destinations, contenu, amelioration IA, apercu (sans ajouter de nouvelles features)
- RBAC inchange:
  - AGENT: brouillon/soumission selon regles existantes
  - OWNER/MANAGER: planifier + publier maintenant
- etats UI obligatoires: loading, empty, error, success
- ne jamais exposer de cle API en frontend
- respecter les APIs MVP:
  - POST /orgs/:orgId/posts
  - POST /orgs/:orgId/posts/:postId/publish-now
  - POST /orgs/:orgId/ai/generate-post
Donne:
- wireframe textuel V2 (changement minimal, base sur l'existant)
- regles layout/CSS precises:
  - grille desktop (ex: 8/4 ou 7/5) avec hauteur de zone de travail stable
  - gestion hauteurs/overflow pour garantir absence de scrollbars internes
  - barre basse sticky/fixe propre sans masquer le contenu
  - alignement de la barre basse: groupe gauche (1 bouton) + groupe droite (2 boutons)
  - tailles conseillees des cartes destinations et de l'apercu
- regles RBAC visibles dans l'UI
- details UX de la fenetre "Programmer plus tard" (champs, validations, messages d'erreur/succes)
- checklist de conformite explicite (PASS/FAIL point par point)
- regles de non-regression: ne pas impacter inbox, calendrier, analytics, configuration IA, RBAC
```

## Prompt 3 - Calendrier editorial

```text
Concois la page Calendrier editorial (mois/semaine).
Fonctions:
- affichage posts scheduled/published/failed par couleur
- clic evenement -> drawer details
- actions modifier/annuler
- widget suggestion meilleur horaire
Contraintes:
- produire une page COMPLETE (pas un simple bloc): header, navigation temporelle, filtres, changement de vue, grille calendrier, details evenement
- inspiration UX Hootsuite autorisee (densite, productivite, structure), sans copier visuellement ni sortir du contexte SmartSocial
- toolbar calendrier obligatoire:
  - navigation temporelle: precedent, aujourd'hui, suivant
  - bascule de vue: Mois / Semaine
  - bouton Filtres ouvrant un panneau lateral
- layout semaine compact obligatoire:
  - utiliser au maximum l'espace horizontal disponible (contenu pleine largeur)
  - eviter les scrollers verticaux internes dans chaque colonne/jour
  - preferer cards compactes, texte tronque, et "voir plus" au lieu de longues cartes
  - si overflow necessaire, un seul scroll sur le conteneur principal, pas sur chaque colonne
- sur la page Calendrier uniquement: sidebar auto-collapsee en mode icones (largeur reduite), avec option de re-ouverture
- filtres MVP obligatoires et relies backend:
  - Comptes reseaux sociaux (selection par pages connectees)
  - Statut publication (draft, scheduled, published, failed)
- filtres "Tags" et "Auteur" autorises seulement en mode UI placeholder (desactives ou "coming soon") si le backend ne les supporte pas encore
- labels 100% FR
- canaux MVP uniquement: Facebook + LinkedIn (Instagram "coming soon" si mentionne)
- destinations affichees par nom de page (pas seulement icones)
- role-based UI: AGENT peut visualiser, OWNER/MANAGER peuvent modifier/annuler
- etats UI obligatoires: loading, empty, error, success
- le drag/drop est optionnel: si implemente, garder fallback edition via drawer
- ne pas ajouter de logique ads/campaigns ni concurrent analysis
- respecter les APIs MVP:
  - GET /orgs/:orgId/calendar?month=YYYY-MM
  - PATCH /orgs/:orgId/posts/:postId
  - DELETE /orgs/:orgId/posts/:postId
Donne:
- architecture visuelle
- legenda statuts
- interactions drag/drop optionnelles (si realistes)
- fallback UX quand aucune publication
- structure des donnees evenement calendrier (id, status, channel/page, scheduledAt)
- checklist de conformite explicite (point par point)
- regles de non-regression: ne pas impacter composeur, inbox, analytics, RBAC
- liste des composants de page complete (toolbar calendrier, filtres, vue semaine/mois, grille, drawer detail)
- decrire le panneau de filtres en FR avec sections explicites: Comptes reseaux sociaux, Statut publication, Tags (placeholder), Auteur (placeholder)
- inclure les regles CSS/layout attendues pour la vue semaine (hauteurs, overflow, largeur contenu, comportement sidebar)
```

## Prompt 4 - Inbox unifiee

```text
Concois une Inbox type Hootsuite simplifiee.
Fonctions:
- filtres: canal, type, statut
- liste threads a gauche
- conversation a droite
- reponse manuelle/assistee/auto
- badge mode actif et statut escalade
Contraintes:
- produire une page COMPLETE: header inbox, toolbar filtres, liste threads, panneau conversation, zone reponse
- labels 100% FR
- filtres FR stricts (interdit d'afficher "ALL"):
  - Canal (defaut: "Tous canaux")
  - Type (defaut: "Tous types")
  - Statut (defaut: "Tous statuts")
  - Assigne a (defaut: "Tous")
- positionnement filtres propre et compact:
  - une seule zone filtres alignee et stable sous la recherche
  - desktop: 1 ligne horizontale propre (ou grille 2x2 parfaitement alignee si espace reduit)
  - mobile: bouton unique "Filtres" ouvrant un panneau
  - dropdowns ancres correctement a leur champ (pas de decalage visuel)
- largeur et espacement coherents pour tous les selects (pas de tailles melangees)
- canaux MVP uniquement:
  - Facebook: commentaires + messages
  - LinkedIn: commentaires uniquement
- filtres obligatoires relies backend: canal, type (commentaire/message), statut (new/in_progress/replied/escalated)
- role-based UI:
  - AGENT: repondre manuel/assiste, pas de modification policies globales
  - OWNER/MANAGER: repondre + activer/desactiver auto-mode sur thread
- etats UI obligatoires: loading, empty, error, success
- mode assiste: brouillon IA obligatoire avant validation humaine
- mode auto securise: afficher clairement seuil confiance, raisons d'escalade, et historique des decisions
- langues: UI FR, reponse IA FR par defaut, adaptation FR+darija si message client en darija
- ne pas integrer cle API LLM cote frontend; toute IA passe par backend
- respecter les APIs MVP:
  - GET /orgs/:orgId/inbox/threads?channel=&type=&status=&assignee=
  - GET /orgs/:orgId/inbox/threads/:threadId/messages
  - POST /orgs/:orgId/inbox/threads/:threadId/reply-manual
  - POST /orgs/:orgId/inbox/threads/:threadId/reply-assisted
  - POST /orgs/:orgId/inbox/threads/:threadId/reply-auto-toggle
Donne:
- layout detaille
- composants et etats
- logique UX pour reponse assistee (brouillon IA + validation)
- logique UX pour auto-mode securise (activation desactivation)
- schema de donnees thread/message (id, channel, type, status, sentiment, mode, confidence)
- checklist de conformite explicite (point par point)
- regles de non-regression: ne pas impacter composeur, calendrier, analytics, RBAC
- inclure un mini audit UI final: verifier absence totale de textes anglais dans la toolbar filtres
```

## Prompt 5 - Configuration IA (Policies + Knowledge Admin)

```text
Concois une page Centre IA pour policies et knowledge base.
Fonctions:
- seuil confiance (0.75)
- limite auto/jour configurable
- horaires ouvrables
- intents autorises/interdits
- upload documents RAG + statut validation
Contraintes:
- produire une page COMPLETE de configuration uniquement (pas d'espace chat/usage quotidien)
- labels 100% FR
- seulement Owner/Manager peuvent modifier policies
- AGENT en lecture seule (champs desactives + message explicite)
- afficher clairement les garde-fous IA:
  - seuil confiance min 0.75
  - horaires ouvrables (auto desactive hors plage)
  - limites auto/jour configurables
  - intents bloques (remboursement, litige, juridique, plainte, toxicite, ambiguite)
- workflow knowledge obligatoire:
  - upload document
  - statut (en attente, approuve, rejete)
  - validation par Manager/Owner uniquement
- etats UI obligatoires: loading, empty, error, success
- ne jamais exposer de cle API en frontend
- respecter les APIs MVP:
  - GET /orgs/:orgId/ai/policies
  - PATCH /orgs/:orgId/ai/policies
  - POST /orgs/:orgId/knowledge/documents
  - GET /orgs/:orgId/knowledge/documents
  - POST /orgs/:orgId/knowledge/approve/:memoryId
Donne:
- design formulaire clair
- garde-fous UX anti-erreur
- affichage historique modifications
- schema de donnees policies/knowledge (fields + statuts)
- checklist de conformite explicite (point par point)
- regles de non-regression: ne pas impacter inbox, composeur, calendrier, analytics, RBAC
```

## Prompt 5bis - Utilisation Modele IA (AI Workspace)

```text
Concois une page d'utilisation quotidienne du modele IA pour SmartSocial PME.
Fonctions:
- zone de saisie principale (demande utilisateur)
- suggestions rapides (corriger, reformuler, hashtags, idee post, reponse client)
- affichage resultat IA reutilisable dans Composeur/Inbox
- historique des interactions IA (session)
- affichage contexte actif (documents RAG utilises, langue detectee, mode)
Contraintes:
- produire une page COMPLETE orientee usage (pas la page de configuration policies)
- labels 100% FR
- aucune promesse de fine-tuning proprietaire: afficher clairement "optimisation via prompting + RAG + policies"
- ne jamais exposer de cle API en frontend
- role-based UI:
  - AGENT/OWNER/MANAGER peuvent utiliser la page
  - seules les actions d'administration renvoient vers la page Configuration IA
- etats UI obligatoires: loading, empty, error, success
- performance/cout: proposer UX de reponse rapide, avec indicateur de cout/latence simplifie
- respecter les APIs MVP:
  - POST /orgs/:orgId/ai/generate-post
  - POST /orgs/:orgId/ai/suggest-reply
Donne:
- layout detaille (header, zone prompt, suggestions, resultat, historique)
- composants et etats
- schema de donnees session/requete/reponse
- checklist de conformite explicite (point par point)
- regles de non-regression: ne pas impacter inbox, composeur, calendrier, analytics, RBAC
```

## Prompt 6 - Kit composants React + Tailwind

```text
A partir des pages precedentes, propose un kit de composants React + Tailwind.
Contexte MVP obligatoire:
- application SmartSocial PME
- labels UI 100% FR
- scope canaux: Facebook + LinkedIn uniquement (Instagram uniquement "coming soon" si affiche)
- pages cibles: Dashboard, Composeur, Calendrier, Inbox, Analytics, IA Workspace, Configuration IA
Contraintes:
- composants faiblement couples
- reutilisation maximale
- architecture orientee design system (tokens + primitives + composants metier)
- strictement compatible React + TypeScript + Tailwind
- ne pas inclure de logique metier backend dans les composants UI (separation presentation / data fetching)
- RBAC respecte au niveau UI (Owner, Manager, Agent) via props explicites
- etats UI obligatoires sur les composants critiques: loading, empty, error, success
- accessibilite minimale obligatoire: focus visible, labels explicites, contrastes corrects, navigation clavier basique
- ne jamais exposer de cle API ni details sensibles cote frontend
- ne pas proposer de composants hors MVP (ads/campaigns, LinkedIn DM, automatisation avancee non definie)
Donne:
- arborescence composants
- props TypeScript de chaque composant principal
- conventions de nommage
- exemples d'utilisation pour 3 pages
- structure recommandee par couches:
  - ui/primitives
  - ui/patterns
  - features/dashboard
  - features/publications
  - features/calendrier
  - features/inbox
  - features/analytics
  - features/ia
- standards TypeScript:
  - interfaces/props strictement typees
  - unions litterales pour statuts/modes
  - types partages pour ChannelType, Role, PostStatus, InboxStatus
- conventions Tailwind:
  - usage de classes utilitaires coherentes avec les tokens du design system
  - eviter duplication massive de classes (extraire composants/patterns)
  - variantes d'etat homogenes (hover, focus, disabled, error)
- exemples obligatoires:
  - une page Composeur (formulaire + toolbar + destination selector)
  - une page Inbox (filtres + thread list + pane conversation)
  - une page Calendrier (toolbar + grille + drawer)
- schema de mapping composant -> API MVP consommee (sans code reseau detaille)
- checklist de conformite explicite (point par point) couvrant MVP, FR, RBAC, accessibilite, maintainabilite
- regles de non-regression: ne pas impacter inbox, composeur, calendrier, analytics, RBAC
```

## Prompt 7 - Prompt d'audit UX final

```text
Tu es UX reviewer senior + Product QA pour SmartSocial PME.
Mission: realiser un audit UX/UI final des ecrans MVP, sans sortir du scope fonctionnel valide.

Contexte MVP a respecter pendant l'audit:
- navigation officielle: Tableau de bord, Publications, Calendrier, Inbox, Analytics, IA, Parametres
- canaux MVP uniquement: Facebook + LinkedIn (Instagram uniquement "coming soon" si mentionne)
- labels UI 100% FR
- RBAC: Owner, Manager, Agent
- etats UI obligatoires: loading, empty, error, success
- IA uniquement via backend (jamais de cle API exposee cote frontend)

Pages a auditer obligatoirement:
- Dashboard
- Publications / Composeur
- Calendrier
- Inbox
- Analytics
- IA Workspace
- Configuration IA

Methodologie d'audit (obligatoire):
1) Evaluer chaque page selon les criteres ci-dessous
2) Donner un score par critere (0-5)
3) Marquer PASS/FAIL par critere
4) Prioriser les problemes (Critique / Majeur / Mineur)
5) Proposer des corrections concretes realistes en MVP

Checklist d'evaluation detaillee:
- clarte de la hierarchie visuelle (lecture, priorites, contraste)
- coherence globale du design system (espacement, typographie, boutons, etats)
- coherence labels FR (absence d'anglais parasite, terminologie stable)
- accessibilite basique (focus visible, navigation clavier, labels explicites)
- prevention des erreurs (validations, messages utiles, confirmations)
- efficacite workflow quotidien CM (nombre d'etapes, friction, densite)
- qualite responsive (desktop/tablette/mobile, pas de casse layout)
- respect strict du MVP (aucune feature hors scope)
- respect RBAC visible dans l'UI (actions selon role)
- respect non-regression inter-pages (modifs locales sans casser les autres ecrans)

Contraintes de sortie:
- pas de recommandations hors MVP (ads/campaigns, LinkedIn DM, automatisation avancee non definie)
- pas de refonte graphique complete; proposer des ajustements cibles et implementables
- corriger sans copier visuellement Hootsuite

Format de sortie attendu:
1) Resume executif (5-8 lignes): niveau global UX + risques majeurs demo
2) Tableau de scoring par page et par critere (score /5 + PASS/FAIL)
3) Top 10 problemes prioritaires avec:
   - severite (Critique/Majeur/Mineur)
   - ecran impacte
   - symptome utilisateur
   - cause probable
   - correction concrete
   - effort estime (S/M/L)
   - impact attendu (fort/moyen/faible)
4) Quick wins (actions < 1 jour)
5) Plan correctif en 2 vagues:
   - vague 1: blocants demo
   - vague 2: ameliorations qualite
6) Checklist de conformite finale explicite (point par point) avec statut PASS/FAIL
7) Regles de non-regression: verifier explicitement que les corrections proposees n'impactent pas Inbox, Composeur, Calendrier, Analytics, IA, RBAC
```

## Prompt 8 - Page Parametres (tabs complets MVP)

```text
Concois la page Parametres complete de SmartSocial PME, en tabs, conforme a l'architecture MVP.
Objectif: centraliser la configuration organisation, comptes, securite, integrations et preferences sans ajouter de features hors scope.

Contraintes globales:
- labels UI 100% FR
- navigation officielle respectee: Tableau de bord, Publications, Calendrier, Inbox, Analytics, IA, Parametres
- canaux MVP: Facebook + LinkedIn uniquement (Instagram uniquement "coming soon" si mentionne)
- role-based UI strict (Owner, Manager, Agent)
- etats UI obligatoires: loading, empty, error, success
- ne jamais exposer de cle API ni details sensibles cote frontend
- design coherent avec SmartSocial existant (sans copier Hootsuite)

Structure en tabs obligatoire (dans cet ordre):
1) Organisation
   - nom organisation, logo, fuseau horaire (important scheduler), langue FR
2) Membres & Roles
   - liste membres, role (Owner/Manager/Agent), statut actif/invite
   - actions role-protegees (Owner/Manager)
3) Reseaux sociaux
   - etat connexion Facebook/LinkedIn
   - reconnecter/deconnecter
   - selection/activation pages connectees par nom
4) Publications
   - preferences de publication par defaut (draft/schedule), options UI de base
5) Inbox
   - preferences operationnelles (assignation par defaut, filtres par defaut)
6) IA
   - resume policies actives en lecture
   - lien vers "Configuration IA" pour administration
   - lien vers "IA Workspace" pour usage quotidien
7) Securite du compte
   - changer mot de passe
   - gestion sessions actives (lecture + deconnexion)
   - double authentification (2FA) "si possible" en MVP technique:
     - si backend disponible: activer/desactiver 2FA + etat de configuration
     - sinon: section marquee "coming soon" avec message clair
8) Journal d'audit
   - historique actions sensibles (lecture seule)

RBAC obligatoire:
- AGENT: lecture majoritaire, edition limitee a son profil perso (si autorise)
- MANAGER: edition tabs operationnels selon regles org
- OWNER: controle complet
- toutes actions sensibles doivent etre protegees et explicites

Contraintes UX:
- layout desktop propre sans surcharge, tabs lisibles, formulaires compacts
- validations explicites (messages clairs)
- confirmations pour actions sensibles (changer role, deconnecter canal, reset securite)
- pas de double scrollbar inutile

APIs MVP a respecter (et mapping UI):
- GET /orgs/:orgId/members
- PATCH /orgs/:orgId/members/:memberId/role
- GET /orgs/:orgId/channels
- GET /orgs/:orgId/channels/available-pages?provider=facebook|linkedin
- POST /orgs/:orgId/channels/:channelId/select-pages
- GET /orgs/:orgId/ai/policies
- GET /orgs/:orgId/audit/logs
- auth/security endpoints selon disponibilite backend (mot de passe/2FA)

Donne:
- layout detaille (header Parametres + tabs + contenu par tab)
- composants et etats
- schema de donnees par tab
- regles RBAC visibles dans l'UI
- comportement de la section "Securite du compte" (mot de passe + 2FA conditionnelle)
- checklist de conformite explicite (PASS/FAIL point par point)
- regles de non-regression: ne pas impacter Publications, Calendrier, Inbox, Analytics, IA, RBAC
```

## Prompt Fix 2 - Navigation et vues (coherence globale)

```text
Tu corriges la coherence de navigation et de rendu des vues SmartSocial PME.
Problemes a corriger:
- certaines vues tombent en placeholder "module en developpement" alors qu'elles sont dans la navigation MVP
- incoherence entre ids de navigation et vues renderisees
- besoin de garantir que "Publications" ouvre la page Composeur existante

Objectif:
- aligner strictement navigation officielle et ecrans reels: Dashboard, Publications, Calendrier, Inbox, Analytics, IA, Parametres
- supprimer les placeholders pour les pages deja dans le scope MVP

Donne:
1) mapping explicite nav item -> vue cible
2) logique de rendu consolidee (sans branches mortes)
3) checklist PASS/FAIL de navigation complete
4) regles de non-regression: ne pas casser RBAC ni deep-links internes
```

## Prompt Fix 3 - Page Analytics complete (MVP)

```text
Concois/complete la page Analytics MVP de SmartSocial PME (page reelle, pas placeholder).
Contexte fonctionnel obligatoire:
- KPI: impressions, engagement rate, top posts, temps moyen de reponse, sentiment commentaires
- filtre periode global (7j/30j/personnalise)
- Facebook + LinkedIn uniquement

Contraintes:
- labels 100% FR
- etats UI obligatoires: loading, empty, error, success
- role-based UI respecte (Owner/Manager/Agent)
- layout dense et lisible, sans scrollbar horizontale
- respecter les APIs MVP:
  - GET /orgs/:orgId/analytics/overview?from=&to=
  - GET /orgs/:orgId/analytics/posts/top?limit=10
  - GET /orgs/:orgId/analytics/inbox/performance?from=&to=

Donne:
- layout detaille (header, filtres, widgets, tableaux)
- schema de donnees par widget
- composants reutilisables
- checklist conformite PASS/FAIL
- non-regression: ne pas impacter Dashboard, Inbox, Calendrier
```

## Prompt Fix 4 - IA backend-only (securite frontend)

```text
Tu corriges l'architecture IA frontend pour SmartSocial PME.
Probleme:
- aucun SDK LLM ne doit etre utilise directement cote frontend
- toute generation IA doit passer par le backend MVP

Objectif:
- retirer toute dependance/usage SDK IA direct frontend
- remplacer par couche service API frontend -> backend
- conserver exactement l'UX actuelle (boutons IA, loaders, toasts)

Contraintes:
- ne jamais exposer de cle API
- conserver comportements: corriger/reformuler/hashtags/reponse assistee
- respecter endpoints:
  - POST /orgs/:orgId/ai/generate-post
  - POST /orgs/:orgId/ai/suggest-reply

Donne:
1) plan de migration UI-safe
2) contrat request/response minimal
3) etats d'erreur reseau standardises
4) checklist PASS/FAIL securite
```

## Prompt Fix 5 - Calendrier sans nested scroll

```text
Tu corriges la vue semaine du Calendrier pour supprimer les scrollbars imbriques.
Probleme:
- certaines colonnes/jours ont un overflow interne

Objectif:
- un seul scroll principal si necessaire
- colonnes semaine compactes, pleine largeur, sans scroll vertical interne par jour

Contraintes:
- conserver toolbar, filtres MVP, drawer details, roles
- conserver placeholders Tags/Auteur en coming soon
- pas de changement fonctionnel hors layout

Donne:
- regles CSS/layout cibles (hauteurs, overflow, card density)
- comportement "voir plus"/troncature
- checklist PASS/FAIL anti-nested-scroll
```

## Prompt Fix 6 - Etats UI standardises par page

```text
Tu harmonises les etats UI sur toutes les pages SmartSocial PME.
Exigence:
- chaque page doit couvrir explicitement: loading, empty, error, success

Pages obligatoires:
- Dashboard, Publications/Composeur, Calendrier, Inbox, Analytics, IA Workspace, Configuration IA, Parametres

Contraintes:
- labels FR
- composants et patterns coherents design system
- messages d'erreur actionnables
- pas d'ajout de features hors MVP

Donne:
1) matrice page x etat (composant utilise)
2) standards de message (titre, description, action)
3) checklist PASS/FAIL complete
```

## Prompt Fix 7 - Parametres: RBAC + policies + securite

```text
Tu ajustes la page Parametres pour alignement strict MVP docs.
A corriger:
- RBAC actions sensibles (Owner/Manager/Agent) selon politique definie
- section IA et policies (terminologie FR, coherence seuil confiance)
- section securite compte: mot de passe, sessions, 2FA conditionnelle claire

Contraintes:
- tabs inchangees: Organisation, Membres & Roles, Reseaux sociaux, Publications, Inbox, IA, Securite du compte, Journal d'audit
- labels 100% FR
- si 2FA backend indisponible: "coming soon" explicite sans confusion
- ne pas sortir du scope MVP

Donne:
- tableau RBAC par tab/action (PASS/FAIL)
- corrections de labels/valeurs non conformes
- checklist finale de conformite Parametres
```

## Prompt Fix 8 - Nettoyage demo (production-like)

```text
Tu prepares une version demo propre du frontend SmartSocial PME.
Objectif:
- supprimer/masquer les elements debug non necessaires en demo
- conserver uniquement les actions MVP utiles jury

Contraintes:
- ne pas retirer les etats UI obligatoires
- ne pas modifier la logique metier MVP
- garder coherence FR + RBAC

Donne:
1) liste des elements debug a retirer/masquer
2) version toolbar/actions finale par page
3) checklist "demo-ready" PASS/FAIL
```
