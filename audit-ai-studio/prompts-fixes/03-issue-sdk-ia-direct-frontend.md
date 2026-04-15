# Prompt Fix 03 - SDK IA direct frontend

```text
Tu corriges l'architecture IA frontend de SmartSocial PME.

Contexte:
- Le frontend utilise un SDK IA direct.
- Exigence projet: IA uniquement via backend.

Probleme a corriger:
- Toute integration LLM cote frontend doit etre retiree.

Objectif:
- Remplacer les appels IA directs par une couche API frontend -> backend.
- Garder la meme UX (boutons IA, loaders, toasts, resultats).

Contraintes strictes:
- Zero cle API exposee frontend
- Conserver fonctions: corriger, reformuler, hashtags, suggestion reponse
- Gestion erreurs reseau claire

Endpoints whitelist:
- POST /orgs/:orgId/ai/generate-post
- POST /orgs/:orgId/ai/suggest-reply

Interdit:
- Import SDK LLM frontend
- Appel direct fournisseur IA depuis navigateur
- Modifier le scope fonctionnel de l'UX existante

Sortie attendue:
1) plan migration sans regression UI
2) contrats request/response minimaux
3) tableau erreurs frontend standards
4) checklist PASS/FAIL securite
```
