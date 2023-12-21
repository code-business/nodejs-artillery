This is a demo [Node.js](https://nodejs.org/) app for load testing with [Artillery.js](https://www.artillery.io/)

# Start Development Derver

```sh
npm run start:dev
```

# Run Loadtest

```sh
npm run load-test
```

OR

```sh
artillery run --output <output_filename.json> <load_test_filename.yml>
```

### Generate HTML Report

```sh
npm run load-test-report
```

OR

```sh
artillery report <output_filename.json>
```

### Example

```sh
cd loadtests && artillery run --output report.json test1.yml
```

```sh
artillery report report.json
```
