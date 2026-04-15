# Prompt Fix 01 - Analytics absente

```text
Tu es Senior Frontend Engineer pour SmartSocial PME.

Contexte:
- La navigation contient Analytics mais la vue est un placeholder.
- Objectif: livrer une vraie page Analytics MVP.

Probleme a corriger:
- Page Analytics absente (pas de rendu metier reel).

Objectif:
- Creer une page Analytics complete avec 5 KPI MVP:
  - impressions
  - engagement rate
  - top posts
  - temps moyen de reponse
  - sentiment commentaires

Contraintes strictes:
- UI 100% FR
- Scope canaux: Facebook + LinkedIn uniquement
- Etats obligatoires: loading, empty, error, success
- Role-based UI respecte (Owner/Manager/Agent)
- Aucun horizontal scroll lie au layout

Endpoints whitelist:
- GET /orgs/:orgId/analytics/overview?from=&to=
- GET /orgs/:orgId/analytics/posts/top?limit=10
- GET /orgs/:orgId/analytics/inbox/performance?from=&to=

Interdit:
- Ajouter Ads/Campaigns
- Ajouter analyse concurrentielle avancee
- Ajouter nouvelles pages hors MVP

Sortie attendue:
1) structure UI complete (header, filtre periode, widgets, tableaux)
2) mapping composant -> endpoint
3) gestion des etats UI
4) checklist PASS/FAIL finale
```
