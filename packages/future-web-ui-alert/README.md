# UI Alert

[![npm version](https://badge.fury.io/js/%40codeftw%2Ffuture-web-ui-alert.svg)](https://badge.fury.io/js/%40codeftw%2Ffuture-web-ui-alert)

## Installation

```bash
npm install @codeftw/future-web-ui-alert
```

## Usage

- Add AlertProvider wrapping your App
```javascript
import { AlertProvider } from '@codeftw/future-web-ui-alert';


  render(
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <TunnelProvider>
          <AlertProvider>
            <BrowserRouter>
              <AppContainer/>
            </BrowserRouter>
          </AlertProvider>
        </TunnelProvider>
      </MuiThemeProvider>
    </ApolloProvider>,
    document.getElementById('app')
  );
```

- Add the Alert component somewhere in your App

```javascript
import { Alert } from '@codeftw/future-web-ui-alert';

<Alert />
```

- Use our HOC withAlert to have access to showAlert function

```javascript
import { withAlert } from '@codeftw/future-web-ui-alert';

const AddTask = withAlert(({showAlert}) => {
   ...
   showAlert('Task added');
   ...
});
```