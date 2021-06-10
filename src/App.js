import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Contact from './views/Contact';
import ContactsClass from './views/ContactsClass';
import ContactsFunction from './views/ContactsFunction';
import Error404 from './views/Error404';
import Home from './views/Home';

function App(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/class" exact component={ContactsClass} />
      <Route path="/function" exact component={ContactsFunction} />
      <Route path="/contact/:id" exact render={({ match }) => {
        console.log(props.contacts)
        const { name, address, phone } = props.contacts.find(contact => contact.id === parseInt(match.params.id))
        return (
          <Contact name={name} phone={phone} address={address} />
        )
      }} />
      <Route path="*" component={Error404} />
    </Switch>
  );
}

export default connect((state) => ({ contacts: state.contacts }))(App)
