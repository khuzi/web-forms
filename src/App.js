import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes, StylesProvider } from '@material-ui/core/styles';
import Layout from './hoc/Layout';

const ManageData = React.lazy(() => import('./pages/ManageData'));
const ManageTemplates = React.lazy(() => import('./pages/ManageTempelates'));
const ManageResults = React.lazy(() => import('./pages/ManageResults'));
const Option1 = React.lazy(() => import('./components/Option1/Option1'));
const Option2 = React.lazy(() => import('./components/Option2/Option2'));
const Option3 = React.lazy(() => import('./components/Option3/Option3'));
const Option4 = React.lazy(() => import('./components/Option4/Option4'));
const Option5 = React.lazy(() => import('./components/Option5/Option5'));
const SamplePanel = React.lazy(() => import('./components/SamplePanel/SamplePanel'));
const ViewResult = React.lazy(() => import('./components/ViewResult/ViewResult'));

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff001',
    },
    secondary: {
      main: '#000',
    },
    faIcons: '#787878',
    bigTick: '#c59f01',
    dangerBg: '#fff8e8',
    danger: '#ff3535',
    heading: '#00172d',
    smallMarks: '#828282',
    count: '#07ba6c',
  },
});

theme = responsiveFontSizes(theme);

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <Layout>
          <Switch>
          <Route path="/viewResult" render={() => <Suspense fallback={<div>Loading...!</div>}><ViewResult /></Suspense>} />
            <Route path="/templates/samplePanel" render={() => <Suspense fallback={<div>Loading...!</div>}><SamplePanel /></Suspense>} />
            <Route path="/templates" render={() => <Suspense fallback={<div>Loading...!</div>}><ManageTemplates /></Suspense>} />
            <Route path="/results" render={() => <Suspense fallback={<div>Loading...!</div>}><ManageResults /></Suspense>} />
            <Route path="/option-5" render={() => <Suspense fallback={<div>Loading...!</div>}><Option5 /></Suspense>} />
            <Route path="/option-4" render={() => <Suspense fallback={<div>Loading...!</div>}><Option4 /></Suspense>} />
            <Route path="/option-3" render={() => <Suspense fallback={<div>Loading...!</div>}><Option3 /></Suspense>} />
            <Route path="/option-2" render={() => <Suspense fallback={<div>Loading...!</div>}><Option2 /></Suspense>} />
            <Route path="/option-1" render={() => <Suspense fallback={<div>Loading...!</div>}><Option1 /></Suspense>} />
            <Route path="/" render={() => <Suspense fallback={<div>Loading...!</div>}><ManageData /></Suspense>} />
          </Switch>
        </Layout>
      </StylesProvider>
    </MuiThemeProvider>
  );
}

export default App;

