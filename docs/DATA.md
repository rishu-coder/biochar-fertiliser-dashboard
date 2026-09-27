# Data documentation

## Status
All data shipped with this demonstration are synthetic. Replace them with quality-assured project data before scientific use.

## Dataset inventory

### `src/data/formulations.js`
Contains the small demonstration dataset used directly by the web interface.

Fields:
- `id`: stable formulation identifier.
- `name`: full formulation description.
- `short`: abbreviated display name.
- `colour`: accessible plotting colour in hexadecimal notation.
- `adsorption`: normalised adsorption score, 0 to 10.
- `release`: normalised release suitability score, 0 to 10.
- `stability`: normalised chemical stability score, 0 to 10.
- `strength`: normalised granule strength score, 0 to 10.
- `soilFit`: normalised soil-compatibility score, 0 to 10.
- `cropResponse`: normalised crop-response score, 0 to 10.
- `score`: weighted screening score, 0 to 100.

### Interaction-energy data
- `interaction`: modelled nutrient-surface motif.
- `F1`, `F2`, `F3`: illustrative interaction energy in kJ mol-1.
- More negative values indicate stronger calculated affinity under the assumed model.

### Release data
- `day`: elapsed time in days.
- `F1`, `F2`, `F3`: illustrative cumulative nutrient release in percent.

### Crop-response data
- `crop`: target cereal crop.
- `control`: conventional-fertiliser reference index fixed at 100.
- `F1`, `F2`, `F3`: illustrative response index relative to the control.

## Recommended production data layout
Store original instrument and simulation outputs under `data/raw/`, quality-controlled tables under `data/processed/`, and metadata under `data/metadata/`. Do not commit confidential, personal, commercially restricted or very large files. Use a suitable research repository for released datasets and add its DOI to the README.

## Minimum metadata
Each released dataset should identify creator, date, method, sample or simulation identifier, units, detection limits, quality-control status, licence, software version, missing-value convention and provenance.
