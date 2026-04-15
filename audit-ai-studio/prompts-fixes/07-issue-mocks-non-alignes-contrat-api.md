# Prompt Fix 07 - Mocks non alignes contrat API

```text
Tu prepares la transition mock -> backend reel sans dette fonctionnelle.

Contexte:
- Le frontend est majoritairement mocke.
- Exigence: pouvoir brancher les endpoints sans rework lourd.

Probleme a corriger:
- Certaines structures de donnees UI ne sont pas alignees avec les contrats backend MVP.

Objectif:
- Aligner les modeles UI, payloads et statuts sur les contrats backend.
- Identifier ce qui est Mock-safe vs Out-of-scope backend.

Sources backend obligatoires:
- api-contract-mvp.md
- diagrammes-mermaid.md
- pfe-smartsocial-specification-fr.md
- backlog-sprints-45j.md
- frontend-execution-pack-fr.md

Contraintes strictes:
- Pas de nouvelle feature hors backend plan
- Conserver UX actuelle autant que possible

Endpoints whitelist:
- Tous endpoints definis dans `docs/implementation/api-contract-mvp.md`

Interdit:
- Ajouter un endpoint non documente
- Garder des attributs UI impossibles a brancher

Sortie attendue:
1) matrice `UI feature -> endpoint -> statut alignement`
2) liste des ecarts + correction minimale
3) checklist PASS/FAIL readiness "plug endpoints"
```
