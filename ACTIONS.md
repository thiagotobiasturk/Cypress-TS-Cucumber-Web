# Continuous Integration (CI/CD) with GitHub Actions

![image](https://github.com/user-attachments/assets/b9c117bc-db69-40ae-ac7a-e6edc15a076f)

This repository uses GitHub Actions to manage continuous integration and continuous delivery (CI/CD) flexibly. Below, we explain how the workflow works, the available options, and how to configure them.

## Overview
![image](https://github.com/user-attachments/assets/4a82f571-e340-41e2-be77-832e31463255)

This repository uses a GitHub Actions workflow named `CI/CD` that allows you to run tests on different operating systems, generate test reports, and configure the frequency of automatic pipeline execution. This workflow is triggered by a `workflow_dispatch` event, which means you can start it manually and customize the configuration through inputs.

## Execution Options
![image](https://github.com/user-attachments/assets/540ce073-ea8f-42a6-8be9-f2082b30b1ff)

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

- [Execute](https://github.com/FasterWayToFatLoss/qa-automation-web/actions/workflows/qa-automation-web.yml)
