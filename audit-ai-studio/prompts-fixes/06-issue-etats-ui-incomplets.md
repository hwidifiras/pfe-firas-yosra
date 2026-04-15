# Prompt Fix 06 - Etats UI incomplets

```text
Tu harmonises les etats UI de SmartSocial PME.

Contexte:
- Plusieurs pages n'ont pas les 4 etats requis.

Probleme a corriger:
- Etats loading/empty/error/success non systematiques.

Objectif:
- Appliquer les 4 etats obligatoires sur chaque page:
  - Dashboard
  - Publications/Composeur
  - Calendrier
  - Inbox
  - Analytics
  - IA Workspace
  - Configuration IA
  - Parametres

Contraintes strictes:
- Messages FR clairs et actionnables
- Cohesion design system
- Aucun ajout hors MVP

Endpoints whitelist:
- Respect des endpoints deja defines par chaque page (pas de nouveaux endpoints)

Interdit:
- Introduire etat/metier non supporte backend
- Ajouter de nouvelles fonctionnalites produit

Sortie attendue:
1) matrice page x etat x composant
2) standards texte (titre, description, CTA)
3) checklist PASS/FAIL par page
```
