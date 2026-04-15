# Prompt Fix 11 - Seuil IA 0.85 vs 0.75

```text
Tu corriges la coherence du seuil de confiance IA.

Contexte:
- Le frontend affiche 0.85 alors que la spec MVP impose 0.75 minimum.

Probleme a corriger:
- Incoherence policy IA entre UI et documents backend/produit.

Objectif:
- Aligner l'affichage et la configuration par defaut sur 0.75 (min).
- Conserver logique role-based de modification policies.

Contraintes strictes:
- UI FR
- AGENT lecture seule policies globales
- OWNER/MANAGER edition

Endpoints whitelist:
- GET /orgs/:orgId/ai/policies
- PATCH /orgs/:orgId/ai/policies

Interdit:
- Valeur par defaut contradictoire avec spec
- Changer les guardrails hors scope

Sortie attendue:
1) valeur par defaut et bornes explicites
2) affichage cohérent sur toutes vues IA
3) checklist PASS/FAIL alignement seuil
```
