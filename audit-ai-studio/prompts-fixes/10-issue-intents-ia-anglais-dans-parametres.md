# Prompt Fix 10 - Intents IA en anglais dans Parametres

```text
Tu corriges la section IA de Parametres pour alignement linguistique et metier.

Contexte:
- Des intents sont affiches en anglais dans l'UI FR.

Probleme a corriger:
- Incoherence langue + potentiel ecart avec policies metier.

Objectif:
- Passer les intents en FR metier coherent.
- Garder la distinction autorise/interdit conforme spec.

Contraintes strictes:
- UI 100% FR
- Respect regles IA MVP (intentions interdites: remboursement, litige, juridique, plainte, toxicite, ambiguite)
- Ne pas changer la logique de guardrails

Endpoints whitelist:
- GET /orgs/:orgId/ai/policies
- PATCH /orgs/:orgId/ai/policies

Interdit:
- Inventer nouvelles categories non prevues
- Casser mapping policies backend

Sortie attendue:
1) table intents FR normalises
2) mapping intents legacy -> intents FR
3) checklist PASS/FAIL conformite linguistique/policy
```
