# Prompt Fix 13 - Label role Editeur vs Agent

```text
Tu corriges la coherence des labels de role dans l'UI SmartSocial PME.

Contexte:
- Le role AGENT est parfois affiche comme "Editeur".

Probleme a corriger:
- Label role non conforme au referentiel RBAC officiel.

Objectif:
- Uniformiser l'affichage role en:
  - Proprietaire (OWNER)
  - Manager (MANAGER)
  - Agent (AGENT)

Contraintes strictes:
- Application globale (sidebar, badges, tableaux, entetes)
- Pas de changement logique permission
- Labels FR stables

Endpoints whitelist:
- N/A (correction UI texte)

Interdit:
- Introduire un 4eme role
- Modifier enums backend

Sortie attendue:
1) mapping complet des labels role
2) liste points UI a harmoniser
3) checklist PASS/FAIL coherence RBAC visuelle
```
