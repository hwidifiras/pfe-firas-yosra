# Prompt Fix 12 - Barre debug visible Dashboard

```text
Tu prepares une version demo propre de SmartSocial PME.

Contexte:
- Des controles debug restent visibles sur Dashboard.

Probleme a corriger:
- Elements debug non destines a la demo finale.

Objectif:
- Masquer/supprimer les controles debug UI en mode demo.
- Garder les etats UI standards fonctionnels.

Contraintes strictes:
- Ne pas impacter la logique metier
- Ne pas retirer les etats loading/empty/error/success
- Garder coherence FR + RBAC

Endpoints whitelist:
- N/A (nettoyage UI)

Interdit:
- Supprimer outils metier utiles utilisateur final
- Introduire flag build complexe hors scope

Sortie attendue:
1) liste elements debug a retirer/masquer
2) etat final toolbar/actions dashboard
3) checklist PASS/FAIL demo-ready
```
