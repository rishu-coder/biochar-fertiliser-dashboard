# Methods

## Purpose
This repository demonstrates a model-guided workflow for granulated biochar-fertiliser development for spring barley and winter wheat. Current values are synthetic and must not be interpreted as measured performance or agronomic advice.

## 1. Molecular modelling
Candidate biochar surface motifs are represented by chemically plausible aromatic clusters containing selected oxygen-bearing functional groups or mineral phases. Nutrient species are placed at candidate binding sites and geometry optimised using a documented computational chemistry method. For every calculation record software, version, force field or electronic-structure method, basis set, charge, spin, solvation treatment, convergence criteria and temperature.

Interaction energy is reported as:

`Delta E_int = E_complex - (E_surface + E_nutrient)`

More negative values indicate stronger calculated affinity under the stated model. Where appropriate, apply basis-set-superposition-error and thermal corrections, and evaluate multiple starting configurations.

## 2. Soil and environmental chemistry
Use batch experiments to quantify adsorption and desorption across relevant concentration and pH ranges. Include blanks, matrix controls, at least three independent replicates, randomised processing order, calibration verification and mass-balance checks. Record ionic strength, solid-to-liquid ratio, equilibration time, temperature and analytical method.

Fit appropriate isotherm and kinetic models only after inspecting residuals and parameter identifiability. Report parameter uncertainty and avoid selecting models solely by R-squared.

## 3. Granule formulation and characterisation
Document biochar feedstock, pyrolysis conditions, particle-size distribution, nutrient source, binder identity, moisture content, mixing order and granulation settings. Characterise granule size, crushing strength, attrition, bulk density, water uptake, disintegration and nutrient-release kinetics.

## 4. Crop evaluation
Evaluate candidate products in controlled pot or glasshouse studies before field-scale inference. Use a randomised design with conventional fertiliser, biochar-only, nutrient-only and unfertilised controls where scientifically appropriate. Predefine primary outcomes, for example biomass, grain yield proxy, tissue nutrient concentration, nutrient-use efficiency and residual soil nutrients.

## 5. Decision model
Normalise validated descriptors onto a common scale and combine them using predeclared weights. Perform sensitivity analysis over plausible weights. The dashboard recommendation is a screening aid, not a substitute for experimental evidence or regulatory assessment.

## 6. Reproducibility
Preserve raw data as read-only files. Store cleaned data separately. Scripts should read from documented inputs and generate processed tables and figures without manual editing. Record exclusions, transformations, units, missing-value codes, software versions and random seeds.
