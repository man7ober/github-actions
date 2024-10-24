## Github Actions

- A workflow automation service by github
- Automate all kinds of repository-related processes & actions

1. **Code Deployment (CI / CD)**

   - Automate code testing, building & deployment

2. **Code & Repository Management**

   - Automate code reviews, issue management etc.

### Tools & Services

- Git / a version control system

- GitHub / a cloud git repository

- GitHub Actions / a workflow automation service

### Key Components

- Workflows / attached to a github repository, contains jobs & triggered upon events

- Jobs / defines a runner(execution environment), contains steps & run in parallel (asynchronous) or sequential (synchronous)

- Steps / execute a shell script or an action & executed in order

### Event Triggers

- Events / push, pull_request .etc

- Activity Types / opened, closed, edited .etc

- Filters / filter based on a target branch

### Artifacts & Outputs

- Artifacts / used for sharing & storing log files, app binaries .etc

- Outputs / used for re-using a value in different jobs

### Execution Flow

- If / checks condition if step failed than next jobs will fail too

- Continue-on-error / it will still execute next jobs if there is a failure in the step

### To Get Inputs

- with / used to get inputs from user
