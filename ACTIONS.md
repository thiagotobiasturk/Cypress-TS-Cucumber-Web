# Continuous Integration (CI/CD) with GitHub Actions

![image](https://github.com/user-attachments/assets/b9c117bc-db69-40ae-ac7a-e6edc15a076f)

This repository uses GitHub Actions to manage continuous integration and continuous delivery (CI/CD) flexibly. Below, we explain how the workflow works, the available options, and how to configure them.

## Overview
![image](https://github.com/user-attachments/assets/686555f0-ab0e-48e3-8c1b-7f8bdc85caa6)

This repository uses a GitHub Actions workflow named `CI/CD` that allows you to run tests on different operating systems, generate test reports, and configure the frequency of automatic pipeline execution. This workflow is triggered by a `workflow_dispatch` event, which means you can start it manually and customize the configuration through inputs.

## Execution Options
![image](https://github.com/user-attachments/assets/9ed67473-d621-4b70-9cfe-e032a0eb669c)

### Operating Systems

![image](https://github.com/user-attachments/assets/40f56ded-ae56-44f7-b2e4-147921a39c04)

The `CI/CD` workflow allows you to choose which operating system you want to run the pipeline on. The available options are:

- **Ubuntu** (Linux)
- **Windows**
- **macOS**

You can select the desired operating system when manually starting the workflow.

### Test Reports

![image](https://github.com/user-attachments/assets/950950dc-918a-4b82-adf3-8b2c94a0b4ba)

You can choose to generate a report of the tests. This option allows you to review the results of the executed tests in a detailed format. You can enable or disable this option according to your needs.

### Automatic Execution

![image](https://github.com/user-attachments/assets/ce5dd55d-288f-4f4b-afec-2e751c800bb6)

In addition to manual execution, you can configure automatic execution of the pipeline. The available options are:

- **Daily**: Run the pipeline once a day.
- **Weekly**: Run the pipeline once a week.
- **Monthly**: Run the pipeline once a month.

This configuration can be adjusted so that the pipeline runs automatically according to a defined schedule.

### Browsers

![image](https://github.com/user-attachments/assets/ac30c4a4-8d9c-4dae-95be-71ec923c95e1)

In addition to choosing the operating system, you can also select the browser in which to run the tests. The available options are:

- **Chromium**
- **Firefox**
- **Electron**

This feature allows for flexible testing across different browsers, ensuring that your application works as expected in multiple environments. You can specify the desired browser when manually starting the workflow.

### Node.js Versions

![image](https://github.com/user-attachments/assets/ee39aed1-230e-4862-ac73-535ad844b77a)

You can choose the version of Node.js to be used in the workflow. The available versions are:

- **Node.js 16**
- **Node.js 18**
- **Node.js 20**
- **Node.js 21**

This option ensures that your tests run in the desired Node.js environment, helping to maintain compatibility and stability across different Node.js versions.

- [Execute](https://github.com/thiagotobiasturk/Cypress-TS-CucumberPo-Web/actions/workflows/cypress-ts-cucumberpo-web.yml)
