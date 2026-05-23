# RTK (Run-Time Knowledge)

## Objectif
- Conserver un contexte projet compact, utile et actionnable.

## Règles de travail
- Lire d'abord `AGENTS.md`.
- Privilégier des modifications ciblées et réversibles.
- Éviter les effets de bord hors périmètre demandé.
- Valider localement ce qui est modifié quand c'est possible.
- Documenter brièvement les décisions non évidentes.

## Sécurité
- Ne jamais exposer de clés, tokens, secrets ou données sensibles.
- Ne pas ajouter de dépendance ou appel réseau sans justification claire.

## Performance de contexte
- Ne pas scanner tout le dépôt sans besoin explicite.
- Lire uniquement les fichiers nécessaires à la tâche.
