# Prompt Fix 04 - Layout global espace perdu

```text
Tu corriges le layout global SmartSocial PME.

Contexte:
- Hors Calendrier, grand espace vide observe entre sidebar et contenu.
- Densite visuelle trop faible et wrapping premature.

Probleme a corriger:
- Le contenu principal n'exploite pas toute la largeur utile.

Objectif:
- Appliquer la logique de densite de la page Calendrier a toutes les vues.
- Reflow propre quand sidebar ouverte/fermee.

Contraintes strictes:
- Pas de scrollbar horizontale layout
- Un seul scroll principal vertical
- Garder composant/layout actuel (pas refonte produit)
- Compatible desktop/tablette/mobile

Endpoints whitelist:
- N/A (correction pure layout)

Interdit:
- Ajouter fonctionnalites metier
- Introduire wrappers qui reduisent artificiellement la largeur

Sortie attendue:
1) regles layout/cs classes cibles (container width, padding, overflow)
2) verification sidebar ouverte/fermee
3) checklist PASS/FAIL anti-espace-perdu
```
