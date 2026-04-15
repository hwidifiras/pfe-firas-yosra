# Planification Sprint - 45 jours (S1 a S6)

Hypothese: 2 developpeurs (Front + Back) avec synchronisation quotidienne courte.

## S1 (J1-J7) - Fondations

### Objectifs
- Initialiser architecture projet (front/back), conventions, environnement.
- Mettre en place auth + RBAC + structure org.

### Taches Front
- Setup React + TS + Vite + routing + layout dashboard.
- Ecrans auth (login/register) + garde de routes role-based.

### Taches Back
- Setup Express TS + Prisma + Postgres + structure modulaire.
- Modules Auth, Users, Organizations, Membership roles.
- JWT access/refresh + middleware RBAC.

### Livrable
- Utilisateur connecte avec role et organisation active.

## S2 (J8-J14) - Integrations sociales + publication

### Objectifs
- Connecter Facebook/LinkedIn via OAuth.
- Creer publication texte+image immediate.

### Taches Front
- Ecran integrations (connect/disconnect status).
- Ecran compose post + selection canaux + upload image.

### Taches Back
- OAuth Facebook/LinkedIn (tokens + refresh).
- Service de publication multi-canal.
- Integration Cloudinary upload.

### Livrable
- Publication immediate sur FB+LinkedIn depuis plateforme.

## S3 (J15-J21) - Scheduler + calendrier

### Objectifs
- Planification publication + worker BullMQ.
- Calendrier editorial avec statuts.

### Taches Front
- Vue calendrier (mois/semaine), details post.
- Edition/annulation d'un post planifie.

### Taches Back
- Queue BullMQ (jobs publication).
- Worker publication + retries + logs.
- Endpoint suggestion best-time (heuristique).

### Livrable
- Posts planifies executes automatiquement.

## S4 (J22-J28) - Inbox unifiee

### Objectifs
- Webhooks, normalisation, filtrage inbox.
- Reponses manuelles et assistees.

### Taches Front
- Ecran inbox avec filtres (canal/type/statut).
- Vue thread + zone reponse + brouillon IA assiste.

### Taches Back
- Endpoints webhooks Facebook/LinkedIn.
- Threading, statuts, assignation.
- API reponse manuelle + suggestion IA.

### Livrable
- Inbox operationnelle avec traitement humain assiste.

## S5 (J29-J35) - Auto mode securise + analytics MVP

### Objectifs
- Auto reponses sous regles de securite.
- Dashboard KPI business.

### Taches Front
- Ecran policies IA (seuil, horaires, limites).
- Dashboard KPI + top posts + temps reponse.

### Taches Back
- Orchestrateur IA (classification + guardrails + RAG).
- Escalade automatique cas sensibles.
- Aggregations analytics.

### Livrable
- Mode auto securise actif + analytics complets.

## S6 (J36-J45) - Stabilisation demo + rapport

### Objectifs
- Deploiement online, hardening, repetition soutenance.
- Finalisation rapport FR et annexes.
- Finaliser la page Parametres transversale (organisation, roles, reseaux, securite compte).

### Taches Front
- Polish UI demo, gestion erreurs, etats vides.
- Script demo jury guide.
- Page Parametres a onglets (Organisation, Membres & Roles, Reseaux, Publications, Inbox, IA, Securite du compte, Journal d'audit).
- Section Securite du compte: changer mot de passe, sessions actives, bloc 2FA conditionnel (actif si backend pret, sinon coming soon).

### Taches Back
- Logging/audit complet, rate limiting, monitoring minimum.
- Validation permissions APIs + fallback Instagram mock.
- Endpoints securite compte finalises (mot de passe, sessions) + integration 2FA si faisable dans la fenetre projet.
- Si 2FA non finalisee backend: endpoint/status de capacite pour afficher proprement "coming soon" cote frontend.

### Livrable
- Demo online stable + dossier PFE complet.
- Parametres MVP operationnels avec securite compte (mot de passe + sessions) et 2FA conditionnelle.

## Jalons de controle

- J14: MVP technique publication.
- J28: MVP fonctionnel (publication + inbox assistee).
- J35: MVP quasi-final (auto + analytics).
- J42: Repetition generale.
- J45: Soutenance.
