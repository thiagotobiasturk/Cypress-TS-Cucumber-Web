# Continuous Integration (CI/CD) with GitHub Actions

![image](https://github.com/user-attachments/assets/4bd8d640-cb6f-48e5-80e3-d353b4bc7e4c)

This repository uses GitHub Actions to manage continuous integration and continuous delivery (CI/CD) flexibly. Below, we explain how the workflow works, the available options, and how to configure them.

## Overview
![image](https://github.com/user-attachments/assets/973aedab-e489-4539-aa21-13d7a10496aa)

This repository uses a GitHub Actions workflow named `CI/CD` that allows you to run tests on different operating systems, generate test reports, and configure the frequency of automatic pipeline execution. This workflow is triggered by a `workflow_dispatch` event, which means you can start it manually and customize the configuration through inputs.

## Execution Options
![image](https://github.com/user-attachments/assets/b620c5fb-87f7-42f9-9ccb-67a4fd1c37c6)

### Operating Systems

![image](https://github.com/user-attachments/assets/7751602e-3fbc-45cf-8f26-22d90efc930b)

The `CI/CD` workflow allows you to choose which operating system you want to run the pipeline on. The available options are:

- **Ubuntu** (Linux)
- **Windows**
- **macOS**

You can select the desired operating system when manually starting the workflow.

### Test Reports

![image](https://github.com/user-attachments/assets/c64b666c-fcdc-4d62-9f76-b8b402d599df)

You can choose to generate a report of the tests. This option allows you to review the results of the executed tests in a detailed format. You can enable or disable this option according to your needs.

### Automatic Execution

![image](https://github.com/user-attachments/assets/f627b1bb-51c2-46f2-9249-cf2713308661)

In addition to manual execution, you can configure automatic execution of the pipeline. The available options are:

- **Daily**: Run the pipeline once a day.
- **Weekly**: Run the pipeline once a week.
- **Monthly**: Run the pipeline once a month.

This configuration can be adjusted so that the pipeline runs automatically according to a defined schedule.

- [Execute](https://github.com/FasterWayToFatLoss/qa-automation-web/actions/workflows/qa-automation-web.yml)
