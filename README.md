# Wait-For-Localhost

_This is still untested and currently under development_

A GitHub Action that waits for the specified port on localhost to be used. 

The CI step will fail if the port is unused afer the specified timeout. 

## Inputs

| Name | Description | Default |
| ---- | ----------- | ------- |
| Timeout | The total time the action will wait until failing | 60 |
| Sleep | Seconds between each check | 2 |
| Port | Port on localhost that application is bound to | 3000 |

## Example Usage

```yaml
  - name: start your application however you like
    run: 'npm run start-my-app &'
  - name: Wait for application to start
    uses: tristanhessell/wait-for-localhost
    with:
      port: 9000
      timeout: 60
      sleep: 5
```

