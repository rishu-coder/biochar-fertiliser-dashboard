# Model-Guided Biochar Fertiliser Formulation Dashboard

An interactive research demonstration connecting molecular modelling, soil and environmental chemistry, materials characterisation, granule engineering and cereal-crop evaluation.

> **Important:** the included numerical values are synthetic demonstration data. They are not experimental results, validated product claims or agronomic recommendations.

## Live site
After deployment, replace this line with:

`https://YOUR-USERNAME.github.io/biochar-fertiliser-dashboard/`

## Features
- Candidate formulation comparison
- Illustrative nutrient-surface interaction energies
- Predicted cumulative nutrient release
- Multi-criteria performance profiles
- Spring barley and winter wheat response indices
- Scenario controls for crop, soil pH and formulation priority
- Downloadable demonstration data

## Repository structure

```text
biochar-fertiliser-dashboard/
├── .github/workflows/deploy.yml
├── docs/
│   ├── DATA.md
│   └── METHODS.md
├── public/
├── src/
│   ├── data/formulations.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── CITATION.cff
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── index.html
├── package.json
└── vite.config.js
```

## Run locally
Install Node.js, then run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

Test the production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a public GitHub repository named `biochar-fertiliser-dashboard`.
2. Upload or push all files in this folder to the repository's `main` branch.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and allow the deployment workflow to finish.
6. The site will be available at `https://YOUR-USERNAME.github.io/biochar-fertiliser-dashboard/`.

The repository name must match the `base` value in `vite.config.js`. If you rename the repository, change:

```js
base: mode === "production" ? "/NEW-REPOSITORY-NAME/" : "/",
```

For a user site named `YOUR-USERNAME.github.io`, use `/` as the production base.

## Push from VS Code

```bash
git init
git add .
git commit -m "Initial biochar dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/biochar-fertiliser-dashboard.git
git push -u origin main
```

## Documentation
- [Methods](docs/METHODS.md)
- [Data documentation](docs/DATA.md)
- [Contribution guide](CONTRIBUTING.md)

## Replacing demonstration data
Edit `src/data/formulations.js`, retaining field names unless you also update the chart bindings in `src/App.jsx`. For a larger research project, migrate to versioned CSV or JSON files and maintain raw, processed and metadata layers as described in `docs/DATA.md`.

## Scientific scope
The dashboard supports hypothesis generation and transparent screening. Final formulation decisions require laboratory validation, uncertainty analysis, crop experiments and evaluation against applicable product and environmental requirements.

## Citation
Citation metadata are provided in `CITATION.cff`. Update the author list, repository URL, release version and DOI before publication.

## Licence
Code is released under the MIT Licence. Verify that datasets and third-party assets have compatible licences before redistribution.
