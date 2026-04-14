# UI Design System (MVP)

## 1. Direction visuelle
- Style: SaaS professionnel, clair, orienté productivite.
- Cible: PME e-commerce (confiance, lisibilite, action rapide).
- Ton: sobre, moderne, efficace.

## 2. Tokens UI proposes

### Couleurs
- Primary: `#0D6EFD`
- Success: `#16A34A`
- Warning: `#D97706`
- Danger: `#DC2626`
- Neutres:
  - Background: `#F8FAFC`
  - Surface: `#FFFFFF`
  - Border: `#E2E8F0`
  - Text: `#0F172A`
  - Muted: `#64748B`

### Typographie
- Font principale: `Manrope` ou `Plus Jakarta Sans`
- Taille base: 14px/16px selon zone
- Hierarchie: H1 (28), H2 (22), H3 (18), body (14-16)

### Espacements
- Echelle: 4 / 8 / 12 / 16 / 24 / 32

### Rayons
- Cards: 12px
- Inputs/Boutons: 10px

## 3. Composants obligatoires
- `AppShell` (sidebar + topbar)
- `KpiCard`
- `DataTable`
- `StatusBadge`
- `EmptyState`
- `ErrorState`
- `LoadingSkeleton`
- `ChannelSelector`
- `PostComposer`
- `ThreadList` + `ThreadView`
- `PolicyForm`

## 4. Etats visuels standard
- Hover et focus clairs sur actions.
- Disabled explicite (opacity + cursor + tooltip cause).
- Toast succes/erreur centralises.

## 5. Responsive minimum
- Desktop prioritaire (>=1024).
- Tablet support (>=768).
- Mobile: navigation condensee, inbox en vue unique.
