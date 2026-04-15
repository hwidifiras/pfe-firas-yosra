# Prompt Fix 05 - Calendrier nested scroll

```text
Tu corriges la vue Semaine du Calendrier SmartSocial PME.

Contexte:
- Scroll vertical interne observe dans colonnes/jours.
- Requirement MVP: eviter nested scroll.

Probleme a corriger:
- Colonnes semaine avec overflow interne.

Objectif:
- Garder une vue semaine compacte, dense, lisible.
- Utiliser un seul scroll principal si necessaire.

Contraintes strictes:
- Conserver toolbar, filtres, drawer details
- Conserver placeholders Tags/Auteur en coming soon
- Ne pas changer la logique metier

Endpoints whitelist:
- GET /orgs/:orgId/calendar?month=YYYY-MM
- PATCH /orgs/:orgId/posts/:postId
- DELETE /orgs/:orgId/posts/:postId

Interdit:
- Refonte fonctionnelle du calendrier
- Ajouter des filtres backend non supportes

Sortie attendue:
1) regles layout/overflow corrigees
2) comportement troncature/"voir plus"
3) checklist PASS/FAIL anti-nested-scroll
```
