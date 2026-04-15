# Prompt Fix 02 - Incoherence navigation/views

```text
Tu corriges la coherence de navigation et de rendu des vues SmartSocial PME.

Contexte:
- Incoherence entre ids de navigation et vues effectivement renderisees.
- Cas connu: probleme autour de la vue settings + placeholders.

Probleme a corriger:
- La machine de navigation contient des branches mortes/incoherentes.

Objectif:
- Aligner strictement nav -> vue cible:
  - dashboard
  - publications
  - calendar
  - inbox
  - analytics
  - ai
  - settings
- Supprimer les placeholders pour vues MVP existantes.

Contraintes strictes:
- Conserver le comportement actuel de routing interne
- Ne pas casser la sidebar toggle
- Ne pas casser RBAC/permissions visibles
- UI labels FR conformes

Endpoints whitelist (indirect):
- Aucun nouvel endpoint requis ici (travail de wiring/rendu)

Interdit:
- Renommer le scope fonctionnel MVP
- Introduire une nouvelle page non planifiee backend

Sortie attendue:
1) table mapping `nav id -> component`
2) logique de rendu simplifiee sans collision
3) checklist PASS/FAIL: chaque entree nav ouvre la bonne vue
```
