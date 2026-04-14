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
Sortie attendue:
1) wireframe textuel
2) liste composants
3) schema etats UI
4) checklist acceptance
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
Donne:
- layout detaille
- composants et etats
- logique UX pour reponse assistee (brouillon IA + validation)
- logique UX pour auto-mode securise (activation desactivation)
```

## Prompt 5 - Centre IA

```text
Concois une page Centre IA pour policies et knowledge base.
Fonctions:
- seuil confiance (0.75)
- limite auto/jour configurable
- horaires ouvrables
- intents autorises/interdits
- upload documents RAG + statut validation
Contraintes:
- seulement Owner/Manager peuvent modifier policies
Donne:
- design formulaire clair
- garde-fous UX anti-erreur
- affichage historique modifications
```

## Prompt 6 - Kit composants React + Tailwind

```text
A partir des pages precedentes, propose un kit de composants React + Tailwind.
Donne:
- arborescence composants
- props TypeScript de chaque composant principal
- conventions de nommage
- exemples d'utilisation pour 3 pages
Contraintes:
- composants faiblement couples
- reutilisation maximale
```

## Prompt 7 - Prompt d'audit UX final

```text
Tu es UX reviewer senior. Evalue les ecrans SmartSocial PME.
Checklist:
- clarte hierarchie visuelle
- coherence labels FR
- accessibilite basique
- prevention erreurs
- efficacite workflow quotidien CM
Donne:
- 10 problemes prioritaires
- correction concrete de chaque probleme
- impact attendu sur experience utilisateur
```
