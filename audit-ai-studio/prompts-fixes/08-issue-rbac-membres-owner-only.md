# Prompt Fix 08 - RBAC membres trop restrictif

```text
Tu corriges le RBAC de la page Parametres (onglet Membres & Roles).

Contexte:
- Certaines actions membres semblent reservees uniquement a Owner.
- Les docs MVP prevoient un partage Owner/Manager selon action.

Probleme a corriger:
- Restriction RBAC potentiellement trop forte ou incoherente.

Objectif:
- Aligner les permissions UI sur les regles backend/docs.

Contraintes strictes:
- Conserver tabs existantes Parametres
- Clarifier action par role: Owner, Manager, Agent
- Toutes actions sensibles doivent etre explicites

Endpoints whitelist:
- GET /orgs/:orgId/members
- PATCH /orgs/:orgId/members/:userId/role
- GET /orgs/:orgId/settings
- PATCH /orgs/:orgId/settings

Interdit:
- Donner a AGENT des droits admin globaux
- Modifier scope fonctionnel des tabs

Sortie attendue:
1) matrice RBAC par action
2) regles d'affichage/boutons par role
3) checklist PASS/FAIL conformite RBAC
```
