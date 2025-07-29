# Saucedemo_POM_Automation02

Production-ready Playwright Page Object Model (POM) test automation framework for [saucedemo.com](https://www.saucedemo.com/).

## Features
- Strictly follows latest Playwright best practices ([docs](https://playwright.dev/docs/test-configuration))
- Multi-browser (Chrome, Firefox, headed)
- Parallel and sequential execution via robust Bash scripts
- Screenshots and video capture for debugging
- SOLID POM structure with inheritance
- Centralized test data and reusable utilities
- HTML, visual, and console reporting
- Deterministic, repeatable results (no time-based logic)
- Chain of Thought logging with intent, action, result steps
- One-command setup and report viewing

## Quickstart
```bash
./scripts/quick-setup.sh
```

## Project Structure
```
├── pages/ (Page Objects)
├── tests/ (Test specs)
├── data/ (Test data/config)
├── utils/ (Helper/util code)
├── scripts/ (Setup/run/validate scripts)
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Recommended Usage
1. Run `./scripts/quick-setup.sh` (install, validate, run, open report)
2. See `run-parallel.sh`, `run-sequential.sh`, and `validate-setup.sh` for advanced runs

## Troubleshooting
- If you see `No tests found`, ensure you run scripts from the root (scripts are root-aware)
- For browser issues, re-run `npx playwright install`
- All errors will print with descriptive messages

## Extending Framework
- Add POMs under `pages/`, always extend base class
- Add config/test-data in `data/TestData.js`
- Add/extend helpers in `utils/TestUtils.js`
- New tests in `tests/`, following best-practice template

## Docs/References
- [Playwright Test Config](https://playwright.dev/docs/test-configuration)
- [Video Capture](https://playwright.dev/docs/videos)
- [POM Patterns](https://playwright.dev/docs/pom)

---
**For full architecture, troubleshooting, and example extension, see inline code comments in the repo source files.**
