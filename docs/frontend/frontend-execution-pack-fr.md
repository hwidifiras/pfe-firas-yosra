# Frontend Execution Pack - SmartSocial PME (FR)

Ce document definit exactement quoi construire cote frontend, page par page, avec les composants, etats UI, appels API et criteres d'acceptation.

## Stack Frontend retenue
- React + TypeScript + Vite
- React Router
- TanStack Query (data fetching/cache)
- Zustand (state UI local) ou Context API
- React Hook Form + Zod
- Tailwind CSS + composants UI reutilisables

## Conventions UX globales
- Langue UI: francais.
- Navigation principale: Tableau de bord, Publications, Calendrier, Inbox, Analytics, IA, Parametres.
- Layout: sidebar gauche + header + contenu.
- Etats obligatoires sur chaque page: chargement, vide, erreur, succes.
- Accessibilite de base: contraste, labels, focus visible, boutons desactives explicites.

---

## P1. Connexion / Inscription

### Objectif
Permettre la connexion securisee et redirection selon organisation/role.

### UI
- Form login (email, mot de passe)
- Form inscription minimale
- Message d'erreur clair

### API
- `POST /auth/login`
- `POST /auth/register`
- `GET /auth/me`

### Acceptance
- Un utilisateur connecte accede au dashboard.
- Si token invalide, retour login.

---

## P2. Dashboard (Accueil)

### Objectif
Vue executive rapide pour Owner/Manager.

### UI
- Cards KPI: impressions, engagement rate, temps reponse moyen.
- Liste: top posts (5)
- Bloc alertes: conversations escaladees
- Bloc actions rapides: "Nouveau post", "Ouvrir inbox"

### API
- `GET /orgs/:orgId/analytics/overview`
- `GET /orgs/:orgId/analytics/posts/top?limit=5`
- `GET /orgs/:orgId/inbox/threads?status=ESCALATED`

### Acceptance
- KPIs visibles sur periode par defaut 30 jours.

---

## P3. Integrations canaux

### Objectif
Connecter/deconnecter Facebook et LinkedIn.

### UI
- Carte Facebook (statut connecte/non connecte)
- Carte LinkedIn (statut connecte/non connecte)
- Boutons connecter/deconnecter
- Modale post-OAuth: selection d'une ou plusieurs pages par canal
- Liste des pages connectees par nom (ex: "SoloSoft", "Ma Boutique")
- Possibilite d'activer/desactiver une page sans deconnecter tout le canal

### API
- `GET /integrations/:orgId/channels`
- `GET /integrations/facebook/oauth/start`
- `GET /integrations/linkedin/oauth/start`
- `DELETE /integrations/:orgId/channels/:channelId`
- `GET /integrations/:orgId/channels/available-pages?provider=facebook|linkedin`
- `POST /integrations/:orgId/channels/select-pages`

### Acceptance
- Statut reel apres callback OAuth.
- L'utilisateur peut connecter plusieurs pages pour un meme canal.
- Le composeur affiche les pages par nom, pas seulement l'icone du canal.

---

## P4. Composeur de publication

### Objectif
Creer publication texte+image multi-canaux, immediate ou planifiee.

### UI
- Zone texte (compteur)
- Barre d'actions sous la zone texte (gauche): ajouter image, emoji, hashtag, ameliorer avec IA
- Upload image via icone (preview)
- Selection des destinations par page (nom de page + canal)
- Date/heure planification
- Boutons: publier maintenant, planifier, sauver brouillon
- Bouton Agent: soumettre pour revue

### API
- `POST /orgs/:orgId/posts`
- `POST /orgs/:orgId/posts/:postId/publish-now`
- `POST /orgs/:orgId/ai/generate-post` (mode rewrite/correct/hashtags)

### Acceptance
- Un post peut cibler 1..n canaux.
- Un post peut cibler 1..n pages connectees (multi-pages).
- Validation: contenu obligatoire, au moins une page destination obligatoire.
- Image unique (jpg/png/webp) avec limite de taille configurable.

---

## P5. Calendrier editorial

### Objectif
Visualiser posts planifies/publies et modifier planning.

### UI
- Vue mois/semaine
- Couleurs par statut (scheduled/published/failed)
- Drawer detail post
- Actions modifier/annuler
- Widget suggestion "meilleur horaire"
- Toolbar calendrier: precedent, aujourd'hui, suivant
- Panneau filtres: comptes reseaux sociaux (pages), statut publication
- Filtres "Tags" et "Auteur" en placeholder UI (coming soon) tant que non supportes backend
- Vue semaine compacte: colonnes exploitant toute la largeur disponible
- Eviter les scrollbars verticales par colonne/jour (pas de nested scroll)
- Sidebar auto-collapsee (icones uniquement) sur la route Calendrier, re-ouvrable par l'utilisateur

### API
- `GET /orgs/:orgId/calendar?month=YYYY-MM`
- `PATCH /orgs/:orgId/posts/:postId`
- `DELETE /orgs/:orgId/posts/:postId`

### Acceptance
- Deplacement horaire reflechi en DB.
- Bascule vue Mois/Semaine fonctionnelle.
- Filtres pages + statut appliques sur la grille.
- Espace horizontal utilise efficacement en vue semaine (densite visuelle correcte).
- Absence de scroll vertical interne par colonne (ou justification explicite avec fallback "voir plus").

---

## P6. Inbox unifiee

### Objectif
Traiter messages/commentaires depuis une seule interface.

### UI
- Colonne threads avec filtres: canal, type, statut
- Panneau conversation
- Reponse manuelle
- Reponse assistee IA (générer puis valider)
- Toggle auto-mode (si role autorise)

### API
- `GET /orgs/:orgId/inbox/threads`
- `GET /orgs/:orgId/inbox/threads/:threadId/messages`
- `POST /orgs/:orgId/inbox/threads/:threadId/reply-manual`
- `POST /orgs/:orgId/inbox/threads/:threadId/reply-assisted`
- `POST /orgs/:orgId/inbox/threads/:threadId/reply-auto-toggle`

### Acceptance
- Les filtres combinables retournent des listes coherentes.
- Historique de conversation chronologique.

---

## P7. Analytics

### Objectif
Afficher les 5 KPI MVP et insights actionnables.

### UI
- Graph evolution impressions
- Engagement rate global
- Top posts tableau
- Temps moyen de reponse
- Repartition sentiment (positif/neutre/negatif)

### API
- `GET /orgs/:orgId/analytics/overview?from=&to=`
- `GET /orgs/:orgId/analytics/posts/top?limit=10`
- `GET /orgs/:orgId/analytics/inbox/performance?from=&to=`

### Acceptance
- Changement periode met a jour tous les widgets.

---

## P8. IA Workspace (Utilisation modele)

### Objectif
Permettre l'utilisation quotidienne de l'IA pour generer/améliorer du contenu sans toucher aux regles admin.

### UI
- Zone de saisie principale (prompt)
- Suggestions rapides (corriger, reformuler, hashtags, idees)
- Affichage resultat reutilisable dans Composeur et Inbox
- Historique session
- Affichage contexte actif (RAG/documents/langue/mode)

### API
- `POST /orgs/:orgId/ai/generate-post`
- `POST /orgs/:orgId/ai/suggest-reply`

### Acceptance
- Usage fluide quotidien par AGENT/OWNER/MANAGER.
- Aucune option de policies globales modifiable depuis cette page.

---

## P9. Configuration IA (Policies + Knowledge Admin)

### Objectif
Configurer comportements IA et base de connaissance RAG.

### UI
- Seuil confiance (0.75+)
- Limite auto/jour (configurable)
- Horaires ouvrables
- Intents autorises/interdits
- Upload documents connaissances
- Workflow validation Manager/Owner

### API
- `GET /orgs/:orgId/ai/policies`
- `PATCH /orgs/:orgId/ai/policies`
- `POST /orgs/:orgId/knowledge/documents`
- `GET /orgs/:orgId/knowledge/documents`
- `POST /orgs/:orgId/knowledge/approve/:memoryId`

### Acceptance
- Roles AGENT ne peuvent pas changer policies globales.

---

## P10. Parametres (Organisation, Roles, Integrations, Securite)

### Objectif
Centraliser la configuration transversale du produit dans une page unique a onglets, conforme au scope MVP.

### UI
- Onglets: Organisation, Membres & Roles, Reseaux sociaux, Publications, Inbox, IA, Securite du compte, Journal d'audit.
- Securite du compte:
  - Changer mot de passe.
  - Sessions actives (consultation + deconnexion session).
  - Double authentification (2FA) si disponible backend, sinon bloc "coming soon" explicite.
- RBAC strict:
  - AGENT: lecture majoritaire + edition limitee profil perso.
  - MANAGER: edition operationnelle selon regles organisation.
  - OWNER: controle complet.
- Etats obligatoires: chargement, vide, erreur, succes.

### API
- `GET /orgs/:orgId/members`
- `PATCH /orgs/:orgId/members/:memberId/role`
- `GET /orgs/:orgId/channels`
- `GET /orgs/:orgId/channels/available-pages?provider=facebook|linkedin`
- `POST /orgs/:orgId/channels/:channelId/select-pages`
- `GET /orgs/:orgId/ai/policies`
- `GET /orgs/:orgId/audit/logs`
- Endpoints auth/security (mot de passe / 2FA) selon disponibilite backend.

### Acceptance
- Page Parametres accessible depuis la navigation principale.
- Les onglets couvrent tous les parametres MVP transversaux sans ajout hors scope.
- Les actions sensibles sont role-protegees et confirmentes (modif role, deconnexion canal, securite).
- Le changement de mot de passe est pris en charge.
- La 2FA est traitee de facon conditionnelle:
  - active/desactive si backend pret,
  - sinon visible en "coming soon" sans casser l'UX.

---

## Definition of Done Frontend (MVP)
- Chaque page respecte les etats loading/empty/error/success.
- Tous les formulaires valides avec erreurs utilisateurs explicites.
- Navigation role-based fonctionnelle.
- Responsive desktop + mobile.
- Demo scriptable de bout en bout sans blocage.
